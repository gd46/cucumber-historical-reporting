const express = require('express');
const router = express.Router();

const jobsCtrl = require('../controllers/jobs');

router.get('/',(req,res) => {
  jobsCtrl.getAllJobs (req, res);
});

router.post('/', (req,res,next) => {
 jobsCtrl.postJobAndReportInfo(req, res);
});

module.exports = router;