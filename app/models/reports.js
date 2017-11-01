//Require mongoose package
const mongoose = require('mongoose');

//Define ReportsSchema
const ReportsSchema = mongoose.Schema({
    buildName: {
        type: String,
        required: true
    },
    // status: {
    //     type: String,
    //     required: true,
    //     enum: ['passed', 'failed']
    // },
    // percentagePassed: {
    //     type: Number,
    //     required: true
    // },
    reports: {
        type: Array,
        required: true
    }
});

const ReportsList = module.exports = mongoose.model('ReportsList', ReportsSchema);

//ReportsList.find() returns all the reports
module.exports.getAllReports = (callback) => {
    ReportsList.find(callback);
}

//newReport.save is used to insert the document into MongoDB
module.exports.addReport = (newReport, callback) => {
    newReport.save(callback);
}