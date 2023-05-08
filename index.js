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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var projectTitle = document.getElementById("projectName");
var projectBackground = document.getElementById("projectBackground");
var technologies = document.getElementById("technologies");
var contributions = document.getElementById("contributions");
Array.from(btns).forEach(function (btn) {
  // code to execute on each button
  btn.onclick = function () {
    modal.style.display = "block";
    switch (btn.id) {
      case "pokemonBtn":
        projectTitle.innerHTML = "Pokemon Database";
        projectBackground.innerHTML = `For my course "DevOps and Security" we were given a case study
        where we had to choose from 3 different cases. I chose to make a desktop application using WPF and 
        .Net. This case study was an individual project. I decided to make my own pokeDex, this pokeDex would be
        able add, view, update and delete Pokemon which were added to the database. During the project, I learned how
        to work with WPF, .Net and SQLite. I was also able to learn about github workflows and auto deployment.`;
        technologies.innerHTML = ".Net, WPF";
        contributions.innerHTML = `
        <ul>
        <li>Make a github pipeline to automatically build a new artifact when a new version is pushed.</li>
        <li>Make the UI and the code behind</li>
        <li>Write the report for the case study</li>
        </ul>
        `;

        break;
      case "verandaBtn":
        projectTitle.innerHTML = "Veranda&amp;Beyond";
        projectBackground.innerHTML = `This is a group project that I have done along side with my brother Emre Ekici. 
        We were asked to make a website that functions as a catalogue for porches, carports, sliding glass door systems and awnings.
        `;
        technologies.innerHTML = `HTML, CSS, Javascript`;
        contributions.innerHTML = `I helped to implement:
        <ul>
        <li>Designing the UI and implementing the javascript for the website</li>
        <li>Forms for customers to design their own personal porches</li>
        <li>Search engine optimization</li>
        <li>Implementing language support for Dutch and English</li>
        </ul>
          
        `;
        break;
      case "jobApplicationBtn":
        projectTitle.innerHTML = "Job Application Training Booking System";
        projectBackground.innerHTML = `A group project which we have taken on during our second semester of our second year
        The goal of this project was to create a booking application which would be used by students to book mock interviews with companies. 
        This project helped me to learn about working in an agile environment, working within a team. `;
        technologies.innerHTML = "PHP, Laravel";
        contributions.innerHTML = `
          I contributed to the project by
          <ul>
          <li>Creating the livewire components</li>
          <li>Setting up routing and middleware</li>
          <li>Managing and viewing companies and announcement functionalities.</li>
          <li>Helped to implement dual language support and user support to pages.</li>
          </ul>
        `;
        break;
      case "staffManagementBtn":
        projectTitle.innerHTML =
          "Staff Management System Requirements Analysis";
        projectBackground.innerHTML = `A group project that was meant to help us learn about requirements analysis. We were tasked
        with meeting with a client to go over a potential project. The main premise of this project was to create a system that would be used by an au pair, an elderly
        couple and other people. This application would serve as a system that can be used as a planner for the au pair and the elderly couple. Workers have the ability to upload
        invoices and schedule times of when they would be able to work while the au pair has more administrative abilities. During this project we made the use case diagram and prototypes for the client.
        This project helped me learn to work in a team setting, think of edge cases and use Axure to make prototypes.`;
        technologies.innerHTML = "UML, Axure";
        contributions.innerHTML = `I helped to:
        <ul>
        <li>Make the use case diagram in StarUML</li>
        <li>Make the prototypes for manage meals, edit users, edit profile and create users.</li>
        </ul>`;
        break;
    }
  };
});

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
