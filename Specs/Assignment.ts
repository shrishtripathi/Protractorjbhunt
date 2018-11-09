//* Author: Shrish Tripathi* //
//* Creation Date: 11/7/2018 *//

import { element, by, browser,ExpectedConditions } from "protractor";
import {async} from "q" ;

describe('Bankmanager Testing',function(){ 

     //* Launch*//
        it('launch and enter value in Bankmanager', async()=>{
            try 
            {
                await browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

            } catch (error) {
                console.log(error);
            }

            
        });
     //* Click on bank manager login Button*//
        it('click on Bank manager Login button', async()=>{
              
        const btnlogin = element(by.xpath("//button[contains(text(),'Bank Manager Login')]"));
        btnlogin.click().then(null, function(error)
        {
            console.log(error);
        })
        
           
        });
     //* Click on Add Customer Tab Button*//
        it('Click on Add customer button', async()=>{
            const custbtn = element(by.xpath("//button[@ng-class ='btnClass1']"));
            custbtn.click().then(null, function(error)
            {
                console.log(error);
            })
                
        }); 
    //* enter the First name *//
        it('enter the first name value', async()=>{
          
          const frstname = element(by.xpath("//input[@ng-model ='fName']"));
          if (frstname.isDisplayed())
          {
              await frstname.sendKeys("testfirstname");
          } 
          else 
          {
              console.log("first name field is not displaying")
          }
            
        }); 
    //* enter the last name *//
        it('enter the last name value', async()=>{
            const lstname = element(by.xpath("//input[@ng-model ='lName']"));
            if (lstname.isDisplayed()) 
            {
                lstname.sendKeys("testlastname");
            } 
            else 
            {
               console.log("last name field is not dislaying");
            }
            
        }); 
    //* enter the Postal code*//
        it('enter the Postal code value', async()=>{

            const pstlcode =element(by.xpath("//input[@ng-model ='postCd']"));
            if (pstlcode.isDisplayed())
            {
                await pstlcode.sendKeys("22234");
            } 
            else 
            {
                console.log("postal code field is not displying");
            }
        });
    //* Click on Add customer submit button*//
        it('Click on add customer button', async()=>{
        const custbtn =element(by.xpath("//button[@type ='submit']"));

        if (custbtn.isDisplayed()) 
        {
            await custbtn.click();
            // .then(null, function(err){
            //     console.log("handle error");
            
        } else 
        {
            console.log("Submit button is not displaying");
        }
        
        const alertDialog  = browser.switchTo().alert();
        alertDialog.accept();
        var text: any= alertDialog.getText();
        console.log(text); 
                     
        }); 
           
    });

