import { Page } from "puppeteer";

export default class AccountDetails {
    private page:Page;

    constructor(page:Page) {
        this.page= page;
    }

    /***
   * ################################### Locators ########################################
   */

    emailAddress = "#account-details-email";



    /***
   * ################################### Methods ########################################
   */
   async  getEmailAddress():Promise<string> {
       const elementVal:any = await this.page.$eval('#account-details-email',(el:any)=> <HTMLInputElement>el.value);
       return elementVal;
   }
}