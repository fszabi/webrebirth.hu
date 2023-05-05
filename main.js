const header = document.body.querySelector(".primary-header");

const headerFlex = document.body.querySelector(".primary-header .flex-group");

const navFlex = document.body.querySelector(".primary-navigation .flex-group");

const hamburger = document.querySelector(".hamburger");

const navlist = document.querySelector("ul");

const navlinks = document.body.querySelectorAll(".primary-navigation a");

const logo = document.body.querySelector(".logo");

window.onscroll = function () {
  navColor();
};

window.onload = changeAlignment;

window.addEventListener("resize", changeAlignment);

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

function changeAlignment() {
  if (window.innerWidth >= 940) {
    headerFlex.classList.remove("justify-center");
    headerFlex.classList.remove("flex-col");
    headerFlex.classList.add("justify-between");
    headerFlex.classList.add("flex-row");
  } else if (window.innerWidth < 940) {
    headerFlex.classList.remove("justify-between");
    headerFlex.classList.remove("flex-row");
    headerFlex.classList.add("justify-center");
    headerFlex.classList.add("flex-col");
  }

  if (window.innerWidth >= 500) {
    navFlex.classList.remove("flex-col");
    navFlex.classList.add("flex-row");
  } else if (window.innerWidth < 500) {
    navFlex.classList.remove("flex-row");
    navFlex.classList.add("flex-col");
  }
}

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
