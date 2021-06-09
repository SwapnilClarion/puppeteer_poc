import puppeteer, { Page } from "puppeteer";
import UserManagementMethods from "../../methods/UserManagementMethods";
import NavigationPage from "../../pageObjects/navigationPage";
import AccountDetails from "../../pageObjects/accountDetailsPage";
import {expect} from 'chai';
describe("Validate user signup", async () => {
  let browser: any;
  let userSignupMethods: UserManagementMethods;
  let navigationPage: NavigationPage;
  let accountDetailsPage: AccountDetails;
  let page: Page;
  let userEmail:string;
  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      args: ["--start-maximized", "--disable-notifications"],
      defaultViewport: null,
    });
    page = await browser.newPage();
    navigationPage = new NavigationPage(page);
    userSignupMethods = new UserManagementMethods(page);
    accountDetailsPage = new AccountDetails(page);
    await page.goto("https://qa.ssense.com");
  });
  it("should perform signup", async () => {
    await navigationPage.clickOnLoginNavLink();
    await page.waitForNavigation();
    userEmail = await userSignupMethods.userSignup();
    await page.waitForTimeout(5000);
  });
  it("", async () => {
    await navigationPage.clickOnAccountsNavLink();
    await page.waitForTimeout(5000);
    const emailAddress: any = await accountDetailsPage.getEmailAddress();
    console.log("Email Address  :  " + emailAddress);
    expect(emailAddress).to.equal(userEmail);
  });
  after(async () => {
    await browser.close();
  });
});
