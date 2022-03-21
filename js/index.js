// utilities varibale
const manualsInformation = {
    1: {
    title:"1. Python Utilities",
        information:`This project contains some basic utilities which can be used to see news, weather conditions, etc from your terminal or console. It is purely written using <b>Python</b>. You can more read about it from <a class="read-more" href="#">HERE</a>.`
    },
    2:{
        title: "2. Color Picker",
        information : `This project contains a color picker you can use to pick your color using a dragger and copy it to your <b>ClipBoard</b>. It is purely written using <b>HTML, CSS and JavaScript.</b>. You can more read about it from <a class="read-more" href="#">HERE</a>. You can also use it to pick color as it is hosted on  <a href="#" class="read-more">FireBase</a>`
    }
};

const skills = {
    1 : {
        name:"Python3",
    path : "images/python.jfif"
    },
    2 : {
        name: "C",
        path: "images/c.png"
    },
    3 : {
        name : "HTML",
        path: "images/html.png"
    },
    4 : {
        name : "CSS",
        path : "images/css.png"
    },
    5 : {
        name : "JavaScript",
        path : "images/js.jfif"
    },
    6 : {
        name : "C++",
        path : "images/c++.png"
    }
}

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
}

function addSkills(){
    skillsContainer.innerHTML = `<h1>Skills and languages</h1>`;
    for (const key in skills) {
        skillsContainer.innerHTML += `
        <div class="skill-card">
            <img src="${skills[key].path}" class="icon" />
            <h2 class="icon-name">${skills[key].name}</h2>
          </div>
        `
    }
}


addSkills();
addManuals();