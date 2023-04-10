const fs = require('fs');
function writeData (content) {
	return fs.writeFile("./data/players.txt", content, (err) => {
		if(err){
			console.log("error from write file", err);
		}	
	})
}


module.exports =  writeData;