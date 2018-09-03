$(document).ready(function () {
    $('.next_some').click(function () {
        nextSlide_s();
    });
    $('.prev_some').click(function () {
        prevSlide_s();
    });
    $('.next_team').click(function () {
        nextSlide_p();
    });
    $('.prev_team').click(function () {
        prevSlide_p();
    });
    console.log($(window).scrollTop())
    $(window).scroll(function () {
        if(($(window).scrollTop()) > 500 && $(window).width()> 768){
            $('.design .des_txt').css({display: 'block'});
            $('.design .des_txt').animate({
                left: '0',
            }, 600);
        }
        if(($(window).scrollTop()) > 1200 && $(window).width()> 768){
            $('.some').css({
                backgroundPosition:'100%'
            });
            $('.one').animate({
                padding: '0',
            }, 400);
            $('.two').animate({
                padding: '0',
            }, 500);
            $('.three').animate({
                padding: '0',
            }, 600);
        }
        if(($(window).scrollTop())> 1800 && $(window).width()> 768){
            $('.resp_image').fadeIn(600)
        }
        if(($(window).scrollTop())> 3100 && $(window).width()> 768){
            $('.awes_text img').animate({
                margin: '0'
            }, 500)
        }
    })


})
