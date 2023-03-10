function setDotOpacity(dotNumber, opacity) {
    var dotElement = $('div[data-scroll=' + dotNumber + '] .spine-dot-white');
    dotElement.css('color', opacity);
}

$(document).ready(function () {
    var hdot = $('.section2').height() / (24);
    $(window).scroll(function () {
        //Проверяем что внутри div-second
        if (($(window).scrollTop() >= $('.section2').offset().top) &&
            ($(window).scrollTop() <= ($('.section2').offset().top + $('.section2')
                .height()))) {
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
    });

})