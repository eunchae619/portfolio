navWrapper = document.querySelector(".nav_wrapper");
categories = navWrapper.querySelectorAll("a");
projects = document.querySelectorAll(".project_one_set");

// project hover 이벤트
for (const project of projects) {
  project.addEventListener("mouseover", () => {
    project.classList.add("move_bottom_20");
  });

  project.addEventListener("mouseout", () => {
    project.classList.remove("move_bottom_20");
  });

  project.addEventListener("click", () => {
    project.querySelector(".project_hidden_detail").classList.add("set_flex");

    setTimeout(() => {
      project
        .querySelector(".project_hidden_detail")
        .classList.add("set_opacity_1");
    }, 100);
  });

  project.querySelector(".jsCloseBox").addEventListener("click", () => {
    console.log("zz");
    project
      .querySelector(".project_hidden_detail")
      .classList.add("set_opacity_0");
    setTimeout(() => {
      project
        .querySelector(".project_hidden_detail")
        .classList.remove("set_opacity_1", "set_opacity_0", "set_flex");
    }, 500);
  });
}

// intro 높이설정
document
  .querySelector("#intro")
  .setAttribute("style", `height: ${window.innerHeight + 150}px`);

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
document.querySelectorAll('.nav_wrapper a[href^="#"]').forEach((anchor) => {
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
