const path = require("path");

const Peer = require("./peer");

module.exports = {
	Peer,

	WEB_DIR: path.join(__dirname + "../../../public/"),

	MAIN: {
		PORT: 7070,
	},

	DEBUG: {
		MAIN: "[ MAIN ] :: ",
		PEERS_MAP: "[ PEERS_MAP ] :: ",
		PEERS_MAP_HOST: "[ PEERS_MAP_HOST ] ::",
		PEERS_MAP_CLIENT: "[ PEERS_MAP_CLIENT ] ::",
	},
};
