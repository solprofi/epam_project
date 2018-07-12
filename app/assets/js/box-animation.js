let boxes = document.getElementsByClassName('plan-box');

boxes = Array.prototype.slice.call( boxes );

boxes.forEach(el => el.addEventListener('mouseenter', function () {
  el.classList.add('act');
})
);


boxes.forEach(el => el.addEventListener('mouseleave', function () {
  console.log('it is working');
  
  el.classList.remove('act');
})
);


