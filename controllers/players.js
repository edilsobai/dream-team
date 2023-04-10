const readData = require("../common-funcs/read_data_func");
const writeData = require("../common-funcs/write_data_func");

async function getPlayersHandler(req, res) {
	const dataString = await readData();
	const dataJson = JSON.parse(dataString);
	console.log(dataJson);
	res.send(dataJson)
}

async function postPlayersHandler(req, res) {
		try {
		const reqBody = req.body;
		const dataString  = await readData();
		const dataJson = JSON.parse(dataString);
		dataJson.players.push({...reqBody});
		await writeData(JSON.stringify(dataJson))
		res.status(201).send(`<h1>Player was added</h1>
		<p>To retrieve information about available players, 
		you can send request to <b>http://localhost:3000/players.<b></p>
		<a href='/form'>Submit one more player</a>
		`)
	}
	catch(err) {
		console.log("Invalid JSON");
	}
}

module.exports = {getPlayersHandler, postPlayersHandler}