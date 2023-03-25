$(document).ready(function () {
    $('.testimonial-lab ul li').click(function () {
        $(".testimonial-lab ul li").removeClass("active");
        $(this).addClass("active");

    });



    //  accordian




});

// sticky nav bar 
$(window).scroll(function () {
    if ($(window).scrollTop() > 00) {
        $('.header-top-area').addClass('sticky-nav')
    } else {
        $('.header-top-area').removeClass('sticky-nav')
    }
});

$(document).ready(function () {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });
});
