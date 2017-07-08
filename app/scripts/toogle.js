document.querySelector('#menu-btn').onclick = function() {
  document.querySelector('#menu-list').style.left = 0;
};
document.querySelector('#main-menu-close').onclick = function() {
  document.querySelector('#menu-list').style.left = '-100%';
};
