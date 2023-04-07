const fs = require("fs");
const players = require("./data");
const qs = require("querystring");

//FUNCTIONS

function getHOME(req, res) {
  fs.readFile("./files/players-form.html", (err, data) => {
	if(err) {
		res.setHeader("Content-type", "text/plain");
		res.statusCode = 500;
		res.end("Server has a problem");
	}
	else{
		res.setHeader("Content-type", "text/html");
		res.statusCode = 200;
		res.end(data);
	}
  })
}

//
function getHTML(req,res) {
	res.statusCode = 200;
	res.setHeader("Content-type", "text/html");
	res.write("<html><body><div>");
	res.write("<h1>Hello from Html!</h1>");
	res.write("</div></body></html>")
	 res.end();
}

//
function getTEXT(req,res) {
	res.statusCode = 200;
	res.setHeader("Content-type", "text/plain");
	res.write("Hello from TEXT");
	 res.end()
}

//
function postPLAYERS(req, res) {
	res.setHeader("content-type", "text/plain");

	if(req.headers["content-type"] === "application/x-www-form-urlencoded"){
		try {
			let player = "";
		req.on("data", (chunks) => player += chunks)

		req.on("end",() => {
			const playerForm = qs.parse(player);
			players.push(playerForm);
			
			res.setHeader("Content-type", "text/html");
			res.statusCode = 201;
			res.write("<h1>The player was added</h1>")
			res.write("<a href='/'>Submit one more player</a>")
			res.end();
		})
		} catch (error) {
			res.statusCode = 400;
			res.end("Invalid JSON")
		}
		
	}
	else if(req.headers["content-type"] === "application/json"){
	let player = "";
	
	req.on("data", (chunks) => player += chunks);

	req.on("end", ()=> {
		try{
		res.statusCode = 201;
		players.push(JSON.parse(player));
		res.end("Player was added");
		}	
		catch(err){
			res.statusCode = 400;
			res.end("Invalid JSON")
		}
	})
	}
	else{
		res.statusCode = 400;
		res.end("Data must be in the JSON or Form format")
	}


}

function getPLAYERS(req, res) {
	res.statusCode = 200;
	res.setHeader("Content-type", "application/json");
	 res.end(JSON.stringify(players));
}

//
function getERR(req, res) {
	res.statusCode = 404;
	res.setHeader("Content-type", "text/html");
	res.write("<h1>Page not found!</h1>")
	 res.end()
}

module.exports = {
	getHOME,
	getHTML,
	getTEXT,
	getPLAYERS,
	postPLAYERS,
	getERR
}