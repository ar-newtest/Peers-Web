const dgram = require("dgram");
const socket = dgram.createSocket({ type: "udp4", reuseAddr: true });

const IP = require("../../utils/ip");

const { DEBUG, PEERS_MAP, MAIN } = require("../../config");

const msg = Buffer.from(
	JSON.stringify({ NAME: MAIN.NAME, IP: IP(), PORT: MAIN.PORT })
);

const sendMsg = () => {
	socket.send(msg, PEERS_MAP.PORT, IP.BCAST_ADDR(), (err) => {
		if (err)
			return console.error(
				DEBUG.PEERS_MAP + "Unable to broadcast message",
				err
			);
		console.log(DEBUG.PEERS_MAP + "Broadcasting message => " + msg.toString());
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
