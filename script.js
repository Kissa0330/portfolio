function toggleNav() {
  var menu = document.getElementById("js-menu");
  var hamburger = document.getElementById("js-hamburger");
  var blackBg = document.getElementById("js-black-bg");

  hamburger.addEventListener('click', function () {
    menu.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function () {
    menu.classList.remove('nav-open');
  });
}
toggleNav();


function mouseOver() {
  var contentlist = document.getElementById("js-contents");

  contentlist.addEventListener('mouseover', function (e) {
    e.target.classList.add('mouse-over');
  });
  contentlist.addEventListener('mouseout', function (del) {
    del.target.classList.remove('mouse-over');
  });
};
mouseOver();