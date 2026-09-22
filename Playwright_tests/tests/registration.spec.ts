import test, { expect } from "@playwright/test";
import { HomePage } from "../pom/pages/HomePage";
import { SignUpForm, SIGN_UP_ERRORS } from "../pom/forms/SignUpForm";

let email: string;
let homePage: HomePage;
let signUpForm: SignUpForm;

test.describe('Name row Sign up tests', () => {



test.beforeEach(async ({ page }) => {

email = `aqa-test+${Date.now()}@gmail.com`  
homePage = new HomePage(page);    
await homePage.navigate();
await homePage.openSignUpForm();
   signUpForm = new SignUpForm(page); 
})


test('Succesful sign up', async ({ page }) => {

await signUpForm.triggerNameValidation('Test');
await signUpForm.triggerLastNameValidation('Testtest');
await signUpForm.triggerEmailValidation(email);
await signUpForm.triggerPasswordValidation('1234567Ww');
await signUpForm.triggerRePasswordValidation('1234567Ww');
await expect(page.getByRole('button', {name:'Register'})).toBeEnabled();
await page.getByRole('button', { name: 'Register' }).click();
await expect(page.getByRole('heading', {name: 'Garage'})).toHaveText('Garage');
})


test("Sign up with empty name", async ({ page }) =>{
   
  
await signUpForm.triggerNameValidation();
await signUpForm.expectNameError(SIGN_UP_ERRORS.NAME_REQUIRED)
})


test("Sign up with wrong name numbers", async ({ page }) =>{
 
await signUpForm.triggerNameValidation('12');
 await signUpForm.expectNameError(SIGN_UP_ERRORS.NAME_INVALID)
    
})

test("Sign up with wrong name symbols", async ({ page }) =>{
  
await signUpForm.triggerNameValidation('!@#');
await signUpForm.expectNameError(SIGN_UP_ERRORS.NAME_INVALID)

    
})
 
test("Sign up with extralong name", async ({ page }) =>{
  
await signUpForm.triggerNameValidation('qwertyuiopasdfghjklzxcv');
await signUpForm.expectNameError(SIGN_UP_ERRORS.NAME_LENGTH)

})

test("Sign up with extrasmall name", async ({ page }) =>{
    
await signUpForm.triggerNameValidation('q');
await signUpForm.expectNameError(SIGN_UP_ERRORS.NAME_LENGTH)

    
})
})

test.describe('Last Name row Sign up tests', () => {

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);    
await homePage.navigate();
await homePage.openSignUpForm();
  signUpForm = new SignUpForm(page); 
})
test("Sign up with empty last name", async ({ page }) =>{
   await signUpForm.triggerLastNameValidation();
   await signUpForm.expectNameError(SIGN_UP_ERRORS.LAST_NAME_REQUIRED)

})


test("Sign up with wrong Last name numbers", async ({ page }) =>{
   await signUpForm.triggerLastNameValidation('12');
   await signUpForm.expectNameError(SIGN_UP_ERRORS.LAST_NAME_INVALID)

    
})

test("Sign up with wrong last name symbols", async ({ page }) =>{
  await signUpForm.triggerLastNameValidation('!@#');
  await signUpForm.expectNameError(SIGN_UP_ERRORS.LAST_NAME_INVALID)
    
})
 
test("Sign up with extralong last name", async ({ page }) =>{
  await signUpForm.triggerLastNameValidation('qwertyuiopasdfghjklzxcv');
 await signUpForm.expectNameError(SIGN_UP_ERRORS.LAST_NAME_LENGTH)
    
})

test("Sign up with extrasmall last name", async ({ page }) =>{
 await signUpForm.triggerLastNameValidation('q');
 await signUpForm.expectNameError(SIGN_UP_ERRORS.LAST_NAME_LENGTH)
    
})

})


test.describe('email row Sign up tests', () => {

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);    
await homePage.navigate();
await homePage.openSignUpForm();
signUpForm = new SignUpForm(page); 
})
test("Sign up with empty email", async ({ page }) =>{
  await signUpForm.triggerEmailValidation();
  await signUpForm.expectNameError(SIGN_UP_ERRORS.EMAIL_REQUIRED)
})

