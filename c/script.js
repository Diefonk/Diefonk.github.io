const welcomeMessage = "Welcome to diefonk.net\nType 'help' for a list of commands";

//directories and files
var games = new Directory("games");
games.addFile("https://diefonk.itch.io/pizza-dress-up", "pizzadressup.js");
games.addFile("https://diefonk.itch.io/potato-simulator-2014-remix", "potatosimulator2014remix.js");
games.addFile("https://diefonk.itch.io/9in1", "9in1.js");
games.addFile("https://diefonk.itch.io/beast-city-dreamers", "beastcitydreamers.bitsy");
games.addFile("https://diefonk.itch.io/concern", "growingconcern.cs");
games.makeList();

var other = new Directory("other");
other.addFile("https://github.com/Diefonk/processing-projects", "processingprojects.pde");
other.addFile("https://github.com/Diefonk/baebot", "baebot.js");
other.addFile("https://github.com/Diefonk/console-website", "consolewebsite.js");
other.addFile("../w/animecampaign", "animecampaign.html");
other.addFile("../w/hs10yearsago", "hs10yearsago.html");
other.addFile("../jadestuck", "jadestuck.html");
other.makeList();

currentDirectory = new Directory("index");
currentDirectory.addFile("https://twitter.com/Diefonk", "twitter.url");
currentDirectory.addFile("https://www.youtube.com/user/Diefonk", "youtube.url");
currentDirectory.addFile("https://blog.diefonk.net/", "tumblr.url");
currentDirectory.addFile("https://diefonk.itch.io/", "itch.io.url");
currentDirectory.addFile("https://github.com/Diefonk", "github.url");
currentDirectory.addFile("https://soundcloud.com/diefonk", "soundcloud.url");
currentDirectory.addDirectory(games);
currentDirectory.addDirectory(other);
currentDirectory.makeList();

//commands
createCommand("about", "returns some information about Diefonk", () => {
	print("Diefonk " + about[random(about.length)]);
});

createArgumentCommand("cd", "changes directory to specified directory", aInput => {
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
});

createCommand("ls", "lists directories and files in current directory", () => {
	print(currentDirectory.getList());
});

createCommand("dir", null, commands.ls);

createArgumentCommand("open", "opens the specified file", aInput => {
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
});

createCommand("clear", "clears the console", () => {
	location.reload();
});

createCommand("xyzzy", null, () => {
	print("Nothing happens");
});

createCommand("make me a sandwich", null, () => {
	print("What? Make it yourself.");
});

createCommand("sudo make me a sandwich", null, () => {
	print("Okay.");
});

createCommand("send nudes", null, () => {
	print("No.");
});

createCommand("send noots", null, () => {
	print("NOOT NOOT");
});

createCommand("help", "returns this list", () => {
	for (let index = 0; index < commandList.length; index++) {
		print(commandList[index]);
	}
});
