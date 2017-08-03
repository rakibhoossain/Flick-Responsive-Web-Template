/*
 * Template name: Flick
 * Version : 1.0.0
 * URL: http://www.rakibhossain.cf/portfolio/flick
 * Description: This js file is required for different interactive task
 * Author   : Rakib Hossain
/* Email    :   serakib@gmail.com                   
/* Facebook :   http://www.facebook.com/prof.rakib  
/* Github   :   http://github.com/serakib           
/* Linkedin :   https://www.linkedin.com/in/serakib 
/* Website  :   http://www.rakibhossain.cf 
 *========================================
 */
(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        //==================Viewport Measurement==================        
        var $window = $(window);
        var windowSize = $window.width();
        var windowHeight = getViewPortHeight();

        $(window).resize(function() {
            windowSize = $window.width();
            windowHeight = getViewPortHeight();
        });

        function getViewPortHeight() {
            //detech ios chrome
            if (navigator.userAgent.match('CriOS')) {
                return window.innerHeight;
            }
            return $window.height();
        }

        $('.fullScreenBg').css({
            'width': windowSize + 'px'
        });
        $('.fullScreenBg').css({
            'height': windowHeight + 'px'
        });

        var serviceHeightMax = getMaxServiceHight();
        $('.single-service').css({
            'height': serviceHeightMax + 'px'
        });

        function getMaxServiceHight() {
            var serviceHeight = $('.single-service').height();
            var tmp = serviceHeight;

            $('.single-service').each(function() {

                if ($(this).height() < serviceHeight) {
                    tmp = serviceHeight;
                } else {
                    tmp = $(this).height();

                }
            });
            return tmp;
        }



        $('.hero-content').css({
            'height': windowHeight - 140 + 'px',
            'min-height': 520 + 'px',
        });

        $('.pricing-single-item').each(function() {
            var pricingHeight = $(this).height();
            $(this).css({
                'height': pricingHeight + 'px'
            });
        });

        $('.mainmenu').slicknav({
            prependTo: '.responsive-menu'
        });

        var target = $('.single-service:nth-child(4)').nextAll();
        target.each(function() {
            $(this).css({
                'border-top': 'none'
            });
        });
        //======Add smooth scrolling to all links===========
        $("a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
        //======Fixed Mainmenu on Top after Scrolling=======
        // var navbar = $('.mainmenu-area'),
        // //distance = navbar.offset().top,
        // distance = navbar.height(),
        // $window = $(window);

        // $window.scroll(function() {
        //     if ($window.scrollTop() >= distance) {
        //         navbar.removeClass('header-area').addClass('header-area');
        //         $('.header-top-area').removeClass('none').addClass('none');

        //     } else {
        //         navbar.removeClass('header-area');
        //         $('.header-top-area').removeClass('none');
        //     }
        // });

        //==================Color Changer================== 
        $('#panelHandle').click(function() {
            var rightMargin = parseInt($(".sidePanel").css('left'));
            if (rightMargin < -1) {
                $(".sidePanel").animate({
                    'left': '0px'
                });
                $(".pointer").remove();
            } else {
                $(".sidePanel").animate({
                    'left': '-160px'
                });
            }
        });

        $('.color-changer a').on("click", function() {
            var color = $(this).attr('data-color');
            var logo = $('.logo img');
            $('#theme').attr('href', 'assets/css/themes/' + color + '.css');
            $(logo).attr('src', 'assets/img/logo-' + color + '.png');

        });


        //==================Testimonial Slider================== 
        $(".testimonial-slider").owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            loop: true,
            mouseDrag: true,
            touchDrag: false,
        });

        //==================Partners Slider================== 
        $(".partners").owlCarousel({
            items: 5,
            nav: false,
            dots: false,
            autoplay: false,
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                340: {
                    items: 2
                },
                600: {
                    items: 3
                },
                960: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });


        //==================Slicknav==================
        $("ul#navigation").slicknav({
            prependTo: ".responsive-menu-wrap"
        });


        //==================WOW Js====================   
        // Helper function for add element box list in WOW
        WOW.prototype.addBox = function(element) {
            this.boxes.push(element);
        };

        // Init WOW.js and get instance
        var wow = new WOW();
        wow.init();

        // Attach scrollSpy to .wow elements for detect view exit events,
        // then reset elements and add again for animation
        $('.wow').on('scrollSpy:exit', function() {
            $(this).css({
                'visibility': 'hidden',
                'animation-name': 'none'
            }).removeClass('animated');
            wow.addBox(this);
        }).scrollSpy()
        //==================UI Top====================   
        $().UItoTop({
            easingType: 'easeOutQuart'
        });


        //jQuery Ready Function end   
    });


    jQuery(window).load(function() {
        $(".home-preloder").fadeOut(3000);
        //jquery Load Function end
    });

    //Jquery end
}(jQuery));
