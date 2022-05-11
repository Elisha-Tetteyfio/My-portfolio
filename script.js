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

/// ///////////////////////////////////////////

const projects = [
  {
    title: 'Personal Project',
    image: 'Works/work1.png',
    imgAlt: 'First project image',
    description: `This is a project with CSS. In this project, I created a replica of
      <a href="https://jolly-kalam-23776e.netlify.app/cssgridresponsive/#section-b"> this webpage</a>.
      Feel free to checkout the link and compare it with the final work.`,
    liveDemo: '',
    source: '',
    langs:
      '<li class="project-languages-1">html</li><li class="project-languages-1">css</li>',
  },
  {
    title: 'Microverse Project 1',
    image: 'Works/work2.png',
    imgAlt: 'Second project image',
    description: `This is a project with CSS. It was an introduction to the
      use of linters and the process required for a code review.`,
    liveDemo: '',
    source: '',
    langs:
      '<li class="project-languages-1">html</li><li class="project-languages-1">css</li>',
  },
  {
    title: 'Personal portfolio project',
    image: 'Works/work3.png',
    imgAlt: 'Third project image',
    description: `This project was designed by Microverse to aid new students design their peronal portfolio.
      The basic languages for this project were HTML and CSS.`,
    liveDemo: '',
    source: '',
    langs:
      '<li class="project-languages-1">html</li><li class="project-languages-1">css</li>',
  },
  {
    title: 'Multi - Post stories',
    image: 'Works/work4.png',
    imgAlt: '',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required.
    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
    standard dummy text.`,
    liveDemo: '',
    source: '',
    langs:
      '<li class="project-languages-1">html</li><li class="project-languages-1">css</li>',
  },
];

const recentWorkContainer = document.getElementById('recent-works');
const recentWorkHeader = document.createElement('h2');
const rwGridContainer = document.createElement('div');
rwGridContainer.classList.add('recent-works-grid');

let projectHTMLcontent = '';

projects.forEach((el, index) => {
  projectHTMLcontent += `
  <div class="works" id="work-1">
  <div class="desktop-layout ${index % 2 === 1 ? 'second-works' : ''} ">
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
// const details = document.createElement('div');

const createModal = (index) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="worksDetails" id="work-11">
  <div class="desktop-layout-details ${index % 2 === 1 ? 'second-works' : ''} ">
  <img src = "Icons/Close.svg" alt="close" id="closeDetails">
  <h4>${index.title}</h4>
      <img src="${index.image}" alt="${index.imgAlt}">
      <div class="desktop-layout-1-details">
          <p>${
  index.description
} + Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
          took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing 
          and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.
          </p>
          <ul class="project-languages-details">
              ${index.langs}
          </ul>
          <div class="liveDemo"><button>See live<img src="Icons/seeLive.svg"></button></div>
          <div class="source"><button>See source<img src="Icons/git.svg"></button></div>
      </div>
  </div>
</div>`,
  );
};

moreButtons.forEach((element) => {
  element.addEventListener('click', () => {
    const index = projects[element.dataset.project];
    createModal(index);
    document.body.style.overflow = 'hidden';
    document.getElementById('closeDetails').addEventListener('click', () => {
      document.querySelector('.worksDetails').remove();
      document.body.style.overflow = 'unset';
    });
  });
});

const valid = document.getElementById("client-email");
document.getElementById('submit-button').addEventListener('click', (e) => {
  if(valid.value != valid.value.toLowerCase()){
    e.preventDefault();
  }
})

