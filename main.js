const header = document.querySelector(".primary-header");

const headerFlex = document.querySelector(".primary-header .flex-group");

const navcontainer = document.querySelector(".primary-navigation-container");

const nav = document.querySelector(".primary-navigation");

const navFlex = document.querySelector(".primary-navigation .flex-group");

const hamburger = document.querySelector(".btn--hamburger");

const navlist = document.querySelector("ul");

const navlinks = document.body.querySelectorAll(".primary-navigation a");

const logo = document.body.querySelector(".logo");

window.onscroll = function () {
  navColor();
};

// window.onload = changeAlignment;

// window.addEventListener("resize", changeAlignment);

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

// function changeAlignment() {
//   if (window.innerWidth >= 940) {
//     headerFlex.classList.remove("justify-center");
//     headerFlex.classList.remove("flex-col");
//     headerFlex.classList.add("justify-between");
//     headerFlex.classList.add("flex-row");
//   } else if (window.innerWidth < 940) {
//     headerFlex.classList.remove("justify-between");
//     headerFlex.classList.remove("flex-row");
//     headerFlex.classList.add("justify-center");
//     headerFlex.classList.add("flex-col");
//   }

//   if (window.innerWidth >= 500) {
//     navFlex.classList.remove("flex-col");
//     navFlex.classList.add("flex-row");
//   } else if (window.innerWidth < 500) {
//     navFlex.classList.remove("flex-row");
//     navFlex.classList.add("flex-col");
//   }
// }

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

// Hamburger menu

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
