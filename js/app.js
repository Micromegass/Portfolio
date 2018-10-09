
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('nav a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 3000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    
});

function onScroll(event) {
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('nav a').removeClass("active");
            currentLink.addClass("active");
        } else {
            currentLink.removeClass("active");
        }
    });

}

$('i').hover(
    function () {
        $(this).toggleClass('fa-spin')
    }
)


$('.readmore').on('click', function(){
    $('.hiddenText').css('display', 'block');
    $('.readmore').hide();
    $('.readless').show();
});

$('.readless').on('click', function () {
    $('.hiddenText').css('display', 'none');
    $('.readless').hide();
    $('.readmore').show();
});



//    $(".main").tiltedpage_scroll({
//        sectionContainer: "> section", // In case you don't want to use <section> tag, you can define your won CSS selector here
//        angle: 50, // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
//        opacity: true, // You can toggle the opacity effect with this option. The default value is true
//        scale: true, // You can toggle the scaling effect here as well. The default value is true.
//        outAnimation: true // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
//    });

