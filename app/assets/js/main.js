// document.addEventListener('DOMContentLoaded', function(){
//     let wrapper = document.getElementById('wrapper');
//     let topLayer = wrapper.querySelector('.top');
//     let handle = wrapper.querySelector('.handle');
//     let skew = 0;
//     let delta = 0;
  
//     if(wrapper.className.indexOf('skewed') != -1){
//       skew = 1000;
//     }
    
//     wrapper.addEventListener('mousemove', function(e) {
//       delta = (e.clientX - window.innerWidth / 2) * 0.5;
    
//       handle.style.left = e.clientX + delta + 'px';
  
//       topLayer.style.width= e.clientX + skew + delta + 'px';
//     });
//   });

  // window.onload = function () {
  //   window.scrollTo(0, 0);
  //   console.log("scrolled");
    
  // }


let navList = document.querySelector('.main-list');
document.querySelector('.burger-nav').addEventListener('click', function() {
  navList.classList.toggle('main-list_mobile');
});

window.addEventListener('resize', function() {
  if(this.screen.width > 480) {
    navList.classList.remove('main-list_mobile');
  }
    
});