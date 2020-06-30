const path = require("path");

const port = process.argv[2] ? process.argv[2] : 7070;

const Peer = require("./peer");

module.exports = {
	Peer,

	WEB_DIR: path.join(__dirname + "../../../public/"),

	MAIN: {
		PORT: port,
		NAME: "Aman",
	},

	PEERS_MAP: {
		PORT: 20000,
	},

	DEBUG: {
		MAIN: "[ MAIN ] :: ",
		PEERS_MAP: "[ PEERS_MAP ] :: ",
		PEERS_MAP_ROUTES: "[ PEERS_MAP_ROUTES ] :: ",
		PEERS_MAP_HOST: "[ PEERS_MAP_HOST ] ::",
		PEERS_MAP_CLIENT: "[ PEERS_MAP_CLIENT ] ::",
		PEERS_MAP_HOST_LIST: "[ PEERS_MAP_HOST_LIST ] ::",
	},
};
