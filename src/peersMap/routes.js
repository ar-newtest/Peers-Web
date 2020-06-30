const express = require("express");
const router = express.Router();
const path = require("path");

const { Peer, MAIN, DEBUG, WEB_DIR } = require("../config");

// @connect
router.get("/", (req, res) => {
	if (Peer.TYPE == "HOST") res.redirect("/connect/host");
	else if (Peer.TYPE == "CLIENT") res.redirect("/connect/client");
	else res.sendFile(path.join(WEB_DIR, "/peersMap/connect.html"));
});

// @connect/host
router.get("/host", (req, res) => {
	if (Peer.TYPE == "CLIENT") res.redirect("/connect/client");
	else {
		Peer.set_TYPE("HOST");
		res.sendFile(path.join(WEB_DIR, "/peersMap/host.html"));
	}
});

// @connect/client
router.get("/client", (req, res) => {
	if (Peer.TYPE == "HOST") res.redirect("/connect/host");
	else {
		Peer.set_TYPE("CLIENT");
		res.sendFile(path.join(WEB_DIR, "/peersMap/client.html"));
	}
});

// @connect/to/self
router.get("/to/self", (req, res) => {
	if (Peer.TYPE != "HOST") res.redirect("/connect");
	else {
		Peer.set_HOST(MAIN.NAME, Peer.SELF.IP, MAIN.PORT);
		res.status(200).send("Connected").end();
	}
});

// @connect/to?NAME=...&IP=...&PORT=...
router.get("/to", (req, res) => {
	let [NAME, IP, PORT] = [req.query.NAME, req.query.IP, req.query.PORT];

	if (!(NAME.trim() && IP && PORT))
		res.status(500).send("Something went wrong").end();

	Peer.set_HOST(NAME, IP, PORT);

	res.status(200).send("Connected").end();
});

module.exports = router;
