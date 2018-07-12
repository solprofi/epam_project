
var slider1 = new Slider("slide1");

slider1.showSlides();


document.querySelector('.js-prev-1').addEventListener('click', function () {
  slider1.plusSlides(-1);
  
});
document.querySelector('.js-next-1').addEventListener('click', function () {
  slider1.plusSlides(1);
});
