// Countdown Timer
const weddingDate = new Date("May 9, 2026 12:30:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.querySelectorAll(".timer-number").forEach((el) => {
      el.textContent = "0";
    });
    document.querySelector(".timer-display").innerHTML = 
      '<h3 style="color: #8b4513; font-size: 2rem; margin: 20px 0;">💖 It\'s Wedding Time! 💖</h3>';
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timerNumbers = document.querySelectorAll(".timer-number");
  if (timerNumbers.length >= 4) {
    timerNumbers[0].textContent = String(days).padStart(2, "0");
    timerNumbers[1].textContent = String(hours).padStart(2, "0");
    timerNumbers[2].textContent = String(minutes).padStart(2, "0");
    timerNumbers[3].textContent = String(seconds).padStart(2, "0");
  }
}, 1000);