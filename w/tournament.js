var players = [];
var teamA = [];
var teamB = [];

function addPlayer() {
	players.push({name: document.getElementById("newp").value, points: 0});
	document.getElementById("newp").value = "";
	var p = players[0].name + ": " + players[0].points;
	for (var i = 1; i < players.length; i++) {
		p = p + "<br>" + players[i].name + ": " + players[i].points;
	}
	document.getElementById("leaderboard").innerHTML = p;
}
function sortPlayers() {
	teamA = [];
	teamB = [];
	if (players.length % 2 === 0) {
		for (var i = 0; i < players.length; i += 2) {
			if (Math.floor(Math.random() * 2) === 0) {
				teamA.push(players[i]);
				teamB.push(players[i + 1]);
			} else {
				teamB.push(players[i]);
				teamA.push(players[i + 1]);
			}
		}
	} else {
		for (var i = 0; i < players.length - 1; i += 2) {
			if (Math.floor(Math.random() * 2) === 0) {
				teamA.push(players[i]);
				teamB.push(players[i + 1]);
			} else {
				teamB.push(players[i]);
				teamA.push(players[i + 1]);
			}
		}
		if (Math.floor(Math.random() * 2) === 0) {
			teamA.push(players[players.length - 1]);
		} else {
			teamB.push(players[players.length - 1]);
		}
	}
	var a = teamA[0].name;
	for (var i = 1; i < teamA.length; i++) {
		a = a + "<br>" + teamA[i].name;
	}
	document.getElementById("teama").innerHTML = a;
	var b = teamB[0].name;
	for (var i = 1; i < teamB.length; i++) {
		b = b + "<br>" + teamB[i].name;
	}
	document.getElementById("teamb").innerHTML = b;
}
function addPoints(team) {
	for (var i = 0; i < team.length; i++) {
		team[i].points++;
	}
	players.sort(comparePlayers);
	var p = players[0].name + ": " + players[0].points;
	for (var i = 1; i < players.length; i++) {
		p = p + "<br>" + players[i].name + ": " + players[i].points;
	}
	document.getElementById("leaderboard").innerHTML = p;
}
function comparePlayers(a, b) {
	if (a.points > b.points) {
		return -1;
	}
	if (a.points < b.points) {
		return 1;
	}
	return 0;
}
