$(() => {
    const verticalGallery = () => ( window.innerWidth > 991 );

    $('.preview-gallery').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,

        vertical: verticalGallery(),
	    dots: false,
	    prevArrow: false,
	    nextArrow: false,
        // autoplay: true,
        // autoplaySpeed: 1000,
        // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-up"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-down"></i></button>',
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
                // dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
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
	
	$('.color-select li input').click((e) => {
		$('.color-selected span').text(e.target.value);
	});

    $('.search-toggle').click((e) => {
        $('.logo').toggle();
        $('.search-input').toggleClass('hide');
    });
	
});
