import {expect} from '@playwright/test';

const textField = '#myInput'
const urlContactUs = 'https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html'

export class AutocompleteTextfieldPageObject{
    async navigate(page){
        await page.goto(urlContactUs)
    }

    async setTextFromList(page, wordInput: string, wordResult: string){
        await page.type(textField, wordInput)
        await page.click(`text=${wordResult}`)
    }

    async checkTextfieldValue(page, word: string){
        await expect(page.locator(textField)).toHaveValue(word);
    }
}

export const autocompleteTextfieldPageObject = new AutocompleteTextfieldPageObject()