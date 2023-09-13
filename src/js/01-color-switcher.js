const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval( () => {
       document.body.style.background = getRandomHexColor()
       startBtn.disabled = true;
    }, 1000)
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
  });
