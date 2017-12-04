function onLoad() {
	printString("diefonk.github.io");
	document.getElementById("prompt").innerHTML = prompt;
	focusInput();
}

function handleInput(aEvent) {
	if (aEvent.keyCode === 13) {
		aEvent.preventDefault();
		printString(prompt + document.getElementById("input").value);
		switch (document.getElementById("input").value) {
			case "help":
				printString("How can I help you if I can't even help myself?");
				break;
			case "clear":
				location.reload();
				break;
			case "make me a sandwich":
				printString("What? Make it yourself.");
				break;
			case "sudo make me a sandwich":
				printString("Okay.");
				break;
			case "xyzzy":
				printString("Nothing happens");
				break;
			case "about":
				printRandom(about);
				break;
			case "":
				break;
			default:
				printString("Command not found");
				break;
		}
		document.getElementById("input").value = "";
	}
}

function printString(aString) {
	var output = document.createElement("p");
	var text = document.createTextNode(aString);
	output.appendChild(text);
	document.getElementById("output").appendChild(output);
}

function printArray(aArray) {
	var output = document.createElement("p");
	var text = document.createTextNode(aArray[0]);
	output.appendChild(text);
	for (var index = 1; index < aArray.length; index++) {
		var newLine = document.createElement("br");
		output.appendChild(newLine);
		text = document.createTextNode(aArray[index]);
		output.appendChild(text);
	}
	document.getElementById("output").appendChild(output);
}

function printRandom(aArray) {
	var index = Math.floor(Math.random() * aArray.length);
	var output = document.createElement("p");
	var text = document.createTextNode(aArray[index]);
	output.appendChild(text);
	document.getElementById("output").appendChild(output);
}

function focusInput() {
	document.getElementById("input").focus();
}

var prompt = "cmd> ";

var about = [
	"Diefonk is tired",
	"Diefonk is a rogue wall enthusiast",
	"Diefonk makes things",
	"Diefonk is a boyish girl making games about girly boys",
	"Diefonk is a girly boy writing stories about boyish girls",
	"Diefonk makes games",
	"Diefonk writes stories",
	"Diefonk plays music",
	"Diefonk is not here right now. Can I take a message?",
	"Diefonk wants to be everything at once",
	"Diefonk is just a dreamer",
	"Diefonk is my name, and making games is my game.",
	"Diefonk is probably watching Netflix right now",
	"Diefonk is probably playing Tetris right now",
	"Diefonk is procrastinating",
	"Diefonk watches the watchmen",
	"Diefonk has a lot of stuff to do",
	"Diefonk coded this website",
	"Diefonk is a figment",
	"Diefonk would like to inform you that you just lost The Game",
	"Diefonk doesn’t have time for this",
	"Diefonk is probably reading comics right now",
	"Diefonk is probably sleeping right now",
	"Diefonk is probably not sleeping right now",
	"Diefonk is probably just thinking about stuff and things right now",
	"Diefonk is probably watching anime right now",
	"Diefonk is loading, please wait…",
	"Diefonk is a fan of wet circles",
	"Diefonk should be sleeping"
];
