import * as faker from 'faker';

const userEmail: string = faker.internet.email();
const usr: any = userEmail.split('@');
const usrEm: any = usr[0] + Date.now();
const guestEmail: any = usrEm + '@' + usr[1];

export const randomDataSet = {
  // Guest user data
  GUEST_EMAIL: guestEmail,
  GUEST_FIRSTNAME: faker.name.firstName(),
  GUEST_LASTNAME: faker.name.lastName(),
  GUEST_STREETADDR: faker.address.streetAddress(),
  GUEST_COMPANY_NAME: faker.company.companyName(),
  GUEST_CITY: faker.address.city(),
  GUEST_ZIPCODE: faker.address.zipCode(),
  GUEST_COUNTRY: faker.address.country(),
  GUEST_STATE: 2,
  GUEST_PHONENO: faker.phone.phoneNumber(),
  // ALIPAY
  ALIPAY_USERNAME: faker.internet.userName(),
  ALIPAY_PASSWORD: faker.random.word(),

  // SignUp
  USER_PASSWORD: '123456',
  // User credentials required during Checkout for Gmail sctipts only
  GUEST_GMAIL_Email: 'autowebdriverio+guest' + Date.now() + '@gmail.com',
  MEMBER_GMAIL_Email: 'autowebdriverio+member' + Date.now() + '@gmail.com',
  MEMBER_GMAIL_Password: '123123',
  // Address field data added
  ADDRESS_COUNTRY: 'Canada',
  ADDRESS_STATE: 'Québec',
  ADDRESS_PHONE: '350-351-3213',
  // Billing Address fields
  BILLING_FIRSTNAME: faker.name.firstName(),
  BILLING_LASTNAME: faker.name.lastName(),
  BILLING_STREETADDR: faker.address.streetAddress(),
  BILLING_COMPANY_NAME: faker.company.companyName(),
  BILLING_CITY: faker.address.city(),
  BILLING_ZIPCODE: faker.address.zipCode(),
  BILLING_COUNTRY: faker.address.country(),

  // Shipping Address fields
  SHIPPING_FIRSTNAME: faker.name.firstName(),
  SHIPPING_LASTNAME: faker.name.lastName(),
  SHIPPING_STREETADDR: faker.address.streetAddress(),
  SHIPPING_COMPANY_NAME: faker.company.companyName(),
  SHIPPING_CITY: faker.address.city(),
  SHIPPING_ZIPCODE: faker.address.zipCode(),
  SHIPPING_COUNTRY: faker.address.country(),
};
