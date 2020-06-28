const express = require("express");
const router = express.Router();
const path = require("path");

const { Peer, DEBUG } = require("../config");

router.get("/", (req, res) => {
	if (Peer.PEER_TYPE == "HOST") res.redirect("/connect/host");
	else if (Peer.PEER_TYPE == "CLIENT") res.redirect("/connect/client");
	else res.sendFile(path.join(__dirname, "../../public/peersMap/connect.html"));
});

router.get("/host", (req, res) => {
	if (Peer.PEER_TYPE == "CLIENT") res.redirect("/connect/client");
	else {
		Peer.set_PEER_TYPE("HOST");
		res.sendFile(path.join(__dirname, "../../public/peersMap/host.html"));
	}
});

router.get("/client", (req, res) => {
	if (Peer.PEER_TYPE == "HOST") res.redirect("/connect/host");
	else {
		Peer.set_PEER_TYPE("CLIENT");
		res.sendFile(path.join(__dirname, "../../public/peersMap/client.html"));
	}
});

module.exports = router;