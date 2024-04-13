const puppeteer = require('puppeteer-core')
const dotenv = require('dotenv')
dotenv.config()

const TOKEN = process.env.TOKEN
const BROWSERLESS_PORT = process.env.BROWSERLESS_PORT
const browserWSEndpoint = `ws://localhost:${BROWSERLESS_PORT}?token=${TOKEN}`;

const jobTitles = ['Software+Engineer', 'UI+Designer', 'Hardware+Engineer'];
const searchQuery = 'Software+Engineer'
const location = ''

const getJobs =  async (req, res) => {
    try{
        const browser = await puppeteer.connect({
            browserWSEndpoint: browserWSEndpoint
        })
          const url = `https://www.indeed.com/jobs?q=${searchQuery}&l=${location}`

          const page = await browser.newPage()
        
          await page.goto(url);
          await page.waitForTimeout(2000);

          const jobTitles = await page.$$eval('.jobTitle', elements => elements.map(el => el.textContent.trim()))
          const companyNamesAndLocation = await page.$$eval('.company_location', elements => elements.map(el => el.textContent.trim()))

          return res.end(data, 'binary')
    }catch(error){
        if (!res.headersSent) {
            res.status(400).send(error.message)
          }
    }finally{
        browser && browser.close()
    }
}

export default getJobs