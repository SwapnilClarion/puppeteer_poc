import { Page } from "puppeteer";

export default class LoginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  /***
   * ################################### Locators ########################################
   */
  signUpEmail = "#register-form-email-address";
  signUpPassword = "#password";
  noThanksPromo = "#select_no_thanks_form";
  signUpCreateBtn = "#submitRegister";
  loginEmail = "#login-form-email";
  loginPassword = "#login-form-password";
  loginBtn = "#submitLogin";

  /***
   * ################################### Methods ########################################
   */

  async enterSignUpEmail(emailid: string): Promise<void> {
    await this.page.type(this.signUpEmail, emailid);
  }

  async enterSignUpPassword(password: string): Promise<void> {
    await this.page.type(this.signUpPassword, password);
  }

  async selectNoThanksPromo(): Promise<void> {
    await this.page.click(this.noThanksPromo);
  }

  async clickSignupButton(): Promise<void> {
    await this.page.click(this.signUpCreateBtn);
  }

  async enterLoginEmail(emailid: string): Promise<void> {
    await this.page.type(this.loginEmail, emailid);
  }

  async enterLoginPassword(password: string): Promise<void> {
    await this.page.type(this.loginPassword, password);
  }

  async clickLoginButton(): Promise<void> {
    await this.page.click(this.loginBtn);
  }
}
