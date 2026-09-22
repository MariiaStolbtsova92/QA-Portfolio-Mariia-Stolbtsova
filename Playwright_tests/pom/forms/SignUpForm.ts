import { Locator, Page, expect } from "@playwright/test";

export const SIGN_UP_ERRORS = {
    // Name
    NAME_REQUIRED: 'Name required',
    NAME_INVALID: 'Name is invalid',
    NAME_LENGTH: 'Name has to be from 2 to 20 characters long',

    // Last Name
    LAST_NAME_REQUIRED: 'Last name required',
    LAST_NAME_INVALID: 'Last name is invalid',
    LAST_NAME_LENGTH: 'Last name has to be from 2 to 20 characters long',

    // Email
    EMAIL_REQUIRED: 'Email required',
    EMAIL_INVALID: 'Email is incorrect',

    // Password
    PASSWORD_REQUIRED: 'Password required',
    PASSWORD_INVALID: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',

    // Re-enter Password
    RE_PASSWORD_REQUIRED: 'Re-enter password required',
    RE_PASSWORD_MISMATCH: 'Passwords do not match',
} as const;

export class SignUpForm {
    private readonly page: Page;
    private readonly nameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly rePasswordInput: Locator;
    readonly registerButton: Locator;
    private readonly nameError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('#signupName');
        this.lastNameInput = page.locator('#signupLastName');
        this.emailInput = page.getByRole('textbox', { name: 'Name Last name Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password', exact: true });
        this.rePasswordInput = page.getByRole('textbox', { name: 'Re-enter password' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.nameError = page.locator('//div[@class="invalid-feedback"]//p');
    }

    async triggerNameValidation(value?: string) {
        await this.nameInput.click();
        if (value !== undefined) await this.nameInput.fill(value);
        await this.nameInput.blur();
    }

  async triggerLastNameValidation(value?: string) {
        await this.lastNameInput.click();
        if (value !== undefined) await this.lastNameInput.fill(value);
        await this.lastNameInput.blur();
    }

 async triggerEmailValidation(value?: string) {
        await this.emailInput.click();
        if (value !== undefined) await this.emailInput.fill(value);
        await this.emailInput.blur();
    }


 async triggerPasswordValidation(value?: string) {
        await this.passwordInput.click();
        if (value !== undefined) await this.passwordInput.fill(value);
        await this.passwordInput.blur();
    }


 async triggerRePasswordValidation(value?: string) {
        await this.rePasswordInput.click();
        if (value !== undefined) await this.rePasswordInput.fill(value);
        await this.rePasswordInput.blur();
    }


async expectNameError(message: string) {
        await expect(this.nameError).toHaveText(message);
    }

}