import {test, expect} from '../src/fixtures/pagefixtures';
//import { CsvHelper } from '../src/utils/CsvHelper';

test.beforeEach(async ({loginpage})=> {
    await loginpage.goToLoginPage();
    await loginpage.doLogin(process.env.APP_USERNAME!, process.env.PASSWORD!);
})

// let productData = CsvHelper.readCsv("src/testdata/productdata.csv");
// for(const row of productData){
//     test(`verify search result count ${row.searchkey} ${row.productname}`, async ({homepage, searchResultPage})=>{
//         await homepage.doSearch(row.searchkey);
//         let seachCount = await searchResultPage.getProductSeachResultsCount();
//         expect(seachCount).toBe(Number(row.resultcount));
//     })
// }


// for(const row of productData){
//     test(`verify user is able to land on product page ${row.searchkey} ${row.productname}`, async ({homepage, searchResultPage, page})=>{
//         await homepage.doSearch(row.searchkey);
//         await searchResultPage.selectProduct(row.productname);
//         expect(await page.title()).toBe(row.productname);
//     })
// }

