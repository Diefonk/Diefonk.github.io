function init() {
	const urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has("y") && urlParams.get("y") !== "") {
		document.getElementsByTagName("input")[2].value = urlParams.get("y");
	} else {
		document.getElementsByTagName("input")[2].value = 0;
	}
	if (urlParams.has("c") && urlParams.get("c") === "true") {
		document.getElementsByTagName("input")[1].checked = true;
	} else {
		document.getElementsByTagName("input")[0].checked = true;
	}

	if (document.getElementsByTagName("input")[2].value == 1) {
		document.getElementsByTagName("span")[0].innerHTML = "year";
	}

	let dateNow = new Date();
	dateNow.setFullYear(dateNow.getFullYear() - document.getElementsByTagName("input")[2].value);

	let logText = "";
	if (document.getElementsByTagName("input")[1].checked) {
		for (let index = 0; index < log.length; index++) {
			let dateThen = new Date(dateNow);
			updateToDate(log[index], dateThen);
			if (dateThen > dateNow) {
				break;
			}
			logText += log[index].year + "-" + log[index].month + "-" + log[index].day;
			logText += " - " + getUpdateLink(log[index]);
			logText += "<br>"
		}
	} else {
		for (let index = log.length - 1; index >= 0; index--) {
			let dateThen = new Date(dateNow);
			updateToDate(log[index], dateThen);
			if (dateThen > dateNow) {
				continue;
			}
			logText += log[index].year + "-" + log[index].month + "-" + log[index].day;
			logText += " - " + getUpdateLink(log[index]);
			logText += "<br>"
		}
	}
	document.getElementsByTagName("p")[1].innerHTML = logText;
}

function change() {
	let params = "y=" + document.getElementsByTagName("input")[2].value;
	params += "&c=" + document.getElementsByTagName("input")[1].checked;
	location.search = params;
}
