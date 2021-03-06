// variables
const newGame = document.querySelector("#new");
const roll = document.querySelector("#roll");
const hold = document.querySelector(".btn--hold");
const firstCurrent = document.querySelector("#current--0");
const secondCurrent = document.querySelector("#current--1");
const firstScore = document.querySelector("#score--0");
const secondScore = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
let playerActive;
let currentScore = 0;
let score = [0, 0];

// eventListeners
// run new game and reset form
newGame.addEventListener("click", function () {
  firstCurrent.textContent = 0;
  secondCurrent.textContent = 0;
  firstScore.textContent = 0;
  secondScore.textContent = 0;
  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  dice.classList.add("hidden");
  document
    .querySelector(`.player--${playerActive}`)
    .classList.remove("player--winner");
  score = [0, 0];
  roll.disabled = false;
  hold.disabled = false;
  playerActive = 1;
});
// roll dice and play game
roll.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 6 + 1);
  dice.classList.remove("hidden");
  dice.src = `image/${random}.jpg`;
  if (random !== 1) {
    currentScore += random;
    firstCurrent.textContent = currentScore;
    if (playerActive == 1) {
      firstCurrent.textContent = currentScore;
      secondCurrent.textContent = 0;
    } else if (playerActive == 0) {
      secondCurrent.textContent = currentScore;
      firstCurrent.textContent = 0;
    }
  } else {
    firstCurrent.textContent = 0;
    secondCurrent.textContent = 0;
    playerActive = playerActive === 0 ? (playerActive = 1) : (playerActive = 0);
    currentScore = 0;
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
  }
});
// hold your score to form
hold.addEventListener("click", function () {
  playerActive = playerActive === 0 ? (playerActive = 1) : (playerActive = 0);
  if (playerActive == 1) {
    score[playerActive] += currentScore;
    secondScore.textContent = score[playerActive];
  } else {
    score[playerActive] += currentScore;
    firstScore.textContent = score[playerActive];
  }
  currentScore = 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
  firstCurrent.textContent = 0;
  secondCurrent.textContent = 0;
  currentScore = 0;
  if (score[playerActive] >= 100) {
    dice.classList.add("hidden");
    document
      .querySelector(`.player--${playerActive}`)
      .classList.add("player--winner");
    roll.disabled = true;
    hold.disabled = true;
  }
});
