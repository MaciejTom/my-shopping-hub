const express = require("express");
const router = express.Router();

const {
    postMail
    
  } = require("../controller/emailControllers");

router.post("/add", postMail);

module.exports = router;