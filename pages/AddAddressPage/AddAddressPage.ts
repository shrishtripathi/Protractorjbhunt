import {browser,by,element} from 'protractor'
import {Actions} from '../../Actions/Action';

export class AddAddressPage extends Actions{
    signininitialbtn: string;
    loginemailtextbox: string;
    passwordtextbox: string;
    signinsubmitbtn: string;
    hellobtn: string;
    youraccountlink: string;
    youraddressimgbtn: string;
    youraddresstext: string;
    addaddressplusimage: string;
    countrydropdown: string;
    fullnametextbox: string;
    addressline1textbox:string;
    addressline2textbox:string;
    citytextbox: string
    statetextbox: string;
    postalcodetextbox: string;
    phonetextbox:string;
    addaddressbtn:string;
    logoutbtn:string;

    constructor(countryname) {
        super();
        this.signininitialbtn = "//span[contains(text(),'Sign in')]"
        this.loginemailtextbox ="//input[@id ='ap_email']"
        this.passwordtextbox ="//input[@id ='ap_password']"
        this.signinsubmitbtn ="//input[@id ='signInSubmit']"
        this.hellobtn="//span[contains(text(),'Account & Lists') and @class = 'nav-line-2']"
        this.youraccountlink="//span[contains(text(),'Your Account')]"
        this.youraddressimgbtn ="//img[@alt ='Your Addresses']"
        this.youraddresstext ="//h1[contains(text(),'Your Addresses')]"
        this.addaddressplusimage="//div[@id ='ya-myab-plus-address-icon']"
        this.countrydropdown="//span[@class ='a-dropdown-prompt' and contains(text(),'"+countryname+"')]"
        this.fullnametextbox="//input[@name='address-ui-widgets-enterAddressFullName']"
        this.addressline1textbox="//input[@name='address-ui-widgets-enterAddressLine1']"
        this.addressline2textbox="//input[@name='address-ui-widgets-enterAddressLine2']"
        this.citytextbox="//input[@name='address-ui-widgets-enterAddressCity']"
        this.statetextbox="//input[@name='address-ui-widgets-enterAddressStateOrRegion']"
        this.postalcodetextbox="//input[@name='address-ui-widgets-enterAddressPostalCode']"
        this.phonetextbox="//input[@name='address-ui-widgets-enterAddressPhoneNumber']"
        this.addaddressbtn="//input[@class='a-button-input']"
        this.logoutbtn="//span[contains(text(),'Sign Out') and @class = 'nav-text']"
    }

    public clickonInitialSign() 
    {
       
        const clicksignin = element(by.css("a#nav-link-accountList"));
        const clicksignbtn = element(by.xpath("div[@id='nav-flyout-ya-signin']/a[@class ='nav-action-button']/span[@class='nav-action-inner']"));
    
        this.myClick(clicksignin,"Click sigininitial button");
        this.mouseHoverClick(clicksignbtn,"Click sigininitial button");
        clicksignbtn.click();
    
    }

    enterEmail(keys) 
    {
        
        const enterEmail = element(by.xpath(this.loginemailtextbox));
      
            enterEmail.sendKeys(keys);
        
    }

    enterPassword(keys) 
    {
        const enterPassword = element(by.xpath(this.passwordtextbox));
        if (enterPassword.isDisplayed())
        {
            enterPassword.sendKeys(keys);
        } 
        else 
        {
            console.log("enter Password failed")
        }
        
    }
  
    clickonSignSubmitbutton() 
    {
       
        const clicksigninbtn = element(by.xpath(this.signinsubmitbtn));
        if (clicksigninbtn.isDisplayed())
        {
            clicksigninbtn.click();
        } 
        else 
        {
            console.log("click signon submit failed")
        }
    }

    clickonHellobutton() 
    {
        const clickonhellobtn = element(by.xpath(this.hellobtn));
        if (clickonhellobtn.isDisplayed())
        {
            //clickonhellobtn.click();
        
            browser.actions().doubleClick(clickonhellobtn).perform();
        } 
        else 
        {
            console.log("unable hello button failed")
        }
    }
    clickonAddAddressImage() 
    {
        const clickonAddAddressImage = element(by.xpath(this.youraddressimgbtn));
        if (clickonAddAddressImage.isDisplayed())
        {
            clickonAddAddressImage.click();
            
        } 
        else 
        {
            console.log("unable to click on add address failed")
        }
    }
 
    clickonAddAddressPlusimage() 
    {
        const clickonAddAddressPlusimage = element(by.xpath(this.addaddressplusimage));
        if (clickonAddAddressPlusimage.isDisplayed())
        {
            clickonAddAddressPlusimage.click();
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to click on add address failed")
        }
    }

    selectcountryname(keys) 
    {
        const selectcountryname = element(by.xpath(this.countrydropdown));
        if (selectcountryname.isDisplayed())
        {
            this.dropDown(this.countrydropdown,"select Country name");
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to select Country name")
        }
    }

    enterFullNameAddress(keys) 
    {
        const enterFullNameAddress = element(by.xpath(this.fullnametextbox));
        if (enterFullNameAddress.isDisplayed())
        {
            enterFullNameAddress.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to enter full name address")
        }
    }

    enterAddressline1textbox(keys) 
    {
        const enterAddressline1textbox = element(by.xpath(this.addressline1textbox));
        if (enterAddressline1textbox.isDisplayed())
        {
            enterAddressline1textbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to enter address line1")
        }
    }

    enterAddressline2textbox(keys) 
    {
        const enterAddressline2textbox = element(by.xpath(this.addressline1textbox));
        if (enterAddressline2textbox.isDisplayed())
        {
            enterAddressline2textbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to select address line2")
        }
    }

    enterCitytextbox(keys) 
    {
        const enterCitytextbox = element(by.xpath(this.citytextbox));
        if (enterCitytextbox.isDisplayed())
        {
            enterCitytextbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to enter city")
        }
    }


    enterStatetextbox(keys) 
    {
        const enterStatetextbox = element(by.xpath(this.statetextbox));
        if (enterStatetextbox.isDisplayed())
        {
            enterStatetextbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to enter city")
        }
    }

    enterZipcodetextbox(keys) 
    {
        const enterZipcodetextbox = element(by.xpath(this.postalcodetextbox));
        if (enterZipcodetextbox.isDisplayed())
        {
            enterZipcodetextbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to enter Zipcode")
        }
    }

    enterPhonenumbertextbox(keys) 
    {
        const enterPhonenumbertextbox = element(by.xpath(this.phonetextbox));
        if (enterPhonenumbertextbox.isDisplayed())
        {
            enterPhonenumbertextbox.sendKeys(keys);
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to enter Phone number")
        }
    }

    clickonAddAddressbutton() 
    {
        const clickonAddAddressbutton = element(by.xpath(this.addaddressbtn));
        if (clickonAddAddressbutton.isDisplayed())
        {
            clickonAddAddressbutton.click();
            //browser.actions().doubleClick(clickonaddaddress).perform();
        } 
        else 
        {
            console.log("unable to click add add address button")
        }
    }


    logoutamazon() 
    {
        const clicksignbtn = element(by.xpath("div[@id='nav-flyout-ya-signin']/a[@class ='nav-action-button']/span[@class='nav-action-inner']"));
        
        browser.actions().mouseMove(clicksignbtn).perform()
            .then(function () 
            {
            const logoutamazon = element(by.xpath(this.logoutbtn));
            browser.actions().mouseMove(logoutamazon).click();
            console.log("Clicklogout ");
          },
          function (err)
          {
            console.log("Issue while clicking Logout");
          });
    }
}
