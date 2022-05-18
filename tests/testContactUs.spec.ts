import { test } from '@playwright/test';
import  { contactUsPageObject } from "../page_object/contactUsPageObject";
import * as contactTestdata from "../data/contactUs.json"

test.beforeEach(async ({ page }) => {
  await contactUsPageObject.navigate(page)
  });

test.describe('Tests for Contact-Us', () => {
  test('Check Reset button', async ({ page }) => {
      await contactUsPageObject.setFirstName(page, contactTestdata.firstName)
      await contactUsPageObject.checkFirstName(page, contactTestdata.firstName)
      await contactUsPageObject.setLastName(page, contactTestdata.lastName)
      await contactUsPageObject.checkLastName(page, contactTestdata.lastName)
      await contactUsPageObject.setEmail(page, contactTestdata.email)
      await contactUsPageObject.checkEmail(page, contactTestdata.email)
      await contactUsPageObject.setMessage(page, contactTestdata.message)
      await contactUsPageObject.checkMessage(page, contactTestdata.message)
      await contactUsPageObject.clickResetButton(page)
      await contactUsPageObject.checkFirstName(page, '')
      await contactUsPageObject.checkLastName(page, '')
      await contactUsPageObject.checkEmail(page, '')
      await contactUsPageObject.checkMessage(page, '')
    })

    test('Check error message for empty fields', async ({ page }) => {
      await contactUsPageObject.setFirstName(page, contactTestdata.firstName)
      await contactUsPageObject.setEmail(page, contactTestdata.email)
      await contactUsPageObject.clickSubmitButton(page)
      await contactUsPageObject.checkResponseMessage(page, contactTestdata.errorMessageForEmptyFields)
    })

    test('Check error message for invalid email', async ({ page }) => {
      await contactUsPageObject.setFirstName(page, contactTestdata.firstName)
      await contactUsPageObject.setLastName(page, contactTestdata.lastName)
      await contactUsPageObject.setEmail(page, contactTestdata.message)
      await contactUsPageObject.setMessage(page, contactTestdata.message)
      await contactUsPageObject.clickSubmitButton(page)
      await contactUsPageObject.checkResponseMessage(page, contactTestdata.errorMessageForInvalidEmail)
    })

    test('Check happy path for form', async ({ page }) => {
      await contactUsPageObject.setFirstName(page, contactTestdata.firstName)
      await contactUsPageObject.setLastName(page, contactTestdata.lastName)
      await contactUsPageObject.setEmail(page, contactTestdata.email)
      await contactUsPageObject.setMessage(page, contactTestdata.message)
      await contactUsPageObject.clickSubmitButton(page)
      await contactUsPageObject.checkResponseMessage(page, contactTestdata.messageForHappyPath)
    })
})
