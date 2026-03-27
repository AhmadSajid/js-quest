let startTime;
let waiting = false;

const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  message.textContent = "Wait for green...";
  
  const delay = Math.random() * 3000 + 2000; // 2–5 seconds

  setTimeout(() => {
    message.textContent = "CLICK NOW!";
    startTime = Date.now();
    waiting = true;
  }, delay);
});

document.addEventListener("click", () => {
  if (waiting) {
    const reactionTime = Date.now() - startTime;
    message.textContent = `Your time: ${reactionTime} ms`;
    waiting = false;
  }
});