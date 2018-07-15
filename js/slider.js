$(document).ready(function(){
    $(".Modern-Slider").slick({
        autoplay: true,
        autoplaySpeed:9000,
        speed:900,
        mobileFirst: true,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        respondTo:'min',
        cssEase:'linear',
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>',
         
      })
 

    $('.partner-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>', 
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    $('.store-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>', 
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});
