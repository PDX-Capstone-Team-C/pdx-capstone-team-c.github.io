$(window).scroll(function () {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var fadeInElements = $('.csc-fade-in');

    fadeInElements.each(function () {
        if (scrollBottom > ($(this).offset().top + 96)) {
            $(this).addClass('animated fadeInUp');
        }
    });
});
