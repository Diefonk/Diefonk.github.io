function init() {
	let dateNow = new Date();
	dateNow.setFullYear(dateNow.getFullYear() - 10);

	let latestUpdateIndex;
	for (let index = 0; index < log.length; index++) {
		let dateThen = new Date(dateNow);
		dateThen.setFullYear(Number(log[index].year));
		dateThen.setMonth(Number(log[index].month) - 1);
		dateThen.setDate(Number(log[index].day));
		if (dateThen > dateNow) {
			latestUpdateIndex = index - 1;
			break;
		}
		latestUpdateIndex = index;
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
	firstElement.href = "https://www.homestuck.com/story/" + aUpdate.first;
	document.getElementById(aID).appendChild(firstElement);

	let lineBreak = document.createElement("br");
	document.getElementById(aID).appendChild(lineBreak);

	let lastElement = document.createElement("a");
	lastElement.appendChild(document.createTextNode("Last page: " + aUpdate.last));
	lastElement.href = "https://www.homestuck.com/story/" + aUpdate.last;
	document.getElementById(aID).appendChild(lastElement);
}
