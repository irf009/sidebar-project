const navBtn = document.querySelector(`.nav-btn`);
const closeBar = document.querySelector(`.fa-times`);
const sideBar = document.querySelector(`.sidebar`);

navBtn.addEventListener(`click`, function (e) {
  sideBar.classList.toggle(`show-bar`);
});
closeBar.addEventListener(`click`, function (e) {
  sideBar.classList.remove(`show-bar`);
});
