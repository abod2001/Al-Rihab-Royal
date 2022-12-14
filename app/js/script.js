//////////////////START NAV BAR///////////
$(document).ready(function (){
    $(window).scroll(function (){
        if(this.scrollY>70)
            $('.navbar').addClass("sticky");
        else
            $('.navbar').removeClass("sticky");

    });

    $('.menu-toggler').click(function (){
        $(this).toggleClass("active");
        $('.navbar-menu').toggleClass("active");
    })
});
$('.nav-link').on('click', function() {
    $('.active-link').removeClass('active-link');
    $(this).addClass('active-link');
});
////////////////////////////////END NAV BAR/////////////
//POFILE
$('.list-reset li').on('click', function () {
    $('.list-reset li').removeClass('active');
    $(this).addClass('active');
});