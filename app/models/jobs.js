const mongoose = require('mongoose');

const JobsSchema = mongoose.Schema({
    buildName: {
        type: String,
        required: true
    },
    reportsId: {
        type: String,
        required: true
    },
    creationDate: {
        type: String,
        required: true
    }
});

const Jobs = module.exports = mongoose.model('Jobs', JobsSchema);

module.exports.getAllJobs = (callback) => {
    Jobs.find(callback);
}

module.exports.addJob = (newJob, callback) => {
    newJob.save(callback);
}