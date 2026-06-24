import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage{
    
    private readonly logoutLink: Locator;
    private readonly headers: Locator;
    

    constructor(page : Page){
        super(page);
        this.logoutLink = page.getByRole('link', { name : 'Logout'});
        this.headers = page.getByRole('heading', { level : 2});
        
    }

     // public page acions(methods)/behaviour:

    async isLogoutLinkVisible(): Promise<boolean>{
        return await this.logoutLink.isVisible();
    }

    async getHomePageHeaders() : Promise<string[]> {
        return await this.headers.allInnerTexts();
    }
     
    async doSearch(searchkey : string): Promise<void>{
        console.log(`searching for: ${searchkey}`);
        await this.searchBox.fill(searchkey);
        await this.searchIcon.click();
    }
}