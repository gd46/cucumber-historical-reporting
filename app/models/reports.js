const mongoose = require('mongoose');

const ReportsSchema = mongoose.Schema({
    reports: {
        type: Array,
        required: true
    }
});

const Reports = module.exports = mongoose.model('Reports', ReportsSchema);

module.exports.getAllReports = (callback) => {
    Reports.find(callback);
}

module.exports.getReportsById = (id, callback) => {
    Reports.find({"_id": id}, callback);
};

module.exports.addReport = (newReport, callback) => {
    newReport.save(callback);
}