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
    information: `This project contains a simple dynamic website which gets infinite quotes from a third party api. This was just a simple project that I made accidently. You may add your styles and suggestion at <a class="read-more" href="https://github.com/devesh-sharma-01032008/Motivational-Quotes">Github</a>
        `,
  },
  4 : {
    title : "4. iBlog: Heaven for Bloggers",
    information:`This project is a single page application which uses nextjs framework and it is for the bloggers to share their knowledge and geeks who want to know very much.I would myself add blogs to it and allow everyody to upload a new blog with their credits. Although it has some features pending but would be completed very soon. You may also contribute your knowledge to it at <a class="read-more" href="https://github.com/devesh-sharma0=-01032008/iBlog">Github</a>`
  }
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
    name: "ReactJS",
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
  13:{
    name:"NextJS",
    path:"nextjs.png"
  },
  14:{
    name:"TypeScript",
    path:"typescript.png"
  },
  15:{
    name:"Mongo DB",
    path:"mongodb.png"
  },
  16:{
    name:"Windows",
    path:"windows.png"
  },
  17:{
    name:"Ubuntu",
    path:"ubuntu.png"
  },
  18:{
    name:"SQL",
    path:"sql.png"
  }
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
function addFooter() {
  let footer = document.querySelector("footer");
  footer.innerHTML += `
  <div class="useful-urls">
  <p>Some Useful Links:</p>
  <ul class="footer-links-box">
    <li>
      <a class="footer-links" target="_blank" href="mailto:${email_address}"
        >Contact</a
      >
    </li>
    <li>
      <a class="footer-links" href="#skills">Skills</a>
    </li>
    <li>
      <a class="footer-links" href="#project-manuals">Projects</a>
    </li>
    <li>
      <a
        target="_blank"
        class="footer-links"
        href="https://github.com/${github_username}"
        >Github</a
      >
    </li>
    <li>
      <a class="footer-links" href="#project-manuals"
        >Program Manuals</a
      >
    </li>
  </ul>
</div>
<div class="copy-right">&copy; Copyright Devesh 2022-23</div>
  `;
}


addNavBar();
addSkills();
addManuals();
addFooter();

function toggleMenu(){
  const nav_bar = document.querySelector(".nav-bar-links-box")
  if(nav_bar.style.left == "0%"){
    nav_bar.style.left = "-100%"
  }else{

    nav_bar.style.left = "0%"
  }
}