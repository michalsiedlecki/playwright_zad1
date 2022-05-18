import {test} from '@playwright/test';
import  { ajaxLoaderPageObject } from "../page_object/ajaxLoaderPageObject";


test.beforeEach(async ({ page }) => {
    await ajaxLoaderPageObject.navigate(page)
})

test.describe('Tests for Ajax-loader', () => {
    test('Check Ajax-loader', async({ page }) => {
        await ajaxLoaderPageObject.clickGreenButton(page)
    })
})