// Set Up Express and Socket
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

const path = require("path");

// Import Config File
const { Peer, MAIN, DEBUG } = require("./config");

// Start Server
server.listen(MAIN.PORT, () =>
	console.log(DEBUG.MAIN, "Server listening at port", MAIN.PORT)
);

// Set UI Directory
app.set("views", "../public/");

// Peers Map Module
const peersMap = require("./peersMap");
app.use("/connect", peersMap.router);

app.get("/", (req, res) => {
	if (Peer.PEER_TYPE == "NULL") res.redirect("/connect");
	else if (Peer.PEER_TYPE == "HOST") res.redirect("/connect/host");
	else res.redirect("/connect/client");
});
