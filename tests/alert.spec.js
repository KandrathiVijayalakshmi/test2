import { test,expect } from '@playwright/test';
test('should handle a basic alert and verify its message',async({pages})=>{

    page.on('dialog',async dialog=>{

        console.log('Alert message: ${dialog.message()}');
        expect(dialog.message()).toContain('i am an alert box');
        await dialog.accept();
    });
        await page.goto('https://testpages.eviltesters.com/pages/basics/alert-javascr')
        await page.locator('#alertexamples').click();
}); 