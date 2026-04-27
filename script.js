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

// Gallery Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");
const galleryImages = document.querySelectorAll(".gallery-img");
const currentImageSpan = document.getElementById("current-image");

let currentImageIndex = 0;
const totalImages = galleryImages.length;

// Update the image counter
function updateCounter() {
  currentImageSpan.textContent = currentImageIndex + 1;
}

// Show image by index
function showImage(index) {
  if (index >= totalImages) {
    currentImageIndex = 0;
  } else if (index < 0) {
    currentImageIndex = totalImages - 1;
  } else {
    currentImageIndex = index;
  }
  
  lightboxImg.src = galleryImages[currentImageIndex].src;
  updateCounter();
}

// Open lightbox when clicking on gallery images
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    currentImageIndex = index;
    showImage(currentImageIndex);
  });
});

// Next button functionality
lightboxNext.addEventListener("click", () => {
  showImage(currentImageIndex + 1);
});

// Previous button functionality
lightboxPrev.addEventListener("click", () => {
  showImage(currentImageIndex - 1);
});

// Close lightbox when clicking the close button
lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  } else if (e.key === "ArrowRight") {
    showImage(currentImageIndex + 1);
  } else if (e.key === "ArrowLeft") {
    showImage(currentImageIndex - 1);
  }
});