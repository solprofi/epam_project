let boxes = document.getElementsByClassName('plan-box');

boxes = Array.prototype.slice.call( boxes );

boxes.forEach(el => el.addEventListener('mouseenter', function () {
  el.classList.add('plan-box_active');
  })
);

boxes.forEach(el => el.addEventListener('mouseleave', function () {
  el.classList.remove('plan-box_active');
  })
);

let mobileImage = document.querySelector('.app-screen');

mobileImage.addEventListener('mouseenter', function() {
  mobileImage.classList.add('app-screen_active');
});

mobileImage.addEventListener('mouseleave', function() {
  mobileImage.classList.remove('app-screen_active');
});
