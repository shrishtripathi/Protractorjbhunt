"use strict";
//* Author: Shrish Tripathi* //
//* Creation Date: 11/7/2018 *//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const exceljs_1 = require("exceljs");
describe('Bankmanager Testing', function () {
    //* Launch*//
    it('launch and enter value in Bankmanager', () => __awaiter(this, void 0, void 0, function* () {
        var wb = new exceljs_1.Workbook();
        yield wb.xlsx.readFile("./testdata.xlsx").then(function () {
            var sheet = wb.getWorksheet("Sheet1");
            var rowobject = sheet.getRow(3);
            var cellobject = rowobject.getCell(2);
            var url = cellobject.value;
            protractor_1.browser.get(url);
        });
    }));
    //* Click on bank manager login Button*//
    it('click on Bank manager Login button', () => __awaiter(this, void 0, void 0, function* () {
        const btnlogin = protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Bank Manager Login')]"));
        if (btnlogin.isDisplayed()) {
            yield btnlogin.click();
        }
        else {
            console.log("element not displayed");
        }
        //element(by.xpath("//button[contains(text(),'Bank Manager Login')]")).click();
        //  const btnlogin : any = element(by.xpath("//button[contains(text(),'Bank Manager Login')]"));
        //  await browser.wait(btnlogin,5*1000,"start in 5 seconds");
        //  await btnlogin.click();
    }));
    //* Click on Add Customer Tab Button*//
    it('Click on Add customer button', () => __awaiter(this, void 0, void 0, function* () {
        const custbtn = protractor_1.element(protractor_1.by.xpath("//button[@ng-class ='btnClass1']"));
        if (custbtn.isDisplayed()) {
            custbtn.click();
        }
        else {
            console.log("customer button is not displayed");
        }
    }));
    //* enter the First name *//
    it('enter the first name value', () => __awaiter(this, void 0, void 0, function* () {
        const frstname = protractor_1.element(protractor_1.by.xpath("//input[@ng-model ='fName']"));
        if (frstname.isDisplayed()) {
            yield frstname.sendKeys("testfirstname");
        }
        else {
            console.log("first name field is not displaying");
        }
    }));
    //* enter the last name *//
    it('enter the last name value', () => __awaiter(this, void 0, void 0, function* () {
        const lstname = protractor_1.element(protractor_1.by.xpath("//input[@ng-model ='lName']"));
        if (lstname.isDisplayed()) {
            lstname.sendKeys("testlastname");
        }
        else {
            console.log("last name field is not dislaying");
        }
    }));
    //* enter the Postal code*//
    it('enter the Postal code value', () => __awaiter(this, void 0, void 0, function* () {
        const pstlcode = protractor_1.element(protractor_1.by.xpath("//input[@ng-model ='postCd']"));
        if (pstlcode.isDisplayed()) {
            yield pstlcode.sendKeys("22234");
        }
        else {
            console.log("postal code field is not displying");
        }
    }));
    //* Click on Add customer submit button*//
    it('Click on add customer button', () => __awaiter(this, void 0, void 0, function* () {
        const custbtn = protractor_1.element(protractor_1.by.xpath("//button[@type ='submit']"));
        if (custbtn.isDisplayed()) {
            yield custbtn.click();
        }
        else {
            console.log("Submit button is not displaying");
        }
        const alertDialog = protractor_1.browser.switchTo().alert();
        alertDialog.accept();
        var text = alertDialog.getText();
        console.log(text);
    }));
});
//# sourceMappingURL=Assignment3.js.map