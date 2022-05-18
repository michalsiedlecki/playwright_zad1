import { test } from '@playwright/test';
import  { datepickerPageObject } from "../page_object/datepickerPageObject";
import * as datepickerTestdata from "../data/datepicker.json"

test.beforeEach(async ({ page }) => {
    await datepickerPageObject.navigate(page)
    });
  
  test.describe('Tests for Datepicker', () => {
    test.only('Check Datepicker', async ({ page }) => {
        for (var i = 0; i< datepickerTestdata.dates.length; i++){
            await datepickerPageObject.setDateInDatepicker(page, datepickerTestdata.dates[i])
            await datepickerPageObject.checkDateInDatepicker(page, datepickerTestdata.dates[i])
            await datepickerPageObject.setCurrentDateInDatepicker(page, datepickerTestdata.dates[i])
          }
    })
})