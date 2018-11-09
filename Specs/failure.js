"use strict";
exports.__esModule = true;
var webdriver = require('selenium-webdriver');
var protractor_1 = require("protractor");
describe('modes of failure', function () {
    it('should fail to find a non-existent element', function () {
        protractor_1.browser.get('index.html#/form');
        // Run this statement before the line which fails. If protractor is run
        // with the debugger (protractor debug debugging/conf.js), the test
        // will pause after loading the webpage but before trying to find the
        // element.
        protractor_1.browser["debugger"]();
        // This element doesn't exist, so this fails.
        var nonExistant = protractor_1.element(protractor_1.by.binding('nopenopenope')).getText();
    });
    it('should fail to click a hidden element', function () {
        protractor_1.browser.get('index.html#/form');
        protractor_1.element(protractor_1.by.id('hiddenbutton')).click();
    });
    it('should fail to use protractor on a non-Angular site', function () {
        protractor_1.browser.get('http://www.google.com');
    }, 20000);
    it('should fail within a promise', function () {
        protractor_1.browser.get('index.html#/form');
        var greeting = protractor_1.element(protractor_1.by.binding('greeting'));
        greeting.getText().then(function (text) {
            expect(text).toEqual('This is not what it equals');
        });
    });
    it('should fail an assertion', function () {
        protractor_1.browser.get('index.html#/form');
        var greeting = protractor_1.element(protractor_1.by.binding('greeting'));
        expect(greeting.getText()).toEqual('This is not what it equals');
    });
    it('should fail comparing a promise to another promise', function () {
        protractor_1.browser.get('index.html#/form');
        var greeting = protractor_1.element(protractor_1.by.binding('greeting'));
        expect(greeting.getText()).toEqual(greeting.getAttribute('value'));
    });
    it('should fail because it throws an error', function () {
        function foo() {
            throw new Error('bar!');
        }
        foo();
    });
});
