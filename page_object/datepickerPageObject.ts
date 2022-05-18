import {expect} from '@playwright/test';

const calendarLogo = 'text=Datepicker Select Date: >> span'
const calendarDay = '.day'
const calendarLeftArrow = '.datepicker-days .prev'
const calendarRightArrow = '.datepicker-days .next'
const monthAndYear = '.datepicker-switch'
const selectedDate = ".form-control"
const urlContactUs = 'https://webdriveruniversity.com/Datepicker/index.html'

function checkIfDateToSetIsInThePast(selectedDateInDatepicker: Date, dateToSet: Date): boolean{
    let isPastDate 
    if (dateToSet < selectedDateInDatepicker) isPastDate = true 
    else isPastDate = false
    return isPastDate
}

async function  setDate(page, dateToSetMonthAndYear: string, dateToSetDay: string, isPastDate: boolean){
    await page.click(calendarLogo)
    const monthAndYearElement = await page.locator(monthAndYear).locator('visible=true');
    let textMonthAndYear = await monthAndYearElement.textContent()
    if (textMonthAndYear === dateToSetMonthAndYear){
       await page.locator(`td:has-text('${dateToSetDay}')`).click()
    }else if(!isPastDate){
        await page.click(calendarRightArrow)   
        await setDate(page, dateToSetMonthAndYear, dateToSetDay, isPastDate)
    }else{
        await page.click(calendarLeftArrow)   
        await setDate(page, dateToSetMonthAndYear, dateToSetDay, isPastDate)
    }
}

export class DatepickerPageObject{
    async navigate(page){
        await page.goto(urlContactUs)
    }

    async setCurrentDateInDatepicker(page, selectedDate: string){
        let dateToSet = new Date ();
        let selectedDateInDatepicker = new Date(selectedDate)
        let dateToSetDay = dateToSet.toLocaleString('en', {day: "numeric"})    
        let dateToSetMonth = dateToSet.toLocaleString('en', {month: 'long'})
        let dateToSetYear = dateToSet.toLocaleString('en', {year: 'numeric'})
        let dateToSetMonthAndYear = dateToSetMonth +" " + dateToSetYear
        await setDate(page, dateToSetMonthAndYear, dateToSetDay, checkIfDateToSetIsInThePast(selectedDateInDatepicker, dateToSet))
    }

    async setDateInDatepicker(page, date: string){
        let currentDate = new Date()
        let dateToSet = new Date (date);
        let dateToSetDay = dateToSet.toLocaleString('en', {day: "numeric"})    
        let dateToSetMonth = dateToSet.toLocaleString('en', {month: 'long'})
        let dateToSetYear = dateToSet.toLocaleString('en', {year: 'numeric'})
        let dateToSetMonthAndYear = dateToSetMonth +" " + dateToSetYear
        await setDate(page, dateToSetMonthAndYear, dateToSetDay, checkIfDateToSetIsInThePast(currentDate, dateToSet))
    }

    async checkDateInDatepicker(page, date: string){
        date = date.toString().replace('/', '-')
        date = date.toString().replace('/', '-')
        await expect(page.locator(selectedDate)).toHaveValue(date);
    }
}

export const datepickerPageObject = new DatepickerPageObject()