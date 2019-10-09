$(document).ready(function () {
    $('.userbtn').click(function () {
        $('.drop-menu').toggle();
    });
    $('body').click(function () {
        $('.drop-menu').hide();
    });
    $(".drop-menu").click(function (e) {
        e.stopPropagation();
    });
    $(".userbtn").click(function (e) {
        e.stopPropagation();
    });
    $('.sea').click(function () {
        $('.over').addClass("dflex");
        $('.over').removeClass("dnone");
        $('body').css("overflow", "hidden");
    });
    $('.over').click(function () {
        $('.over').addClass("dnone");
        $('.over').removeClass("dflex");
        $('body').css("overflow", "auto");
    });
    $(".sear").click(function (e) {
        e.stopPropagation();
    });
    $('.menubtn').click(function () {
        $('.xs-nav').show();
        $('.menu').removeClass("back");
        $('body').css("overflow", "hidden");
    });
    $('.closebtn').click(function () {
        $('.xs-nav').hide();
        $('body').css("overflow", "auto");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').hide();
        $('body').css("overflow", "auto");
    });
    $(".menu").click(function (e) {
        e.stopPropagation();
    });
    $('.inbtn').click(function () {
        $('.inop').toggle();
        $('.incls').toggle();
        $('.addop').show();
        $('.addcls').hide();
        $('.telop').show();
        $('.telcls').hide();
        $('.conop').show();
        $('.concls').hide();
    });
    $('.addbtn').click(function () {
        $('.addop').toggle();
        $('.addcls').toggle();
        $('.inop').show();
        $('.incls').hide();
        $('.telop').show();
        $('.telcls').hide();
        $('.conop').show();
        $('.concls').hide();
    });
    $('.telbtn').click(function () {
        $('.telop').toggle();
        $('.telcls').toggle();
        $('.inop').show();
        $('.incls').hide();
        $('.addop').show();
        $('.addcls').hide();
        $('.conop').show();
        $('.concls').hide();
    });
    $('.conbtn').click(function () {
        $('.conop').toggle();
        $('.concls').toggle();
        $('.inop').show();
        $('.incls').hode();
        $('.addop').show();
        $('.addcls').hide();
        $('.telop').show();
        $('.telcls').hide();
    });
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        rtl: true,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            550: {
                items: 1,
                nav: true,
                dots: true
            },
        }
    });
    $('.Special-slider').owlCarousel({
        items: 5,
        autoplay: true,
        margin: 15,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            550: {
                items: 2,
                nav: false,
                dots: true
            },
            800: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: false,
            },
            1200: {
                items: 5
            }
        }
    });
    $('.new-slider').owlCarousel({
        items: 5,
        autoplay: true,
        margin: 15,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            550: {
                items: 2,
                nav: false,
                dots: true
            },
            800: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: false,
            },
            1200: {
                items: 5
            }
        }
    });
    $('.most-slider').owlCarousel({
        items: 5,
        autoplay: true,
        margin: 15,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            550: {
                items: 2,
                nav: false,
                dots: true
            },
            800: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: false,
            },
            1200: {
                items: 5
            }
        }
    });
});