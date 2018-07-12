
document.querySelector('.js-btn-map').addEventListener('click', () => {
  scrollIt(
      document.querySelector('.js-section-world'),
      800,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});

document.querySelector('.js-btn-social-media').addEventListener('click', () => {
  scrollIt(
      document.querySelector('.js-section-social-media'),
      800,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
  );
});