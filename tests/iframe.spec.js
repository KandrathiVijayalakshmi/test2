import { test,expect } from '@playwright/test';
test('iframe usingpage.frame()',async({page})=>{

    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml bu')


    const iframe=page.frameLocator('#iframeResult');
    await iframe.locator('button').click();

    page.on('dialog',dialog=>{
        expect(dialog.message()).toContain('hello');
     dialog.accept();
});
});