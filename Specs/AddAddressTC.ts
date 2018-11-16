//* Author: Shrish Tripathi* //
//* Creation Date: 11/7/2018 *//
import { element, by, browser,ExpectedConditions } from "protractor";
import {AddAddressPage} from '../pages/AddAddressPage/AddAddressPage';
//import {async} from "q" ;

browser.waitForAngularEnabled(false);
let jsd= require('../data/testData');

//* Object creation for Add AddressPage class**//
var addAddresspagedetails = new AddAddressPage(jsd.CustomerData1.country);

describe('Amazon Address Add',function(){ 

     //* Launch*//

        it('launch Amazon', ()=>{

                browser.get(jsd.CustomerData1.urlamazon);
                browser.driver.manage().window().maximize();
        });


        it('enter email', ()=>{

            addAddresspagedetails.enterEmail(jsd.CustomerData1.email);
          
        });

        it('enter Password', ()=>{
           addAddresspagedetails.enterPassword(jsd.CustomerData1.password);
        });

        it('click on Sign in', ()=>{
            addAddresspagedetails.clickonSignSubmitbutton();
         });

         it('click on Hellobtn', ()=>{
            addAddresspagedetails.clickonHellobutton();
         });

         
         it('click on Add address', ()=>{
            addAddresspagedetails.clickonAddAddressImage();
         });

         it('click on Add address Plus Image', ()=>{
            addAddresspagedetails.clickonAddAddressPlusimage();
         });

         it('Select country Name', ()=>{
            addAddresspagedetails.selectcountryname(jsd.CustomerData1.country);
         });

         it('Enter Full Name', ()=>{
            addAddresspagedetails.enterFullNameAddress(jsd.CustomerData1.fullname);
         });

         
         it('Enter Address line1', ()=>{
            addAddresspagedetails.enterAddressline1textbox(jsd.CustomerData1.addressline1);
         });

         it('Enter Address line2', ()=>{
            addAddresspagedetails.enterAddressline2textbox(jsd.CustomerData1.addressline2);
         });


         it('Enter City', ()=>{
            addAddresspagedetails.enterCitytextbox(jsd.CustomerData1.city);
         });

         it('Enter State', ()=>{
            addAddresspagedetails.enterStatetextbox(jsd.CustomerData1.state);
         });

         it('Enter ZipCode', ()=>{
            addAddresspagedetails.enterZipcodetextbox(jsd.CustomerData1.zipcode)
         });

         it('Enter Phonenumber', ()=>{
            addAddresspagedetails.enterPhonenumbertextbox(jsd.customerData1.phonenumber);
         });

         it('Click on Add address button', ()=>{
            addAddresspagedetails.clickonAddAddressbutton();
         });

         it('Click on Signout Amazon', ()=>{
            addAddresspagedetails.logoutamazon();
         });


    });

