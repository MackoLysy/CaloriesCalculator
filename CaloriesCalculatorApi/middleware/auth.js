var router = require('express').Router();
const expressJwt = require("express-jwt");

router.use("/", expressJwt({ secret: process.env.JWTTOKEN }));

router.use((err, req, res, next) => {
    console.log(req.body);
    console.log(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: "auth error" });
});

module.exports = router;