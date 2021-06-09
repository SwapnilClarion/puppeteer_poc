import { Page } from "puppeteer";
import {randomDataSet} from "../dataProviders/randomDataSet";
import LoginPage from '../pageObjects/loginPage';
export default class UserManagementMethods {
    private page:Page;
    private loginPage:LoginPage;

    constructor(page:Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
    }

    async userSignup():Promise<string>{
        const userEmail:string = randomDataSet.GUEST_EMAIL;
        await this.loginPage.enterSignUpEmail(userEmail);
        await this.loginPage.enterSignUpPassword(randomDataSet.USER_PASSWORD);
        await this.loginPage.selectNoThanksPromo();
        await this.loginPage.clickSignupButton();
        await this.page.waitForNavigation();
        return userEmail;
    }

    async userLogin(username:string,password:string):Promise<void>{
        await this.loginPage.enterLoginEmail(username);
        await this.loginPage.enterLoginPassword(password);
        await this.loginPage.clickLoginButton();
    }
}