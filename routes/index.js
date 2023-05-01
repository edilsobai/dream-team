const express = require("express");
const router = express.Router()
const getIndexHandler = require("../controllers/index")

router.get("/", getIndexHandler)

module.exports = router;