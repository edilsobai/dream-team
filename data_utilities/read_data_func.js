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

module.exports = readData;