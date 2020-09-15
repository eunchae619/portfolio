navWrapper = document.querySelector(".nav_wrapper");
categories = navWrapper.querySelectorAll("a");

// 스크롤시 add highlight 이벤트
window.addEventListener("scroll", () => {
  const wrappers = ["#intro", "#about", "#project", "#contact"];
  for (const wrapper of wrappers) {
    if (window.scrollY > document.querySelector(wrapper).offsetTop - 900) {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.classList.remove("jsMenuHighlight");
      });
      document
        .querySelector(`a[href="${wrapper}"]`)
        .classList.add("jsMenuHighlight");
    }
  }
  if (window.scrollY <= 50) {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.classList.remove("jsMenuHighlight");
    });
    document.querySelector(`a[href="#intro"]`).classList.add("jsMenuHighlight");
  }
});

// Smooth Scroll 부분
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
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
