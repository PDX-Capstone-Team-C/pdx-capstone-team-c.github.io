$(window).scroll(function () {
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var fadeIn = $('.csc-fade-in');

    fadeIn.each(function () {
        if (scrollBottom > ($(this).offset().top + 96)) {
            $(this).addClass('animated fadeInUp');
        }
    });
});

/*
$('body').css('position', 'relative');
$(window).scroll(function () {
    var fading = $('#team').find('img')
    fading.each(function () {
        var offset = $(this).offset()

        var positionTop = offset.top - $(window).scrollTop();

        var offsetBottom = $(document).height() - $(this).height() - offset.top;
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        var positionBottom = offsetBottom - scrollBottom

        var big = Math.max(positionTop, positionBottom)
        var small = Math.min(positionTop, positionBottom)

        console.log(positionTop)
        console.log(positionBottom)

        var opacity = small / big + 0.25
        $(this).fadeTo(0, opacity)
    });
});
*/