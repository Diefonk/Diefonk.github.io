function init() {
	let d = new Date();
	let year = d.getFullYear();
	year -= 10;
	let month = d.getMonth();
	let day = d.getDate();

	let latestUpdateIndex;
	for (let index = 0; index < log.length; index++) {
		latestUpdateIndex = index;
		if (year > log[index].year) {
			continue;
		} else if (month > log[index].month) {
			continue;
		} else if (day > log[index].day) {
			continue;
		}
		break;
	}

	addUpdate(log[latestUpdateIndex], "latest");

	if (latestUpdateIndex < log.length - 1) {
		addUpdate(log[latestUpdateIndex + 1], "next");
	}
}

function addUpdate(aUpdate, aID) {
	let date = aUpdate.year + "-" + aUpdate.month + "-" + aUpdate.day;
	let dateElement = document.createElement("h4");
	dateElement.appendChild(document.createTextNode(date));
	document.getElementById(aID).appendChild(dateElement);

	let firstElement = document.createElement("a");
	firstElement.appendChild(document.createTextNode("First page: " + aUpdate.first));
	firstElement.href = "https://homestuck.com/story/" + aUpdate.first;
	document.getElementById(aID).appendChild(firstElement);

	let lineBreak = document.createElement("br");
	document.getElementById(aID).appendChild(lineBreak);

	let lastElement = document.createElement("a");
	lastElement.appendChild(document.createTextNode("Last page: " + aUpdate.last));
	lastElement.href = "https://homestuck.com/story/" + aUpdate.last;
	document.getElementById(aID).appendChild(lastElement);
}
