let animateHTML = function () {
  let elems, windowHeight;
  let init = function () {
    elems = document.getElementsByClassName('js-hidden');
    windowHeight = window.innerHeight;
    _addEventHandlers();
  }

  let _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition);
    window.addEventListener('load', _checkPosition);
    window.addEventListener('resize', init);

  }
  let _checkPosition = function () {
    for (let i = 0; i < elems.length; i++) {
      let posFromTop = elems[i].getBoundingClientRect().top;
      if(isElementInViewport(elems[i])) {
        console.log(elems[i]);
      }
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('js-hidden', 'js-fade-in-element');
      }
    }
  }

  let isElementInViewport = function (el) {
    let rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
  return {
    init: init
  }
}
animateHTML().init();



