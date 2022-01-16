const express = require("express");
const router = express.Router();

const {
    postMail
    
  } = require("../controller/emailControllers");

//@desc POST email addres on db
//@route GET /api/emails
//@access Public

router.post("/add", postMail);

module.exports = router;