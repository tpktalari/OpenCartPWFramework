import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class RegisterPage extends BasePage{

    //private Locators:
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly telephone: Locator;
    private readonly password:Locator;
    private readonly cfmPassword: Locator;
    private readonly subscribeYes: Locator;
    private readonly subscribeNo: Locator;
    private readonly agreeCheckBox: Locator;
    private readonly continueBtn: Locator;
    private readonly SuccessMsg: Locator;

    //constructor of the class: Init the locators
    constructor(page : Page){
        super(page);
        this.firstName = page.getByRole('textbox', { name : 'First Name'});
        this.lastName = page.getByRole('textbox', { name : 'Last Name'});
        this.email = page.getByRole('textbox', { name : 'E-Mail'});
        this.telephone = page.getByRole('textbox', { name : 'Telephone'});
        this.password = page.getByPlaceholder('Password', { exact: true });
        this.cfmPassword = page.getByRole('textbox', { name : 'Password Confirm'});
        this.subscribeYes = page.getByRole('radio', { name : 'Yes'});
        this.subscribeNo = page.getByRole('radio', { name : 'No'});
        this.agreeCheckBox = page.locator('[name="agree"]');
        this.continueBtn = page.getByRole('button', { name : 'Continue'});
        this.SuccessMsg = page.getByRole('heading', { name: 'Your Account Has Been Created!', level: 1 });
    }

    // public page acions(methods)/behaviour:
    async goToRegisterPage(): Promise<void>{
        await this.page.goto('opencart/index.php?route=account/register');  
    }

    async getRegisterPageTitle(): Promise<string>{
        return await this.page.title();
    }

    async register(firstName: string, lastName: string, email: string, telephone: string, password: string, cnfmPassword: string, subscribe: string){
        console.log(`user registration details: ${firstName} ${lastName} : ${email} : ${telephone}:${subscribe}`);
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.cfmPassword.fill(cnfmPassword);

        if (subscribe === 'Yes') {
            await this.subscribeYes.click();
        } else {
            await this.subscribeNo.click();
        }

        await this.agreeCheckBox.click();
        await this.continueBtn.click();
    }

     async isRegistrationSuccess(): Promise<boolean>{
        return await this.SuccessMsg.isVisible();
    }
}