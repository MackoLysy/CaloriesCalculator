const router = require('express').Router();
var User = require('../models/UserModel');

var UserRepository = require("../Repositories/UserRepository");
var userRepo = new UserRepository();
/**
 * Create User
 */
router.post('/', async function (req, res) {
    console.log("PuttujeUsera!");
    var user = new User();
    user.username = "asdasdad";
    user.password = "admin";
    var result = await userRepo.insertUser(user).catch((e) => {
        console.log("Zjebalo sie!");
        console.log(e)
        res.sendStatus(200);
        return;
    });
    // userRepo.insertUser(user).then((r) => {
    //     console.log("udalo sie!");
    //     res.sendStatus(200);
    // }, (e) => {
    //     console.log("Zjebalo sie!");
    //     res.sendStatus(200);
    // });
});

/**
 * Get all users
 */
router.get('/', function (req, res) {

});


/**
 * Get user 
 * 
 * @param {id} userId
 */
router.get('/:id', function (req, res) {

});


/**
 * Delete user 
 * 
 * @param {id} userId
 */
router.delete('/:id', function (req, res) {

});

/**
 * Update user 
 * 
 * @param {id} userId
 */

router.put('/:id', function (req, res) {

});


module.exports = router;