let projects = [
  {
    imgURL: "../images/projects/timeline.PNG",
    imgALT: "My Timeline",
    title: "Timeline",
    techStack: "HTML/CSS",
    description: "A timeline of work experience using AOS(Animate On Scroll).",
    githubURL: "https://github.com/abdul-malik360/My_Timeline",
    liveProjectURL: "https://youthful-ride-5ab649.netlify.app/",
    id: "timeline",
  },
  {
    imgURL: "../images/projects/contactform.PNG",
    imgALT: "A contact form",
    title: "Contact Form",
    techStack: "HTML/CSS",
    description: "A contact form using Glassmorphism.com and Formspree.",
    githubURL: "https://github.com/abdul-malik360/Contact_Form",
    liveProjectURL: "https://pensive-jepsen-852132.netlify.app/",
    id: "contact-form",
  },
  {
    imgURL: "../images/projects/calculator.png",
    imgALT: "A javascript calculator",
    title: "Calculator",
    techStack: "JavaScript",
    description: "A calculator created using Javascript",
    githubURL: "https://github.com/abdul-malik360/jscalculator",
    liveProjectURL: "https://gallant-jackson-9fbc52.netlify.app/",
    id: "js-calculator",
  },
  {
    imgURL: "../images/projects/bmicalculator.PNG",
    imgALT: "A BMI Calculator",
    title: "BMI Calculator",
    techStack: "Python",
    description: "A BMI Calculator",
    githubURL:
      "https://github.com/abdul-malik360/BMI_Calculator/blob/main/BMI_Calculator.py",
    liveProjectURL:
      "https://replit.com/@abdulmalik360/BMICalculator#BMI_Calculator.py",
    id: "bmi-calculator",
  },
  {
    imgURL: "../images/projects/sneakersite.PNG",
    imgALT: "A sneaker site",
    title: "Sneaker Site",
    techStack: "HTML/CSS",
    description: "A sneaker site implementing the basics of a website",
    githubURL: "https://github.com/abdul-malik360/Sneaker_Site",
    liveProjectURL: "https://affectionate-bose-3983db.netlify.app/",
    id: "sneaker-site",
  },
  {
    imgURL: "../images/projects/weatherapp.PNG",
    imgALT: "A Weather app",
    title: "A Weather app",
    techStack: "Python",
    description: "A Weather app",
    githubURL:
      "https://github.com/abdul-malik360/requests/blob/main/challenge.py",
    liveProjectURL: "https://replit.com/@abdulmalik360/requests#challenge.py",
    id: "weather-app",
  },
  {
    imgURL: "../images/projects/testimonials.PNG",
    imgALT: "A testimonial slider",
    title: "Testimonials",
    techStack: "HTML/CSS",
    description:
      "A testimonial slider using a jQuery plugin called OWL Carousel.",
    githubURL: "https://github.com/abdul-malik360/my_testomonials",
    liveProjectURL: "https://confident-poincare-1690a0.netlify.app/",
    id: "testimonial-slider",
  },
  {
    imgURL: "../images/projects/adding.PNG",
    imgALT: "An Addition Calculator",
    title: "Addition Calculator",
    techStack: "Python",
    description:
      "Defining functions in python to create a program adding numbers",
    githubURL:
      "https://github.com/abdul-malik360/tkinter/blob/main/GUI_Task.py",
    liveProjectURL: "https://replit.com/@abdulmalik360/tkinter#GUI_Task.py",
    id: "adding-app",
  },
  {
    imgURL: "../images/projects/projectscard.PNG",
    imgALT: "A projects card",
    title: "Projects Card",
    techStack: "HTML/CSS",
    description:
      "A Project Card with links to all my completed projects using Glassmorphism.com.",
    githubURL: "https://github.com/abdul-malik360/project_card",
    liveProjectURL: "https://hardcore-minsky-0c2f2a.netlify.app/",
    id: "projects-card",
  },
  {
    imgURL: "../images/projects/temperatureconverter.PNG",
    imgALT: "A Temperature Converter",
    title: "Temperature Converter",
    techStack: "Python",
    description:
      "Defining functions in python to create a program converting temperatures fahrenheit to celcius and vice versa.",
    githubURL:
      "https://github.com/abdul-malik360/temperature_converter/blob/main/temp_converter-task.py",
    liveProjectURL:
      "https://replit.com/@abdulmalik360/Temperature-Converter#main.py",
    id: "temp-converter",
  },
  {
    imgURL: "../images/projects/patientapp.PNG",
    imgALT: "A patient app",
    title: "Sick Patient App",
    techStack: "Python",
    description: "A patient app",
    githubURL:
      "https://github.com/abdul-malik360/Creating_a_class/blob/main/oop_task.py",
    liveProjectURL:
      "https://replit.com/@abdulmalik360/Creatingaclass#oop_task.py",
    id: "patient-app",
  },
  {
    imgURL: "../images/projects/pokedex.png",
    imgALT: "A Pokedex",
    title: "Pokedex",
    techStack: "JavaScript",
    description: "A Pokedex using Javascript",
    githubURL: "https://github.com/abdul-malik360/Pokedex",
    liveProjectURL: "https://naughty-kowalevski-9438ab.netlify.app/",
    id: "pokedex",
  },
  {
    imgURL: "../images/projects/errorhandlingapp.PNG",
    imgALT: "",
    title: "Error Handling",
    techStack: "Python",
    description: "Savings Program",
    githubURL:
      "https://github.com/abdul-malik360/Error_Handling/blob/main/task.py",
    liveProjectURL: "https://replit.com/@abdulmalik360/ErrorHandling#task.py",
    id: "error-handling",
  },

  // {
  //   imgURL: "",
  //   imgALT: "",
  //   title: "",
  //   techStack: "",
  //   description: "",
  //   githubURL: "",
  //   liveProjectURL: "",
  //   id: "",
  // },
];

function projectPicture(image) {
  let projectPicture = `<div class="project-card" techStack=${image.techStack} onclick="toggleModal('${image.id}')" >
        <div class="img-container">
        <img src="${image.imgURL}" alt="${image.imgALT}">
        <div><i class="far fa-eye"></i></div>
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
  <div id="${modal.id}" class="modal" onclick="toggleModal('${modal.id}')">
    <div class="back-drop"> 
      <img class="modal-picture" src="${modal.imgURL}" />
      <div class="modal-content"> 
      
        <h4 class="modal-title">${modal.title}</h4>
        <h6 class="tech-stack">${modal.techStack}</h6>
        <p>${modal.description}</p>
        <div class="modal-link-buttons">
          <a href="${modal.githubURL}" target="_blank" class="modal-link-btn">Github</a>
          <a href="${modal.liveProjectURL}" target="_blank" class="modal-link-btn">Live</a>
        </div>
      
      </div> 
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
