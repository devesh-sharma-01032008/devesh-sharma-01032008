// utilities varibale
const github_username = "devesh-sharma-01032008";
const email_address = "deveshsharma1009@gmail.com";

const manualsInformation = {
  1: {
    title: "1. Python Utilities",
    information: `This project contains some basic utilities which can be used to see news, weather conditions, etc from your terminal or console. It is purely written using <b>Python</b>. You can more read about it from <a class="read-more" href="#">HERE</a>.`,
  },
  2: {
    title: "2. Rgba Color Picker",
    information: `This project contains a color picker you can use to pick your color using a dragger and copy it to your <b>ClipBoard</b>. It is purely written using <b>HTML, CSS and JavaScript.</b>. You can more read about it from <a class="read-more" href="#">HERE</a>. You can also use it to pick color as it is hosted on  <a href="#" class="read-more">FireBase</a>`,
  },
  3: {
    title: "3. Motivational Quotes",
    information: `This project contains a simple dynamic website which gets infinite quotes from a third party api. This was just a simple project that I made accidently.
        `,
  },
};

const skills = {
  1: {
    name: "Python3",
    path: "python.png",
  },
  2: {
    name: "C",
    path: "c.png",
  },
  3: {
    name: "HTML",
    path: "html.png",
  },
  4: {
    name: "CSS",
    path: "css.png",
  },
  5: {
    name: "JavaScript",
    path: "javascript.png",
  },
  6: {
    name: "C++",
    path: "c++.png",
  },
  7: {
    name: "Java",
    path: "java.jpg",
  },
  8: {
    name: "React",
    path: "react.png",
  },
  9: {
    name: "Git",
    path: "git.png",
  },
  10: {
    name: "Kali",
    path: "kali.png",
  },
  11: {
    name: "Visual Studio Code",
    path: "vscode.png",
  },
  12: {
    name: "Flask",
    path: "flask.png",
  },
};

// DOM variables
const manualContainer = document.querySelector("#project-manuals");
const skillsContainer = document.querySelector("#skills");

const addManuals = () => {
  manualContainer.innerHTML = `<h1 class="heading">Projects On Github</h1>`;
  for (const key in manualsInformation) {
    manualContainer.innerHTML += `
    <div class="manual">
    <h2 class="project-name">
    ${manualsInformation[key].title}
    </h2>
    <p class="project-description">
    ${manualsInformation[key].information}
    </p>
    </div>
    `;
  }
};

function addSkills() {
  skillsContainer.innerHTML = `<h1>Skills and languages</h1>`;
  for (const key in skills) {
    skillsContainer.innerHTML += `
    <div class="skill-card">
    <img src="images/logos/${skills[key].path}" class="icon" alt="${skills[key].path}" />
    <h2 class="icon-name">${skills[key].name}</h2>
    </div>
    `;
  }
}

function addNavBar() {
  let header = document.querySelector("header");
  header.innerHTML += `
  <nav class="nav-bar ">
  <ul class="nav-bar-links-box">
  <li>
  <a class="nav-links" href="#">Home</a>
  </li>
  <li>
  <a class="nav-links" target="_blank" href="mailto:${email_address}"
  >Contact</a
  >
  </li>
  <li>
  <a class="nav-links" href="#skills">Skills</a>
  </li>
  <li>
  <a class="nav-links" href="#project-manuals"
  >Projects</a
  >
  </li>
  <li>
  <a
  target="_blank"
  class="nav-links link-button"
  href="https://github.com/${github_username}"
  >Github</a
  >
  </li>
  <li>
  <a class="nav-links link-button" href="#project-manuals"
  >Program Manuals</a
  >
  </li>
  </ul>
  </nav>
  `;
}

addNavBar();
addSkills();
addManuals();
