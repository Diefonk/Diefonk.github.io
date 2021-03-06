var prompt;
var currentDirectory;
var io = {};
var commands = {};
var argumentCommands = {};
var commandList = [];

function init() {
	io.input = document.getElementById("input");
	io.output = document.getElementById("output");
	io.prompt = document.getElementById("prompt");
	print(welcomeMessage);
	setPrompt();
	focusInput();
}

function handleInput(aEvent) {
	if (aEvent.keyCode === 13) {
		aEvent.preventDefault();

		print(prompt + io.input.value);
		const input = io.input.value.toLowerCase();
		io.input.value = "";

		if (input !== "") {
			if (input in commands) {
				commands[input]();
			} else {
				let spaceIndex = input.indexOf(" ");
				let command = input;
				if (spaceIndex > 0) {
					command = input.substring(0, spaceIndex);
				}
				if (command in argumentCommands) {
					argumentCommands[command](input);
				} else {
					print("Command not found\nType 'help' for a list of commands");
				}
			}
		}

		window.scrollTo(0, document.body.scrollHeight);
	}
}

function createCommand(aName, aDescription, aFunction) {
	commands[aName] = aFunction;
	if (aDescription) {
		commandList.push(aName + " - " + aDescription);
	}
}

function createArgumentCommand(aName, aDescription, aFunction) {
	argumentCommands[aName] = aFunction;
	if (aDescription) {
		commandList.push(aName + " - " + aDescription);
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
	io.output.appendChild(output);
}

function random(aMax) {
	return Math.floor(Math.random() * aMax);
}

function focusInput() {
	io.input.focus();
}

function setPrompt() {
	prompt = "guest:" + currentDirectory.getName() + "$ ";
	io.prompt.innerHTML = prompt;
	io.input.style.width = (document.body.offsetWidth - io.prompt.offsetWidth * 1.2) + "px";
}
