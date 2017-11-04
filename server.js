const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const reports = require('./app/routes/reports');
const jobs = require('./app/routes/jobs');

const app = express();
const port = 3000;

mongoose.connect(config.database, {
	useMongoClient: true
});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
  res.send("Invalid page");
});

app.use('/api/jobs', jobs);
app.use('/api/reports', reports);

app.get('*', (req,res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});