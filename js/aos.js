AOS.init();

// passion board
let passionBoardData = [
  { icon: `<i class="icon fas fa-football-ball"></i>Rugby` },
  {
    icon: `<a href="https://www.instagram.com/abdul_malik_mohamed/" target="_blank">
            <i class="icon fas fa-hiking icon-tooltip"> <span class="icon-tooltip-text">click me</span></i>   
        </a> Hiking`,
  },
  { icon: `<i class="icon fas fa-running"></i>Running` },
  { icon: `<i class="icon fas fa-swimmer"></i>Swimming` },
  { icon: `<i class="icon fas fa-umbrella-beach"></i>Beaching` },
  { icon: `<i class="icon fas fa-dumbbell"></i>Weight Lifting` },
  { icon: `<i class="icon fas fa-gamepad"></i>Gaming` },
  { icon: `<i class="icon fas fa-film"></i>Watching Movies` },
];

function createdIcon(hobbies) {
  let createIcon = `
        <div    
          data-aos="flip-left"              
          data-aos-easing="ease-out-cubic"              
          data-aos-duration="1000"              
          class="passion-icon">
              ${hobbies.icon}            
        </div>
        `;
  return createIcon;
}

function showHobbies() {
  let hobbiesIconsContainer = document.querySelector(
    ".passion-icons-container"
  );
  for (hobbies of passionBoardData) {
    let icon = createdIcon(hobbies);
    hobbiesIconsContainer.innerHTML += icon;
  }
}

showHobbies();

// soft skills

let softSkillsData = [
  { icon: `<i class="icon fas fa-search"></i>Attention to detail` },
  { icon: `<i class="icon fas fa-tasks"></i>Multitasking` },
  { icon: `<i class="icon far fa-lightbulb"></i>Creativity` },
  { icon: `<i class="icon fas fa-tachometer-alt"></i>Working under pressure` },
  { icon: `<i class="icon far fa-comments"></i>Communication skills` },
  { icon: `<i class="icon far fa-edit"></i>Taking orders` },
  { icon: `<i class="icon fas fa-clipboard-check"></i>Completing tasks` },
  {
    icon: `<i class="icon fas fa-assistive-listening-systems"></i>following instructions`,
  },
];

function createdIcon(softSkills) {
  let createIcon = `
      <div    
        data-aos="flip-left"              
        data-aos-easing="ease-out-cubic"              
        data-aos-duration="1000"              
        class="skill-icon">
            ${softSkills.icon}            
        </div>
      `;
  return createIcon;
}

function showSoft() {
  let skillsIconsContainer = document.querySelector(".soft");
  for (softSkills of softSkillsData) {
    let icon = createdIcon(softSkills);
    skillsIconsContainer.innerHTML += icon;
  }
}

showSoft();

// technical skills

let technicalSkillsData = [
  { icon: `<i class="icon fab fa-html5"></i>HTML` },
  { icon: `<i class="icon fab fa-css3-alt"></i>CSS` },
  { icon: `<i class="icon fab fa-js-square"></i>JAVASCRIPT` },
  { icon: `<i class="icon fab fa-python"></i>PYTHON` },
  { icon: `<i class="icon devicon-mysql-plain"></i>MySQL` },
  {
    icon: `<i class="icon devicon-flask-original"></i>Flask`,
  },
  {
    icon: `<i class="icon devicon-vuejs-plain"></i>VueJS`,
  },
  {
    icon: `<i class="icon devicon-postgresql-plain"></i>PostgreSQL`,
  },
  {
    icon: `<i class="icon devicon-mongodb-plain"></i>MongoDB`,
  },
  {
    icon: `<i class="icon devicon-nodejs-plain"></i>NodeJS`,
  },
  { icon: `<i class="icon fas fa-camera"></i> PHOTOGRAPHY` },
];

function createdIcon(techSkills) {
  let createIcon = `
        <div    
          data-aos="flip-left"              
          data-aos-easing="ease-out-cubic"              
          data-aos-duration="1000"              
          class="skill-icon">
              ${techSkills.icon}            
          </div>

          
        `;
  return createIcon;
}

function showTech() {
  let skillsIconsContainer = document.querySelector(".technical");
  for (techSkills of technicalSkillsData) {
    let icon = createdIcon(techSkills);
    skillsIconsContainer.innerHTML += icon;
  }
}

showTech();
