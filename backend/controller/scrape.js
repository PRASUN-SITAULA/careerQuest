const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const dotenv = require('dotenv')
dotenv.config()

const TOKEN = process.env.TOKEN
const BROWSERLESS_PORT = process.env.BROWSERLESS_PORT
const browserWSEndpoint = `ws://localhost:${BROWSERLESS_PORT}?token=${TOKEN}`;

const jobTitles = ['Software+Engineer', 'UI+Designer', 'Hardware+Engineer'];
const searchQuery = 'Software+Engineer'
const location = ''

exports.getJobs =  async (req, res) => {
    try{

      const browser = await puppeteer.launch();
  //       // const browser = await puppeteer.connect({
  //       //     browserWSEndpoint: browserWSEndpoint
  //       // })
      const url = `https://www.indeed.com/jobs?q=Software+Engineer`
      const page = await browser.newPage()
      await page.goto(url)

      await page.waitForSelector('.job_seen_beacon')
 
      const newJobs = await page.evaluate(() => {
        const jobCards = Array.from(document.querySelectorAll('.job_seen_beacon'));
        console.log(jobCards)
        return jobCards.map(card => {
            // for each job find titile, location, joblink, publish date, description
            const title = card.querySelector('.jobTitle a').innerText || 'N/A';
            const company_name = card.querySelector('.company_location div span').innerText || 'N/A';
            const location = card.querySelector('.company_location div div').innerText || 'N/A';
            const joblink = card.querySelector('.jobTitle a').href || 'N/A';
            // const publishedDate = card.querySelector('.date').innerText || 'N/A';
            const description = Array.from(card.querySelectorAll('.heading6 ul li')).map(li => li.innerText).join('\n') || 'N/A';

            return { title, company_name, location, joblink, description };
        });
    });
    console.log(newJobs)
      await browser.close()
          
    }catch(error){
        console.log(error)
        if (!res.headersSent) {
            res.status(400).send(error.message)
          }
    }
}
