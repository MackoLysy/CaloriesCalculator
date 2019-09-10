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
// router.use("/login", body('username').exists(), body('password').exists(), function(req, res, next) {
//     var errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(401).json({ errors: errors.array() });
//     }
//     next();
// });

router.post("/login", async function(req, res) {
    var user = new User();
    console.log(req.body);
    user.username = req.body.username;
    user.password = req.body.password;
    var userToLogin = await user.authUser().catch(function(e) {
        console.log(e);
    });
    if (userToLogin) {
        const token = jwt.sign(userToLogin, process.env.JWTTOKEN);
        return res.status(201).send({ success: true, user: userToLogin, token });
    } else {
        console.log("Nie ma usera!");
    }
    res.sendStatus(200);
});

module.exports = router;;