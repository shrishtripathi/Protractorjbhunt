//* Author: Shrish Tripathi* //
//* Creation Date: 11/7/2018 *//

import {element, by, browser,ExpectedConditions } from "protractor";
import {async} from "q" ;
import {Row,Cell,Worksheet, Workbook} from 'exceljs';


describe('Bankmanager Testing',function(){ 


     //* Launch*//
        it('launch and enter value in Bankmanager', async()=>{
            
            var wb = new Workbook();
            await wb.xlsx.readFile("./testdata.xlsx").then(function(){
                var sheet: Worksheet= wb.getWorksheet("Sheet1");
                var rowobject: Row =sheet.getRow(3);
                var cellobject: Cell =rowobject.getCell(2);
                var url : any = cellobject.value;
                browser.get(url);
            });
                
            });
            
            
     //* Click on bank manager login Button*//
        it('click on Bank manager Login button', async()=>{
            
            const btnlogin = element(by.xpath("//button[contains(text(),'Bank Manager Login')]"));
            if (btnlogin.isDisplayed()) 
            {
                await btnlogin.click();
            
            } else 
            {
                console.log("element not displayed");
            }
            
            
             //element(by.xpath("//button[contains(text(),'Bank Manager Login')]")).click();

            //  const btnlogin : any = element(by.xpath("//button[contains(text(),'Bank Manager Login')]"));
            //  await browser.wait(btnlogin,5*1000,"start in 5 seconds");
            //  await btnlogin.click();

            
        });
     //* Click on Add Customer Tab Button*//
        it('Click on Add customer button', async()=>{
            const custbtn = element(by.xpath("//button[@ng-class ='btnClass1']"));
            if (custbtn.isDisplayed()) 
            {
                custbtn.click();
            } 
            else 
            {
                console.log("customer button is not displayed");
            }
           
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

