function enter(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		append("cmd> " + document.getElementById("in").value);
		switch(document.getElementById("in").value) {
			case "help": appendA(help); break;
			case "gui": window.open("index.html", "_self"); break;
			case "code": appendA(code); break;
			case "processing": window.open("https://github.com/Diefonk/processing-projects", "_blank"); break;
			case "animecampaign": window.open("http://animecampaign.tk/", "_blank"); break;
			case "clear": location.reload(); break;
			case "make me a sandwich": append("What? Make it yourself."); break;
			case "sudo make me a sandwich": append("Okay."); break;
			case "xyzzy": append("Nothing happens"); break;
			default: append("Command not found"); break;
		}
		document.getElementById("in").value = "";
	}
}
function append(text) {
	var out = document.createElement("P");
	var t = document.createTextNode(text);
	out.appendChild(t);
	document.getElementById("out").appendChild(out);
}
function appendA(text) {
	var out = document.createElement("P");
	var t = document.createTextNode(text[0]);
	out.appendChild(t);
	for (var i = 1; i < text.length; i++) {
		var br = document.createElement("br");
		out.appendChild(br);
		t = document.createTextNode(text[i]);
		out.appendChild(t);
	}
	document.getElementById("out").appendChild(out);
}
function inFocus() {
	document.getElementById("in").focus();
}

var help = [
	"gui - Opens a graphical version of this website",
	"all - Returns all lists of things I've made",
	"code - Returns a list of things I've coded",
	//"games - Returns a list of games I've made",
	//"stories - Returns a list of stories I've written",
	"other - Returns a list of other things I've made",
	"clear - Clears all commands",
	"help - Returns this list"
];

var code = [
	"*Processing Projects (type 'processing' to open):",
	"Various projects made in Processing.",
	"Everything is to varying degrees completely useless.",
	"*animecampaign.tk (type 'animecampaign' to open):",
	"An unofficial collection of Anime Campaign stuff."
];
