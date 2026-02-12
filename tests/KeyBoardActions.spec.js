import { test,expect } from '@playwright/test';
test('Keyboard action demo',async({page})=>{
    await page.goto('https://textbox.johnjago.com/')
await page.locator("//textarea").pressSequentially(
 "vijju tcs employee")
 await page.locator("//textarea").press("Control+A");
 await page.locator("//textarea").press("Backspace");

 await page.Keyboard.type('hello world');
 await page.Keyboard.press('ArrowLeft');
await page.Keyboard.down('Shift');
for(let i=0; i<'world'.length;i++)
    
await page.Keyboard.down('Shift');
 await page.Keyboard.press('ArrowLeft');
await page.Keyboard.press('Backspace');

})
