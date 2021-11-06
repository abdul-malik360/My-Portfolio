let projects = [
  {
    imgURL: "../images/projects/timeline.PNG",
    imgALT: "My Timeline",
    title: "My Project Title 45",
    techStack: "HTML/CSS",
    description: "lorem ipsum JS",
    githubURL: "#",
    liveProjectURL: "#",
    id: "timeline-modal",
  },
  {
    imgURL: "../images/projects/contactform.PNG",
    imgALT: "My Project 1",
    title: "My Project Title 1",
    techStack: "HTML/CSS",
    description: "lorem ipsum hello world",
    githubURL: "#",
    liveProjectURL: "#",
    id: "contact-modal",
  },
  {
    imgURL: "../images/projects/calculator.png",
    imgALT: "My Project 2",
    title: "My Project Title 2",
    techStack: "JavaScript",
    description: "lorem ipsum Python",
    githubURL: "#",
    liveProjectURL: "#",
    id: "calculator-modal",
  },
  {
    imgURL: "../images/projects/bmicalculator.PNG",
    imgALT: "This is cool",
    title: "Some Title",
    techStack: "Python",
    description: "I made this",
    githubURL: "#",
    liveProjectURL: "#",
    id: "bmi-modal",
  },
  {
    imgURL: "../images/projects/sneakersite.PNG",
    imgALT: "My Project 4",
    title: "My Project Title 4",
    techStack: "HTML/CSS",
    description: "lorem ipsum",
    githubURL: "#",
    liveProjectURL: "#",
    id: "sneaker-modal",
  },
  {
    imgURL: "../images/projects/weatherapp.PNG",
    imgALT: "My Project 5",
    title: "My Project Title 5",
    techStack: "Python",
    description: "This is dynamic",
    githubURL: "#",
    liveProjectURL: "#",
    id: "weather-modal",
  },
  {
    imgURL: "../images/projects/testimonials.PNG",
    imgALT: "My Project 6",
    title: "My Project Title 6",
    techStack: "HTML/CSS",
    description: "I just created this",
    githubURL: "#",
    liveProjectURL: "#",
    id: "testimonial-modal",
  },
  {
    imgURL: "../images/projects/adding.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "Python",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
    id: "adding-modal",
  },
  {
    imgURL: "../images/projects/projectscard.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "HTML/CSS",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
    id: "project-modal",
  },
  {
    imgURL: "../images/projects/temperatureconverter.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "Python",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
    id: "converter-modal",
  },
  {
    imgURL: "../images/projects/patientapp.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "Python",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
    id: "patient-modal",
  },
  {
    imgURL: "../images/projects/pokedex.png",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "JavaScript",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
    id: "pokedex-modal",
  },
  {
    imgURL: "../images/projects/errorhandlingapp.PNG",
    imgALT: "My Project 7",
    title: "My Project Title 7",
    techStack: "Python",
    description: "Pokedex",
    githubURL: "#",
    liveProjectURL: "#",
    id: "error-modal",
  },
];

function projectPicture(image) {
  let projectPicture = `<div class="project-card" techStack=${image.techStack} >
        <div class="img-container">
        <img onclick="toggleModal('${image.id}')" src="${image.imgURL}" alt="${image.imgALT}">
        </div>
      </div>
      
    `;
  return projectPicture;
}

function showPictures() {
  let projectContainer = document.querySelector(".project-container");
  for (picture of projects) {
    let image = projectPicture(picture);
    projectContainer.innerHTML += image;
  }
}

showPictures();

function createModal(modal) {
  let createdModal = `
  <div id="${modal.id}" class="modal">
    <div class="back-drop">

      <img class="pic" src="${modal.imgURL}" />
      <h4>${modal.title}</h4>
      <h6>${modal.techStack}</h6>
      <button onclick="toggleModal('${modal.id}')">close</button>

    </div>
</div>
  `;
  return createdModal;
}

function showModal() {
  let modalContainer = document.querySelector(".modal-container");
  for (modal of projects) {
    let card = createModal(modal);
    modalContainer.innerHTML += card;
  }
}

showModal();

function toggleModal(modalID) {
  document.getElementById(modalID).classList.toggle("active");
}

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
