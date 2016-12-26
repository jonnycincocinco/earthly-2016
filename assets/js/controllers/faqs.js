angular.module('Earthly.controllers')

.controller('faqsView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    startAnimations();

    $(".tabs-menu .tab-item").click(function() {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab = $(this).attr("data-link");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();

    });

    $scope.searchFAQs = '';

    $scope.faqs = [
      {
        "sections": [
          {
            "id": "faq-section-general",
            "title": "General Questions",
            "posts": [
                {
                  "title": "When will Earthly launch and what is the status of the development process?",
                  "content":
                  [
                    {
                      "postSection": "We are targeting an Q4 2016 release. Earthly is currently in private beta undergoing stress testing and auditing."
                    }
                  ]
                },
                {
                  "title": "What is Earthly?",
                  "content":
                  [
                    {
                      "postSection": "Earthly is the first automated investment advisory and portfolio management firm devoted to socially responsible investing (SRI) and impact investing. We harness the power and cost saving potential of automated systems to create a more affordable and seamless advisory experience."
                    },
                    {
                      "postSection": "Our primary focus centers around helping clients create diversified investment portfolios that reflect their principles and then managing that portfolio for social responsibility, impact, risk and taxes."
                    },
                    {
                      "postSection": "Our goal is to help our clients both build wealth and make an impact in the world."
                    }
                  ]
                },
                {
                  "title": "Why did you start Earthly?",
                  "content":
                  [
                    {
                      "postSection": "Earthly was originally conceived as a means for our founders to passively invest in a diversified investment portfolio that excluded fossil fuel companies.  Over time, the idea evolved to not only punish negative environmental performance, but favor positive performance.  Finally, other key performance indicators (KPIs) were added across multiple Environmental, Social and Governance (ESG) categories as a way for our founders to invest using not only environmental criteria, but other principled criteria."
                    },
                    {
                      "postSection": "As a secondary objective, our founders also desired to automate tax and risk management processes that previously required careful monitoring."
                    },
                    {
                      "postSection": "Today, Earthly’s mission is to be the premier source for socially responsible and impact investing in the world by making the investment process simple, inexpensive and worry-free."
                    }
                  ]
                },
                {
                  "title": "Where does Earthly stand on the various environmental, social, governance and ethical issues it advertises to clients?",
                  "content":
                  [
                    {
                      "postSection": "Earthly will always support and incorporate strong corporate social responsibility (CSR) standards as a part of our official corporate policy.  We seek to achieve high minimum standards across the spectrum of key performance indicators (KPIs) within the Environmental, Social and Governance (ESG) categories.  These standards not only drive our corporate policy but our security selection process for clients."
                    },
                    {
                      "postSection": "Earthly does not endorse any particular ethical screening criteria that we offer to clients as part of our portfolio selection process."
                    }
                  ]
                },
                {
                  "title": "Why doesn't Earthly stand behind any ethical screening criteria?",
                  "content":
                  [
                    {
                      "postSection": "Our ethical screening options were designed to purely reflect the individual principles of our clients."
                    },
                    {
                      "postSection": "Given the contentious and variable nature of the various ethical screening categories we offer, it would be inappropriate for us to take a stance on any particular issue and not recommend to all clients that they exclude or include that category’s securities within their portfolio."
                    },
                    {
                      "postSection": "More importantly, none of the ethical screening criteria we offer to clients directly relate to or affect any aspect of our business or corporate policy."
                    }
                  ]
                },
                {
                  "title": "Who is Earthly's target client base?",
                  "content":
                  [
                    {
                      "postSection": "Our offerings are targeted towards individual investors and institutions who desire to divest from unethical movements and focus investment on causes that mirror their principles. Examples of clients could include:"
                    },
                    {
                      "postSection": "Environmentally-minded investors looking to divest from fossil fuels and support clean energy;"
                    },
                    {
                      "postSection": "Religious investors looking to divest from weapons, alcohol and tobacco;"
                    },
                    {
                      "postSection": "Social justice activists looking to focus on companies not employing impoverished labor, companies with a focus on employment diversity and companies that support local communities."
                    }
                  ]
                },
                {
                  "title": "How much should I invest in the Earthly platform?",
                  "content":
                  [
                    {
                      "postSection": "Earthly believes a general rule of thumb is to maintain roughly six months to a year of living expenses in cash for unexpected life events such as a job loss or unexpected medical expenses.  Any other cash needs that are expected to occur within the next 0-5 years might also be good candidates to be invested in FDIC insured instruments such as bank deposits."
                    },
                    {
                      "postSection": "Cash not needed within the first 5 years might be better served being invested in a diversified allocation of stocks and bonds such as that offered by Earthly."
                    },
                    {
                      "postSection": "Please note that information in this section may not be suitable for all clients and are general rules of thumb only."
                    }
                  ]
                },
                {
                  "title": "How does Earthly compare to a socially responsible mutual or index fund?",
                  "content":
                  [
                    {
                      "postSection": "Socially responsible mutual and index funds are suffer from several problems:"
                    },
                    {
                      "postSectionIndent": "1) High Fees"
                    },
                    {
                      "postSectionIndent": "2) Cookie cutter principles"
                    },
                    {
                      "postSectionIndent": "3) Lack of Transparency"
                    },
                    {
                      "postSectionIndent": "4) Voting Rights Transferred to Fund Manager"
                    },
                    {
                      "postSection": "Earthly addresses these problems in the following ways:"
                    },
                    {
                      "postSectionIndent": "1) We charge a low 0.25% management fee which is significantly less than the average SRI mutual fund and ETF."
                    },
                    {
                      "postSectionIndent": "2) We offer customized portfolios tailored to each client’s SRI preferences."
                    },
                    {
                      "postSectionIndent": "3) We use a data-driven, quantitative approach to rating companies’ SRI performance and we disclose our methods."
                    },
                    {
                      "postSectionIndent": "4) We allow clients to vote their shares or vote proxies on their behalf."
                    },
                    {
                      "title": "How can I gauge your level of performance?",
                      "content":
                      [
                        {
                          "postSection": "Given that our Social Identity service can conceivably produce a nearly infinite number of distinct portfolios, we will provide a performance charting application with sample portfolios at certain key Social Identity preference levels.  Our clients and potential clients can then view how their preferences would have historically affected their investment performance."
                        },
                        {
                          "postSection": "All clients have the ability to view their individual performance history through their online account."
                        }                      ]
                    },
                    {
                      "title": "How frequently can I direct trades in my portfolio?",
                      "content":
                      [
                        {
                          "postSection": "We firmly believe that the best approach for all investors is to take a long-term view of market performance. As a result, we allow only one change in your asset allocation strategy every 90 days. You may still contribute to or distribute from your account as many times as you wish."
                        }
                      ]
                    },
                    {
                      "title": "What is an ETF?",
                      "content":
                      [
                        {
                          "postSection": "An ETF (exchange traded fund) is a security that tracks an index and seeks to invest in a basket of individual securities such as commodities, bonds, or stocks. This structure allows investors to buy stock of multiple companies, bonds or other investments without having to buy each security separately. Unlike mutual funds, an ETF trades like common stock on a stock exchange. ETFs experience price changes throughout the day as they are bought and sold."
                        }
                      ]
                    },
                    {
                      "title": "What will happen to my account if Earthly ceases doing business or is acquired?",
                      "content":
                      [
                        {
                          "postSection": "If Earthly is acquired, your brokerage account would remain in your own name and you would be free to add or withdraw money at any time, however your account holdings may be transferred to another custodian."
                        },
                        {
                          "postSection": "In the unlikely event Earthly were to cease doing business, your account would be held by our brokerage partner until you transferred your account to a new broker or chose to liquidate your account. During this period your account would not be managed by our brokerage partner."
                        }
                      ]
                    },
                    {
                      "title": "Why does Earthly maintain a cash balance for me?",
                      "content":
                      [
                        {
                          "postSection": "We maintain a minimum cash balance equal to the fees you’re likely to owe over the next year. In addition, stocks and ETFs trade in whole number increments and partial shares are not available, so we will never be able to invest exactly 100% of your investment. We will combine future dividends received and any additional deposits you may make with your cash balance to minimize your cash balance whenever possible."
                        },
                        {
                          "postSection": "If you have signed up for tax-loss harvesting (TLH), then there may be certain unusual scenarios when we cannot invest all of your cash due to the wash sale rule."
                        }
                      ]
                    }
                  ]
                }
              ]
            },
          {
            "id": "faq-section-portfolio",
            "title": "Portfolio",
            "posts": [
                {
                  "title": "When will Earthly launch and what is the status of the development process?",
                  "content":
                  [
                    {
                      "postSection": "We are targeting an Q4 2016 release. Earthly is currently in private beta undergoing stress testing and auditing."
                    }
                  ]
                },
                {
                  "title": "What is Earthly?",
                  "content":
                  [
                    {
                      "postSection": "Earthly is the first automated investment advisory and portfolio management firm devoted to socially responsible investing (SRI) and impact investing. We harness the power and cost saving potential of automated systems to create a more affordable and seamless advisory experience."
                    },
                    {
                      "postSection": "Our primary focus centers around helping clients create diversified investment portfolios that reflect their principles and then managing that portfolio for social responsibility, impact, risk and taxes."
                    },
                    {
                      "postSection": "Our goal is to help our clients both build wealth and make an impact in the world."
                    }
                  ]
                },
                {
                  "title": "Why did you start Earthly?",
                  "content":
                  [
                    {
                      "postSection": "Earthly was originally conceived as a means for our founders to passively invest in a diversified investment portfolio that excluded fossil fuel companies.  Over time, the idea evolved to not only punish negative environmental performance, but favor positive performance.  Finally, other key performance indicators (KPIs) were added across multiple Environmental, Social and Governance (ESG) categories as a way for our founders to invest using not only environmental criteria, but other principled criteria."
                    },
                    {
                      "postSection": "As a secondary objective, our founders also desired to automate tax and risk management processes that previously required careful monitoring."
                    },
                    {
                      "postSection": "Today, Earthly’s mission is to be the premier source for socially responsible and impact investing in the world by making the investment process simple, inexpensive and worry-free."
                    }
                  ]
                },
                {
                  "title": "Where does Earthly stand on the various environmental, social, governance and ethical issues it advertises to clients?",
                  "content":
                  [
                    {
                      "postSection": "Earthly will always support and incorporate strong corporate social responsibility (CSR) standards as a part of our official corporate policy.  We seek to achieve high minimum standards across the spectrum of key performance indicators (KPIs) within the Environmental, Social and Governance (ESG) categories.  These standards not only drive our corporate policy but our security selection process for clients."
                    },
                    {
                      "postSection": "Earthly does not endorse any particular ethical screening criteria that we offer to clients as part of our portfolio selection process."
                    }
                  ]
                },
                {
                  "title": "Why doesn't Earthly stand behind any ethical screening criteria?",
                  "content":
                  [
                    {
                      "postSection": "Our ethical screening options were designed to purely reflect the individual principles of our clients."
                    },
                    {
                      "postSection": "Given the contentious and variable nature of the various ethical screening categories we offer, it would be inappropriate for us to take a stance on any particular issue and not recommend to all clients that they exclude or include that category’s securities within their portfolio."
                    },
                    {
                      "postSection": "More importantly, none of the ethical screening criteria we offer to clients directly relate to or affect any aspect of our business or corporate policy."
                    }
                  ]
                },
                {
                  "title": "Who is Earthly's target client base?",
                  "content":
                  [
                    {
                      "postSection": "Our offerings are targeted towards individual investors and institutions who desire to divest from unethical movements and focus investment on causes that mirror their principles. Examples of clients could include:"
                    },
                    {
                      "postSection": "Environmentally-minded investors looking to divest from fossil fuels and support clean energy;"
                    },
                    {
                      "postSection": "Religious investors looking to divest from weapons, alcohol and tobacco;"
                    },
                    {
                      "postSection": "Social justice activists looking to focus on companies not employing impoverished labor, companies with a focus on employment diversity and companies that support local communities."
                    }
                  ]
                },
                {
                  "title": "How much should I invest in the Earthly platform?",
                  "content":
                  [
                    {
                      "postSection": "Earthly believes a general rule of thumb is to maintain roughly six months to a year of living expenses in cash for unexpected life events such as a job loss or unexpected medical expenses.  Any other cash needs that are expected to occur within the next 0-5 years might also be good candidates to be invested in FDIC insured instruments such as bank deposits."
                    },
                    {
                      "postSection": "Cash not needed within the first 5 years might be better served being invested in a diversified allocation of stocks and bonds such as that offered by Earthly."
                    },
                    {
                      "postSection": "Please note that information in this section may not be suitable for all clients and are general rules of thumb only."
                    }
                  ]
                },
                {
                  "title": "How does Earthly compare to a socially responsible mutual or index fund?",
                  "content":
                  [
                    {
                      "postSection": "Socially responsible mutual and index funds are suffer from several problems:"
                    },
                    {
                      "postSectionIndent": "1) High Fees"
                    },
                    {
                      "postSectionIndent": "2) Cookie cutter principles"
                    },
                    {
                      "postSectionIndent": "3) Lack of Transparency"
                    },
                    {
                      "postSectionIndent": "4) Voting Rights Transferred to Fund Manager"
                    },
                    {
                      "postSection": "Earthly addresses these problems in the following ways:"
                    },
                    {
                      "postSectionIndent": "1) We charge a low 0.25% management fee which is significantly less than the average SRI mutual fund and ETF."
                    },
                    {
                      "postSectionIndent": "2) We offer customized portfolios tailored to each client’s SRI preferences."
                    },
                    {
                      "postSectionIndent": "3) We use a data-driven, quantitative approach to rating companies’ SRI performance and we disclose our methods."
                    },
                    {
                      "postSectionIndent": "4) We allow clients to vote their shares or vote proxies on their behalf."
                    },
                    {
                      "title": "How can I gauge your level of performance?",
                      "content":
                      [
                        {
                          "postSection": "Given that our Social Identity service can conceivably produce a nearly infinite number of distinct portfolios, we will provide a performance charting application with sample portfolios at certain key Social Identity preference levels.  Our clients and potential clients can then view how their preferences would have historically affected their investment performance."
                        },
                        {
                          "postSection": "All clients have the ability to view their individual performance history through their online account."
                        }                      ]
                    },
                    {
                      "title": "How frequently can I direct trades in my portfolio?",
                      "content":
                      [
                        {
                          "postSection": "We firmly believe that the best approach for all investors is to take a long-term view of market performance. As a result, we allow only one change in your asset allocation strategy every 90 days. You may still contribute to or distribute from your account as many times as you wish."
                        }
                      ]
                    },
                    {
                      "title": "What is an ETF?",
                      "content":
                      [
                        {
                          "postSection": "An ETF (exchange traded fund) is a security that tracks an index and seeks to invest in a basket of individual securities such as commodities, bonds, or stocks. This structure allows investors to buy stock of multiple companies, bonds or other investments without having to buy each security separately. Unlike mutual funds, an ETF trades like common stock on a stock exchange. ETFs experience price changes throughout the day as they are bought and sold."
                        }
                      ]
                    },
                    {
                      "title": "What will happen to my account if Earthly ceases doing business or is acquired?",
                      "content":
                      [
                        {
                          "postSection": "If Earthly is acquired, your brokerage account would remain in your own name and you would be free to add or withdraw money at any time, however your account holdings may be transferred to another custodian."
                        },
                        {
                          "postSection": "In the unlikely event Earthly were to cease doing business, your account would be held by our brokerage partner until you transferred your account to a new broker or chose to liquidate your account. During this period your account would not be managed by our brokerage partner."
                        }
                      ]
                    },
                    {
                      "title": "Why does Earthly maintain a cash balance for me?",
                      "content":
                      [
                        {
                          "postSection": "We maintain a minimum cash balance equal to the fees you’re likely to owe over the next year. In addition, stocks and ETFs trade in whole number increments and partial shares are not available, so we will never be able to invest exactly 100% of your investment. We will combine future dividends received and any additional deposits you may make with your cash balance to minimize your cash balance whenever possible."
                        },
                        {
                          "postSection": "If you have signed up for tax-loss harvesting (TLH), then there may be certain unusual scenarios when we cannot invest all of your cash due to the wash sale rule."
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]

      }
    ];

    $scope.active$index = true;

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'faqs';

  //  window.sr = ScrollReveal().reveal('.container');




}]);
