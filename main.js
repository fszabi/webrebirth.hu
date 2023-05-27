// window.onscroll = function () {
//   toggleScrollButton();
//   navColor();
// };

window.onload = events;

const scrollWatcher = document.createElement("div");

const header = document.querySelector(".primary-header");

const scrollButton = document.querySelector(".btn--scroll-top");

const faders = document.querySelectorAll(".fade-in");

const sliders = document.querySelectorAll(".slide-in");

const lazyImages = document.querySelectorAll("[data-src]");

// Header

scrollWatcher.setAttribute("data-scroll-watcher", "");

header.before(scrollWatcher);

const headerObserver = new IntersectionObserver(
  (entries) => {
    console.log(entries);

    // Toggle header color and box-shadow

    header.classList.toggle("sticky", !entries[0].isIntersecting);
    header.classList.toggle("box-shadow-1", !entries[0].isIntersecting);
  },
  { rootMargin: "200px 0px 0px 0px" }
);

headerObserver.observe(scrollWatcher);

// Scroll top button

const scrollButtonObserver = new IntersectionObserver(
  (entries) => {
    console.log(entries);

    // Toggle scrollButton visibility

    scrollButton.classList.toggle("visible", !entries[0].isIntersecting);

    scrollButton.addEventListener("click", () => {
      scrollTop();
    });

    function scrollTop() {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Firefox, Chrome, Opera
    }
  },
  { rootMargin: "2000px 0px 0px 0px" }
);

scrollButtonObserver.observe(scrollWatcher);

// Fade in

const appearOptions = {
  threshold: 0,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Slide in

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// Lazy load images

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  } else {
    img.src = src;
  }
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

lazyImages.forEach((image) => {
  imgObserver.observe(image);
});

// Events on load

const navcontainer = document.querySelector(".primary-navigation-container");

const nav = document.querySelector(".primary-navigation");

const hamburger = document.querySelector(".btn--hamburger");

const navlinks = document.body.querySelectorAll(".primary-navigation a");

function events() {
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

  document
    .querySelectorAll("input[required], textarea[required]")
    .forEach((e) => {
      e.addEventListener("focusout", () => {
        e.style.borderColor = !!e.value
          ? "var(--clr-neutral-100)"
          : "var(--clr-primary-300)";
      });
    });

  document.querySelectorAll("input[type='email']").forEach((e) => {
    e.addEventListener("focusout", () => {
      e.style.borderColor = !!e.value.includes("@")
        ? "var(--clr-neutral-100)"
        : "var(--clr-primary-300)";
    });
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
