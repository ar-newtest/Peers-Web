const host = require("./host");
const client = require("./client");

const { Peer, DEBUG } = require("../config");

const router = require("./routes");

const sampleList = [
	{ NAME: "Alpha", IP: "192.168.43.1" },
	{ NAME: "Beta", IP: "192.168.43.23" },
	{ NAME: "Gamma", IP: "192.168.43.96" },
];

const init = (io) => {
	io.on("connection", (socket) => {
		console.log(DEBUG.PEERS_MAP, "Connected");

		socket.emit("PM_LIST", sampleList);

		if (Peer.PEER_TYPE == "HOST") host.init();
		else if (Peer.PEER_TYPE == "CLIENT") client.init(socket);
	});
};

module.exports = {
	router,
	init,
};
