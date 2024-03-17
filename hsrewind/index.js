function init() {
	const urlParams = new URLSearchParams(window.location.search);
	if (urlParams.has("y") && urlParams.get("y") !== "") {
		document.getElementsByTagName("input")[0].value = urlParams.get("y");
	} else {
		document.getElementsByTagName("input")[0].value = 10;
	}

	if (document.getElementsByTagName("input")[0].value == 1) {
		document.getElementsByTagName("span")[1].innerHTML = "year";
	}

	let dateNow = new Date();
	dateNow.setFullYear(dateNow.getFullYear() - document.getElementsByTagName("input")[0].value);

	let date413 = new Date(dateNow);
	date413.setFullYear(2009);
	date413.setMonth(3);
	date413.setDate(13);
	if (dateNow < date413) {
		document.getElementsByTagName("span")[0].innerHTML = "MS Paint Adventures";
	}

	let latestUpdateIndex;
	for (let index = 0; index < log.length; index++) {
		let dateThen = new Date(dateNow);
		updateToDate(log[index], dateThen);
		if (dateThen > dateNow) {
			latestUpdateIndex = index - 1;
			break;
		}
		latestUpdateIndex = index;
	}
	let update = log[latestUpdateIndex];

	if (latestUpdateIndex < 0) {
		let text = "A young reader sits in front of their computer, eagerly awaiting the start of MS Paint Adventures.";
		text += " Today is the " + dateToText(dateNow, true) + ".";
		let firstDate = new Date();
		updateToDate(log[0], firstDate);
		text += "<br><br>They will wait until the " + dateToText(firstDate, dateNow.getFullYear() !== firstDate.getFullYear()) + ".";
		document.getElementsByTagName("p")[0].innerHTML = text;
		document.getElementsByTagName("h3")[0].style.display = "none";
		return;
	}

	let text = "A young reader sits in front of their computer. It just so happens that today";
	let lastDate = new Date();
	updateToDate(update, lastDate);
	let updateText = getUpdateText(update);
	if (dateNow.getFullYear() === lastDate.getFullYear() &&
		dateNow.getMonth() === lastDate.getMonth() &&
		dateNow.getDate() === lastDate.getDate()) {
		text += ", the " + dateToText(dateNow, true) + ", there was " + updateText + ".";
	} else {
		text += " is the " + dateToText(dateNow, true);
		text += ". There was " + updateText + " on the ";
		text += dateToText(lastDate, dateNow.getFullYear() !== lastDate.getFullYear()) + ".";
	}
	if (latestUpdateIndex < log.length - 1) {
		let nextDate = new Date();
		updateToDate(log[latestUpdateIndex + 1], nextDate);
		text += "<br><br>Next update will be on the ";
		text += dateToText(nextDate, dateNow.getFullYear() !== nextDate.getFullYear()) + ".";
	}
	document.getElementsByTagName("p")[0].innerHTML = text;

	let link = "&gt; ";
	if (update.firstLink) {
		let fakeUpdate = {};
		fakeUpdate.link = update.firstLink;
		fakeUpdate.linkText = update.firstLinkText;
		link += getUpdateLink(fakeUpdate);
		link += "<br>&gt; ";
	}
	link += getUpdateLink(update)
	document.getElementsByTagName("h3")[0].innerHTML = link;
}

function dateToText(date, includeYear) {
	let text = date.getDate().toString();
	switch (date.getDate()) {
		case 1:
		case 21:
		case 31:
			text += "st";
			break;
		case 2:
		case 22:
			text += "nd";
			break;
		case 3:
		case 23:
			text += "rd";
			break;
		default:
			text += "th";
			break;
	}
	text += " of ";
	switch (date.getMonth()) {
		case 0:
			text += "January";
			break;
		case 1:
			text += "February";
			break;
		case 2:
			text += "March";
			break;
		case 3:
			text += "April";
			break;
		case 4:
			text += "May";
			break;
		case 5:
			text += "June";
			break;
		case 6:
			text += "July";
			break;
		case 7:
			text += "August";
			break;
		case 8:
			text += "September";
			break;
		case 9:
			text += "October";
			break;
		case 10:
			text += "November";
			break;
		case 11:
			text += "December";
			break;
		default:
			break;
	}
	if (includeYear) {
		text += ", " + date.getFullYear();
	}
	return text;
}

function getUpdateText(update) {
	if (update.text) {
		return update.text;
	} else if (update.id === 0) {
		return "a Problem Sleuth update";
	} else if (update.id === 1) {
		return "a Bard Quest update";
	} else if (update.id === 2) {
		return "a Homestuck: Beyond Canon update";
	} else if (update.id === 3) {
		return "a HS:BC Bonus update";
	} else if (update.id === 4) {
		return "a HIVESWAP release";
	} else if (update.id === 5) {
		return "a Hiveswap Friendsim update";
	} else if (update.id === 6) {
		return "a Pesterquest update";
	} else {
		return "a Homestuck update";
	}
}

function changeYear() {
	location.search = "y=" + document.getElementsByTagName("input")[0].value;
}
