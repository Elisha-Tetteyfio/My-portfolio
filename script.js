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

const projects = [
  {
    title: 'To do list',
    image: 'Works/toDoList.png',
    imgAlt: 'First project image',
    description: `This is an editable to-do list. You can update it with your daily scheduled activities to 
      keep yourself reminded of what to do, you can also remove the activities when completed.`,
    liveDemo: 'https://elisha-tetteyfio.github.io/To-do-list1/',
    source: 'https://github.com/Elisha-Tetteyfio/To-do-list1.git',
    langs:
      `<li class="project-languages-1">html</li>
      <li class="project-languages-1">css</li>
      <li class="project-languages-1">javascript</li>`,
  },
  {
    title: 'MeetMentors Equip Program',
    image: 'Works/meetMentors.png',
    imgAlt: 'Second project image',
    description: `This is a website designed for <a href="www.meetmentors.org">MeetMentors</a>'s Equip program.
    Further details of the event can be seen in the live demo link.`,
    liveDemo: 'https://elisha-tetteyfio.github.io/First-Capstone-Project/',
    source: 'https://github.com/Elisha-Tetteyfio/First-Capstone-Project.git',
    langs:
    `<li class="project-languages-1">html</li>
    <li class="project-languages-1">css</li>
    <li class="project-languages-1">javascript</li>`,
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

const createModal = (index) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="worksDetails" id="work-11">
  <div class="desktop-layout-details ${index % 2 === 1 ? 'second-works' : ''} ">
  <img src = "Icons/Close.svg" alt="close" id="closeDetails">
  <h4>${index.title}</h4>
      <img src="${index.image}" alt="${index.imgAlt}">
      <div class="desktop-layout-1-details">
          <p>${index.description}  The information entered in the to-do list is not altered when the page is
          refreshed or when internet connection is lost. <br>
          This project was designed with CSS, HTML and JavaScript. 
          </p>
          <ul class="project-languages-details">
              ${index.langs}
          </ul>
          <div class="liveDemo"><button>
            <a href="${index.liveDemo}">
              See live<img src="Icons/seeLive.svg">
            </a>
          </button></div>
          <div class="source"><button>
            <a href="${index.source}">
              See source<img src="Icons/git.svg">
            </a>
          </button></div>
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

const valid = document.getElementById('client-email');
const submitBtn = document.getElementById('submit-button');

const errorMsgContent = '<div class="email-error"><p>Email must be in lowercase</p></div>';
let checkIfError = false;
document.getElementById('submit-button').addEventListener('click', (e) => {
  if (checkIfError !== false) {
    checkIfError.remove();
  }

  if (valid.value !== valid.value.toLowerCase()) {
    submitBtn.insertAdjacentHTML('beforebegin', errorMsgContent);
    checkIfError = document.querySelector('.email-error');
    e.preventDefault();
  }
});
