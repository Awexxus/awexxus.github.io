$(document).ready(function () {

    $('.menu_icon_open>i').click(function(){
        $('.menu_slider').animate({
            right: '0',
            opacity: '1',
        },300);
        $('.menu_icon_open').fadeOut(300);
    });
    $('.menu_icon_close>i').click(function(){
        $('.menu_slider').animate({
            right: '-285px',
            opacity: '0',
        },300);
        $('.menu_icon_open').fadeIn(300);
    });
    $(window).scroll(function () {
        if($(window).scrollTop()> 550){
            $('.main').css({
                position: 'fixed',
                zIndex: '1100',
                background: 'transparent',
                paddingTop: '30px',
                transition: 'padding .5s, position .3s'
            });
        }else{
            $('.main').css({
                position: 'relative',
                background: '#eff0f1',
                paddingTop: '64px',
            });
        }
    });
        $('.item_our').hover(function () {
            $(this).find('h1').fadeIn(300);
            $(this).find('p').fadeIn(300);
            $(this).find('a').fadeIn(300);
        }, function () {
            $(this).find('h1').fadeOut(300);
            $(this).find('p').fadeOut(300);
            $(this).find('a').fadeOut(300);
        });

    $('.img').click(function () {
        $('.img').attr('src', './image/Cork12.png');
        $(this).attr('src', './image/443.png');
        $('.img_w').fadeOut(300).queue(function(next) { $(this).attr('src','./image/123.png'); next(); }).fadeIn(300);
    });

    $('.item').hover(function () {
        $(this).find('.item_dis').fadeIn(200);
    },function () {
        $(this).find('.item_dis').fadeOut(200);
    });
});
