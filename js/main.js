navWrapper = document.querySelector(".nav_wrapper");
categories = navWrapper.querySelectorAll("a");

// Smooth Scroll 부분
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.classList.remove("jsMenuHighlight");
    });
    anchor.classList.add("jsMenuHighlight");
    navWrapper.classList.remove("set_navWrapper_spread");
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Menu 부분
const clickMenu = () => {
  if (navWrapper.classList.contains("set_navWrapper_spread")) {
    navWrapper.classList.remove("set_navWrapper_spread");
  } else {
    navWrapper.classList.add("set_navWrapper_spread");
  }
};
