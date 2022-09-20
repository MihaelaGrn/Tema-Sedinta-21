const dropDownButton = document.querySelector(".menu-icon");
const dropDownList = document.querySelector("nav ul");

dropDownButton.addEventListener("click", function () {
  dropDownList.classList.toggle("show-dropdown");
});
