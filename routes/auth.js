const express = require("express");
const router = express.Router();

// @route 	GET api/auth
// @desc 	Get LoggedIn User
// @access	Private
router.get("/", (req, res) => {
    res.send("Get LoggedIn User");
});

// @route 	POST api/auth
// @desc 	Auth user and Get Token
// @access	Public
router.post("/", (req, res) => {
    res.send("LogIn User");
});

module.exports = router;
