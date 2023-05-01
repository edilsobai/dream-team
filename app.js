const express = require("express");
const morgan = require("morgan");
const app = express();

//PORT
const PORT = 3000;

//routes
const getPlayersRouter = require("./routes/players");
const getIndexRouter = require("./routes/index");
const postPlayersRouter = require("./routes/players");
const patchPlayersRouter = require("./routes/players");

// set ejs
app.set("view engine", "ejs");

// logs info about request
app.use(morgan("tiny"))

//convert JSON to JS Object in POST request 
app.use(express.json());

//convert FORM data to JS Object in POST request 
app.use(express.urlencoded({extended: false}));


//GET main page
app.use("/", getIndexRouter);

// CREATE player
app.use("/players", postPlayersRouter);

// GET all players
app.use("/players", getPlayersRouter);

//Update player by NAME
app.use("/players/update", patchPlayersRouter);

// SERVER runes
app.listen(PORT, () => console.log(`running on port ${PORT}`));
