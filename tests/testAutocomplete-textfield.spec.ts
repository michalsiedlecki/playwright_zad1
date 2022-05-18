import { test } from '@playwright/test';
import  { autocompleteTextfieldPageObject } from "../page_object/autocompleteTextfieldPageObject";
import * as autocompleteTextfieldTestdata from "../data/autocompleteTextfield.json"

test.beforeEach(async ({ page }) => {
    await autocompleteTextfieldPageObject.navigate(page)
})

test.describe('Tests for Dropdown, radio buttons and checkboxes', () => {
    test('Check autocoplete textfield', async({ page }) => {
        await autocompleteTextfieldPageObject.setTextFromList(page, autocompleteTextfieldTestdata.wordInput, autocompleteTextfieldTestdata.wordResult)
        await autocompleteTextfieldPageObject.checkTextfieldValue(page, autocompleteTextfieldTestdata.wordResult)
    })
})