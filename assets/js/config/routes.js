window.app.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
    'use strict';

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        'http://erff.dev:8888/**/*',
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

    .state('privacy-policy',
        {
            url: '/privacy-policy',
            controller: 'privacyPolicyView',
            templateUrl: ajaxInfo.template_directory + '/templates/privacy-policy.html',
            activetab: 'privacy-policy'
        }
    )

    .state('terms',
        {
            url: '/terms-and-conditions',
            controller: 'termsView',
            templateUrl: ajaxInfo.template_directory + '/templates/terms.html',
            activetab: 'terms'
        }
    )

    .state('client-agreement',
        {
            url: '/client-agreement',
            controller: 'clientAgreementView',
            templateUrl: ajaxInfo.template_directory + '/templates/client-agreement.html',
            activetab: 'client-agreement'
        }
    );

}]);
