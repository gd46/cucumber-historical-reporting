const express = require('express');
const router = express.Router();

const reports = require('../models/reports');

router.get('/details/:id', (req,res,next) => {
    let id = req.params.id;
    reports.getReportsById(id, (err, details) => {
      if(err) {
        res.json({message: `Failed to create a new job. Error: ${err}`});
      }
      else {
        res.json({
          data: details
        });
      }
    });
});

module.exports = router;