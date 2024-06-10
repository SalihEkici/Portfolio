const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshhold: 1,
  rootMargin: "0px 0px -200px 0px",
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

document.addEventListener('DOMContentLoaded', function () {
  fetch('./src/data/projects.json')
    .then(response => response.json())
    .then(data => {
      const generateContributionsHTML = (contributions) => {
        return contributions.map(contribution => `<li>${contribution}</li>`).join('');
      };

      const modal = document.getElementById("myModal");
      const span = document.getElementsByClassName("close")[0];
      const projectTitle = document.getElementById("projectName");
      const projectBackground = document.getElementById("projectBackground");
      const technologies = document.getElementById("technologies");
      const contributions = document.getElementById("contributions");
      const remarks = document.getElementById("remarks");

      const openModal = (project) => {
        modal.style.display = "block";
        projectTitle.innerHTML = project.title;
        projectBackground.innerHTML = project.background;
        technologies.innerHTML = project.technologies;
        contributions.innerHTML = `<ul>${generateContributionsHTML(project.contributions)}</ul>`;
        remarks.innerHTML = project.remarks;
      };

      data.forEach(project => {
        const btn = document.getElementById(project.id);
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