test("Sign up with wrong email numbers", async ({ page }) =>{
   await signUpForm.triggerEmailValidation('12');
   await signUpForm.expectNameError(SIGN_UP_ERRORS.EMAIL_INVALID)
    
})

test("Sign up with wrong email format", async ({ page }) =>{
await signUpForm.triggerEmailValidation('gmail.com');
await signUpForm.expectNameError(SIGN_UP_ERRORS.EMAIL_INVALID)
    
})
 
})


test.describe('password row Sign up tests', () => {

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);    
await homePage.navigate();
await homePage.openSignUpForm();
signUpForm = new SignUpForm(page); 
    
})
test("Sign up with empty password", async ({ page }) =>{
   await signUpForm.triggerPasswordValidation(); 
   await signUpForm.expectNameError(SIGN_UP_ERRORS.PASSWORD_REQUIRED)
})


test("Sign up with wrong password integer absent", async ({ page }) =>{
   await signUpForm.triggerPasswordValidation('Wwqwertyui'); 
   await signUpForm.expectNameError(SIGN_UP_ERRORS.PASSWORD_INVALID)
})

test("Sign up with wrong password big letter absent", async ({ page }) =>{
  await signUpForm.triggerPasswordValidation('wwqwertyui1'); 
  await signUpForm.expectNameError(SIGN_UP_ERRORS.PASSWORD_INVALID)
})

test("Sign up with wrong password small letter absent", async ({ page }) =>{
  await signUpForm.triggerPasswordValidation('WWQERTYUIOPA1'); 
  await signUpForm.expectNameError(SIGN_UP_ERRORS.PASSWORD_INVALID)
})

 
})


test.describe('re-enter password row Sign up tests', () => {

test.beforeEach(async ({ page }) => {
     homePage = new HomePage(page);    
await homePage.navigate();
await homePage.openSignUpForm();
signUpForm = new SignUpForm(page); 
})
test("Sign up with empty re-enter password", async ({ page }) =>{
  await signUpForm.triggerRePasswordValidation();  
  await page.getByRole('textbox', { name: 'Re-enter password' }).click();
       await page.getByRole('textbox', { name: 'Re-enter password' }).blur();
  await signUpForm.expectNameError(SIGN_UP_ERRORS.RE_PASSWORD_REQUIRED)
})


test("Sign up with do not much re-enter password", async ({ page }) =>{
   await signUpForm.triggerPasswordValidation('1234567Ww');  
  await signUpForm.triggerRePasswordValidation('1234567Wwq');  
  await signUpForm.expectNameError(SIGN_UP_ERRORS.RE_PASSWORD_MISMATCH)
})

 
})


test.describe('Sign up tests btn Register and red border', () => {

test.beforeEach(async ({ page }) => {
     homePage = new HomePage(page);    
await homePage.navigate();
await homePage.openSignUpForm();
signUpForm = new SignUpForm(page); 
})

test("Sign up Register btn disabled", async ({ page }) =>{
  
  await expect(signUpForm.registerButton).toBeDisabled(); 
 
  
})


test("Sign up Register btn disabled with one filled value", async ({ page }) =>{
  await signUpForm.triggerNameValidation('Test');
  await expect(signUpForm.registerButton).toBeDisabled(); 
 
  
})


test("Sign Up - Red Border Validation", async ({ page }) =>{
 await signUpForm.triggerNameValidation();
await expect(page.locator('#signupName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  
})

test("Sign up Register btn disabled when all fields touched but empty", async ({ page }) => {
  await signUpForm.triggerNameValidation();
  await signUpForm.triggerLastNameValidation();
  await signUpForm.triggerEmailValidation();
  await signUpForm.triggerPasswordValidation();
  await signUpForm.triggerRePasswordValidation();

  await expect(signUpForm.registerButton).toBeDisabled();
})



})