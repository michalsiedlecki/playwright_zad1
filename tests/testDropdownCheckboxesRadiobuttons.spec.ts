import { test } from '@playwright/test';
import  { dropDownCheckboxesRadiobuttonsPage } from "../page_object/dropdownCheckboxesRadiobuttonsPageObject";
import * as dropDownTestdata from "../data/dropDownCheckboxesRadiobuttons.json"

test.beforeEach(async ({ page }) => {
  await dropDownCheckboxesRadiobuttonsPage.navigate(page)
  });

test.describe('Tests for Dropdown, radio buttons and checkboxes', () => {
  test('Check that First Dropdown has the correct value for the option to choose from', async({ page }) => {
    await dropDownCheckboxesRadiobuttonsPage.checkBackendLanguageDropDownNumberOfOptions(page, dropDownTestdata.backendLanguage.length)
  })
  
  test('Check that Second Dropdown has the correct value for the option to choose from', async ({ page }) => {
    await dropDownCheckboxesRadiobuttonsPage.checkBackendLanguageDropDownNumberOfOptions(page, dropDownTestdata.tools.length)
  })

  test('Check that Third Dropdown has the correct value for the option to choose from', async ({ page }) => {
    await dropDownCheckboxesRadiobuttonsPage.checkBackendLanguageDropDownNumberOfOptions(page, dropDownTestdata.frontLanguage.length)
  })

  test('Check First Dropdown', async ({ page }) => {
    for (var i = 0; i< dropDownTestdata.backendLanguage.length; i++){ 
        await dropDownCheckboxesRadiobuttonsPage.chooseBackendLanguage(page, dropDownTestdata.backendLanguage[i])
        await dropDownCheckboxesRadiobuttonsPage.checkBackendLanguageValue(page, dropDownTestdata.backendLanguage[i])
    }
  })

  test('Check Second Dropdown', async ({ page }) => {
    for (var i = 0; i< dropDownTestdata.tools.length; i++){ 
        await dropDownCheckboxesRadiobuttonsPage.chooseTool(page, dropDownTestdata.tools[i])
        await dropDownCheckboxesRadiobuttonsPage.checkTool(page, dropDownTestdata.tools[i])
    }
  })

  test('Check Third Dropdown', async ({ page }) => {
    for (var i = 0; i< dropDownTestdata.frontLanguage.length; i++){ 
        await dropDownCheckboxesRadiobuttonsPage.chooseFrontLanguag(page, dropDownTestdata.frontLanguage[i])
        await dropDownCheckboxesRadiobuttonsPage.checkFrontLanguag(page, dropDownTestdata.frontLanguage[i])
    }
  })

  test('Check value of checkboxes', async ({ page }) => {
    await dropDownCheckboxesRadiobuttonsPage.checkNumberOfCheckboxes(page, dropDownTestdata.checkboxes.length)
  })

  test('Test checkboxes', async ({ page }) => {
    for (var i = 0; i< dropDownTestdata.checkboxes.length; i++){
        await dropDownCheckboxesRadiobuttonsPage.checkForCheckbox(page, dropDownTestdata.checkboxes[i]) 
      }
      for (var i = 0; i< dropDownTestdata.checkboxes.length; i++){
        if(i%2==0){
            await dropDownCheckboxesRadiobuttonsPage.uncheckForCheckbox(page, dropDownTestdata.checkboxes[i])
        }
      }
  })

  test('Check value of radio buttons', async ({ page }) => {
    await dropDownCheckboxesRadiobuttonsPage.checkNumberOfRadioButtons(page, dropDownTestdata.radioButtons.length)
  })

  test('Test radiobuttons', async ({ page }) => {
    for (var i = 0; i< dropDownTestdata.radioButtons.length; i++){ 
        await dropDownCheckboxesRadiobuttonsPage.chooseRadioButtonColour(page, dropDownTestdata.radioButtons[i])      
      }
  })

})