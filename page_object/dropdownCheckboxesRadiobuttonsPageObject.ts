import {expect} from '@playwright/test'

var backendLanguageDropDown = '#dropdowm-menu-1'
var backendLanguageDropDownOptions = '#dropdowm-menu-1 option'
var checkboxInputs = '#checkboxes input'
var toolsDropDown = '#dropdowm-menu-2'
var toolsLanguageDropDownOptions = '#dropdowm-menu-2 option'
var frontLanguageDropDown = '#dropdowm-menu-3'
var frontLanguageDropDownOptions = '#dropdowm-menu-3 option'
var radioButtonInputs = '#radio-buttons input'
var urlDropdown = 'https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html'

export class DropDownCheckboxesRadiobuttonsPage{
    async navigate(page: any){
        await page.goto(urlDropdown)
    }

    async checkBackendLanguageDropDownNumberOfOptions(page: any, number: number){
        await expect(page.locator(backendLanguageDropDownOptions)).toHaveCount(number)
    }

    async checkToolsDropDownNumberOfOptions(page: any, number: number){
        await expect(page.locator(toolsLanguageDropDownOptions)).toHaveCount(number)
    }

    async checkFrontDropDownNumberOfOptions(page: any, number: number){
        await expect(page.locator(frontLanguageDropDownOptions)).toHaveCount(number)
    }

    async chooseBackendLanguage(page: any, language: string){
        await page.selectOption(backendLanguageDropDown, language)
    }

    async checkBackendLanguageValue(page: any, language: string){
        await expect(page.locator(backendLanguageDropDown)).toHaveValue(language.toLowerCase());
    }

    async chooseTool(page: any, tool: string){
        await page.selectOption(toolsDropDown, tool)
    }

    async checkTool(page: any, tool: string){
        await expect(page.locator(toolsDropDown)).toHaveValue(tool.toLowerCase());
    }

    async chooseFrontLanguag(page: any, language: string){
        await page.selectOption(frontLanguageDropDown, language)
    }

    async checkFrontLanguag(page: any, language: string){
        await expect(page.locator(frontLanguageDropDown)).toHaveValue(language.toLowerCase());
    }

    async checkNumberOfCheckboxes(page: any, number: number){
        await expect(page.locator(checkboxInputs)).toHaveCount(number)
    }

    async checkForCheckbox(page: any, checkbox: string){
        await page.check(checkbox)
        expect(await page.isChecked(checkbox)).toBeTruthy()
    }

    async uncheckForCheckbox(page: any, checkbox: string){
        await page.uncheck(checkbox)
        expect(await page.isChecked(checkbox)).toBeFalsy()
    }

    async checkNumberOfRadioButtons(page: any, number: number){
        await expect(page.locator(radioButtonInputs)).toHaveCount(number)
    }

    async chooseRadioButtonColour(page: any, colour: string){
        await page.check(colour)
        expect(await page.isChecked(colour)).toBeTruthy()
    }
}

export const dropDownCheckboxesRadiobuttonsPage = new DropDownCheckboxesRadiobuttonsPage()