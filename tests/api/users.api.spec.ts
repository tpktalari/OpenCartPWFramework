import {test, expect} from '@playwright/test';
import { request } from 'node:http';

let AUTH_TOKEN = { Authorization : 'Bearer bfae2593cb74513bb8336f51e73a87b4b25a6adfe379475515fbf4dfee65feda'};

test('get user test', async({request})=>{
    let response = await request.get('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN
    })

    console.log(await response.json());
    console.log(response.status());
    console.log(response.statusText());

    expect(response.status()).toBe(200);
})

// POST is unsafe - always crates a fresh entry in DB
test('create user test', async({request})=>{

    //JS Object
    let userData = {
            name: "PK",
            email: `autmation_${Date.now()}@open.com`,
            gender: "male",
            status: "active"
    };
    // JS Object to JSON - serialization. (Auto serialization )

    let response = await request.post('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN,
        data : userData
    })

    let jBody = await response.json();
    console.log(jBody);
    console.log(userData.email);
    console.log(response.status());  //201
    console.log(response.statusText()); // Created

})

test('update user test', async({request})=>{

    //JS Object
    let userData = {
            name : "PK_New",
            email : "pk@tesNewt.example",
            gender : "male",
            status : "inactive"
    };
    // JS Object to JSON - serialization. (Auto serialization )

    let response = await request.put('https://gorest.co.in/public/v2/users/8507333', {
        headers: AUTH_TOKEN,
        data : userData
    });

    let jBody = await response.json();
    console.log(jBody);
    console.log(response.status());  //200
    console.log(response.statusText()); // OK

})

test('delete user test', async({request})=>{

    let response = await request.delete('https://gorest.co.in/public/v2/users/8507333', {
        headers: AUTH_TOKEN,
    });
   
    console.log(response.status());  //204 
    console.log(response.statusText()); // No Content

})