function getUpdateLink(update) {
	let link = "<a href='https://";
	if (update.link) {
		link += update.link + "' target='_blank'>";
	}
	if (update.linkText) {
		link += update.linkText;
	} else if (update.id === 0) {
		link += "www.homestuck.com/problem-sleuth/";
		link += update.first + "' target='_blank'>Problem Sleuth pg. ";
		if (update.first === update.last) {
			link += update.first;
		} else {
			link += update.first + "-" + update.last;
		}
	} else if (update.id === 1) {
		link += "www.homestuck.com/bard-quest/";
		link += update.first + "' target='_blank'>Bard Quest pg. ";
		if (update.first === update.last) {
			link += update.first;
		} else {
			link += update.first + "-" + update.last;
		}
	} else if (update.id === 2) {
		link += "www.homestuck2.com/story/";
		link += update.first + "' target='_blank'>Homestuck^2 pg. ";
		if (update.first === update.last) {
			link += update.first;
		} else {
			link += update.first + "-" + update.last;
		}
	} else if (update.id === 3) {
		link += "www.homestuck2.com/bonus/";
		link += update.first + "' target='_blank'>";
		link += "HS^2 Bonus: " + update.title;
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
	} else {
		link += "www.homestuck.com/story/";
		link += update.first + "' target='_blank'>Homestuck pg. ";
		if (update.first === update.last) {
			link += update.first;
		} else {
			link += update.first + "-" + update.last;
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
