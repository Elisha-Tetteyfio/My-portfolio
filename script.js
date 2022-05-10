// const { func } = require("assert-plus");
const mainHeader = document.querySelector('.mobile-menu');

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
  mainHeader.classList.toggle('mobile-menu-open');
});

const menuElemLink = document.querySelectorAll('.desktop li a');

menuElemLink.forEach((link) => {
  link.addEventListener('click', () => {
    mainHeader.classList.remove('mobile-menu-open');
  });
});

document.getElementById('menu-close').addEventListener('click', () => {
  mainHeader.classList.remove('mobile-menu-open');
});

//////////////////////////////////////////////
let projects = [
  project1 = {
    title : "Multi - Post stories",
    image : "",
    description: "",
    liveDemo: "",
    source: ""
  },
  project2 = {
    title : "Multi - Post stories",
    image : "",
    description: "",
    liveDemo: "",
    source: ""
  },
  project3 = {
    title : "Multi - Post stories",
    image : "",
    description: "",
    liveDemo: "",
    source: ""
  },
  project4 = {
    title : "Multi - Post stories",
    image : "",
    description: "",
    liveDemo: "",
    source: ""
  },
];



const moreButtons = document.querySelectorAll('n1');

moreButtons.forEach(element => {
  element.addEventListener('click', () => {
    mainHeader.classList.toggle('details-open');
  }); 
});
