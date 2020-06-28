const DEBUG = "[ CONFIG ] :: ";

const Peer = (module.exports = {
	PEER_TYPE: "NULL",
	set_PEER_TYPE: (type) => {
		Peer.PEER_TYPE = type;
		console.log(DEBUG, "Peer Type is set to ", Peer.PEER_TYPE);
	},
});
