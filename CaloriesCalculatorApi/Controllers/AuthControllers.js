var jwt = require('jsonwebtoken');
var User = require('../models/UserModel');
var router = require("express").Router();
const { body, validationResult } = require('express-validator');


/**
 * Login
 * @param username
 * @param password
 * 
 */
router.use("/login", body('username').exists(), body('password').exists(), function (req, res, next) {
    var errors = validationResult(req);
    console.log("Validuje!");
    if (!errors.isEmpty()) {
        console.log('sa bledy!');
        return res.status(200).json({ errors: errors.array() });
    }
    next();
});

router.post("/login", async function (req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    var userToLogin = await user.authUser().catch(function (e) {
        console.log(e);
    });
    if (userToLogin) {
        console.log(userToLogin);
    }
    else {
        console.log("Nie ma usera!");
    }
    res.sendStatus(200);
});

module.exports = router;