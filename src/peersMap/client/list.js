const { DEBUG } = require("../../config");

let list = [];

const add = (item, callback_isAdded) => {
	const exists = list.filter((peer) => {
		if (peer.Name === item.Name && peer.IP === item.IP) {
			return peer;
		}
	});

	if (exists.length === 0) {
		list.push(item);
		console.log(DEBUG.PEERS_MAP_HOST_LIST, "Added => ", item);
		callback_isAdded(true);
	} else callback_isAdded(false);
};

module.exports = {
	list,
	add,
};
