"use strict";

const os = require("os");
const ifaces = os.networkInterfaces();

const DEBUG = { IP: "[ IP ] : " };

var selectedIP = "";
var selectedBroadcastAddr = "";

// Populate IP List
var IPs = [];
Object.keys(ifaces).forEach(function (ifname) {
	ifaces[ifname].forEach(function (iface) {
		if ("IPv4" !== iface.family || iface.internal !== false) {
			// skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
			return;
		}
		console.log(DEBUG.IP + "IP Found -> " + ifname + "  " + iface.address);
		IPs.push({ IP: iface.address, NETMASK: iface.netmask });
	});
});

// Get Required IP
/*
    Priority     IP Types           Name Type
    
    Priority 1 : 192.168.0.0/16     192
    Priority 2 : 172.16.0.0/12      172
    Priority 3 : 10.0.0.0/8         10

*/
var selectedIPType = "";
var selectedNetmaskIP = "";
IPs.forEach((data) => {
	let ip = data.IP;
	if (ip.startsWith("192")) {
		if (selectedIPType !== "192") {
			selectedIP = ip;
			selectedNetmaskIP = data.NETMASK;
			selectedIPType = "192";
		}
	} else if (ip.startsWith("172")) {
		if (selectedIPType !== "192" && selectedIPType !== "172") {
			selectedIP = ip;
			selectedNetmaskIP = data.NETMASK;
			selectedIPType = "172";
		}
	} else if (ip.startsWith("10")) {
		if (
			selectedIPType !== "192" &&
			selectedIPType !== "172" &&
			selectedIPType !== "10"
		) {
			selectedIP = ip;
			selectedNetmaskIP = data.NETMASK;
			selectedIPType = "10";
		}
	}
});
console.log(DEBUG.IP + "Selected IP -> " + selectedIP);

// Construct Broadcast Addr
const addressBytes = selectedIP.split(".");
const netmaskBytes = selectedNetmaskIP.split(".");

const subnetBytes = netmaskBytes.map(
	(_, i) => addressBytes[i] & netmaskBytes[i]
);
selectedBroadcastAddr = subnetBytes
	.map((_, i) => subnetBytes[i] | (~netmaskBytes[i] + 256))
	.join(".");

console.log(
	DEBUG.IP + "Selected Broadcast Address -> " + selectedBroadcastAddr
);

// Exports
module.exports = () => selectedIP;
module.exports.BCAST_ADDR = () => selectedBroadcastAddr;
