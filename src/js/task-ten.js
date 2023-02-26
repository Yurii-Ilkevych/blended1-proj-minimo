let offset = 0; // смещение от левого края
const sliderRow = document.querySelector ('.slider-row');

document.querySelector('.btn-right').addEventListener('click',function(){
    offset = offset + 269;
    if (offset > 1345){
        offset = 0;
    }
    sliderRow.style.left = -offset + 'px';
});
document.querySelector('.btn-left').addEventListener('click', function () {
  offset = offset - 269;
  if (offset < 0) {
    offset = 1345;
  }
  sliderRow.style.left = -offset + 'px';
});

//-----------адаптив-----------//

// const images = document.querySelectorAll('.slider .slider-row img');
// const sliderRow = document.querySelector('.slider-row');
// let count = 0;
// let width;

// function init(){
//     console.log('resize');
//     width = document.querySelector('.slider').offsetWidth;
//     sliderRow.style.width = width*images.length + 'px';
//     images.forEach(item =>{
//         item.style.width = width + 'px';
//     })
// }

// window.addEventListener('resize', init);
// init(); 