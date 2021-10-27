function changeExperience(elementID) {
  let tabs = document.getElementsByClassName("about-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById(elementID).classList.add("active");
}
