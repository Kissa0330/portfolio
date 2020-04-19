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

let currentElem = null;
let contentlist = document.getElementById("js-contents");
contentlist.onmouseover = function(event) {
  if (currentElem) {
    // currentElemがtrueの場合はここで処理を終わる
    return
  }
  let target = event.target.closest('.content');
  if(!target || !contentlist.contains(target))return;

  // ここでマウスがコンテントリストにいることが確定します d(^^)
  currentElem = target; 
  // ↑これによってif文でtrueが出る
    target.classList.add('mouse-over');
};


contentlist.onmouseout = function(event) {
  // currentElemがfalaseである場合はここで処理を終わる
  if(!currentElem) return;

  let relatedTarget = event.relatedTarget;
  if(relatedTarget){
    while(relatedTarget) {
      if(relatedTarget == currentElem) return;
      relatedTarget = relatedTarget.parentNode;
    }
  }
  currentElem.classList.remove('mouse-over');
  currentElem = null;
};