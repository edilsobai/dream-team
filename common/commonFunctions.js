const fs = require("fs/promises");

async function readData(){ 
 	 return fs.readFile("./data/players.txt", "utf-8", (err,data) => {
		if(err) {
			console.log(err);
		}
		else {
			return data;
		}
	 })
}

function writeData (content) {
	return fs.writeFile("./data/players.txt", content, (err) => {
		console.log(err);
	})
}


module.exports = { readData, writeData }