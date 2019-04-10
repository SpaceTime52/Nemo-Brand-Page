/* -----------------------------------------------------------------------------

Chata - Modern Real Estate Template + E-Commerce

File:           JS Core
Version:        1.0
Last change:    16/06/17 
Author:         Suelo 

-------------------------------------------------------------------------------- */

"use strict";

var $body = $('body'),
    $bodyWrapper = $('#body-wrapper'),
    $header = $('#header'),
    $content = $('#content'),
    $footer = $('#footer'),
    $navToggle = $('#nav-toggle'),
    $navMain = $('#nav-main'),
    $bodyOverlay = $('#body-overlay'),
    trueMobile;

var Core = {
    init: function() {
        this.Basic.init();
        this.Component.init();
    },
    Basic: {
        init: function() { 
            this.systemDetector();
            this.backgrounds();
            this.footer();
            this.navigation();
            this.masonry();
        },
        animations: function() {
            // Animation - appear 
            $('.animated','#content').appear(function() {
                $(this).each(function(){ 
                    var $target =  $(this);
                    var delay = $(this).data('animation-delay');
                    setTimeout(function() {
                        $target.addClass($target.data('animation')).addClass('visible');
                    }, delay);
                });
            });
        },
        backgrounds: function() {

            // Image
            $('.bg-image-holder, .post.single .post-image').each(function(){
                var src = $(this).children('img').attr('src');
                $(this).css('background-image','url('+src+')').children('img').hide();
            });

        },
        footer: function() {
            if($footer.hasClass('footer-fixed')) {
                $body.css('padding-bottom',$footer.outerHeight() + 'px');
            }
        },
        masonry: function() {
            var $grid = $('.masonry','#content');

            if($grid.length) {

                $grid.masonry({
                    columnWidth: '.masonry-sizer',
                    itemSelector: '.masonry-item',
                    percentPosition: true
                });

                $grid.imagesLoaded().progress(function() {
                    $grid.masonry('layout');
                });

                $grid.on('layoutComplete', Waypoint.refreshAll());

            }
        },
        pageTransition: function() {
            if($bodyWrapper.hasClass('animsition')) {
                $bodyWrapper.animsition({
                    inClass: 'overlay-slide-in-top',
                    outClass: 'overlay-slide-out-bottom',
                    inDuration: 1500,
                    outDuration: 800,
                    linkElement: 'a:not([target="_blank"]):not([href^="#"])',
                    loading: true,
                    loadingParentElement: 'body', //animsition wrapper element
                    loadingClass: 'page-loader',
                    loadingInner: '<svg class="loader" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle class="circle" fill="none" stroke-width="2" stroke-linecap="round" cx="16" cy="16" r="14"></circle></svg>', 
                    timeout: false,
                    timeoutCountdown: 5000,
                    onLoadEvent: true,
                    browser: [ 'animation-duration', '-webkit-animation-duration'],
                    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
                    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
                    overlay : true,
                    overlayClass : 'animsition-overlay-slide',
                    overlayParentElement : 'body',
                    transition: function(url){ window.location.href = url; }
                });

                $bodyWrapper.on('animsition.inStart', function(){
                    setTimeout(function() {
                        Core.Basic.animations();
                    },600);
                });
            } else {
                Core.Basic.animations();
            }
        },
        systemDetector: function () {

            var isMobile = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
                }
            };

            trueMobile = isMobile.any();

        },
        navigation: function() {

            var $header = $('#header');
            var headerHeight = $('#header').height();
            var $mobileNav = $('#mobile-nav');
            var $section = $('.section','#content');
            var $body = $('body');
            var scrollOffset = 0;
            if ($header.hasClass('header-horizontal')) scrollOffset = -headerHeight;

            var $scrollers = $('#header, #mobile-nav, [data-local-scroll]');
            $scrollers.find('a').on('click', function(){
                $(this).blur();
            });
            $scrollers.localScroll({
                offset: scrollOffset,
                duration: 700
            });

            var $mainNavigation = $('#navigation-main'),
                $menuItem = $('#navigation-main li > a'),
                mainMenuOffset = null,
                $selector = $mainNavigation.children('.selector');

            var setMenuSelector = function() {
                var $activeItem = $mainNavigation.find('a.active');
                if($activeItem.length != 0) {
                    mainMenuOffset = $mainNavigation.offset().left;
                    $selector.css({
                        'width': $activeItem.outerWidth(),
                        'left': $activeItem.offset().left - mainMenuOffset + 'px'
                    });
                }
            }

            var checkMenuItem = function(id) {
                $menuItem.each(function(){
                    var link = $(this).attr('href');
                    if(id==link) {
                        $(this).addClass('active');
                        setMenuSelector();
                    }
                    else $(this).removeClass('active');
                });
                // Hide Mobile Nav
                $mainNavigation.removeClass('show');
                $header.removeClass('open');
                $navToggle.removeClass('open');
            }

            $section.waypoint({
                handler: function(direction) {
                    if(direction=='up') {
                        var id = '#'+this.element.id;
                        checkMenuItem(id);
                    }
                },
                offset: function() {
                    if ($header.hasClass('header-horizontal')) return -this.element.clientHeight+headerHeight;
                    else return -this.element.clientHeight+2;
                }
            });
            $section.waypoint({
                handler: function(direction) {
                    if(direction=='down') {
                        var id = '#'+this.element.id;
                        checkMenuItem(id);
                    }
                },
                offset: function() {
                    if ($header.hasClass('header-horizontal')) return headerHeight+1;
                    else return 1;
                }
            });

            // Mobile Navigation
            $navToggle.on('click', function(){
                $(this).toggleClass('open');
                if($header.hasClass('header-horizontal')) {
                    $mainNavigation.toggleClass('show');
                } else {
                    $header.toggleClass('open');
                }
                return false;
            });
        }
    },
    Component: {
        init: function() {  
            this.carousel(); 
            this.forms();
            this.gallery();
            this.map();
            this.modal();
            this.panelObjects();
            this.plan();
            this.tooltip();
            this.twitter();
        },
        carousel: function() {

            $('.carousel','#content').slick();

            $('.slider-main','#content').slick({
                fade: true,
                dots: false,
                speed: 800,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4500,
                pauseOnHover: false,
                initialSlide: 1,
                asNavFor: '.slider-main-nav',
            });

            $('.slider-main-nav','#content').slick({
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                focusOnSelect: true, 
                centerMode: true,
                asNavFor: '.slider-main'
            });

            $('.slider-main','#content').slick('slickGoTo',0,true);

            $('.carousel-gallery','#content').slick({
                arrows: true,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 4000
            });

        },
        forms: function(){

            // Validate Form 
            $('[data-validate]').each(function(){
                $(this).validate({
                    validClass: 'valid',
                    errorClass: 'error',
                    onfocusout: function(element,event) {
                        $(element).valid();
                    },
                    errorPlacement: function(error,element) {
                        return true;
                    },
                    rules: {
                        email: {
                            required    : true,
                            email       : true
                        }
                    }
                });
            });

            // Sign In
            var $signUpForm  = $('.sign-up-form');

            if($signUpForm.length>0) {
            
                $signUpForm.submit(function() {
                    var $btn = $(this).find('.btn-submit'),
                        $form = $(this);

                    if ($form.valid()){
                        $btn.addClass('loading');
                        $.ajax({
                            type: $form.attr('method'),
                            url:  $form.attr('action'),
                            data: $form.serialize(),
                            cache: false,
                            dataType: 'jsonp',
                            jsonp: 'c',
                            contentType: "application/json; charset=utf-8",
                            error: function(err) { setTimeout(function(){ $btn.addClass('error'); }, 1200); },
                            success: function(data) {
                                if(data.result != 'success'){
                                    $btn.addClass('error');
                                } else {
                                    $btn.addClass('success');
                                }
                            },
                            complete: function(data) {
                                setTimeout(function(){
                                    $btn.removeClass('loading error success');
                                },6000);
                            }
                        });
                        return false;
                    }
                    return false;
                });

            }

            // Contact Form
            var $offerForm  = $('#offer-form');

            if($offerForm.length>0) {
            
                $offerForm.submit(function() {
                    var $btn = $(this).find('.btn-submit'),
                        $form = $(this);

                    if ($form.valid()){
                        $btn.addClass('loading');
                        $.ajax({
                            type: 'POST',
                            url: 'assets/php/offer-form.php',
                            data: $form.serialize(),
                            error: function(err) { setTimeout(function(){ $btn.addClass('error'); }, 1200); },
                            success: function(data) {
                                if(data != 'success'){
                                    $btn.addClass('error');
                                } else {
                                    $btn.addClass('success');
                                }
                            },
                            complete: function(data) {
                                setTimeout(function(){
                                    $btn.removeClass('loading error success');
                                },6000);
                            }
                        });
                        return false;
                    }
                    return false;
                });

            }

        },
        gallery: function() {

            var galleryContainer = '';
                galleryContainer += '<!-- Root element of PhotoSwipe. Must have class pswp. -->';
                galleryContainer += '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">';
                galleryContainer += '    <div class="pswp__bg"></div>';
                galleryContainer += '    <div class="pswp__scroll-wrap">';
                galleryContainer += '        <div class="pswp__container">';
                galleryContainer += '            <div class="pswp__item"></div>';
                galleryContainer += '            <div class="pswp__item"></div>';
                galleryContainer += '            <div class="pswp__item"></div>';
                galleryContainer += '        </div>';
                galleryContainer += '        <div class="pswp__ui pswp__ui--hidden">';
                galleryContainer += '            <div class="pswp__top-bar">';
                galleryContainer += '                <div class="pswp__counter"></div>';
                galleryContainer += '                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>';
                galleryContainer += '                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>';
                galleryContainer += '                <button class="pswp__button pswp__button--zoom" title="Zoom in\/out"></button>';
                galleryContainer += '                <div class="pswp__preloader">';
                galleryContainer += '                    <div class="pswp__preloader__icn">';
                galleryContainer += '                      <div class="pswp__preloader__cut">';
                galleryContainer += '                        <div class="pswp__preloader__donut"></div>';
                galleryContainer += '                      </div>';
                galleryContainer += '                    </div>';
                galleryContainer += '                </div>';
                galleryContainer += '            </div>';
                galleryContainer += '            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">';
                galleryContainer += '                <div class="pswp__share-tooltip"></div> ';
                galleryContainer += '            </div>';
                galleryContainer += '            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">';
                galleryContainer += '            </button>';
                galleryContainer += '            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">';
                galleryContainer += '            </button>';
                galleryContainer += '            <div class="pswp__caption">';
                galleryContainer += '                <div class="pswp__caption__center"></div>';
                galleryContainer += '            </div>';
                galleryContainer += '        </div>';
                galleryContainer += '    </div>';
                galleryContainer += '</div>';

            $body.append(galleryContainer);

            // Photoswipe Gallery
            var openPhotoSwipe = function(slide, galleryItems) {
                var pswpElement = document.querySelectorAll('.pswp')[0];

                var options = {
                    index: slide // start at first slide
                };

                // Initializes and opens PhotoSwipe
                var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, galleryItems, options);
                gallery.init();
            }

            $('[data-toggle="gallery"]').on('click', function(){
                var items = eval($(this).data('items'));
                var slide = eval($(this).data('slide'));
                openPhotoSwipe(slide,items);
                return false;
            });

        },
        map: function() {

            var $googleMap = $('#google-map');

            if($googleMap.length) {

                var yourLatitude = 40.758895;   
                var yourLongitude = -73.985131;    

                var pickedStyle = $googleMap.data('style');     
                var wy = [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}];
                var apple = [{"featureType":"landscape.man_made","elementType":"all","stylers":[{"color":"#faf5ed"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5a6"}]},{"featureType":"road","elementType":"all","stylers":[{"weight":"1.00"},{"gamma":"1.8"},{"saturation":"0"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ffb200"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"0"},{"gamma":"1"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"hue":"#b000ff"},{"saturation":"23"},{"lightness":"-4"},{"gamma":"0.80"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#a0daf2"}]}];
                var dark = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

                var mapOptions = {
                    zoom: 15,
                    center: {lat: yourLatitude, lng: yourLongitude},
                    mapTypeControl: false,
                    panControl: false,
                    zoomControl: true,
                    scaleControl: false,
                    streetViewControl: false,
                    scrollwheel: false,
                    styles: eval(pickedStyle)
                };

                var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
                var myLatLng = new google.maps.LatLng(yourLatitude,yourLongitude);
                var image = {
                    url: 'assets/img/location-pin.png',
                    anchor: new google.maps.Point(79, 115),
                };
                var myLocation = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    icon: image
                });
            }

        },
        plan: function() {
            
            // Product Feature
            $('.plan-container .plan-feature','#content').each(function(){
                var x = $(this).data('x');
                var y = $(this).data('y');
                $(this).css({
                    'top': y,
                    'left': x
                });
            });

        },
        modal: function() {

            $('.modal[data-timeout]').each(function(){
                var timeout = $(this).data('timeout'),
                    $this = $(this);
                setTimeout(function() {
                    $this.modal('show');
                }, timeout)
            });

            $('[data-toggle="video-modal"]').on('click', function() {
                var modal = $(this).data('target'),
                    video = $(this).data('video')

                $(modal + ' iframe').attr('src', video + '?autoplay=1');
                $(modal).modal('show');

                $(modal).on('hidden.bs.modal', function () {
                    var $modalContent = $(modal + ' .modal-content')
                    $(modal + ' iframe').remove();
                    $modalContent.html('<iframe height="500"></iframe>');
                })

                return false;
            });

        },
        panelObjects: function() {

            // Panel Objects

            var $panelObjects = $('#panel-objects'),
                $panelObjectsToggle = $('[data-toggle="panel-objects"]');

            if($panelObjects.length) {
                $panelObjectsToggle.on('click', function(){
                    if($panelObjects.is(':visible')) {
                        $body.removeClass('panel-objects-open');
                        $panelObjects.removeClass('show');
                        setTimeout(function(){
                            $panelObjects.hide(0);
                        },300);
                    } else {
                        $body.addClass('panel-objects-open');
                        $panelObjects.show(0,function(){
                            $panelObjects.addClass('show');
                        });
                    }

                    return false;
                });
            }

        },
        tooltip: function() {

            $("[data-toggle='tooltip']").tooltip();

        },
        twitter: function() {

            var $twitterFeed = $('#twitter-feed');

            if($twitterFeed.length) {
                var config = {
                    'profile': {"screenName": 'suelopl'},
                    'domId': 'twitter-feed',
                    'maxTweets': 2,
                    'enableLinks': true,
                    'showPermalinks': false,
                    'showUser': false,
                    'showInteraction': false,
                    'showTime': true,
                    'lang': 'en'
                };

                twitterFetcher.fetch(config);
            }

        }
    }
};

