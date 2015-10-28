$(window).scroll(function () {
    scrollHandler(96);
});
$('body').on('touchmove', function () {
    scrollHandler(16);
});

function scrollHandler (offsetPx) {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var fadeInElements = $('.csc-fade-in');

    fadeInElements.each(function () {
        if (scrollBottom > ($(this).offset().top + offsetPx)) {
            $(this).addClass('animated fadeInUp');
        }
    });    
}
