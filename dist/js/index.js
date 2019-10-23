'use strict';

$(function () {
  function tab(thead, cont, className) {
    $(thead).each(function (index) {
      $(this).mouseenter(function () {
        $(this).addClass(className).siblings().removeClass(className);
        $($(cont)[index]).addClass(className).siblings().removeClass(className);
      });
    });
  }
  tab('.ls-thead span', '.jz-ls .ls-cont', 'cur');
});