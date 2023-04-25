const header = document.body.querySelector(".primary-header");

const navlink = document.body.querySelectorAll(".primary-navigation a");

const logo = document.body.querySelector(".logo");

window.onscroll = function () {
  navColor();
};

function navColor() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    white();
  } else {
    transparent();
  }
}

function white() {
  header.style.backgroundColor = "white";

  for (var i = 0; i < navlink.length; i++) {
    navlink[i].style.color = "black";
  }

  logo.style.filter =
    "invert(99%) sepia(1%) saturate(2%) hue-rotate(313deg) brightness(106%) contrast(100%)";
}

function transparent() {
  header.style.backgroundColor = "transparent";

  for (var i = 0; i < navlink.length; i++) {
    navlink[i].style.color = "white";
  }

  logo.style.filter =
    "invert(0%) sepia(100%) saturate(7441%) hue-rotate(178deg) brightness(109%) contrast(114%)";
}

// homeButton.addEventListener("click", () => {
//   scrollTop();
// });

// function scrollTop() {
//   document.body.scrollTop = 0; // Safari
//   document.documentElement.scrollTop = 0; // Firefox, Chrome, Opera
// }
