const greenButton = '#button1'
const urlContactUs = 'https://webdriveruniversity.com/Ajax-Loader/index.html'


export class AjaxLoaderPageObject{
    async navigate(page){
        await page.goto(urlContactUs)
    }

    async clickGreenButton(page){
        await page.click(greenButton)
    }
}

export const ajaxLoaderPageObject = new AjaxLoaderPageObject()