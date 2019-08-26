var router = require("express").Router();
const auth = require('../middleware/auth');

router.use('/api', auth);

router.get('/api', function (req, res) {
    console.log("Udalo mi sie zalogować!");
    res.status(200).json({ message: "Dziala!" });
});


module.exports = router