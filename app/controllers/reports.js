const reports = require('../models/reports');

function getReportsById (req, res) {
	let id = req.params.id;
  reports.getReportsById(id, (err, details) => {
    if(err) {
      return res.json({message: `Failed to create a new job. Error: ${err}`});
    }
    else {
      return res.json({
        data: details
      });
    }
  });
}

module.exports = {
	getReportsById: getReportsById
}