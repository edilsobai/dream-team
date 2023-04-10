const express = require("express");
const router = express.Router();
const {getPlayersHandler, postPlayersHandler} = require("../controllers/players")

//get all players
router.get("/", getPlayersHandler)

//post players
router.post("/", postPlayersHandler)

module.exports = router;