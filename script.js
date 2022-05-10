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
  (project1 = {
    title: 'Multi - Post stories',
    image: '',
    imgAlt: '',
    description: '',
    liveDemo: '',
    source: '',
    langs:
      '<li class="project-languages-1">html</li><li class="project-languages-1">css</li>',
  }),
  (project2 = {
    title: 'Multi - Post stories',
    image: '',
    imgAlt: '',
    description: '',
    liveDemo: '',
    source: '',
    langs:
      '<li class="project-languages-1">html</li><li class="project-languages-1">css</li>',
  }),
  (project3 = {
    title: 'Multi - Post stories',
    image: '',
    imgAlt: '',
    description: '',
    liveDemo: '',
    source: '',
    langs:
      '<li class="project-languages-1">html</li><li class="project-languages-1">css</li>',
  }),
  (project4 = {
    title: 'Multi - Post stories',
    image: '',
    imgAlt: '',
    description: '',
    liveDemo: '',
    source: '',
    langs:
      '<li class="project-languages-1">html</li><li class="project-languages-1">css</li>',
  }),
];

const recentWorkContainer = document.getElementById('recent-works');
const recentWorkHeader = document.createElement('h2');
const rwGridContainer = document.createElement('div');
rwGridContainer.classList.add('recent-works-grid');

let projectHTMLcontent = '';

projects.forEach((el, index) => {
  projectHTMLcontent += `
  <div class="works" id="work-1">
  <div class="desktop-layout ${index % 2 === 0 ? 'second-works' : ''} ">
      <img src="${el.image}" alt="${el.imgAlt}">
      <div class="desktop-layout-1">
          <h4>${el.title}</h4>
          <p>${el.description}
          </p>
          <ul class="project-languages">
              ${el.langs}
          </ul>
          <div class="n1"><button data-project="${index}">See Project</button></div>
      </div>
  </div>
</div>
  `;
});

rwGridContainer.innerHTML = projectHTMLcontent;

recentWorkHeader.innerText = 'MY RECENT WORKS';

recentWorkContainer.prepend(rwGridContainer);
recentWorkContainer.prepend(recentWorkHeader);

const moreButtons = document.querySelectorAll('.n1 button');

moreButtons.forEach((element) => {
  element.addEventListener('click', () => {
    console.log(element.dataset.project);
    //   mainHeader.classList.toggle('details-open');
  });
});
