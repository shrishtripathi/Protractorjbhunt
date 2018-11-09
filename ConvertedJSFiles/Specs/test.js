"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Launch URL', function () {
    it('Verify Title', () => {
        //browser.actions().mouseMove({x:50,y:0}).doubleClick();
        protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        //var pgsource: any = browser.getPageSource();
        var text = protractor_1.element(protractor_1.by.className('mainHeading'));
        expect(text.getText()).toBe('XYZ Bank');
    });
});
//# sourceMappingURL=test.js.map