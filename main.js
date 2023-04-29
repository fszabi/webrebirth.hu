const header = document.body.querySelector(".primary-header");

const headerFlex = document.body.querySelector(".primary-header .flex-group");

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
}

function transparent() {
  header.style.backgroundColor = "transparent";
}

function changeAlignment() {
  if (window.innerWidth >= 560) {
    headerFlex.classList.remove("justify-center");
    headerFlex.classList.remove("flex-col");
    headerFlex.classList.add("justify-between");
    headerFlex.classList.add("flex-row");
  } else if (window.innerWidth < 560) {
    headerFlex.classList.remove("justify-between");
    headerFlex.classList.remove("flex-row");
    headerFlex.classList.add("justify-center");
    headerFlex.classList.add("flex-col");
  }
}
