var moves = document.getElementById("moves");
var position = document.getElementById("position");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var content = document.querySelector(".content-2");
var win = 0;
var lose = 0;
var tie = 0;

function computerMoveItem() {
  var computerMove = '';
  let computerMoveNum = Math.random();
  if (computerMoveNum < 1 / 3) {
    computerMove = rock;
  } else if (computerMoveNum < 2 / 3) {
    computerMove = paper;
  } else {
    computerMove = scissors;
  }
  return computerMove;
}

function displayScore() {
  content.innerHTML = `
    <h2 class="greenyellow">Win : ${win}</h2>
    <h2 class="red">Lose : ${lose}</h2>
    <h2 class="darkgrey">Tie : ${tie}</h2>
  `;
}

function rockItem() {
  var computerMove = computerMoveItem();
  if (computerMove === rock) {
    position.textContent = "It is a Tie !";
    position.setAttribute("class", "darkgrey");
    moves.innerHTML = `You took Rock and your Computer took ${computerMove.id}`;
    tie++;
  } else if (computerMove === paper) {
    position.textContent = "You Lose !";
    position.setAttribute("class", "red");
    moves.innerHTML = `You took Rock and your Computer took ${computerMove.id}`;
    lose++;
  } else {
    position.textContent = "You Win !";
    position.setAttribute("class", "greenyellow");
    moves.innerHTML = `You took Rock and your Computer took ${computerMove.id}`;
    win++;
  }
  displayScore();
}

function paperItem() {
  var computerMove = computerMoveItem();
  if (computerMove === rock) {
    position.textContent = "You Win !";
    position.setAttribute("class", "greenyellow");
    moves.innerHTML = `You took Paper and your Computer took ${computerMove.id}`;
    win++;
  } else if (computerMove === paper) {
    position.textContent = "It is a Tie !";
    position.setAttribute("class", "darkgrey");
    moves.innerHTML = `You took Paper and your Computer took ${computerMove.id}`;
    tie++;
  } else {
    position.textContent = "You Lose !";
    position.setAttribute("class", "red");
    moves.innerHTML = `You took Paper and your Computer took ${computerMove.id}`;
    lose++;
  }
  displayScore();
}

function scissorsItem() {
  var computerMove = computerMoveItem();
  if (computerMove === rock) {
    position.textContent = "You Lose !";
    position.setAttribute("class", "red");
    moves.innerHTML = `You took Scissors and your Computer took ${computerMove.id}`;
    lose++;
  } else if (computerMove === paper) {
    position.textContent = "You Win !";
    position.setAttribute("class", "greenyellow");
    moves.innerHTML = `You took Scissors and your Computer took ${computerMove.id}`;
    win++;
  } else {
    position.textContent = "It is a Tie !";
    position.setAttribute("class", "darkgrey");
    moves.innerHTML = `You took Scissors and your Computer took ${computerMove.id}`;
    tie++;
  }
  displayScore();
}
