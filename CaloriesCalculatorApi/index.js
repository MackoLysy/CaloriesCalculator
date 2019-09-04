const express = require('express');
require("dotenv").config();
var bodyParser = require('body-parser');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthControllers');
const ApiController = require('./controllers/Api');
var importer = require('./import/importer');
const createTables = require('./utils/createTable');
const app = express();
const port = 8080;

createTables.then((r) => {
    console.log('skonczylem dodawac tabele');
    importer();
}).catch((e) => { 
    console.log(e);
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', UserController);
app.use('/auth', AuthController);
app.use('/', ApiController);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))