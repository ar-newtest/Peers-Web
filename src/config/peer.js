const IP = require("../utils/ip");
const DEBUG = "[ CONFIG ] :: ";

let SELF = {
	IP: IP(),
	BCAST_ADDR: IP.BCAST_ADDR(),
};
let TYPE = "NULL";
let HOST = {
	isSET: false,
	NAME: "",
	IP: "",
	PORT: 0,
};

const set_TYPE = (type) => {
	Peer.TYPE = type;
	console.log(DEBUG, "Peer Type is set to ", Peer.TYPE);
};

const set_HOST = (NAME, IP, PORT) => {
	HOST = { isSET: true, NAME, IP, PORT };
	console.log(DEBUG, "HOST is set to ", HOST);
};

const Peer = (module.exports = {
	SELF,

	TYPE,
	set_TYPE,

	HOST,
	set_HOST,
});
