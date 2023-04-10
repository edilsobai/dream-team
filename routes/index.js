const express = require("express");
const router = express.Router()

const getPlayersRouter = require("./players");
const getRootRouter = require("./root");
const postPlayersRouter = require("./players");


router.use("/players", postPlayersRouter);

router.use("/players", getPlayersRouter);

router.use("/form", getRootRouter);

module.exports = router;