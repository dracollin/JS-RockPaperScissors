// GLOBAL VARIABLES
let result = "";
let playerScore = 0;
let compScore = 0;
let playerWeapon = 0;
let compWeapon = 0;
let weapons = ['rock', 'paper', 'scissors'];

document.getElementById("score").innerHTML = "You: " + playerScore + " vs. Computer: " + compScore;
document.getElementById("playAgain").style.display = 'none';

function rock() {
	playerWeapon = 0;
	playRound(playerWeapon);
}

function paper() {
	playerWeapon = 1;
	playRound(playerWeapon);
}

function scissors() {
	playerWeapon = 2;
	playRound(playerWeapon);
}

function playRound(playerWeapon) {
	if (playerScore < 5 && compScore < 5) {
		compWeapon = Math.floor(Math.random() * 3);
		if (playerWeapon === compWeapon) {
			result = "draw";
			updateScore(playerWeapon, compWeapon, result);
		} else if ((playerWeapon === 0 && compWeapon === 1) || (playerWeapon === 1 && compWeapon === 2) || (playerWeapon === 2 && compWeapon === 0)) {
			result = "lose";
			compScore += 1;
			updateScore(playerWeapon, compWeapon, result);
		} else {
			result = "win";
			playerScore += 1;
			updateScore(playerWeapon, compWeapon, result);
		}
		document.getElementById("score").innerHTML = "You: " + playerScore + " vs. Computer: " + compScore;
	}
}

function updateScore(playerWeapon, compWeapon, result) {
	if (result === "draw") {
		document.getElementById("output").innerHTML = "Result: DRAW You chose: " + weapons[playerWeapon] + " / computer chose: " + weapons[compWeapon];
	} else if (result === "win") {
		document.getElementById("output").innerHTML = "Result: WIN! You chose: " + weapons[playerWeapon] + " / computer chose: " + weapons[compWeapon];
	} else {
		document.getElementById("output").innerHTML = "Result: LOSS! You chose: " + weapons[playerWeapon] + " / computer chose: " + weapons[compWeapon];
	}
	if (playerScore === 5) {
		document.getElementById("gameOver").innerHTML = "Victory!" + "<br />" + "<br />" + "You Win!";
		document.getElementById("playAgain").style.display = 'block';
	} else if (compScore === 5) {
		document.getElementById("gameOver").innerHTML = "Defeat!" + "<br />" + "<br />" + "You Lose!";
		document.getElementById("playAgain").style.display = 'block';
	}
}

function playAgain() {
	playerScore = 0;
	compScore = 0;
	document.getElementById("score").innerHTML = "You: " + playerScore + " vs. Computer: " + compScore;
	document.getElementById("gameOver").innerHTML = "";
	document.getElementById("output").innerHTML = "";
	document.getElementById("playAgain").style.display = 'none';
}