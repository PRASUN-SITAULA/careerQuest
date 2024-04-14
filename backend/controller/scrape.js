const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const dotenv = require('dotenv')
dotenv.config()

const TOKEN = process.env.TOKEN
const BROWSERLESS_PORT = process.env.BROWSERLESS_PORT
const browserWSEndpoint = `ws://localhost:${BROWSERLESS_PORT}?token=${TOKEN}`;

const jobTitles = ['Software+Engineer', 'UI+Designer', 'Hardware+Engineer'];


  //       // const browser = await puppeteer.connect({
  //       //     browserWSEndpoint: browserWSEndpoint
  //       // })
const scrapeJobs = async (query) => {
  const browser = await puppeteer.launch();
  const url = `https://www.indeed.com/jobs?q=${query}`
  const page = await browser.newPage()
  await page.goto(url)
  await page.waitForSelector('.job_seen_beacon')

  const newJobs = await page.evaluate(() => {
    const jobsData = Array.from(document.querySelectorAll('.job_seen_beacon'));
    return jobsData.map(job => {
        const title = job.querySelector('.jobTitle a').innerText || 'N/A';
        const company_name = job.querySelector('.company_location div span').innerText || 'N/A';
        const location = job.querySelector('.company_location div div').innerText || 'N/A';
        const joblink = job.querySelector('.jobTitle a').href || 'N/A';
        const description = Array.from(job.querySelectorAll('.heading6 ul li')).map(li => li.innerText).join('\n') || 'N/A';

        return { title, company_name, location, joblink, description };
    })
  })
  await browser.close();
  return newJobs
}
        
exports.getJobs =  async (req, res) => {
  try {
    const allJobs = [];
    for (const title of jobTitles) {
      const jobs = await scrapeJobs(title);
      allJobs.push(jobs);
    }
    // res.status(200).json({
    //   status: "success",
    //   data: newJobs
    // });
    console.log(allJobs)
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
