// opening and closing the menu
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', openMenu);

function openMenu() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
}

//reviews
var reviewsItems = document.querySelectorAll('.reviews_item');
var currentItem = 0;
var btnLeft = document.querySelector('.reviews__btn--left');
var btnRight = document.querySelector('.reviews__btn--right');
checkBtnState(currentItem);
btnLeft.onclick = function(e) {
  if (currentItem == 0) return;
  reviewsItems[currentItem].style.display = 'none';
  currentItem--;
  reviewsItems[currentItem].style.display = 'block';
  checkBtnState(currentItem);
}
btnRight.onclick = function(e) {
  if (currentItem == reviewsItems.length - 1) return;
  reviewsItems[currentItem].style.display = 'none';
  currentItem++;
  reviewsItems[currentItem].style.display = 'block';
  checkBtnState(currentItem);
}

function checkBtnState(currentItem) {
  if (currentItem == 0) {
    btnLeft.disabled = true;
  } else {
    btnLeft.disabled = false;
  }
  if (currentItem == reviewsItems.length - 1) {
    btnRight.disabled = true;
  } else {
    btnRight.disabled = false;
  }
}

//map
ymaps.ready(init);
var myMap, 
    myPlacemark;

function init() { 
  myMap = new ymaps.Map(document.querySelector('.contacts__map'), {
      center: [59.938631, 30.323055],
      zoom: 16,
      controls: []
  });

  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/icon-map-pin.svg',
    iconImageSize: [66, 101],
    iconImageOffset: [-35, -100]
  });

myMap.geoObjects.add(myPlacemark);
}