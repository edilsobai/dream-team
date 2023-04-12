const express = require("express");
const morgan = require("morgan");
const app = express();
//PORT
const PORT = 3000;

// logs info about request
app.use(morgan("tiny"))
//convert JSON to JS Object in POST request 
app.use(express.json());
//convert FORM data to JS Object in POST request 
app.use(express.urlencoded({extended: false}));

//routes
const router = require("./routes/index");
app.use(router);


app.listen(PORT, () => console.log(`running on port ${PORT}`));