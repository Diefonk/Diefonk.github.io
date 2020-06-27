var space;
var jade;
var jadePunch;
var villains = [];
var villainIndex = 0;

var scale = 1;
var canvasSize = {};
var imageSize = {};
var punchTime = 0;
var newVillainTime = 0;
var flyTime = 0;

function setup() {
	let canvas = createCanvas(650, 450);
	canvas.parent("canvasContainer");
	windowResized();

	space = loadImage("images/background.png");
	jade = loadImage("images/jade.png");
	jadePunch = loadImage("images/jadePunch.png");
	villains.push(loadImage("images/ah.png"));
	villains.push(loadImage("images/ds.png"));
	villains.push(loadImage("images/hic.png"));
	villains.push(loadImage("images/jn.png"));
	villains.push(loadImage("images/le.png"));
	imageMode(CENTER);

	document.getElementById("music").volume = 0.6;
	document.getElementById("music").play();
}

function draw() {
	image(space, 325 * scale, 225 * scale, canvasSize.x, canvasSize.y);

	let deltaTime = 1 / frameRate();

	if (punchTime > 0) {
		punchTime -= deltaTime;
		image(jadePunch, 150 * scale, 225 * scale, imageSize.x, imageSize.y);
		if (punchTime <= 0) {
			document.getElementById("punch").src = "audio/punch.mp3";
			document.getElementById("punch").play();
			document.getElementById("punch").pause();
		}
	} else {
		image(jade, 150 * scale, 225 * scale, imageSize.x, imageSize.y);
	}

	if (newVillainTime > 0) {
		newVillainTime -= deltaTime;
		image(villains[villainIndex], 500 * scale, (225 + (405 * newVillainTime)) * scale, imageSize.x, imageSize.y);
	} else if (flyTime > 0) {
		flyTime -= deltaTime;
		translate((500 - (466 * (flyTime - 1))) * scale, 225 * scale);
		rotate((-PI / 2) * (flyTime - 1));
		image(villains[villainIndex], 0, 0, imageSize.x, imageSize.y);
		if (flyTime <= 0) {
			newVillain();
		}
	} else {
		image(villains[villainIndex], 500 * scale, 225 * scale, imageSize.x, imageSize.y);
	}
}

function windowResized() {
	canvasSize.x = document.getElementById("canvasContainer").offsetWidth;
	scale = canvasSize.x / 650;
	canvasSize.y = 450 * scale;
	resizeCanvas(canvasSize.x, canvasSize.y);
	imageSize.x = 236 * scale;
	imageSize.y = 360 * scale;
}

function mousePressed() {
	if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height ||
		newVillainTime > 0 || flyTime > 0) {
		return false;
	}
	document.getElementById("punch").play();
	if (document.getElementById("music").currentTime === 0) {
		document.getElementById("music").play();
	}
	punchTime = 1;
	flyTime = 1;
}

function newVillain() {
	villainIndex++;
	if (villainIndex >= villains.length) {
		villainIndex = 0;
	}
	newVillainTime = 1;
}
