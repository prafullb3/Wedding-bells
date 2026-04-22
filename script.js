// Countdown Timer
const weddingDate = new Date("May 9, 2026 12:30:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById("timer").innerHTML = "💖 It's Wedding Time! 💖";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    `<span class="countdown-item"><span class="countdown-number">${days}</span><span class="countdown-label">Days</span></span>
     <span class="countdown-separator">:</span>
     <span class="countdown-item"><span class="countdown-number">${hours}</span><span class="countdown-label">Hours</span></span>
     <span class="countdown-separator">:</span>
     <span class="countdown-item"><span class="countdown-number">${minutes}</span><span class="countdown-label">Minutes</span></span>
     <span class="countdown-separator">:</span>
     <span class="countdown-item"><span class="countdown-number">${seconds}</span><span class="countdown-label">Seconds</span></span>`;
}, 1000);