import {test, expect} from '../src/fixtures/pagefixtures';
import { CsvHelper } from '../src/utils/CsvHelper';

test.beforeEach(async ({loginpage})=> {
    await loginpage.goToLoginPage();
    await loginpage.doLogin(process.env.APP_USERNAME!, process.env.PASSWORD!);
})

test('company logo exist on product page', async({homepage, searchResultPage, productInfoPage}) =>{
    await homepage.doSearch('macbook');
    await searchResultPage.selectProduct('MacBook Pro');
    expect(productInfoPage.isLogoVisible()).toBeTruthy();
})

test('verify product image count', async ({ homepage, searchResultPage, productInfoPage })=> {
    await homepage.doSearch('macbook');
    await searchResultPage.selectProduct('MacBook Pro');
    let imagesCount = await productInfoPage.getProductImagesCount();
    console.log('Total Images Count: ', imagesCount);
    expect(imagesCount).toBe(4);
});

test('verify product information', async ({ homepage, searchResultPage, productInfoPage })=> {
    await homepage.doSearch('macbook');
    await searchResultPage.selectProduct('MacBook Pro');
    let actualProductInfoData = await productInfoPage.getProductInfo();
    console.log('Actual Product Details: ', actualProductInfoData);
    expect.soft(actualProductInfoData.get('ProductHeader')).toBe('MacBook Pro');
    expect.soft(actualProductInfoData.get('Brand')).toBe('Apple');
    expect.soft(actualProductInfoData.get('Product Code')).toBe('Product 18');
    expect.soft(actualProductInfoData.get('Reward Points')).toBe('800');
    expect.soft(actualProductInfoData.get('Availability')).toBe('Out Of Stock');
    expect.soft(actualProductInfoData.get('ProductPrice')).toBe('$2,000.00');
    expect.soft(actualProductInfoData.get('ExTaxPrice')).toBe('$2,000.00');
});