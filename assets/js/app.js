var app;

(function () {

    // Declare app level module which depends on views, and components
    app = angular.module('Earthly', [
        'ui.router',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'ngPicturefill',
        'slickCarousel',
        'anim-in-out',
        '720kb.socialshare',
        'Earthly.controllers',
        'Earthly.directives',
        'Earthly.services'
    ]);


    angular.module('Earthly.controllers', []);
    angular.module('Earthly.directives', []);
    angular.module('Earthly.services', []);

    app.filter('to_trusted',['$sce',function ($sce) {
		return function(text){
			return $sce.trustAsHtml(text);
           // return $sce.trustAsResourceUrl(text);
		};
	}])

    app.filter('to_trustedURL',['$sce',function ($sce) {
        return function(url){
           return $sce.trustAsResourceUrl(url);
        };
    }])

	app.run(function (getElement, $state, $rootScope, $window, $location) {
        //console.log('running');

        //console.log($location.url());


        $rootScope.$on('$viewContentLoading', function(){
            //console.log('getElement', getElement.getValue() );
            //console.log('viewContentLoading');

            if(getElement.getValue() == 'close'){

                if($location.$$hash){
                    //console.log('close clicked', $location.$$hash);
                    $window.ga('send', 'pageview', {page: 'close ' + $location.$hash});
                  }else{
                    //console.log('close clicked', $location.$$path);
                    $window.ga('send', 'pageview', {page: 'close ' + $location.$$path});
                }


            }else if(getElement.getValue() == 'previous'){

                $window.ga('send', 'pageview', {page: 'previous ' + $location.$$path});

            }else if(getElement.getValue() == 'next'){
                $window.ga('send', 'pageview', {page: 'next ' + $location.$$path});

            }else{
                $window.ga('send', 'pageview', {page: $location.url()});
            }

            //getElement.setValue('default');


            //console.log('view: ' + $location.url());
            //console.log('location: ', $location);
            //console.log('rootScope: ', $rootScope);
            //console.log('state: ', $state);


        });

        $rootScope.$on('$locationChangeSuccess', function(){
            //console.log('locationChangeSuccess');
        });

        $rootScope.$on('$stateChangeSuccess', function(){
            //console.log('stateChangeSuccess');
            getElement.setValue('default');
        });

		$rootScope.dir = ajaxInfo.template_directory;
		$rootScope.is_admin = ajaxInfo.is_admin;

		// cache
        var _cache = {},

        // init
        _init = function _init() {
            _setupCache();
            _addEvents();
        },

        // setup cache
        _setupCache = function _setupCache() {

            _cache.htmlEl = $('html');
            _cache.bodyEl = $('body');
            _cache.mobileMenuToggle = $('.desktop-nav--mobile-toggle');
            _cache.mobileNav = $('.mobile-nav');
            _cache.mobileNavLinks = $('.mobile-nav--main li > a');
            _cache.logoMain = $('.desktop-nav--logo');
        },

        // add events
        _addEvents = function _addEvents() {

            // menu toggle
            _cache.mobileMenuToggle.on('click', function(e){
                e.preventDefault();
                if (!_cache.htmlEl.hasClass('overlay--open')) {
                    _openMenu();
                } else {
                    _closeMenu();
                }
            });

            // mobile menu links
            _cache.mobileNavLinks.on('click', function(){
                if (_cache.htmlEl.hasClass('overlay--open')) {
                    _closeMenu();
                }
            });

            // main logo link
            _cache.logoMain.on('click', function(){
                if (_cache.htmlEl.hasClass('overlay--open')) {
                    _closeMenu();
                }
            });

            // breakpoint options
            $(window).setBreakpoints({
                distinct: true,
                breakpoints: [0, 768, 1024, 1440]
            });

            // mobile breakpoint
            $(window).bind('enterBreakpoint0', function() {
                _cache.htmlEl.addClass('breakpoint-mobile');
            });
            $(window).bind('exitBreakpoint0', function() {
                _cache.htmlEl.removeClass('breakpoint-mobile');
            });

            // tablet breakpoint
            $(window).bind('enterBreakpoint768', function() {
                _cache.htmlEl.addClass('breakpoint-tablet');
            });
            $(window).bind('exitBreakpoint768', function() {
                _cache.htmlEl.removeClass('breakpoint-tablet');
            });

            // desktop breakpoint
            $(window).bind('enterBreakpoint1024', function() {
                $('html').addClass('breakpoint-desktop');
                if (_cache.htmlEl.hasClass('overlay--open')) {
                    _closeMenu();
                }
            });
            $(window).bind('exitBreakpoint1024', function() {
                _cache.htmlEl.removeClass('breakpoint-desktop');
            });

            // cinema breakpoint
            $(window).bind('enterBreakpoint1440', function() {
                $('html').addClass('breakpoint-cinema');
                if (_cache.htmlEl.hasClass('overlay--open')) {
                    _closeMenu();
                }
            });
            $(window).bind('exitBreakpoint1440', function() {
                _cache.htmlEl.removeClass('breakpoint-cinema');
            });

        },

        // open mobile/tablet menu
        _openMenu = function _setupCache() {

            _cache.htmlEl.addClass('overlay--open');
            _cache.bodyEl.addClass('overlay--open');
            _cache.mobileMenuToggle.addClass('open');
            _cache.mobileNav.addClass('open');
            $('html, body').animate({ scrollTop: 0 }, 'fast');

        },

        // close mobile/tablet menu
        _closeMenu = function _setupCache() {

            setTimeout(function(){
                _cache.htmlEl.removeClass('overlay--open');
                _cache.bodyEl.removeClass('overlay--open');
                _cache.mobileMenuToggle.removeClass('open');
                _cache.mobileNav.removeClass('open');
            }, 400);

        };

        // init
        _init();

	});

}());
