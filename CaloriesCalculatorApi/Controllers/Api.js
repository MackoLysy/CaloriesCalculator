var router = require("express").Router();
const auth = require('../middleware/Auth');
const Product = require('../models/ProductModel');
// router.use('/api', auth);

router.get('/api', function (req, res) {
    var product = new Product();
    res.status(200).json({ message: "Dziala!" });
});


module.exports = router