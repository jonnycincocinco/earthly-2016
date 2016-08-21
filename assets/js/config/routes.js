window.app.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    'use strict';

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        'http://ell.dev:8888/**/*',
        'http://127.0.0.1:54000',
        'http://stage-2015.eleveninc.com/**/*',
        'http://www.eleveninc.com/**/*',
        'https://s3.amazonaws.com/cdn.eleveninc.com/**/*'

    ]);


    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home',
        {
            url: '/',
            controller: 'homeView',
            templateUrl: ajaxInfo.template_directory + '/templates/home.html',
            activetab: 'home'
        }
    )

    .state('what-we-do',
        {
            url: '/what-we-do',
            controller: 'whatWeDoView',
            templateUrl: ajaxInfo.template_directory + '/templates/what-we-do.html',
            activetab: 'what-we-do'
        }
    )

    .state('earthy-dna',
        {
            url: '/earthy-dna',
            controller: 'earthlyDnaView',
            templateUrl: ajaxInfo.template_directory + '/templates/earthly-dna.html',
            activetab: 'earthy-dna'
        }
    )

    .state('security',
        {
            url: '/security',
            controller: 'securityView',
            templateUrl: ajaxInfo.template_directory + '/templates/security.html',
            activetab: 'security'
        }
    )

    .state('portfolio',
        {
            url: '/portfolio',
            controller: 'portfolioView',
            templateUrl: ajaxInfo.template_directory + '/templates/portfolio.html',
            activetab: 'portfolio'
        }
    )

    .state('faqs',
        {
            url: '/faqs',
            controller: 'faqsView',
            templateUrl: ajaxInfo.template_directory + '/templates/faqs.html',
            activetab: 'faqs'
        }
    )

    .state('bio',
        {
            url: '/about-us/bio/:slug',
            controller: 'bioView',
            templateUrl: ajaxInfo.template_directory + '/templates/bio.html',
            activetab: 'about-us'
        }
    )

    .state('news',
        {
            url: '/news',
            controller: 'newsView',
            templateUrl: ajaxInfo.template_directory + '/templates/news.html',
            activetab: 'news'
        }
    )

    .state('contact',
        {
            url: '/contact',
            controller: 'contactView',
            templateUrl: ajaxInfo.template_directory + '/templates/contact.html',
            activetab: 'contact'
        }
    );

}]);
