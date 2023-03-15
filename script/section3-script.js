$(document).ready(function () {
    var section3 = document.querySelector('.section3');
    var section4 = document.querySelector('.section4');
    var section2 = document.querySelector('#section2');

    var item1 = document.querySelector('.image-slide-item1'),
        item2 = document.querySelector('.image-slide-item2'),
        item3 = document.querySelector('.image-slide-item3');
    var w = $('.second-slider').height() / 5;
    var videoBG = document.querySelector('#video-background')


    $(window).scroll(function () {
        //Проверяем что внутри div-second
        if (($(window).scrollTop() >= ($('.second-slider').offset().top) - 200)) {
            section2.setAttribute('class', 'section2 hide');
            videoBG.style.width = '100%';
            videoBG.style.height = '100%';
            // section3.setAttribute('class', 'section section3');
            // section3.classList.add('active');
        } else {
            section2.setAttribute('class', 'section2 show');
            videoBG.style.width = '105%';
            videoBG.style.height = '105%';
        }
        // if ($(window).scrollTop() <= ($('.second-slider').offset().top + (2 * w)))  
        
        if (($(window).scrollTop() >= $('.second-slider').offset().top) &&
            ($(window).scrollTop() <= ($('.second-slider').offset().top + (1.5 * w)))) {
            section3.setAttribute('class', 'section section3');
            section3.classList.add('active');
            section4.setAttribute('class', 'section section4');

            // section2.setAttribute('class', 'section2 hide');

        } else if ($(window).scrollTop() >= ($('.second-slider').offset().top + (1.5 * w)) &&
            ($(window).scrollTop() <= ($('.second-slider').offset().top + (2.5 * w)))) {

            section3.setAttribute('class', 'section section3');
            section3.classList.add('inActive')
            section4.setAttribute('class', 'section section4');
            section4.classList.add('active')
            // section2.setAttribute('class', 'section2 hide');

            item1.setAttribute('class', 'image-slide-item image-slide-item1');
            item1.classList.add('active')
            item2.setAttribute('class', 'image-slide-item image-slide-item2');
            item3.setAttribute('class', 'image-slide-item image-slide-item3');

        } else if ($(window).scrollTop() >= ($('.second-slider').offset().top + (2.5 * w)) &&
            ($(window).scrollTop() <= ($('.second-slider').offset().top + (3.3 * w)))) {

            section3.setAttribute('class', 'section section3');
            section3.classList.add('inActive')
            section4.setAttribute('class', 'section section4');
            section4.classList.add('active')
            item2.setAttribute('class', 'image-slide-item image-slide-item2');
            item2.classList.add('active')
            item1.setAttribute('class', 'image-slide-item image-slide-item1');
            item1.classList.add('inActive')
            item3.setAttribute('class', 'image-slide-item image-slide-item3');
            // section2.setAttribute('class', 'section2 hide');

        } else if ($(window).scrollTop() >= ($('.second-slider').offset().top + (3.3 * w)) &&
            ($(window).scrollTop() <= ($('.second-slider').offset().top + (4.5 * w)))) {

            section3.setAttribute('class', 'section section3');
            section3.classList.add('inActive')
            section4.setAttribute('class', 'section section4');
            section4.classList.add('active')

            item2.setAttribute('class', 'image-slide-item image-slide-item2');
            item2.classList.add('inActive')
            item1.setAttribute('class', 'image-slide-item image-slide-item1');
            item1.classList.add('inActive')
            item3.setAttribute('class', 'image-slide-item image-slide-item3');
            item3.classList.add('active')

        } 
    });
})