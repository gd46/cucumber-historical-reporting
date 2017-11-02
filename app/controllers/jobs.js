const express = require('express');
const router = express.Router();
const moment = require('moment');

const reports = require('../models/reports');
const jobs = require('../models/jobs');

router.get('/',(req,res) => {
   jobs.getAllJobs((err, jobs)=> {
    if(err) {
      return res.json({
      	message: `Failed to load all jobs. Error: ${err}`
      });
    }
    else {
      return res.json({
      	data: jobs
      });
		}   
  });
});

router.post('/', (req,res,next) => {
  let newReports = new reports({
    reports: req.body.reports
  });
  let newJob = new jobs({
    buildName: req.body.buildName,
    reportsId: newReports._id,
    creationDate: moment().format('YYYY-MM-DD')
  });
  jobs.addJob(newJob,(err, newJob) => {
    if(err) {
      return res.json({message: `Failed to create a new job. Error: ${err}`});
    }
    else {
      reports.addReport(newReports, (err, newReport) => {
        if(err) {
          return res.json({message: `Failed to create a new report. Error: ${err}`});
        }
        else {
          return res.json({
            messages: [
              {
                message: 'Added new job successfully',
                value: newJob
              },
              {
                message: 'Added new report successfully',
                value: newReport
              }
            ]
          });
        }
      });
    }
  });
});

module.exports = router;