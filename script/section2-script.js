function setDotOpacity(dotNumber, opacity) {
    var dotElement = $('div[data-scroll=' + dotNumber + '] .spine-dot-white');
    dotElement.css('color', opacity);
}

$(document).ready(function () {
    var hdot = $('.section2').height() / (24);
    $(window).scroll(function () {

        if (($(window).scrollTop() >= $('.section2').offset().top) &&
            ($(window).scrollTop() <= ($('.section2').offset().top + $('.section2')
                .height()))) {
            // section2.setAttribute('class', 'section2 show');

            // $('.section2').removeClass('hide')
            // section2.style.opacity = '1'
            var dotCenter = Math.round(($(window).scrollTop() - $('.section2').offset().top) /
                hdot);

            for (var i = 0; i < dotCenter; i++) {
                setDotOpacity(i, '#111111');
            }

            setDotOpacity(dotCenter, '#111111');

            for (var i = dotCenter + 1; i <= 10; i++) {
                setDotOpacity(i, '#DCDCF4');
            }
        } 
        // else {
        //     // $('.section2').addClass('hide')
        //     section2.setAttribute('class', 'section2 hide');
        // }
    });

})