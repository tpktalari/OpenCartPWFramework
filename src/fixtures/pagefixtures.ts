import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { SearchResultPage } from "../pages/SeachResultPage";
import { ProductInfoPage } from "../pages/ProductinfoPage";

// define types for the page fixtures
type pageFixures = {
    loginpage: LoginPage;
    homepage : HomePage;
    registerpage: RegisterPage;
    searchResultPage: SearchResultPage;
    productInfoPage: ProductInfoPage;
}

// extend playwright base test:
export let test = baseTest.extend<pageFixures>({

    loginpage: async({page}, use) => {
         let loginpage = new LoginPage(page);
         await use(loginpage);    
    },

    homepage: async({page}, use) => {
         let homepage = new HomePage(page);
         await use(homepage);    
    },

    registerpage: async({page}, use) => {
        let registerpage = new RegisterPage(page);
        await use(registerpage);
    },

    searchResultPage: async({page}, use) => {
        let searchResultPage = new SearchResultPage(page);
        await use(searchResultPage);
    },

    productInfoPage: async({page}, use) => {
        let productInfoPage = new ProductInfoPage(page);
        await use(productInfoPage);
    }


});

export {expect} from "@playwright/test";


// use cases of fixures:
// page objects
// test data
// state  - .json

// fixutes - supply the data/page objects to the test methods using the inbuilt 'use' callback function.
//inbuilt fixures: page, browser, context, request, etc
// custom fixures: page objects, test data, state, etc
