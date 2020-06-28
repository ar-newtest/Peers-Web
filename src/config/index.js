const Peer = require("./peer");

module.exports = {
	Peer,

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
