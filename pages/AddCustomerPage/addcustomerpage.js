"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
//import {Actions} from '../../Actions/Action';
class AddCustomer {
    constructor() {
        this.bankmanagerloginbtn = "//button[contains(text(),'Bank Manager Login')]";
        this.addcustomerbtn = "//button[@ng-class ='btnClass1']";
        this.firstName = "//input[@ng-model ='fName']";
        this.lastName = "//input[@ng-model ='lName']";
        this.postcode = "//input[@ng-model ='postCd']";
        this.generateCustomerID = "//button[@type ='submit']";
    }
    clickonBankmanagerLoginButton() {
        const btnlogin = protractor_1.element(protractor_1.by.xpath(this.bankmanagerloginbtn));
        if (btnlogin.isDisplayed()) {
            btnlogin.click();
        }
        else {
            console.log("element not displayed");
        }
    }
    clickonAddCustomerButton() {
        const custbtn = protractor_1.element(protractor_1.by.xpath(this.addcustomerbtn));
        if (custbtn.isDisplayed()) {
            custbtn.click();
        }
        else {
            console.log("customer button is not displayed");
        }
    }
    enterFirstName(keys) {
        const frstname = protractor_1.element(protractor_1.by.xpath(this.firstName));
        if (frstname.isDisplayed()) {
            frstname.sendKeys(keys);
        }
        else {
            console.log("first name field is not displaying");
        }
    }
    enterLastName(keys) {
        const lstname = protractor_1.element(protractor_1.by.xpath(this.lastName));
        if (lstname.isDisplayed()) {
            lstname.sendKeys(keys);
        }
        else {
            console.log("last name field is not dislaying");
        }
    }
    enterPostcode(keys) {
        const pstlcode = protractor_1.element(protractor_1.by.xpath(this.postcode));
        if (pstlcode.isDisplayed()) {
            pstlcode.sendKeys(keys);
        }
        else {
            console.log("postal code field is not displying");
        }
    }
    addCustomerButtonClick() {
        const custbtn = protractor_1.element(protractor_1.by.xpath(this.generateCustomerID));
        if (custbtn.isDisplayed()) {
            custbtn.click();
        }
        else {
            console.log("Submit button is not displaying");
        }
        const alertDialog = protractor_1.browser.switchTo().alert();
        alertDialog.accept();
        var text = alertDialog.getText();
        console.log(text);
    }
}
exports.AddCustomer = AddCustomer;
//# sourceMappingURL=addcustomerpage.js.map