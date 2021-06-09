import {Page} from 'puppeteer';

export default class ProductListingPage {
    private page:Page;
    constructor(page:Page) {
        this.page = page;
    }

    /**
   * ############################ Locators ###############################
   */
    firstProduct = "div.plp-products__row .plp-products__column:nth-child(1)>div > div > a";



    /**
   * ############################ Methods ###############################
   */

    async clickOnFirstProduct():Promise<void>{
        await this.page.click(this.firstProduct);
    }
}