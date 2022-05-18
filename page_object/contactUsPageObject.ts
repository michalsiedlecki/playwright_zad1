import {expect} from '@playwright/test';

const email = '[name="email"]'
const firstName = '[name="first_name"]'
const lastName = '[name="last_name"]'
const messageElement = '[name="message"]'
const resetButton = '[type="reset"]'
const submitButton = '[type="submit"]'
const urlContactUs = 'https://webdriveruniversity.com/Contact-Us/contactus.html'


export class ContactUsPageObject{
    async navigate(page: any){
        await page.goto(urlContactUs)
    }

    async setFirstName(page: any, value: string){
        await page.type(firstName, value)
    }

    async checkFirstName(page: any, value: string){
        await expect(page.locator(firstName)).toHaveValue(value);
    }

    async setLastName(page: any, value: string){
        await page.type(lastName, value)
    }

    async checkLastName(page: any, value: string){
        await expect(page.locator(lastName)).toHaveValue(value);
    }

    async setEmail(page: any, value: string){
        await page.type(email, value)
    }

    async checkEmail(page: any, value: string){
        await expect(page.locator(email)).toHaveValue(value);
    }

    async setMessage(page: any, value: string){
        await page.type(messageElement, value)
    }

    async checkMessage(page: any, value: string){
        await expect(page.locator(messageElement)).toHaveValue(value);
    }

    async clickResetButton(page: any){
        await page.locator(resetButton).click()
    }

    async clickSubmitButton(page: any){
        await page.locator(submitButton).click()
    }

    async checkResponseMessage(page: any, message: string){
        await expect(page.locator(`text=${message}`)).toHaveText(message)
    }
}

export const contactUsPageObject = new ContactUsPageObject()
