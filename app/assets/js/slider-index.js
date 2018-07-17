
var slider1 = new Slider("js-slide-1");
var slider2 = new Slider("js-slide-2");

slider1.showSlides();
slider2.showSlides();


document.querySelector('.js-prev-1').addEventListener('click', function () {
  slider1.plusSlides(-1);
  
});
document.querySelector('.js-next-1').addEventListener('click', function () {
  slider1.plusSlides(1);
});

document.querySelector('.js-prev-2').addEventListener('click', function () {
  slider2.plusSlides(-1);
});
document.querySelector('.js-next-2').addEventListener('click', function () {
  slider2.plusSlides(1);
});


document.querySelector('.image-container').addEventListener('click', function () {
  window.location = 'player.html';
});