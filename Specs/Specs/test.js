"use strict";
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
describe('Launch URL', function () {
    it('Verify Title', () => __awaiter(this, void 0, void 0, function* () {
        //browser.actions().mouseMove({x:50,y:0}).doubleClick();
        protractor_1.browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        //var pgsource: any = browser.getPageSource();
        var text = protractor_1.element(protractor_1.by.className('mainHeading'));
        expect(text.getText()).toBe('XYZ Bank');
    }));
});
//# sourceMappingURL=test.js.map