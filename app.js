// variables
const healthLevels = document.querySelector("#health-levels");
let monsterTitle = document.querySelector("#monsterTitle span");
let playerTitle = document.querySelector("#playerTitle span");
let span = document.querySelector("span");
let monsterHealth = document.querySelector("#monster-health");
let playerHealth = document.querySelector("#player-health");
const controls = document.querySelector("#controls");
let turn = true;
const attackBtn = document.querySelector("#attack-btn");
const healBtn = document.querySelector("#heal-btn");
const bonus = document.querySelector("#bonus-life");
// turn
monsterTitle.classList.remove("redDot");
// function basic HIZ
function basicHit() {
  let randomEffect = Math.floor(Math.random() * 15);
  if (turn) {
    playerTitle.classList.remove("redDot");
    monsterTitle.classList.add("redDot");
    monsterHealth.value -= randomEffect;
    turn = false;
  } else {
    monsterTitle.classList.remove("redDot");
    playerTitle.classList.add("redDot");
    playerHealth.value -= randomEffect;
    healBtn.addEventListener("click", heal);
    turn = true;
  }
  if (monsterHealth.value === 0) {
    styling();
    const winner = document.createElement("h1");
    winner.innerHTML = "Player wins!";
    winner.classList.add("winner");
    controls.appendChild(winner);
    clearing();
  } else if (playerHealth.value === 0) {
    styling();
    const winner = document.createElement("h1");
    winner.innerHTML = "Monster wins!";
    winner.classList.add("winner");
    controls.appendChild(winner);
    clearing();
  }
}
// function heal
function heal() {
  let randomEffect = Math.floor(Math.random() * 20);
  playerHealth.value += randomEffect;
  healing();
}
// function DRY
function styling() {
  attackBtn.style.display = "none";
  healBtn.style.display = "none";
}
function clearing() {
  setTimeout(() => {
    location.reload();
  }, 3000);
}
function healing() {
  healBtn.setAttribute("disabled", true);
  healBtn.style.background = "#333";
  healBtn.style.border = "#333";
  bonus.style.display = "none";
}
attackBtn.addEventListener("click", basicHit);
