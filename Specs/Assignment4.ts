//* Author: Shrish Tripathi* //
//* Creation Date: 11/7/2018 *//

import { element, by, browser,ExpectedConditions } from "protractor";
import {AddCustomer} from '../pages/BankManagerTest/bankmanager';
import {OpenAccount} from '../pages/OpenAccount/OpenAccount';
import {async} from "q" ;

let jsd= require('../Data/testData');

//* Object creation for BankManager-AddCustomer class**//
var customerdetails = new AddCustomer();
var openaccountdetails = new OpenAccount(jsd.CustomerData1.firstname+" "+jsd.CustomerData1.lastname,jsd.CustomerData1.currency);


describe('Bankmanager Testing',function(){ 

     //* Launch*//

        it('launch and enter value in Bankmanager', async()=>{
            try {
                await browser.get(jsd.CustomerData1.url);
            } catch (error) {
                console.log(error);
                
            }
        });
     //* Click on bank manager login Button*//
        it('click on Bank manager Login button', async()=>{
              await customerdetails.clickonBankmanagerLoginButton();
        });
     //* Click on Add Customer Tab Button*//
        it('Click on Add customer button', async()=>{
        
             await customerdetails.clickonAddCustomerButton();
        }); 
    //* enter the First name *//
        it('enter the first name value', async()=>{
          
             await customerdetails.enterFirstName(jsd.CustomerData1.firstname);
            
        }); 
    //* enter the last name *//
        it('enter the last name value', async()=>{
     
            await customerdetails.enterLastName(jsd.CustomerData1.lastname);
        }); 
    //* enter the Postal code*//
        it('enter the Postal code value', async()=>{
 
            await customerdetails.enterPostcode(jsd.CustomerData1.Code);
        });
    //* Click on Add customer submit button*//
        it('Click on add customer button', async()=>{
        
            await customerdetails.addCustomerButtonClick();
        }); 
    
     //* Click on Open Customer  button*//
        it('Click on Open Customer button', async()=>{
        await openaccountdetails.clickOpenAccountButton();
        });
     //* Click and select Customer dropdown*//
        it('Click and select customer dropdown', async()=>{
        await openaccountdetails.selectCustomerName();
        });

        it("select currency ", () => { 
            openaccountdetails.selectCurrency();
           
        });

        it("click on Process button to generate account no", () => { 
            openaccountdetails.clickOnProcessButton();
            var alertValidate = browser.switchTo().alert();
            expect(alertValidate.accept).toBeDefined();
            alertValidate.getText().then((text) => { 
                console.log(text);
                alertValidate.accept();
            })
            
        });

    });

