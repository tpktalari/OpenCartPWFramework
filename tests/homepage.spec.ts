import {test, expect} from '../src/fixtures/pagefixtures';

test.beforeEach(async ({loginpage})=> {
    await loginpage.goToLoginPage();
    await loginpage.doLogin('testapcfss@gmail.com', 'Test@123');
})

test('home Page Title Test', async ({homepage})=>{
    
    const homepageTitle = await homepage.getPageTitle();
    console.log('Home page title is' , homepageTitle);
    expect(homepageTitle).toBe('My Account');
})

test('Logout Link Visible Test', async ({homepage})=>{
    expect(await homepage.isLogoutLinkVisible()).toBeTruthy();
})

test('Home Page Headers Test', async ({homepage})=>{
    const headers: string[] = await homepage.getHomePageHeaders();
    console.log('Home page headers are : ', headers);
    expect.soft(headers).toHaveLength(4);
    expect.soft(headers).toEqual(['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter']);
})