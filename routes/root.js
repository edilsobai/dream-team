const express = require("express");
const router = express.Router()
const getRootHandler = require("../controllers/root")

router.get("/", getRootHandler)
module.exports = router;