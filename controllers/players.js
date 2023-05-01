const knex = require("../db/knex");

// get all players
async function getPlayersHandler(req, res) {
	try{
	const allPlayers = await knex.select().from("players")
	res.render("players/all_players", {allPlayers})
	}
	catch(e) {
		res.send("error")
	}
}

// create player and inserting into database 
async function postPlayersHandler(req, res) {
	// it's function to create our player
	const createPlayer = async ({
		player_name,
		player_country,
		player_club,
		player_position
	}) => {
		try {
			const newPlayer = {
				player_name,
				player_country,
				player_club,
				player_position
			};

			const createdPlayer = await knex.into("players").insert(newPlayer);
			res.render("players/player_page", {player_name});
		} catch (err) {
			console.log(err);
			res.render("players/player_err")			
		}

	}
		
createPlayer(req.body);
	

}
// change player by name
async function patchPlayersHandler(req, res) {
	try{
	const newPlayer = req.body; 
	const currentPlayer = await knex("players")
	.where("player_name", "=",req.params.player_name)
	.update({...newPlayer})
	res.send(`Player ${req.params.player_name} was changed to ${newPlayer.player_name}`)
	}
	catch(e) {
		console.log(e)
		res.send("error")
	}
}

module.exports = {
	getPlayersHandler,
	postPlayersHandler,
	patchPlayersHandler};