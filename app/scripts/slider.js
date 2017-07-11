/**
 * Created by yurabazaliy on 09.07.17.
 */
var slider = document.querySelector('#promo');
var container = slider.querySelector('.promo__container');
var items = slider.querySelectorAll('.promo__item').length;
var controlLeft = slider.querySelector('.promo__control-left');
var controlRight = slider.querySelector('.promo__control-right');

container.style.width = items*100 + '%';
var maxMargin =

controlLeft.onclick = function() {
  if(parseInt(container.style.marginLeft) <= -100) {
    container.style.marginLeft = parseInt(container.style.marginLeft) + 100 + '%';
  }
};

controlRight.onclick = function() {
  if(parseInt(container.style.marginLeft) > (items-1)*(-100)) {
    container.style.marginLeft = parseInt(container.style.marginLeft) - 100 + '%';
  }
};


