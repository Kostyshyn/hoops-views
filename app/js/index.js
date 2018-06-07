// $('.products-carousel').slick({
//     infinite: true,
//     slidesToShow: 6,
//     slidesToScroll: 3,
//     vertical: true,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     responsive: [
//     {
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             // dots: true
//         }
//     },
//     {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2
//         }
//     },
//     {
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//         }
//     }]
// });

$(() => {
	$('.slider').slick({
	    slidesToShow: 1,        
	    autoplay: true,
	    autoplaySpeed: 5000,
	    dots: true,
	    infinite: true,        
	    speed: 300,
	    fade: true,   
	    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
	    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'     
	});
	// $('.mobile-nav').fadeOut(0);
	// $('.nav-button').click((e) => {
	// 	$('.nav-button').toggleClass('open');
	// 	$('.mobile-nav').fadeToggle();
	// });
});
