let homeContent = document.querySelector('#homeContainer');
let gameContent = document.querySelector('#gameContainer');
let answerContent = document.querySelector('#answerContainer');

let startButton = document.querySelector('#startButton');
let showAnswerButton = document.querySelector('#showAnswerButton')
let continueButton = document.querySelector('#continueButton');
let R = document.querySelector('#R');
let G = document.querySelector('#G');
let B = document.querySelector('#B');

let gameColorBox = document.querySelector('#gameColorBox');
let correctAnswerColorBox = document.querySelector('#correctAnswerColorBox');
let playerAnswerColorBox = document.querySelector('#playerAnswerColorBox');
let correctAnswerRGB = document.querySelector('#correctAnswerRGB');
let playerAnswerRGB = document.querySelector('#playerAnswerRGB');
let currentScore1 = document.querySelector('#currentScore1');
let currentScore2 = document.querySelector('#currentScore2');

function switchToHome() {
    homeContent.style.display = "flex";
    gameContent.style.display = "none";
    answerContent.style.display = "none";
}

function switchToGame() {
    homeContent.style.display = "none";
    gameContent.style.display = "flex";
    answerContent.style.display = "none";
}

function switchToAnswer() {
    homeContent.style.display = "none";
    gameContent.style.display = "none";
    answerContent.style.display = "flex";
}

switchToHome();

let round = 1;
let score = 0;
let correctAnswerR = 0;
let correctAnswerG = 0;
let correctAnswerB = 0;
let playerAnswerR = 0;
let playerAnswerG = 0;
let playerAnswerB = 0;
let temp = 'hi';

function startGame() {
    score = 0;
    round = 0;
    newRound();
	temp = `Score: ${score}`;
    currentScore1.textContent = temp;
    currentScore2.textContent = temp;
}

function newRound() {
    round++;
    console.log(round);
    if (round == 11) {
        switchToHome();
        return;
    }
	R.value = '';
	G.value = '';
	B.value = '';
    correctAnswerR = Math.floor(Math.random() * 256);
    if (correctAnswerR == 256) correctAnswerR--;
    correctAnswerG = Math.floor(Math.random() * 256);
    if (correctAnswerG == 256) correctAnswerG--;
    correctAnswerB = Math.floor(Math.random() * 256);
    if (correctAnswerB == 256) correctAnswerB--;
    gameColorBox.style.backgroundColor = `rgb(${correctAnswerR}, ${correctAnswerG}, ${correctAnswerB})`;
    correctAnswerColorBox.style.backgroundColor = `rgb(${correctAnswerR}, ${correctAnswerG}, ${correctAnswerB})`;
    temp = `${correctAnswerR} ${correctAnswerG} ${correctAnswerB}`;
    correctAnswerRGB.textContent = temp;
    console.log(`${correctAnswerR} ${correctAnswerG} ${correctAnswerB}`);
    switchToGame();
}

function showAnswer() {
    playerAnswerR = R.value;
    playerAnswerG = G.value;
    playerAnswerB = B.value;
    if (playerAnswerR == '' || playerAnswerR < 0) playerAnswerR = 0;
    if (playerAnswerR > 255) playerAnswerR = 255;
    if (playerAnswerG == '' || playerAnswerG < 0) playerAnswerG = 0;
    if (playerAnswerG > 255) playerAnswerG = 255;
    if (playerAnswerB == '' || playerAnswerB < 0) playerAnswerB = 0;
    if (playerAnswerB > 255) playerAnswerB = 255;

    playerAnswerColorBox.style.backgroundColor = `rgb(${playerAnswerR}, ${playerAnswerG}, ${playerAnswerB})`;
    temp = `${playerAnswerR} ${playerAnswerG} ${playerAnswerB}`;
    playerAnswerRGB.textContent = temp;

    let difference = Math.abs(playerAnswerR - correctAnswerR) + Math.abs(playerAnswerG - correctAnswerG) + Math.abs(playerAnswerB - correctAnswerB);
    if (difference < 384) {
        score += ((384 - difference) ** 2) / 1000;
    }
	score=Math.round(score*100)/100;
    temp = `Score: ${score}`;
	if(round == 10){
		temp=`Total Score: ${score}`;
	}
    currentScore1.textContent = temp;
    currentScore2.textContent = temp;
    switchToAnswer();
}

startButton.addEventListener('click', startGame);
showAnswerButton.addEventListener('click', showAnswer)
continueButton.addEventListener('click', newRound);

startButton.addEventListener('click', startGame);
showAnswerButton.addEventListener('click', showAnswer)
continueButton.addEventListener('click', newRound);
