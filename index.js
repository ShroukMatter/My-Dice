var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomnum2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".first-dice")
  .setAttribute("src", `./images/dice${randomnum1}.png`);
document
  .querySelector(".second-dice")
  .setAttribute("src", `./images/dice${randomnum2}.png`);
if (randomnum1 > randomnum2) {
  document.querySelector(".main-header").textContent = "🚩 Player 1 is winner";
} else if (randomnum2 > randomnum1) {
  document.querySelector(".main-header").textContent = "Player 2 is winner 🚩";
} else {
  document.querySelector(".main-header").textContent = "DRAW!";
}
