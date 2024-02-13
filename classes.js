const player1Name = document.getElementById("player1Name");
const player2Name = document.getElementById("player2Name");
const playbutton = document.getElementById("play");
const newGame = document.getElementById("newGame");
const player1Option = document.getElementById("player1Option");
const player2Option = document.getElementById("player2Option");
const winner = document.getElementById("winner");
const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");

const RCK = "rock";
const SCR = "scissors";
const PPR = "paper";

const options = [RCK, SCR, PPR];

class Player {
  constructor(name, isAI) {
    this.name = name;
    this.score = 0;
    this.isAI = isAI;
  }

  name() {
    if (this.isAI) {
      return "AI Player";
    }
    return this.name;
  }
  score() {
    return this.score;
  }

  addPoint() {
    this.score += 10;
  }

  resetPoints() {
    player1Score.innerText = 0;
    player2Score.innerText = 0;
    this.score = 0;
  }

  aiPlay() {
    return options[Math.floor(Math.random() * options.length)];
  }
}

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.updateUi();
  }

  get winner() {
    return this.player1.score > this.player2.score
      ? this.player1
      : this.player2;
  }

  gameIsFinish() {
    return this.player1.score >= 30 || this.player2.score >= 30;
  }

  newTurn(p1Option, p2Option) {
    console.log(p1Option, p2Option);
    if (p1Option === p2Option) {
      return 0;
    }

    if (p1Option === RCK && p2Option === SCR) {
      return this.player1.addPoint();
    }
    if (p1Option === SCR && p2Option === PPR) {
      return this.player1.addPoint();
    }
    if (p1Option === PPR && p2Option === RCK) {
      return this.player1.addPoint();
    }

    if (p2Option === RCK && p1Option === SCR) {
      return this.player2.addPoint();
    }
    if (p2Option === SCR && p1Option === PPR) {
      return this.player2.addPoint();
    }
    if (p2Option === PPR && p1Option === RCK) {
      return this.player2.addPoint();
    }
    console.log(this.showScore());
  }

  showScore() {
    return `${this.player1.name}: ${this.player1.score} - ${this.player2.name}: ${this.player2.score} `;
  }

  updateUi() {
    playbutton.classList.remove("hidden");
    winner.innerHTML = "";
    this.player1.resetPoints();
    this.player2.resetPoints();
  }
}

let player1;
let player2;
let game;

newGame.addEventListener("click", () => {
  player1 = new Player(player1Name.value, false);
  player2 = new Player(player2Name.value, false);
  game = new Game(player1, player2);
});

playbutton.addEventListener("click", () => {
  console.log(player1Option);
  game.newTurn(player1Option.value, player2Option.value);
  player1Score.innerText = player1.score;
  player2Score.innerText = player2.score;
  if (game.gameIsFinish()) {
    winner.innerText = `The Winner is ${game.winner.name} !! 🎉`;

    console.log(game.showScore());
  }
});
