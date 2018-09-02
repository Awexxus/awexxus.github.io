var slideNow = 1;
var slideCount = $('.team_div').children('.team_item').length;
function nextSlide_p() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.team_item').animate({left: '0'}, 400);
        slideNow = 1;
    } else {
        translateWidth = -($('.team_item').width()+ 30) * (slideNow);
        $('.team_item').animate({
            left: translateWidth,
        },400);
        slideNow++;
    }
}
function prevSlide_p() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -($('.team_item').width()+30) * (slideCount - 1);
        $('.team_item').animate({
            left: translateWidth,
        }, 400);
        slideNow = slideCount;
    } else {
        translateWidth = -($('.team_item').width() + 30) * (slideNow - 2);
        $('.team_item').animate({
            left: translateWidth,
        });
        slideNow--;
    }
}