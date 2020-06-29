const dgram = require("dgram");
const socket = dgram.createSocket({ type: "udp4", reuseAddr: true });

const IP = require("../../utils/ip");

const { Peer, DEBUG, PEERS_MAP } = require("../../config");

const bcast = () => {
	socket.bind(PEERS_MAP.PORT);

	socket.on("listening", () => {
		console.log(
			DEBUG.PEERS_MAP + "Peers Web Running on port " + socket.address().port
		);
		socket.setBroadcast(true);
		isRunning = true;
	});

	console.log(DEBUG.PEERS_MAP + "Listing to Multicast Messages");

	socket.on("message", function (message, rinfo) {
		console.info(
			DEBUG.PEERS_MAP +
				`Message from: ${rinfo.address}:${rinfo.port} - ${message}`
		);
	});
};

module.exports = bcast;
