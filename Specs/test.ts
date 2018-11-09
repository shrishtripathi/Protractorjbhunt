import { element, by, browser } from "protractor";
import { async } from "q";

describe('Launch URL',function()
{ 
    it('Verify Title', async()=>{
        //browser.actions().mouseMove({x:50,y:0}).doubleClick();
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        //var pgsource: any = browser.getPageSource();
        var text: any =  element(by.className('mainHeading'));
        expect(text.getText()).toBe('XYZ Bank');
    
    })
});