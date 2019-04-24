const puppeteer = require('puppeteer')

const main = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ]
    })

    const page = await browser.newPage()
    await page.goto('https://app.smarttbot.com', { waitUntil: 'networkidle0' })

    // check if #login-username is present
    console.assert(page.$("#login-username"))
    // check if #login-password is present
    console.assert(page.$("#login-password"))
    // check if #login-busson is present
    console.assert(page.$("#login-button"))
    await page.screenshot({ path: './screenshots/example.png' })
    console.log("Your test passed! :)");

    // Close connection
    await browser.close()
}

main()