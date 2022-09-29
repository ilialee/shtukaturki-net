let areaRange = document.querySelector(".area__range");
let areaRangeResult = document.querySelector(".area__result");
let thicknessRange = document.querySelector(".thickness__range");
let thicknessRangeResult = document.querySelector(".thickness__result");
let changeAreaResult = () => {
  areaRangeResult.textContent = `${areaRange.value} м2`;
  thicknessRangeResult.textContent = `${thicknessRange.value} мм`;
};
areaRange.onchange = changeAreaResult;
thicknessRange.onchange = changeAreaResult;


const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}
rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

//gallary section index.html slider 
$(document).ready(function(){
  $('.gallary__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    asNavFor: '.gallary__slider__nav'
  });
  $('.gallary__slider__nav').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.gallary__slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
  $('.materials__body').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
})
