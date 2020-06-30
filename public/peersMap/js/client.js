var socket = io.connect();

const list = document.getElementById("list");

socket.on("PM_LIST", (data) => {
	console.log(data);

	list.innerHTML = "";

	Object.values(data).forEach((item) => {
		let id = item.IP + ":" + item.PORT.toString();
		const val = document.createElement("li");
		val.id = id;
		val.innerHTML = `<a href="/connect/to?NAME=${item.NAME}&IP=${item.IP}&PORT=${item.PORT}"><b> ${item.NAME} </b>  ${item.IP} : ${item.PORT} </a>`;
		list.appendChild(val);
	});
});
