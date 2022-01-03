// typing bio
const typingBio = document.querySelector(".bio-text");
const cursor = document.querySelector(".cursor");

const bioTexts = [
  "I'm Abdul-Malik Mohamed, a goal-driven individual who strives to achieve my goals. I push through my challenges with patience and I try my best to display what lies within my heart by my actions. I will go above and beyond when asked to lend a hand. I try to vibrate positive energy with everybody I meet, I believe that the energy you give is the energy you get. On a personal level, I'm an outdoors person, who is a Thalassophile and a Montivagent by heart, so I love walking on mountains and ending up at the sea.",
  "I completed a networking course in 2020 and got a taste of the IT industry. While learning about how networks pinged through to other networks, I wondered what makes up the information we were pinging through and how that content was created, and that is where my interest in programming and web development began. This curiosity lead me to where I am today.",
];
const typingDelay = 50;
const erasingDelay = 10;
const newBioDelay = 3000;
let newBio = 0;
let bio = 0;

const typingMyBio = () => {
  if (bio < bioTexts[newBio].length) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typingBio.textContent += bioTexts[newBio].charAt(bio);
    bio++;
    setTimeout(typingMyBio, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newBioDelay);
  }
};

const erase = () => {
  if (bio > 0) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typingBio.textContent = bioTexts[newBio].substring(0, bio - 1);
    bio--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove("typing");
    newBio++;
    if (newBio >= bioTexts.length) newBio = 0;
    setTimeout(typingMyBio, typingDelay + 1100);
  }
};
window.addEventListener("load", function () {
  if (bioTexts.length) setTimeout(typingMyBio, newBioDelay + 50);
});
