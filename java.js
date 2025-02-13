$(document).ready(function () {
    function animateCardUp() {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }

    function animateCardDown() {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    }

    $('.container').on('mouseenter touchstart', function () {
        animateCardUp();
    }).on('mouseleave touchend', function () {
        animateCardDown();
    });
});