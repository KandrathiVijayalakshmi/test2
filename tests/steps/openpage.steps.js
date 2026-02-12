const{Given,When,Then,And,Before,After,SetDefaultTimeout}=require("@cucumber/cucumber")

const{ chromium,expect}=require("@playwright/test");
const{page}=require("playwright")

let browser;
let page;

       
         Given('browser is open', function () {
          browser=await chromium.launch({headless:false});
          const context=await browser.newContext();
          page=await context.newPage();
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       
   
         Given('user is on google search page', function () {
          await page.goto('https://www.google.com');
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       
   
       
         When('user enters a text in search box', function () {
          await page.fill('textarea[name="q"],'playwright testing');
            await page.keyboard.press('enter');
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       
    
       
         Then('user is navigated to search results', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });