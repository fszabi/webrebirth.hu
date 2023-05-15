const header = document.querySelector(".primary-header");

const headerFlex = document.querySelector(".primary-header .flex-group");

const navcontainer = document.querySelector(".primary-navigation-container");

const nav = document.querySelector(".primary-navigation");

const navFlex = document.querySelector(".primary-navigation .flex-group");

const hamburger = document.querySelector(".btn--hamburger");

const navlist = document.querySelector("ul");

const navlinks = document.body.querySelectorAll(".primary-navigation a");

const logo = document.body.querySelector(".logo");

const scrollButton = document.querySelector(".btn--scroll-top");

window.onscroll = function () {
  navColor();
  toggleScrollButton();
};

window.onload = navEvents;

// Header

function navColor() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    black();
  } else {
    transparent();
  }
}

function black() {
  header.style.backgroundColor = "#212121";
  header.classList.add("box-shadow-1");
}

function transparent() {
  header.style.backgroundColor = "transparent";
  header.classList.remove("box-shadow-1");
}

// Hamburger menu

function navEvents() {
  for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", () => {
      const currentState = hamburger.getAttribute("data-state");
      const visibility =
        nav.getAttribute("data-visible") &&
        navcontainer.getAttribute("data-visible");

      if (!currentState || currentState === "closed") {
        hamburger.setAttribute("data-state", "opened");
        hamburger.setAttribute("aria-expanded", "true");
      } else {
        hamburger.setAttribute("data-state", "closed");
        hamburger.setAttribute("aria-expanded", "false");
      }

      if (visibility === "false") {
        navcontainer.setAttribute("data-visible", "true");
        nav.setAttribute("data-visible", "true");
      } else {
        navcontainer.setAttribute("data-visible", "false");
        nav.setAttribute("data-visible", "false");
      }
    });
  }

  hamburger.addEventListener("click", () => {
    const currentState = hamburger.getAttribute("data-state");
    const visibility =
      nav.getAttribute("data-visible") &&
      navcontainer.getAttribute("data-visible");

    if (!currentState || currentState === "closed") {
      hamburger.setAttribute("data-state", "opened");
      hamburger.setAttribute("aria-expanded", "true");
    } else {
      hamburger.setAttribute("data-state", "closed");
      hamburger.setAttribute("aria-expanded", "false");
    }

    if (visibility === "false") {
      navcontainer.setAttribute("data-visible", "true");
      nav.setAttribute("data-visible", "true");
    } else {
      navcontainer.setAttribute("data-visible", "false");
      nav.setAttribute("data-visible", "false");
    }
  });
}

// Slider

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides, 3000);
}

// Scroll top button

function toggleScrollButton() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    toggleOn();
  } else {
    toggleOff();
  }
}

function toggleOn() {
  scrollButton.style.visibility = "visible";
  scrollButton.style.opacity = "0.7";
}

function toggleOff() {
  scrollButton.style.visibility = "hidden";
  scrollButton.style.opacity = "0";
}

scrollButton.addEventListener("click", () => {
  scrollTop();
});

function scrollTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Firefox, Chrome, Opera
}
