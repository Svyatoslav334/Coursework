const burger = document.querySelector(".burger-menu");
const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const navBar = document.querySelector(".nav-bar");

burger.addEventListener("click", () => {
  navBar.classList.toggle("active");
  openIcon.style.display = navBar.classList.contains("active")
    ? "none"
    : "inline-block";
  closeIcon.style.display = navBar.classList.contains("active")
    ? "inline-block"
    : "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal-window");
  const closeBtn = document.querySelector(".close-btn");
  const doNotShow = document.querySelector(".do-not-show input");
  if (!localStorage.getItem("doNotShowModal")) {
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
  }

  function closeModal() {
    modal.style.display = "none";
    if (doNotShow.checked) {
      localStorage.setItem("doNotShowModal", "true");
    }
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});

const animateBlocks = (selector, animationClass) => {
  const blocks = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        } else {
          entry.target.classList.remove(animationClass);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  blocks.forEach((block) => {
    observer.observe(block);
  });
};

animateBlocks(".product-card", "fade-in-up");
animateBlocks(".testimonial-card", "scale-in");
animateBlocks(".blog-card", "fade-in-left");

document.addEventListener("DOMContentLoaded", function () {
  const endDate = new Date("2025-09-30T23:59:59");

  const timerBoxes = document.querySelectorAll(".timer-box .time");

  function updateTimer() {
    const now = new Date();
    const timeLeft = countdown(now, endDate);

    timerBoxes[0].textContent = String(timeLeft.days).padStart(2, "0");
    timerBoxes[1].textContent = String(timeLeft.hours).padStart(2, "0");
    timerBoxes[2].textContent = String(timeLeft.minutes).padStart(2, "0");
    timerBoxes[3].textContent = String(timeLeft.seconds).padStart(2, "0");
  }

  setInterval(updateTimer, 1000);
  updateTimer();
});


const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dots .dot');
const prevBtn = document.querySelector('.hero-arrow.left');
const nextBtn = document.querySelector('.hero-arrow.right');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

const slider = document.querySelector('.hero-slides');
let startX = 0;

slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    } else if (endX - startX > 50) {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
});


