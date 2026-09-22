import { Locator, Page } from "@playwright/test"

export class HomePage {
    private readonly page: Page;
    private readonly signUpButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
    }


async navigate(){
    await this.page.goto('/');
}

async openSignUpForm(){
    await this.signUpButton.click();
}

}