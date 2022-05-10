//animation titre
$(document).ready(function() {
    $('.box').animate({
            left: "30px"
        },
        "slow");
    $(".description").fadeIn(5000);
});
var i = 0

// image scroll
$(document).ready(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        $('#marvelimage').css('top', scroll - 'px');
    });
});
//footer animation

let footericones = document.getElementsByClassName('image-hover');
for (let i = 0; i < footericones.length; i++) {
    footericones[i].addEventListener('mouseover', () => {
        footericones[i].style.color = 'yellon';
    });
    footericones[i].addEventListener('mouseout', () => {
        footericones[i].style.color = 'white';
    });
};