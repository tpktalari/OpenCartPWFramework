// import { test, expect } from "../../src/fixtures/apifixtures";

// // Web application --> try to intercept call network calls and log them...

// // ** = wild card pattern -- matcha all the URL...


// //intecept the network call...
// test('intercept and log requests', async ({ page }) => {

//     await page.route('**/*', async (route) => {
//         console.log(route.request().method(), route.request().url());
//         await route.continue(); //url1 --- capture and continue./..url2 ---capture ---continue
//     })

//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
// })


// //intercept with mocking..
// // mocking: fake data/responce/dummy response

// test('mock search data API', async ({ page }) => {

//     let fakeProducts = [
//         {name: 'fake MAcBookPro', price: "$599"},
//         {name: 'fake phone 20', price: "$2599"}
//     ]

//     await page.route('**/index.php?route=product/search&search=macbook', (route)=>{
        
//         route.fulfill({
//             status: 200,
//             contentType: 'application/json',
//             body: JSON.stringify(fakeProducts)
//         });
//     });

//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=macbook')
//     await page.pause()

//     // For our reference
//     let fakeJson = await page.evaluate(async () => {
//         let fakeRes = await fetch('https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=macbook')
//         return await fakeRes.json();
//     })

//     console.log(fakeJson);

// })


