
document.querySelector('.js-btn-subscriptions').addEventListener('click', () => {
  scrollIt(
      document.querySelector('.js-section-subscriptions'),
      800,
      'linear',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.js-btn-top-picks').addEventListener('click', () => {
  scrollIt(
      document.querySelector('.js-section-top-picks'),
      800,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.js-btn-about-us').addEventListener('click', () => {
  scrollIt(
      document.querySelector('.js-section-about-us'),
      800,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.js-btn-reviews').addEventListener('click', () => {
  scrollIt(
      document.querySelector('.js-section-reviews'),
      800,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.js-btn-steps').addEventListener('click', () => {
  scrollIt(
      document.querySelector('.js-section-steps'),
      800,
      'easeInOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.js-btn-form').addEventListener('click', () => {
  scrollIt(
      document.querySelector('.js-section-form'),
      800,
      'easeInOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});


let images = Array.from(document.getElementsByClassName('js-image'));
images.forEach(el => el.addEventListener('click', function () {
  window.location.href = './player.html';
}));


