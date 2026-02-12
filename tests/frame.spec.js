import { test,expect } from '@playwright/test';
test('iframe usingpage.frame()',async({page})=>{

    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml bu')

    await page.waitForSelector('#iframeResult');
    const frame=page.frame({url: /tryhtml_button_test/});
    await frame.click('button');

    page.on('dialog',dialog=> dialog.accept());
});