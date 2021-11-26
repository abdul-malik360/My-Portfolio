// education section

let educationData = [
  {
    title: "Matric",
    year: `<i class="far fa-calendar-alt"></i> 2017`,
    titleSpan: `<i class="fas fa-school"></i> Livingstone High School`,
    description: "Did secular studies, one of my subjects was Art.",
  },

  {
    title: "Hifth",
    year: `<i class="far fa-calendar-alt"></i> 2018-2019`,
    titleSpan: `<i class="fas fa-school"></i>Madrasatul Ahlil Quraan`,
    description:
      "Memorized some chapters of the Quraan, did a study of Arabic grammar and morphology and some translation of Arabic to English",
  },

  {
    title: "Networking",
    year: `<i class="far fa-calendar-alt"></i> 2020`,
    titleSpan: `<i class="fas fa-university"></i>College of Cape Town`,
    description:
      "Completed IT essentials course (ITE) and completed the Cisco Certified Network Associate course (CCNA).",
  },

  {
    title: "Web Developement",
    year: `<i class="far fa-calendar-alt"></i> 2021`,
    titleSpan: `<i class="fas fa-university"></i>Life Choices`,
    description:
      "Upskilled myself in coding. Languages included HTML, CSS, JAVASCRIPT and PYTHON",
  },
];

function createdEducationCard(education) {
  let createEducationCard = ` 
    <div class="resume-container">      
      <div class="resume-mini-container">
        <div class="resume-title-container">
          <h5 class="resume-title">${education.title}</h5>
          <h6 class="resume-year">${education.year}</h6>
        </div>
        <span class="resume-title-span">${education.titleSpan}</span>
        <p class="resume-description">${education.description}</p>
      </div>
    </div> 
    `;
  return createEducationCard;
}

function showEducation() {
  let educationContainer = document.querySelector(".show-education");
  for (education of educationData) {
    let testimonialCard = createdEducationCard(education);
    educationContainer.innerHTML += testimonialCard;
  }
}

showEducation();

// work section

let workData = [
  {
    title: "Casual Worker",
    year: `<i class="far fa-calendar-alt"></i> 2015`,
    titleSpan: `<i class="fas fa-drumstick-bite"></i>Mitchell's Butchery`,
    description:
      "Responsible for a number of tasks including packing freezers, putting products into packaging and onto shelfs, serving customers, packing of products for customers and delivering",
  },
  {
    title: "Waiter",
    year: `<i class="far fa-calendar-alt"></i> 2016–2021`,
    titleSpan: `<i class="fas fa-user-tie"></i>DALVIES/SPREME`,
    description:
      "Décor of venue. Providing excellent wait service to ensure client satisfaction. Delivering of food and beverages to guests and share additional information about the company and what they stand for. Cleaning up after event.",
  },

  {
    title: "Assistant photographer",
    year: `<i class="far fa-calendar-alt"></i> 2016–2020`,
    titleSpan: `<i class="fas fa-camera"></i>TIME PHOTOGRAPHY`,
    description:
      "The use of photographic equipment to capture events, objects and people. Setting up lights, stands and props. Frequently acting as a second shooter.",
  },

  {
    title: "Events Promotor/Usher",
    year: `<i class="far fa-calendar-alt"></i> 2016-2019`,
    titleSpan: `<i class="fas fa-music"></i>KHUDAAMUL ISLAAM`,
    description:
      "Generating sales prospects and increasing customer acquisition levels. Directing audience to rest rooms and refreshment stations. Maintaining the entrance area clean and ejecting audience who are causing trouble.",
  },

  {
    title: "Workshop Assistant",
    year: `<i class="far fa-calendar-alt"></i> 2016-2021`,
    titleSpan: `<i class="fas fa-wrench"></i>QAT MOTORS`,
    description:
      "Assist with servicing of vehicles. Packing tools and keeping work area clean. Pick up and delivering of vehicles. Pick up of parts needed for cars being serviced.",
  },

  {
    title: "Route Marshal",
    year: `<i class="far fa-calendar-alt"></i> 2020`,
    titleSpan: `<i class="fas fa-bicycle"></i>CAPE ARGUS BICYCLE TOUR`,
    description:
      " To ensure everything is running smoothly. To guide riders, ease their experience, help them avoid any difficulties and help them safely find their way around the course.",
  },

  {
    title: "Slaughterer",
    year: `<i class="far fa-calendar-alt"></i> 2018–Present`,
    titleSpan: `<i class="fas fa-tractor"></i>SUNRISE FARM`,
    description: "Part time butcher on a farm.",
  },

  {
    title: "Web Apps Intern",
    year: `<i class="far fa-calendar-alt"></i> 2021`,
    titleSpan: `<i class="fas fa-building"></i>LC Studio`,
    description: "Upskilling myself ",
  },
];

function createdWorkCard(work) {
  let createWorkCard = `
    <div class="resume-container">   
      <div class="resume-mini-container">
        <div class="resume-title-container">
          <h5 class="resume-title">${work.title}</h5>
          <h6 class="resume-year">${work.year}</h6>
        </div>
        <span class="resume-title-span">${work.titleSpan}</span>
        <p class="resume-description">${work.description}</p>
      </div>
    </div>     
    `;
  return createWorkCard;
}

function showWork() {
  let workContainer = document.querySelector(".show-work ");
  for (work of workData) {
    let workCard = createdWorkCard(work);
    workContainer.innerHTML += workCard;
  }
}

showWork();

// personal development section

let developmentData = [
  {
    title: "Brown Belt",
    year: `<i class="far fa-calendar-alt"></i> 2005-2012`,
    titleSpan: `<i class="fas fa-fist-raised"></i>Colorado Park Dojo`,
    description: "Kyokushin Karate is a form of martial artls",
  },

  {
    title: "Forward",
    year: `<i class="far fa-calendar-alt"></i> 2007-present`,
    titleSpan: `<i class="fas fa-football-ball"></i>Rangers Rugby Club`,
    description: "best forward 2011-2012",
  },

  {
    title: "All Rounder/ Wicket Keeper",
    year: `<i class="far fa-calendar-alt"></i> 2011-2015`,
    titleSpan: `<i class="fas fa-baseball-ball"></i>MP Eagles Cricket Club`,
    description: "Spin Bowler came in 5th in the batting row",
  },

  {
    title: "Volunteer",
    year: `<i class="far fa-calendar-alt"></i> 2016 – present`,
    titleSpan: `<i class="fas fa-hands-helping"></i>Various NPOs`,
    description: "Masjidul-Wadood, AMR Youth, MP Youth, A 2 Z Helping Hands",
  },
];

function createdDevelopmentCard(developement) {
  let createDevelopmentCard = ` 
    <div class="resume-container">    
      <div class="resume-mini-container">
        <div class="resume-title-container">
          <h5 class="resume-title">${developement.title}</h5>
          <h6 class="resume-year">${developement.year}</h6>
        </div>
        <span class="resume-title-span">${developement.titleSpan}</span>
        <p class="resume-description">${developement.description}</p>
      </div>
    </div>  
    `;
  return createDevelopmentCard;
}

function showDevelopment() {
  let developmentContainer = document.querySelector(".show-development");
  for (development of developmentData) {
    let developmentCard = createdDevelopmentCard(development);
    developmentContainer.innerHTML += developmentCard;
  }
}

showDevelopment();

// calling the owl carousel function for testimonials page

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    items: 1,
    margin: 0,
    loop: false,
    stagePadding: 50,
    autoplay: false,
  });
});

const changeExperience = (elementID) => {
  let tabs = document.getElementsByClassName("resume-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById(elementID).classList.add("active");
};
