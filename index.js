const RCK = "rock";
const SCR = "scissors";
const PPR = "paper";

const whoWin = (player1Option, player2Option) => {
  if (player1Option === player2Option) {
    return 0;
  }

  if (player1Option === RCK && player2Option === SCR) {
    return 1;
  }
  if (player1Option === SCR && player2Option === PPR) {
    return 1;
  }
  if (player1Option === PPR && player2Option === RCK) {
    return 1;
  }

  if (player2Option === RCK && player1Option === SCR) {
    return 2;
  }
  if (player2Option === SCR && player1Option === PPR) {
    return 2;
  }
  if (player2Option === PPR && player1Option === RCK) {
    return 2;
  }
};

const play1 = document.getElementById("player1");
const play2 = document.getElementById("player2");

let gameIsRunning = true;
const winnerText = document.getElementById("winner");
const play = document.getElementById("play");
play.addEventListener("click", () => {
  const winner = whoWin(play1.value, play2.value);

  if (winner === 0) {
    return (winnerText.innerText = "This was a draw :(");
  }
  const winnerInnerText = `The appy winner is Player ${winner} !!`;
  winnerText.innerText = winnerInnerText;
});
