/*global $*/

$(document).ready(function () {

    'use strict';
    
    // Navbar Fixed
    
    var navbar = $(".navbar"),
        header = $(".header"),
        scrollButton = $("#scroll-top"),
        intro = $("#introduction"),
        condition = true;
    
    $(window).scroll(function () {

        if ($(window).scrollTop() >= header.height()) {

            if (!navbar.hasClass('scrolled navbar-fixed-top')) {

                navbar.addClass('scrolled navbar-fixed-top');
                
                $(".navbar .navbar-collapse ul > li a").css({
                    'color' : '#fff'
                });
                
                //focusin
                $(".nav>li>a").focusin(function () {
                    $(this).css({
                        "color" : "#b53a57",
                        "background-color" : "#2d2d2d"
                    });
                });
                
                //focusout
                $(".nav>li>a").focusout(function () {
                    $(this).css({
                        "color" : "#FFF",
                        "background-color" : "transparent"
                    });
                });
                
                //hover
                $(".nav>li>a").hover(function () {
                    $(this).css("background-color", "#2d2d2d");
                }, function () {
                    $(this).css("background-color", "transparent");
                });
                
                
                
//                $(".nav>li>a").focus(function () {
//                    $(this).css("background-color", "#2d2d2d");
//                });
//                    "background-color" : "#2d2d2d",
//                    "border-radius" : "30px"
                
                $(".navbar .navbar-header .navbar-brand").removeClass("logo").addClass('logo-white');
            }

        } else {

            navbar.removeClass('scrolled navbar-fixed-top');
            
            $('.navbar .navbar-header .navbar-brand').removeClass("logo-white").addClass("logo");
            
            $(".navbar .navbar-collapse ul > li a").css({
                'color' : '#30373b'
            });
            
            //hover
            $(".nav>li>a").hover(function () {
                $(this).css("background-color", "#eee");
            }, function () {
                $(this).css("background-color", "transparent");
            });
            
//            $(".nav>li>a").focus(function () {
//                $(this).css("background-color", "#eee");
//            });
            
//            $(".nav>li>a:hover, .nav>li>a:focus").css({
//                "background-color" : "#eee"
//            });
        }

    });
    
    // Intro scroll autoplay
    
//    $(window).scroll(function () {
//
//        if ($(this).scrollTop() >= intro.offset().top - 30) {
//
//            if (embed.attr('src') !== 'https://www.youtube.com/embed/M30DeLPKmP8?autoplay=1&;rel=0&;showinfo=0') {
//
//                embed.attr('src', 'https://www.youtube.com/embed/M30DeLPKmP8?autoplay=1&;rel=0&;showinfo=0');
//
//            }
//
//        }
//
//    });
    
    // Feature Count UP
    
    $(window).on("scroll", function () {

        if ($(this).scrollTop() >= $("#introduction").offset().top) {
            
            if (condition === true) {
                
                // CountUp JS
    
                var options = {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.'
                },
                    demo = new CountUp('count-0', 0, 700, 0, 2.5, options),

                    demo1 = new CountUp('count-1', 0, 200, 0, 2.5, options),

                    demo2 = new CountUp('count-2', 0, 50, 0, 2.5, options);

                if (!demo.error) {
                    demo.start();
                } else {
                    console.error(demo.error);
                }

                if (!demo1.error) {
                    demo1.start();
                } else {
                    console.error(demo1.error);
                }

                if (!demo2.error) {
                    demo2.start();
                } else {
                    console.error(demo2.error);
                }

                condition = false;

            }
        }
        
    });

    // Trigger Owl Carousel

    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        center: true,
        nav: true,
        rewind: true,
        autoWidth: false,
        items: 5,
        loop: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 3
            },
            992 : {
                items : 4
            },
            1200 : {
                items : 5
            }
        }
    });

    // Caching The Scroll Top Element

    $(window).scroll(function () {

        if ($(this).scrollTop() >= intro.offset().top) {

            scrollButton.show();

        } else {

            scrollButton.hide();
        }
    });

    // Click On Button To Scroll Top

    scrollButton.click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 800);

    });

    // Smooth Scroll To Section
    
    $('#media-touch > ul > li > a').click(function () {

        if ($(this).data('value') === "home") {
            
            $('html , body').animate({
                
                scrollTop: 0
                
            }, 800);
            
        } else {
            $('html, body').animate({

                scrollTop: $('#' + $(this).data('value')).offset().top

            }, 800);
        }

    });
    
    // Our Team Button Slider Toggle
    
    $(".our-team .our-team-button button").on("click", function () {
        $(".our-team .team-head, .our-team .media-team").slideToggle();
        $(".our-team .team").slideUp();
    });
    
    // Our Team Slider Toggle
    
    $('.our-team .teams li').on("click", function () {
        $(".our-team .team").not("." + $(this).children("a").data("value")).slideUp(400, "linear");
        $(".our-team " + "." + $(this).children("a").data("value")).slideToggle(400, "linear");
        
    });
    
    // Loading Screen
    
    $(window).on("load", function () {

        // Loading Elements

        $(".loading-overlay .sk-circle").fadeOut(1000, function () {

            // Show The Scroll

            $("body").css({
                "overflow-x" : "hidden",
                "overflow-y" : "auto"
            });

            $(this).parent().fadeOut(1000, function () {

                $(this).remove();
                
            });
            
        });
        
    });

});