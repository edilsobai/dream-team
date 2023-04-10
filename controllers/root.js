const fs = require("fs")
async function getRootHandler(req, res) {
	try {
	 await fs.readFile("./files/index.html", (err, data) => {
		if(err){
			res.status(500).send("Server has a problem!");
		}
		else {
			res.status(200).type(".html").send(data)
		}
	})	
  } catch (error) {
	console.log(error)
	res.status(404).send("<h1>Page not found!</h1>")
  }
}

module.exports = getRootHandler;
