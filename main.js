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
    white();
  } else {
    transparent();
  }
}

function white() {
  header.style.backgroundColor = "#fff";
  logo.style.color = "#5C5C5C";

  navlinks.forEach((navlink) => {
    navlink.style.color = "#5C5C5C";
  });
}

function transparent() {
  header.style.backgroundColor = "transparent";
  logo.style.color = "#fff";

  navlinks.forEach((navlink) => {
    navlink.style.color = "#fff";
  });
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
