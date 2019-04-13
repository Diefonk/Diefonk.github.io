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
	let date = log[latestUpdateIndex].year + "-" + log[latestUpdateIndex].month + "-" + log[latestUpdateIndex].day;
	let p = document.createElement("h4");
	p.appendChild(document.createTextNode(date));
	document.getElementById("latest").appendChild(p);
	let a = document.createElement("a");
	a.appendChild(document.createTextNode("First page: " + log[latestUpdateIndex].first));
	a.href = "https://homestuck.com/story/" + log[latestUpdateIndex].first;
	document.getElementById("latest").appendChild(a);
	let br = document.createElement("br");
	document.getElementById("latest").appendChild(br);
	a = document.createElement("a");
	a.appendChild(document.createTextNode("Last page: " + log[latestUpdateIndex].last));
	a.href = "https://homestuck.com/story/" + log[latestUpdateIndex].last;
	document.getElementById("latest").appendChild(a);
}
