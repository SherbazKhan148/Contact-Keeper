const express = require("express");
const router = express.Router();

// @route 	POST api/users
// @desc 	Register a User
// @access	Public
router.post("/", (req, res) => {
    res.send("User Registered");
});

module.exports = router;
