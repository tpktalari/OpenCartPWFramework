import {test, expect} from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../src/utils/CsvHelper';


test.beforeEach(async ({loginpage})=> {
    await loginpage.goToLoginPage();
})

test('Login Page Title Test', async ({loginpage})=>{
    const pagetitle = await loginpage.getLoginPageTitle();
    console.log(`Login page title is : ${pagetitle}`);
    expect(pagetitle).toBe('Account Login');
})

test('Forgot Password Link Visible Test', async ({loginpage})=>{
    expect(await loginpage.isForgotPwdLinkVisible()).toBeTruthy();
})

test('User is able to login to app Test', async ({loginpage, homepage})=>{
    await loginpage.doLogin(process.env.APP_USERNAME!, process.env.PASSWORD!);
    expect.soft(await homepage.isLogoutLinkVisible()).toBeTruthy();
    expect.soft(await homepage.getPageTitle()).toBe('My Account');
})

//DD 2: without fixures for getting csv data , parallel mode, read csv directly and loop test method row wise..

    // let testData = CsvHelper.readCsv('src/testdata/loginData.csv');

    // for(let row of testData){
    //     test(`Invalid Login test with ${row.username} - ${row.password}`, async ({loginpage}) => {
    //         await loginpage.doLogin(row.username, row.password);
    //         expect(await loginpage.isInvalidLoginErrorDisplayed()).toBeTruthy();
    //     })
    // }