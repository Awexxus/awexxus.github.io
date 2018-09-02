var slideNow = 1;
var slideCount = $('.some_div').children('.some_item').length;
function nextSlide_s() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.some_item').animate({left: '0'}, 400);
        slideNow = 1;
    } else {
        translateWidth = -($('.some_item').width()+ 30) * (slideNow);
        $('.some_item').animate({
            left: translateWidth,
        },400);
        slideNow++;
    }
}
function prevSlide_s() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -($('.some_item').width()+30) * (slideCount - 1);
        $('.some_item').animate({
            left: translateWidth,
        }, 400);
        slideNow = slideCount;
    } else {
        translateWidth = -($('.some_item').width() + 30) * (slideNow - 2);
        $('.some_item').animate({
            left: translateWidth,
        });
        slideNow--;
    }
}