var slideNow = 1;
var slideCount = $('.comm_item').children('.comment').length;
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.comment').animate({left: '0'}, 400);
        slideNow = 1;
    } else {
        translateWidth = -($('.comment').width()+ 30) * (slideNow);
        $('.comment').animate({
            left: translateWidth,
        },400);
        slideNow++;
    }
}
function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            translateWidth = -($('.comment').width()+30) * (slideCount - 1);
            $('.comment').animate({
                left: translateWidth,
            }, 400);
            slideNow = slideCount;
        } else {
            translateWidth = -($('.comment').width() + 30) * (slideNow - 2);
            $('.comment').animate({
                left: translateWidth,
            });
            slideNow--;
        }
}