const puppeteer = require('puppeteer-core')
const dotenv = require('dotenv')
dotenv.config()

const TOKEN = process.env.TOKEN
const BROWSERLESS_PORT = process.env.BROWSERLESS_PORT
const browserWSEndpoint = `ws://localhost:${BROWSERLESS_PORT}?token=${TOKEN}`;

const getJobs =  async (req, res) => {
    try{
        const browser = await puppeteer.connect({
            browserWSEndpoint: browserWSEndpoint
          })
          const page = await browser.newPage()
        
          await page.goto('http://www.example.com/')
          const data = await page.screenshot()
          browser.close()
        
          return res.end(data, 'binary')
    }catch(error){
        if (!res.headersSent) {
            res.status(400).send(error.message)
          }
    }finally{
        browser && browser.close()
    }
}