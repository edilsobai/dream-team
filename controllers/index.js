async function getIndexHandler(req, res) {
	try {
		res.render("index")
  } catch (error) {
	res.status(404).send("<h1>Page not found!</h1>")
  }
}

module.exports = getIndexHandler;
