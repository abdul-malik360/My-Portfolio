// typing my name
let i = 0,
  myName = "Abdul-Malik Mohamed.";

const typingName = () => {
  if (i < myName.length) {
    document.getElementById("heading-typed").innerHTML += myName.charAt(i);
    i++;
    setTimeout(typingName, 90);
  }
};

typingName();

// typing home statement
const typingStatement = document.querySelector(".statement-typed");
const cursor = document.querySelector(".cursor");

const messages = [
  "an Aspiring Full Stack Developer.",
  "based in Mitchell's Plain, Cape Town.",
  "Excited to meet YOU!",
];
const typingDelay = 100;
const erasingDelay = 20;
const newMessageDelay = 900;
let newMessage = 0;
let message = 0;

const typingMessages = () => {
  if (message < messages[newMessage].length) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typingStatement.textContent += messages[newMessage].charAt(message);
    message++;
    setTimeout(typingMessages, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, newMessageDelay);
  }
};

const erase = () => {
  if (message > 0) {
    if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typingStatement.textContent = messages[newMessage].substring(
      0,
      message - 1
    );
    message--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove("typing");
    newMessage++;
    if (newMessage >= messages.length) newMessage = 0;
    setTimeout(typingMessages, typingDelay + 1100);
  }
};
window.addEventListener("load", function () {
  if (messages.length) setTimeout(typingMessages, newMessageDelay + 250);
});
