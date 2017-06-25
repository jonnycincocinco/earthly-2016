window.app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$sceDelegateProvider', function ($stateProvider, $locationProvider, $urlRouterProvider, $sceDelegateProvider) {
    'use strict';

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        'http://erff.dev:8888/**/*',
        'http://127.0.0.1:54000'
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

    .state('libary-item',
        {
            url: '/library/:slug',
            controller: 'expertiseView',
            templateUrl: ajaxInfo.template_directory + '/templates/library-item.html',
            activetab: 'library'
        }
    )

    .state('sustainable',
        {
            url: '/library/sustainble-investing/',
            controller: 'categoryView',
            templateUrl: ajaxInfo.template_directory + '/templates/library-sustainable.html',
            activetab: 'library'
        }
    )

    .state('personal',
        {
            url: '/library/personal-finance/',
            controller: 'categoryView',
            templateUrl: ajaxInfo.template_directory + '/templates/library-personal.html',
            activetab: 'library'
        }
    )

    .state('passive',
        {
            url: '/library/passive-investing/',
            controller: 'categoryView',
            templateUrl: ajaxInfo.template_directory + '/templates/library-passive.html',
            activetab: 'library'
        }
    )

    .state('financial',
        {
            url: '/library/financial-planning/',
            controller: 'categoryView',
            templateUrl: ajaxInfo.template_directory + '/templates/library-financial.html',
            activetab: 'library'
        }
    )

    .state('news',
        {
            url: '/library/news/',
            controller: 'categoryView',
            templateUrl: ajaxInfo.template_directory + '/templates/library-news.html',
            activetab: 'library'
        }
    )

    .state('earthly-dna',
        {
            url: '/earthly-dna',
            controller: 'earthlyDnaView',
            templateUrl: ajaxInfo.template_directory + '/templates/earthly-dna.html',
            activetab: 'earthly-dna'
        }
    )

    .state('services',
        {
            url: '/services',
            controller: 'servicesView',
            templateUrl: ajaxInfo.template_directory + '/templates/services.html',
            activetab: 'services'
        }
    )

    .state('fees',
        {
            url: '/fees',
            controller: 'feesView',
            templateUrl: ajaxInfo.template_directory + '/templates/fees.html',
            activetab: 'fees'
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

    .state('about-us',
        {
            url: '/about-us',
            controller: 'aboutUsView',
            templateUrl: ajaxInfo.template_directory + '/templates/about-us.html',
            activetab: 'about-us'
        }
    )

    .state('library',
        {
            url: '/library',
            controller: 'newsView',
            templateUrl: ajaxInfo.template_directory + '/templates/library.html',
            activetab: 'library'
        }
    )

    .state('contact',
        {
            url: '/contact',
            controller: 'contactView',
            templateUrl: ajaxInfo.template_directory + '/templates/contact.html',
            activetab: 'contact'
        }
    )


    .state('sign-up',
        {
            url: '/sign-up',
            controller: 'signUpView',
            templateUrl: ajaxInfo.template_directory + '/templates/sign-up.html',
            activetab: 'sign-up'
        }
    );

    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);

}]);
