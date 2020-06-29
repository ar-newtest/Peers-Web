const dgram = require("dgram");
const socket = dgram.createSocket({ type: "udp4", reuseAddr: true });

const IP = require("../../utils/ip");

const { DEBUG, PEERS_MAP } = require("../../config");

const msg = Buffer.from(JSON.stringify({ Name: "Aman", IP: IP() }));

const sendMsg = () => {
	socket.send(msg, PEERS_MAP.PORT, IP.BCAST_ADDR(), (err) => {
		if (err)
			return console.error(
				DEBUG.PEERS_MAP + "Unable to multicast message",
				err
			);
		console.log(DEBUG.PEERS_MAP + "Multicasting message");
	});
};

const bcast = () => {
	socket.bind(PEERS_MAP.PORT);

	socket.on("listening", () => {
		console.log(
			DEBUG.PEERS_MAP + "Peers Web Running on port " + socket.address().port
		);
		socket.setBroadcast(true);
		isRunning = true;
	});

	setInterval(sendMsg, 1000);
};

module.exports = bcast;
