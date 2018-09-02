$(document).ready(function () {
    $('.open>i').click(function(){
        $('.menu_slider').animate({
            right: '0',
            opacity: '1',
        },300);
        $('.menu_right').css({display: 'block',})
        $('.open').fadeOut(300);
    });
    $('.menu_icon_close>i').click(function(){
        var widthMenu = -$('.menu_slider').width();
        $('.menu_slider').animate({
            right: widthMenu,
            opacity: '0',
        },300);
        $('.open').fadeIn(300);
    });
    $(document).click(function(e){
        if( $(e.target).closest(".menu_slider").length > 0 || $(e.target).closest(".open>i").length > 0) {
            return false;
        }
        var widthMenu = -$('.menu_slider').width();
        $('.menu_slider').animate({
            right: widthMenu,
            opacity: '0',
        },300);
        $('.open').fadeIn(300);
    });
    $('.menu_slider a').click(function () {
        var widthMenu = -$('.menu_slider').width();
        $('.menu_slider').animate({
            right: widthMenu,
            opacity: '0',
        },300);
        $('.open').fadeIn(300);
    })



    $(window).scroll(function () {
        if($(window).scrollTop()> 550){
            $('.menu').css({
                position: 'fixed',
                zIndex: '11000',
                background: 'transparent',
                paddingTop: '30px',
                transition: 'padding .5s, position .3s'
            });
            $('.icon').css({
                display: 'none',
            })
        }else{
            $('.menu').css({
                position: 'relative',
                background: '#f5f5f5',
                paddingTop: '80px',
            });
            if($(window).width() >= 380){
            $('.icon').css({
                display: 'block',
            })
            }
        }
    });

    $('.next').click(function () {
        nextSlide();
    });
    $('.prev').click(function () {
        prevSlide();
    });

    $('.next').hover(function () {
        $('.next>img').attr('src','./images/arr_right_active.png')
    },
        function () {
            $('.next>img').attr('src','./images/arr3.png').fadeIn(300)
    });
    $('.prev').hover(function () {
            $('.prev>img').attr('src','./images/arr_left_active.png')
        },
        function () {
            $('.prev>img').attr('src','./images/arr.png').fadeIn(300)
    });

    $(window).scroll(function () {
        if(($(window).scrollTop()) > 3100){
            $('.img_right').css({display: 'block'});
            $('.img_right').animate({
                right: '0',
                }, 600);
        }
    })

});