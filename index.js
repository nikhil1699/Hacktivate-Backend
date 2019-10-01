
const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

let app = express();
let config = require('./config');
let cors= require('./utils/index').cors;
let apiRoutes = require("./routes/api-routes")
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub',{ useNewUrlParser: true });
const db = mongoose.connection;

const port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
if(config.enableCors) app.use(cors);
app.use('/api', apiRoutes)

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
