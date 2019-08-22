const express = require('express');
var bodyParser = require('body-parser');
const UserController = require('./Controllers/UserController');
const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', UserController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))