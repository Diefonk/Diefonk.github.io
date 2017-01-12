function setBG() {
	switch(Math.floor(Math.random() * 7)) {
		case 0: document.body.className = "purple"; break;
		case 1: document.body.className = "blue"; break;
		case 2: document.body.className = "cyan"; break;
		case 3: document.body.className = "green"; break;
		case 4: document.body.className = "yellow"; break;
		case 5: document.body.className = "orange"; break;
		case 6: document.body.className = "red"; break;
		default: break;
	}
}
function purple() {
	document.body.className = "purple";
}
function blue() {
	document.body.className = "blue";
}
function cyan() {
	document.body.className = "cyan";
}
function green() {
	document.body.className = "green";
}
function yellow() {
	document.body.className = "yellow";
}
function orange() {
	document.body.className = "orange";
}
function red() {
	document.body.className = "red";
}
