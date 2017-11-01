//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();

const reportslist = require('../models/reports');

//GET HTTP method to /reports
router.get('/',(req,res) => {
   reportslist.getAllReports((err, reports)=> {
    if(err) {
      res.json({
      	message: `Failed to load all reports. Error: ${err}`
      });
    }
    else {
      // res.write(JSON.stringify({
      // 	data: reports
      // }, null, 2));
      res.json({
      	data: reports
      });

      res.end();  
		}   
  });
});

//POST HTTP method to /reports

router.post('/', (req,res,next) => {
  let newReport = new reportslist({
    buildName: req.body.buildName,
    reports: req.body.reports
  });
  reportslist.addReport(newReport,(err, report) => {
    if(err) {
      res.json({message: `Failed to create a new report. Error: ${err}`});
    }
    else {
    	res.json({message: "Added successfully.", newReport});
    }
  });
});

//GET HTTP method to /reports to get the reports for a specific test run. Here, we pass in a params which is the object id.
router.get('/:id', (req,res,next)=> {
    res.send("GET ID");

})

module.exports = router;