import { test , expect} from '@playwright/test';
//,import { request } from 'node:http';
test.only('Demo API Test GET' , async({request})=> {

    const response = await request.get('https://reqres.in/api/users/2',{
        headers:{
            "x-api-key": 'reqres_8b8146234e8544818a6ea76e7c4ecc91'
        }
    })

    expect(response.status()).toBe(200);
    const text=await response.text();
    expect(text).toContain("Janet");
    console.log(await response.json());
})
//test.only('Demo API Test POST',async({request})=>{

//})