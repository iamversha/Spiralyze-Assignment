document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  toggleButton.addEventListener("click", function () {
    navbarMenu.classList.toggle("show");
  });

  // Close the menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!navbarMenu.contains(event.target) && !toggleButton.contains(event.target)) {
      navbarMenu.classList.remove("show");
    }
  });
});

// slider
let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}


// video player
let modalOpen = document.getElementById("videoModal");
let video = document.getElementById("myVideo");

document.getElementById("playButton").addEventListener("click", function () {
  if (video.paused) {
    modalOpen.style.display = "flex";
    video.muted = false;
    video.play();
  } else {
    modalOpen.style.display = "none";
    video.pause();
  }
});

document.querySelector(".close").addEventListener("click", function () {
  video.pause();
  modalOpen.style.display = "none";
});

document.querySelector(".modal").addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    video.pause();
    modalOpen.style.display = "none";
  }
});

