var router = require('express').Router();
const expressJwt = require("express-jwt");
router.use("/", expressJwt({ secret: process.env.JWTTOKEN }));

router.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ message: "auth error" });
});

module.exports = router;