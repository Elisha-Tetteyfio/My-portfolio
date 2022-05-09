const mainHeader = document.querySelector('.mobile-menu');

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', function () {
  mainHeader.classList.toggle('mobile-menu-open');
});

const menuElemLink = document.querySelectorAll('.desktop li a');

menuElemLink.forEach((link) => {
  link.addEventListener('click', function () {
    mainHeader.classList.remove('mobile-menu-open');
  });
});
