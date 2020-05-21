// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrowleft.svg" /></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrowright.svg" /></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
//   });

var slider = tns({
    container: '.carousel__inner',
    items: 1,
    controls: false,
    nav: false,
    autoHeight: true,
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});  

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});