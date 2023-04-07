const http = require("http");
const {
	getHOME,
	getHTML,
	getTEXT,
	getPLAYERS,
	postPLAYERS,
	getERR
} = require("./handlers")
const PORT = 3000;

//SERVER
const server  = http.createServer((req, res) => {
	if(req.method === "GET" && req.url ==="/"){
		return getHOME(req, res)
	}
	if(req.method === "GET" &&  req.url == "/html"){
	return getHTML(req, res);
	}

	if(req.method === "GET" &&req.url === "/text"){
	return getTEXT(req, res);
	}

	if(req.method === "GET"	&& req.url === "/players"){
		return getPLAYERS(req, res);
	}
	if(req.method === "POST" && req.url === "/players"){
		return postPLAYERS(req, res);
	}

	return getERR(req, res)

})

server.listen(PORT, () => console.log(`Running on port ${PORT}`))