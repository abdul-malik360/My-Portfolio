let projects = [
  {
    imgURL: "../images/projects/timeline.PNG",
    imgALT: "My Timeline",
    title: "My Project Title 45",
    techStack: "HTML/CSS",
    description: "lorem ipsum JS",
    githubURL: "#",
    liveProjectURL: "#",
  },
  {
    imgURL: "../images/projects/contactform.PNG",
    imgALT: "My Project 1",
    title: "My Project Title 1",
    techStack: "HTML/CSS",
    description: "lorem ipsum hello world",
    githubURL: "#",
    liveProjectURL: "#",
  },
  {
    imgURL: "../images/projects/calculator.png",
    imgALT: "My Project 2",
    title: "My Project Title 2",
    techStack: "JavaScript",
    description: "lorem ipsum Python",
    githubURL: "#",
    liveProjectURL: "#",
  },

  {
    imgURL: "../images/projects/bmicalculator.PNG",
    imgALT: "This is cool",
    title: "Some Title",
    techStack: "Python",
    description: "I made this",
    githubURL: "#",
    liveProjectURL: "#",
  },
  {
    imgURL: "../images/projects/sneakersite.PNG",
    imgALT: "My Project 4",
    title: "My Project Title 4",
    techStack: "HTML/CSS",
    description: "lorem ipsum",
    githubURL: "#",
    liveProjectURL: "#",
  },
  {
    imgURL: "../images/projects/weatherapp.PNG",
    imgALT: "My Project 5",
    title: "My Project Title 5",
    techStack: "Python",
    description: "This is dynamic",
    githubURL: "#",
    liveProjectURL: "#",
  },
  {
    imgURL: "../images/projects/testimonials.PNG",
    imgALT: "My Project 6",
    title: "My Project Title 6",
    techStack: "HTML/CSS",
    description: "I just created this",
    githubURL: "#",
    liveProjectURL: "#",
  },
  {
    imgURL: "../images/projects/adding.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "Python",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
  },

  {
    imgURL: "../images/projects/projectscard.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "HTML/CSS",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
  },

  {
    imgURL: "../images/projects/temperatureconverter.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "Python",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
  },

  {
    imgURL: "../images/projects/patientapp.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "Python",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
  },

  {
    imgURL: "../images/projects/pokedex.png",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "JavaScript",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
  },

  {
    imgURL: "../images/projects/errorhandlingapp.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "Python",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
  },

  {
    imgURL: "../images/projects/",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "JavaScript",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
  },
];

function createCard(card) {
  let createdCard = `<div class="project-card" techStack=${card.techStack} >
        <div class="img-container">
        <img src="${card.imgURL}" alt="${card.imgALT}">
        </div>
        
        
      </div>
    `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".project-container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");

  if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }

  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
