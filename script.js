let navIcon = document.querySelector("#NavIcon");

let navList = document.querySelector("#navList");

navIcon.addEventListener("click", showNav);

let navBar = false;

function showNav() {
  navList.classList.toggle("showHide");
}

