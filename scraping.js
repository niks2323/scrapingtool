const puppeteer = require('puppeteer');  // wep scraping tool

(async () => {
    const browser = await puppeteer.launch( {headless:false})  // Wir setzen die Option headless auf false, damit wir den Browser sichtbar machen können.
    const page = await browser.newPage()
    await page.goto ('https://www.focus.de/politik/')
 
    let arr = await page.evaluate(() => {

        let text =  Array.from (document.querySelectorAll ('#content'), el => el.innerText)
        return text

       
    })

    console.log(arr)
        
    await browser.close()

})()