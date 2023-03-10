$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ((75 + scroll / 60) >= 100) {
        $(".arc-img").css({
            backgroundSize: "100%",
        });
    } else {
        $(".arc-img").css({
            backgroundSize: (75 + scroll / 60) + "%",
        });
    }
    if (($(window).scrollTop() >= $('.section2').offset().top)) {
        $('header').removeClass('hide')
        // $('.dots-box').removeClass("hide")
    } else {
        $('header').addClass('hide')
        // $('.dots-box').addClass("hide")
    }
});
var scroll = 0;
var conponent = document.querySelector('.section1');
var conponentBG = document.querySelector('.arc-img');
var windowHeight = 230;
document.addEventListener('scroll', () => {
    scroll = window.pageYOffset;
    // console.log(scroll)
    if (scroll >= 0 && scroll < windowHeight) {
        //to remove all classes sauf .container
        conponentBG.setAttribute('class', 'arc-img');
        conponentBG.classList.add('img1');
    } else if (scroll >= windowHeight && scroll < 2 * windowHeight) {
        //to remove all classes sauf .container
        conponentBG.setAttribute('class', 'arc-img');
        conponentBG.classList.add('img2');

    } else if (scroll >= 2 * windowHeight && scroll < 3 * windowHeight) {
        //to remove all classes sauf .container
        conponentBG.setAttribute('class', 'arc-img');
        conponentBG.classList.add('img3');
    } else if (scroll >= 3 * windowHeight && scroll < 4 * windowHeight) {
        //to remove all classes sauf .container
        conponentBG.setAttribute('class', 'arc-img');
        conponentBG.classList.add('img4');
    } else if (scroll >= 4 * windowHeight && scroll < 5 * windowHeight) {
        //to remove all classes sauf .container
        conponentBG.setAttribute('class', 'arc-img');
        conponentBG.classList.add('img5');
    } else if (scroll >= 5 * windowHeight && scroll < 6 * windowHeight) {
        //to remove all classes sauf .container
        conponentBG.setAttribute('class', 'arc-img');
        conponentBG.classList.add('img6');
    } else if (scroll >= 6 * windowHeight && scroll < 7 * windowHeight) {
        //to remove all classes sauf .container
        conponentBG.setAttribute('class', 'arc-img');
        conponentBG.classList.add('img7');
    }
})



// const $ = (s, o = document) => o.querySelector(s);
// const $$ = (s, o = document) => o.querySelectorAll(s);

// $('.button').forEach(el => el.addEventListener('mousemove', function (e) {
//     const pos = this.getBoundingClientRect();
//     const mx = e.clientX - pos.left - pos.width / 2;
//     const my = e.clientY - pos.top - pos.height / 2;

//     this.style.transform = 'translate(' + mx * 0.15 + 'px, ' + my * 0.3 + 'px)';
//     this.style.transform += 'rotate3d(' + mx * -0.1 + ', ' + my * -0.3 + ', 0, 12deg)';
//     this.children[0].style.transform = 'translate(' + mx * 0.025 + 'px, ' + my * 0.075 + 'px)';
// }));

// $('.button').forEach(el => el.addEventListener('mouseleave', function () {
//     this.style.transform = 'translate3d(0px, 0px, 0px)';
//     this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
//     this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
// }));

// // --- CURSOR
// document.addEventListener('mousemove', function (e) {
//     $('.cursor').style.left = (e.pageX - 25) + 'px';
//     $('.cursor').style.top = (e.pageY - 25) + 'px';
// });