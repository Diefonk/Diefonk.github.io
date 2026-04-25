function getUpdateLink(update) {
	let link = "<a href='https://";
	if (update.link) {
		link += update.link + "' target='_blank'>";
	}
	if (update.linkText) {
		link += update.linkText;
	} else if (update.id === 0) {
		let offset = 218;
		link += "www.homestuck.com/problemsleuth/";
		link += padPage(update.first, offset) + "' target='_blank'>Problem Sleuth pg. ";
		if (update.first === update.last) {
			link += padPage(update.first, offset);
		} else {
			link += padPage(update.first, offset) + "-" + padPage(update.last, offset);
		}
	} else if (update.id === 1) {
		let offset = 169;
		link += "www.homestuck.com/bardquest/";
		link += padPage(update.first, offset) + "' target='_blank'>Bard Quest pg. ";
		if (update.first === update.last) {
			link += padPage(update.first, offset);
		} else {
			link += padPage(update.first, offset) + "-" + padPage(update.last, offset);
		}
	} else if (update.id === 2) {
		link += "beyondcanon.com/story/";
		link += update.first + "' target='_blank'>Homestuck: Beyond Canon pg. ";
		if (update.first === update.last) {
			link += update.first;
		} else {
			link += update.first + "-" + update.last;
		}
	} else if (update.id === 3) {
		link += "beyondcanon.com/bonus/";
		link += update.first + "' target='_blank'>";
		link += "HS:BC Bonus: " + update.title;
	} else if (update.id === 4) {
		link += "www.hiveswap.com/hiveswap-act-";
		link += update.first + "' target='_blank'>";
		link += "HIVESWAP: Act " + update.first;
	} else if (update.id === 5) {
		link += "store.steampowered.com/app/";
		link += update.first + "' target='_blank'>";
		link += "Hiveswap Friendsim - Volume " + update.title;
	} else if (update.id === 6) {
		link += "store.steampowered.com/news/app/1144030/view/";
		link += update.first + "' target='_blank'>";
		link += "Pesterquest - Volume " + update.title;
	} else if (update.id === 7) {
		link += "www.homestuck.com/jailbreak/";
		link += padPage(update.first) + "' target='_blank'>Jailbreak pg. ";
		if (update.first === update.last) {
			link += padPage(update.first);
		} else {
			link += padPage(update.first) + "-" + padPage(update.last);
		}
	} else if (update.id === 8) {
		link += "www.homestuck.com/jesterquest/";
		link += padPage(update.first) + "' target='_blank'>Jester Quest pg. ";
		link += padPage(update.first) + "-" + padPage(update.last);
	} else if (update.id === 9) {
		link += "www.homestuck.com/psycholonials' target='_blank'>Psycholonials chapter " + update.first;
	} else {
		let offset = 1900;
		link += "www.homestuck.com/";
		link += padPage(update.first, offset) + "' target='_blank'>Homestuck pg. ";
		if (update.first === update.last) {
			link += padPage(update.first, offset);
		} else {
			link += padPage(update.first, offset) + "-" + padPage(update.last, offset);
		}
	}
	link += "</a>";
	return link;
}

function updateToDate(update, date) {
	date.setFullYear(Number(update.year));
	date.setMonth(Number(update.month) - 1);
	date.setDate(Number(update.day));
}

function padPage(pageNumber, offset = 0) {
	return (Number.parseInt(pageNumber) + offset).toString().padStart(6, "0");
}
