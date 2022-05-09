const mainHeader = document.querySelector(".mobile-menu")

const menuButton = document.getElementById("menu")
menuButton.addEventListener("click", function () {
  mainHeader.classList.toggle("mobile-menu-open")
})
