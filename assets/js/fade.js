$('body').css('position', 'relative');
$(window).scroll(function () {
    var fading = $('#team').find('img')
    fading.each(function () {
        var offset = $(this).offset()
        var positionTop = offset.top - $(window).scrollTop();

        var offsetBottom = $(document).height() - $(this).height() - offset.top;

        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        var positionBottom = scrollBottom - offsetBottom

        positionBottom = Math.abs(positionBottom)

        var big = Math.max(positionTop, positionBottom)
        var small = Math.min(positionTop, positionBottom)

        var opacity = small / big + 0.25
        $(this).fadeTo(0, opacity)
    });
});