// Page Transition Initialization
Core.Basic.pageTransition();

$(document).ready(function (){ 
    // Core Initialization  
    Core.init();
});

// Stick to Content
var $stickableNav = $('.stick-to-content');
var stickableNavOffset;

if($stickableNav.length) {
    stickableNavOffset = $stickableNav.offset().top;
}

function setStickyElement() {
    var scrolled = $(window).scrollTop(),
        topVal = 0;

    if($body.hasClass('header-horizontal')) {
        topVal = $header.outerHeight();
    }

    if (scrolled > (stickableNavOffset - topVal)) {
        $stickableNav.css({
            'position': 'fixed',
            'top': topVal + 'px',
            'width': $stickableNav.innerWidth() + 'px'
        });
    } else {
        $stickableNav.removeAttr('style');
    }

    if (scrolled > ($footer.offset().top - $stickableNav.outerHeight() - topVal)) {
        $stickableNav.css({
            'position': 'absolute',
            'top': $footer.offset().top - $stickableNav.outerHeight() - stickableNavOffset + 'px'
        });
    }
}

$(window).on('scroll', function (){
    if($stickableNav.length) {
        setStickyElement();
    }
});

$(window).on('resize', function (){
    Core.Basic.footer();

    // Refresh Waypoints
    setTimeout(function(){
        Waypoint.refreshAll()
    },600);
});
