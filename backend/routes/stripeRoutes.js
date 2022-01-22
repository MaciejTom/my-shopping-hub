const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_KEY)

const {
    stripeFunction    
  } = require("../controller/stripeControllers");

router.post("/", stripeFunction);

module.exports = router;