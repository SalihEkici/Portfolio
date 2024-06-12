const faders = document.querySelectorAll(".fade-in");
const slideLefters = document.querySelectorAll(".slide-left");
const slideRighters = document.querySelectorAll(".slide-right");
new Typewriter("#typewriter", {
  strings: ["Full Stack Developer", "Programmer", "Continous Learner"],
  autoStart: true,
  loop: true,
});
const appearOptions = {
  threshhold: 1,
  rootMargin: "0px 0px -200px 0px",
};

const slideRightOnScroll = new IntersectionObserver(function (
  entries,
  slideRightOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slide-right-animation");
      slideRightOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

const slideLeftOnScroll = new IntersectionObserver(function (
  entries,
  slideLeftOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slide-left-animation");
      slideLeftOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

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

slideLefters.forEach((slideLefter) => {
  slideLeftOnScroll.observe(slideLefter);
});

slideRighters.forEach((slideRighter) => {
  slideRightOnScroll.observe(slideRighter);
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("./src/data/projects.json")
    .then((response) => response.json())
    .then((data) => {
      const modal = document.getElementById("myModal");
      const span = document.getElementsByClassName("close")[0];
      const carousel =
        this.documentElement.getElementsByClassName("carousel-inner")[0];
      const projectTitle = document.getElementById("projectName");
      const projectBackground = document.getElementById("projectBackground");
      const technologies = document.getElementById("technologies");
      const contributions = document.getElementById("contributions");
      const remarks = document.getElementById("remarks");
      const generateContributionsHTML = (contributions) => {
        return contributions
          .map((contribution) => `<li>${contribution}</li>`)
          .join("");
      };
      const generateCarouselImages = (images) => {
        const carouselItems = [];
        images.forEach((image, index) => {
          if (index === 0) {
            carouselItems.push(`<div class="carousel-item active" >
                    <img class="d-block w-100" src="${image}">
                </div>`);
          } else {
            carouselItems.push(`<div class="carousel-item" >
                  <img class="d-block w-100" src="${image}" style="height: 100%;">
              </div>`);
          }
        });
        return carouselItems.join("");
      };
      const openModal = (project) => {
        carousel.innerHTML = "";
        modal.style.display = "block";
        projectTitle.innerHTML = project.title;
        projectBackground.innerHTML = project.background;
        technologies.innerHTML = project.technologies;
        carousel.innerHTML = generateCarouselImages(project.images);
        console.log(carousel.innerHTML);
        contributions.innerHTML = `<ul>${generateContributionsHTML(
          project.contributions
        )}</ul>`;
        remarks.innerHTML = project.remarks;
      };

      data.forEach((project) => {
        const btn = document.getElementById(project.btnid);
        if (btn) {
          btn.onclick = () => openModal(project);
        }
      });

      span.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    });
});
