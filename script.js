// Countdown Timer
const weddingDate = new Date("December 15, 2026 19:00:00").getTime();

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
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// RSVP Demo
document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("rsvpMsg").innerText =
    "Thank you! Your response has been recorded 💕";
});