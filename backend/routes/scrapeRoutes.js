const express = require('express')
const scrapeController = require('../controller/scrape')

const router = express.Router()

router.route('/jobs').get(scrapeController.getJobs)

module.exports = router;
