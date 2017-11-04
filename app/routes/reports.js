const express = require('express');
const router = express.Router();

const reportsCtrl = require('../controllers/reports');

router.get('/details/:id', (req,res,next) => {
    reportsCtrl.getReportsById(req, res);
});

module.exports = router;