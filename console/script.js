const welcomeMessage = "Welcome to diefonk.net\nType 'help' for a list of commands";

//directories and files
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

//commands
createCommand("about", "returns some information about Diefonk", aInput => {
	if (aInput !== "about") {
		return false;
	}
	print("Diefonk " + about[random(about.length)]);
	return true;
});

createCommand("cd", "changes directory to specified directory", aInput => {
	if (aInput.length < 4) {
		print("No directory specified");
	} else {
		const path = aInput.substring(3, aInput.length);
		var newDirectory = currentDirectory.getDirectory(path);
		if (newDirectory !== null) {
			currentDirectory = newDirectory;
			setPrompt();
		} else {
			print(path + ": No such directory");
		}
	}
	return true;
});

createCommand("ls", "lists directories and files in current directory", aInput => {
	if (aInput !== "ls" && aInput !== "dir") {
		return false;
	}
	print(currentDirectory.getList());
	return true;
});

createCommand("dir", null, commands.ls);

createCommand("open", "opens the specified file", aInput => {
	if (aInput.length < 6) {
		print("No file specified");
	} else {
		const name = aInput.substring(5, aInput.length);
		var file = currentDirectory.getFile(name);
		if (typeof(file) === "string") {
			window.open(file, "_blank");
		} else {
			print(name + ": No such file");
		}
	}
	return true;
});

createCommand("clear", "clears the console", aInput => {
	if (aInput !== "clear") {
		return false;
	}
	location.reload();
	return true;
});

createCommand("xyzzy", null, aInput => {
	if (aInput !== "xyzzy") {
		return false;
	}
	print("Nothing happens");
	return true;
});

createCommand("make", null, aInput => {
	if (aInput !== "make me a sandwich") {
		return false;
	}
	print("What? Make it yourself.");
	return true;
});

createCommand("sudo", null, aInput => {
	if (aInput !== "sudo make me a sandwich") {
		return false;
	}
	print("Okay.");
	return true;
});

createCommand("send", null, aInput => {
	if (aInput === "send nudes") {
		print("No.");
		return true;
	} else if (aInput === "send noots") {
		print("NOOT NOOT");
		return true;
	}
	return false;
});

createCommand("help", "returns this list", aInput => {
	if (aInput !== "help") {
		return false;
	}
	for (let index = 0; index < commandList.length; index++) {
		print(commandList[index]);
	}
	return true;
});
