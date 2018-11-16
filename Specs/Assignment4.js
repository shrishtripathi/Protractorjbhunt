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
const addcustomerpage_1 = require("../pages/AddCustomerPage/addcustomerpage");
const openaccountpage_1 = require("../pages/OpenAccountPage/openaccountpage");
let jsd = require('../Data/testData');
//* Object creation for BankManager-AddCustomer class**//
var customerdetails = new addcustomerpage_1.AddCustomer();
var openaccountdetails = new openaccountpage_1.OpenAccount(jsd.CustomerData1.firstname + " " + jsd.CustomerData1.lastname, jsd.CustomerData1.currency);
describe('Bankmanager Testing', function () {
    //* Launch*//
    it('launch and enter value in Bankmanager', () => __awaiter(this, void 0, void 0, function* () {
        try {
            yield protractor_1.browser.get(jsd.CustomerData1.url);
        }
        catch (error) {
            console.log(error);
        }
    }));
    //* Click on bank manager login Button*//
    it('click on Bank manager Login button', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.clickonBankmanagerLoginButton();
    }));
    //* Click on Add Customer Tab Button*//
    it('Click on Add customer button', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.clickonAddCustomerButton();
    }));
    //* enter the First name *//
    it('enter the first name value', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.enterFirstName(jsd.CustomerData1.firstname);
    }));
    //* enter the last name *//
    it('enter the last name value', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.enterLastName(jsd.CustomerData1.lastname);
    }));
    //* enter the Postal code*//
    it('enter the Postal code value', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.enterPostcode(jsd.CustomerData1.Code);
    }));
    //* Click on Add customer submit button*//
    it('Click on add customer button', () => __awaiter(this, void 0, void 0, function* () {
        yield customerdetails.addCustomerButtonClick();
    }));
    //* Click on Open Customer  button*//
    it('Click on Open Customer button', () => __awaiter(this, void 0, void 0, function* () {
        yield openaccountdetails.clickOpenAccountButton();
    }));
    //* Click and select Customer dropdown*//
    it('Click and select customer dropdown', () => __awaiter(this, void 0, void 0, function* () {
        yield openaccountdetails.selectCustomerName();
    }));
    it("select currency ", () => {
        openaccountdetails.selectCurrency();
    });
    it("click on Process button to generate account no", () => {
        openaccountdetails.clickOnProcessButton();
        var alertValidate = protractor_1.browser.switchTo().alert();
        expect(alertValidate.accept).toBeDefined();
        alertValidate.getText().then((text) => {
            console.log(text);
            alertValidate.accept();
        });
    });
});
//# sourceMappingURL=Assignment4.js.map