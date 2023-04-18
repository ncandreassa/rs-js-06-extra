const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookie = document.querySelector("#cookie");
const btnRetry = document.querySelector("#btnRetry");
const message = document.querySelector("#message");

let randomNumber = Math.round(Math.random() * 29);

cookie.addEventListener("click", function () {
  toggleScreen();
  message.innerText = messages[randomNumber];
});

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

btnRetry.addEventListener("click", function () {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
});
