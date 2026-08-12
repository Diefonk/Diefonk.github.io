function getUpdateLink(update) {
	let link = "<a href='";
	if (update.link) {
		link += update.link + "' target='_blank'>";
	}
	if (update.linkText) {
		link += update.linkText;
	} else if (update.id === 0) {
		let offset = 218;
		link += "https://www.homestuck.com/problemsleuth/";
		link += padPage(update.first, offset) + "' target='_blank'>Problem Sleuth pg. ";
		if (update.first === update.last) {
			link += padPage(update.first, offset);
		} else {
			link += padPage(update.first, offset) + "-" + padPage(update.last, offset);
		}
	} else if (update.id === 1) {
		let offset = 169;
		link += "https://www.homestuck.com/bardquest/";
		link += padPage(update.first, offset) + "' target='_blank'>Bard Quest pg. ";
		if (update.first === update.last) {
			link += padPage(update.first, offset);
		} else {
			link += padPage(update.first, offset) + "-" + padPage(update.last, offset);
		}
	} else if (update.id === 2) {
		link += "https://beyondcanon.com/story/";
		link += update.first + "' target='_blank'>Homestuck: Beyond Canon pg. ";
		if (update.first === update.last) {
			link += update.first;
		} else {
			link += update.first + "-" + update.last;
		}
	} else if (update.id === 3) {
		link += "https://beyondcanon.com/bonus/";
		link += update.first + "' target='_blank'>";
		link += "HS:BC Bonus: " + update.title;
	} else if (update.id === 4) {
		link += "https://www.hiveswap.com/hiveswap-act-";
		link += update.first + "' target='_blank'>";
		link += "HIVESWAP: Act " + update.first;
	} else if (update.id === 5) {
		link += "https://store.steampowered.com/app/";
		link += update.first + "' target='_blank'>";
		link += "Hiveswap Friendsim - Volume " + update.title;
	} else if (update.id === 6) {
		link += "https://store.steampowered.com/news/app/1144030/view/";
		link += update.first + "' target='_blank'>";
		link += "Pesterquest - Volume " + update.title;
	} else if (update.id === 7) {
		link += "https://www.homestuck.com/jailbreak/";
		link += padPage(update.first) + "' target='_blank'>Jailbreak pg. ";
		if (update.first === update.last) {
			link += padPage(update.first);
		} else {
			link += padPage(update.first) + "-" + padPage(update.last);
		}
	} else if (update.id === 8) {
		link += "https://www.homestuck.com/jesterquest/";
		link += padPage(update.first) + "' target='_blank'>Jester Quest pg. ";
		link += padPage(update.first) + "-" + padPage(update.last);
	} else if (update.id === 9) {
		link += "https://www.homestuck.com/psycholonials' target='_blank'>Psycholonials ch. " + update.first;
	} else if (update.id == 10) {
		link += "https://www.homestuck.com/old-secrets/ps";
		link += padPage(update.first) + "' target='_blank'>Fan-requested game command ";
		if (update.first === update.last) {
			link += update.first;
		} else {
			link += update.first + "-" + update.last;
		}
	} else if (update.id === 11) {
		link += "https://www.homestuck.com/sweetbroandhellajeff/" + update.first.padStart(3, "0");
		link += "' target='_blank'>Sweet Bro and Hella Jeff comic #";
		if (update.first === update.last) {
			link += update.first;
		} else {
			link += update.first + "-" + update.last;
		}
	} else if (update.id === 12) {
		link += "http://hs.hiveswap.com/paradoxspace/index.php?comic=" + update.first;
		link += "' target='_blank'>Paradox Space pg. ";
		if (update.first === update.last) {
			link += update.first;
		} else {
			link += update.first + "-" + update.last;
		}
	} else if (update.id === 13) {
		link += "https://discord.com/channels/1404836696909938820/1473830043846185124/";
		link += update.first + "' target='_blank'>Circus Break update " + update.title;
	} else {
		let offset = 1900;
		link += "https://www.homestuck.com/";
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
