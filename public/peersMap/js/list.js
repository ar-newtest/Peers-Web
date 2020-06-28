var socket = io.connect();

const list = document.getElementById("list");

socket.on("PM_LIST", (data) => {
	console.log(data);

	list.innerHTML = "";

	Object.values(data).forEach((item) => {
		const val = document.createElement("li");
		val.innerHTML = `<b> ${item.NAME} </b>  ${item.IP}`;
		list.appendChild(val);
	});
});
