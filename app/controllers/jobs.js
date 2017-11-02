const express = require('express');
const router = express.Router();

const reports = require('../models/reports');
const jobs = require('../models/jobs');

router.get('/',(req,res) => {
   jobs.getAllJobs((err, jobs)=> {
    if(err) {
      res.json({
      	message: `Failed to load all jobs. Error: ${err}`
      });
    }
    else {
      res.json({
      	data: jobs
      });

      res.end();  
		}   
  });
});

router.post('/', (req,res,next) => {
  let newReports = new reports({
    reports: req.body.reports
  });
  let newJob = new jobs({
    buildName: req.body.buildName,
    reportsId: newReports._id
  });
  jobs.addJob(newJob,(err, newJob) => {
    if(err) {
      res.json({message: `Failed to create a new job. Error: ${err}`});
    }
    else {
    	res.json({message: "Added successfully.", newJob});
      reports.addReport(newReports, (err, newReport) => {
        if(err) {
          res.json({message: `Failed to create a new report. Error: ${err}`});
        }
        else {
          res.json({message: "Added successfully.", newReport});
        }
      });
    }
  });
});

module.exports = router;