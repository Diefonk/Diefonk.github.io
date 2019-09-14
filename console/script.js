var prompt;
var currentDirectory;

function init() {
	var code = new Directory("code");
	code.addFile("https://github.com/Diefonk/processing-projects", "Processing Projects.pde");
	code.addFile("https://github.com/Diefonk/baebot", "BaeBot.js");
	code.addFile("https://github.com/Diefonk/console-website", "Console Website.js");
	code.makeList();

	var games = new Directory("games");
	games.addFile("https://diefonk.itch.io/pizza-dress-up", "Pizza Dress-Up.js");
	games.addFile("https://diefonk.itch.io/potato-simulator-2014-remix", "Potato Simulator 2014 Remix.js");
	games.addFile("https://diefonk.itch.io/9in1", "9in1.js");
	games.addFile("https://diefonk.itch.io/beast-city-dreamers", "Beast City Dreamers.bitsy");
	games.makeList();

	currentDirectory = new Directory("index");
	currentDirectory.addFile("https://twitter.com/Diefonk", "Twitter.url");
	currentDirectory.addFile("https://www.youtube.com/user/Diefonk", "YouTube.url");
	currentDirectory.addFile("https://blog.diefonk.net/", "Tumblr.url");
	currentDirectory.addFile("https://diefonk.itch.io/", "itch.io.url");
	currentDirectory.addFile("https://github.com/Diefonk", "GitHub.url");
	currentDirectory.addFile("https://soundcloud.com/diefonk", "SoundCloud.url");
	currentDirectory.addDirectory(code);
	currentDirectory.addDirectory(games);
	currentDirectory.makeList();

	print("Welcome to diefonk.net\nType 'help' for a list of commands");
	setPrompt();
	focusInput();
}

function handleInput(aEvent) {
	if (aEvent.keyCode === 13) {
		aEvent.preventDefault();

		print(prompt + document.getElementById("input").value);
		const input = document.getElementById("input").value.toLowerCase();
		document.getElementById("input").value = "";

		if (input === "help") {
			print("about - returns some information about Diefonk");
			print("cd - changes directory to specified directory");
			print("ls - lists directories and files in current directory");
			print("open - opens the specified file");
			print("clear - clears the console");
			print("help - returns this list");
		} else if (input.substring(0, 3) === "cd " || input === "cd") {
			if (input.length < 4) {
				print("No directory specified");
			} else {
				const path = input.substring(3, input.length);
				var newDirectory = currentDirectory.getDirectory(path);
				if (newDirectory !== null) {
					currentDirectory = newDirectory;
					setPrompt();
				} else {
					print(path + ": No such directory");
				}
			}
		} else if (input === "ls") {
			print(currentDirectory.getList());
		} else if (input.substring(0, 5) === "open " || input === "open") {
			if (input.length < 6) {
				print("No file specified");
			} else {
				const name = input.substring(5, input.length);
				var file = currentDirectory.getFile(name);
				if (typeof(file) === "string") {
					window.open(file, "_blank");
				} else {
					print(name + ": No such file");
				}
			}
		} else if (input === "about") {
			print("Diefonk " + about[random(about.length)]);
		} else if (input === "clear") {
			location.reload();
		} else if (input === "xyzzy") {
			print("Nothing happens");
		} else if (input === "make me a sandwich") {
			print("What? Make it yourself.");
		} else if (input === "sudo make me a sandwich") {
			print("Okay.");
		} else if (input === "send nudes") {
			print("No.");
		} else if (input === "send noots") {
			print("NOOT NOOT");
		} else if (input === "") {
			//do nothing
		} else {
			print("Command not found\nType 'help' for a list of commands");
		}
		window.scrollTo(0, document.body.scrollHeight);
	}
}

function print(aString) {
	var output = document.createElement("p");
	var text;
	var newlineIndex = aString.indexOf("\n");
	while (newlineIndex >= 0) {
		text = document.createTextNode(aString.substring(0, newlineIndex));
		output.appendChild(text);
		var newline = document.createElement("br");
		output.appendChild(newline);
		aString = aString.substring(newlineIndex + 1, aString.length);
		newlineIndex = aString.indexOf("\n");
	}
	text = document.createTextNode(aString);
	output.appendChild(text);
	document.getElementById("output").appendChild(output);
}

function random(aMax) {
	return Math.floor(Math.random() * aMax);
}

function focusInput() {
	document.getElementById("input").focus();
}

function setPrompt() {
	prompt = "guest:" + currentDirectory.getName() + "$ ";
	document.getElementById("prompt").innerHTML = prompt;
}
