$(document).ready(function(){
    $('.slickSlider').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3500,
    });
});

$('.hamburger').on('click', function(e) {
    $('body').toggleClass("menu-toggle");
    $('#side-nav').toggleClass("side-menu-push");

    if ($('body').hasClass('menu-toggle')) {
        $('body').css('right', 350);
        // $('body').css({'overflow':'hidden'});

        $(document).bind('scroll',function () { 
            window.scrollTo(0,0); 
        });
    } else {
        $('body').css('right', 0);
    }
    e.preventDefault();
});

$('.side-menu-opacity').on('click', function(e) {
    $('body').toggleClass("menu-toggle");
    $('#side-nav').toggleClass("side-menu-push");

    if ($('body').hasClass('menu-toggle')) {
        $('body').css('right', 350);
    } else {
        $('body').css('right', 0);

        $(document).unbind('scroll'); 
        $('body').css({'overflow':'visible'});
    }
    e.preventDefault();
});