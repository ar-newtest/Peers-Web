const List = require("./list");
const bcast = require("./bcast");

const init = (socket) => {
	bcast((item) =>
		List.add(item, (isAdded) =>
			isAdded ? socket.emit("PM_LIST", List.list) : null
		)
	);
};

module.exports = {
	init,
};
