angular.module('Earthly.controllers')

.controller('faqsView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    startAnimations();

    $scope.searchFAQs = '';

    $scope.closeSearch = function() {
      $scope.searchFAQs = '';
      $scope.activeTab = !$scope.activeTab;
    }

    $scope.faqs = [
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
              "title": "How does Earthly determine the securities that go into my portfolio?",
              "content":
              [
                {
                  "postSection": "Security selection is a two-stage process."
                },
                {
                  "postSection": "First, based on your responses to our questionnaire we generate importance values to the various sub-categories of ESG that correspond to your profile.  We then rank the universe of securities using our internal rating system and your importance values."
                },
                {
                  "postSection": "Second, we maximize the average rating of the entire portfolio subject to a series of constraints including, but not limited to, market capitalization, sector, style and liquidity."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Can I select the exact securities that go into my portfolio?",
              "content":
              [
                {
                  "postSection": "Unfortunately, not at this time. The main reason being that due to the tax-loss harvesting feature for taxable accounts and due to the resulting wash sale rule, we may end up reinvesting your funds into a security you did not originally select. You may, however, specify securities which you want to exclude, whether for legal or personal reasons."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "What kind of tracking error should I expect from your portfolios?",
              "content":
              [
                {
                  "postSection": "Tracking error is a statistic used to benchmark how closely a portfolio tracks an index.  Since each client portfolio is unique, our service is not designed to track indices in the same way that index funds do."
                },
                {
                  "postSection": "Unlike a total stock market index, indices used to create SRI portfolios are somewhat arbitrary with regards to the number of stocks selected, the weights of those stocks and the market capitalization, style and sector profiles.  Using tracking error as a means of comparing one of our Social Identity portfolios to an SRI index may not be entirely appropriate since the stock selection parameters will not align well."
                },
                {
                  "postSection": "One may be interested in seeing how their custom SRI portfolio benchmarks against a broad market index, however again, tracking error would be a misleading statistic since a broad market index is not necessarily the appropriate tracking benchmark for an SRI portfolio."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Why doesn’t Earthly strictly use Black-Litterman or mean-variance optimization to create client portfolios?",
              "content":
              [
                {
                  "postSection": "Earthly does utilize principles from both of these models, however we don’t utilize either one rigidly.  Instead, we try to steer our clients towards market capitalization weighted portfolios.  Our primary concern with many asset allocation models is that they involve making concrete, granular assumptions about how future markets will behave."
                },
                {
                  "postSection": "While financial professionals can generally estimate with a fair degree of accuracy statistical parameters such as expected returns of stocks and bonds as a whole, the introduction of sub-categories of asset class involving various market cap, style and sector categories makes predicting statistical parameters an exercise in false precision.  One can use history or CAPM-derived estimates as a foundation, but such estimates are also susceptible to time period measurement biases, and exogenous effects which may not resurface."
                },
                {
                  "postSection": "These models also do a poor job at quantifying risk.  In these models, total risk is typically given purely as a mix of variance and covariance.  In reality, many types of risk exposure are difficult to quantify and rarely do advisors mention that by utilizing asset allocation models, you’re substituting a reduction in systematic risk for increased model risk which we believe is not in the best interests of our clients."
                },
                {
                  "postSection": "Perhaps more importantly, since each of our client portfolios is unique, there is no way to incorporate with any degree of accuracy the appropriate statistical assumptions necessary to categorize all of our portfolios.  Any proxy we would use would surely result in allocations that turn out to be sub-optimal."
                },
                {
                  "postSection": "And finally, Earthly is not in the business of providing forecasts.  We’re only interested in building and managing investment portfolios for clients that will balance risk and reward within the context of a client’s behavioral biases.  In the absence of any forecasts which differ from implied market forecasts, Black-Litterman suggests that the market portfolio is the optimal allocation."
                }
              ]
            },
            {
              "title": "Why does Earthly only offer stocks and bonds and not natural resources and real estate like other providers?",
              "content":
              [
                {
                  "postSection": "Natural resources and real estate do offer the potential for diversification benefits if structured correctly. The problem is these investments as named by our counterparts are just ETFs that consist of the stocks of companies engaged in products or services involving commodities or real estate, but not the actual commodities or real estate themselves. This means that the return characteristics of these ETFs will correlate highly with the returns of stocks, thus providing negligible diversification benefits."
                },
                {
                  "postSection": "In addition, the way we define the market portfolio, stocks of natural resource companies and real estate investment trust (REIT) entities are already included in the available universe of eligible assets.  By tilting more towards these sectors, we would be supporting a double standard that we don’t believe the market portfolio offers the best combination of risk/reward."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Can I tilt my portfolio towards small-cap stocks or value stocks through the platform?",
              "content":
              [
                {
                  "postSection": "We currently don’t offer the ability to tilt towards specific equity sectors."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            }
          ]
      },
      {
        "id": "faq-section-accounts",
        "title": "Accounts",
        "posts": [
            {
              "title": "Am I eligible to open an account?",
              "content":
              [
                {
                  "postSection": "Any individual 18 or over, who is a legal U.S. resident or a U.S. citizen (with a permanent U.S. address) may open an account with us."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "What is the minimum amount required to open an account?",
              "content":
              [
                {
                  "postSection": "There is no minimum amount to open an account with us, however we require at least $10,000 available to invest in equity products to utilize our Social Identity service. If this threshold is not met at initial funding, we will invest your cash in socially responsible index funds until the $10,000 threshold is met.  At that time, you may instruct us to reallocate your investments into our Social Identity service. "
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Can Earthly manage my account located at another institution?",
              "content":
              [
                {
                  "postSection": "At this time, we do not have plans to interface with other brokerage houses for the purpose of managing client assets.  We may at some point in the future allow institutional investors and investment managers the ability to manage their client’s assets within our service."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            }
          ]
      },
      {
        "id": "faq-section-fees",
        "title": "Fees",
        "posts": [
            {
              "title": "What fees does Earthly charge?",
              "content":
              [
                {
                  "postSection": "We only charge one fee; an annualized asset management fee of 0.25% of total assets paid monthly. There are no other fees of any kind and that includes no trading, transfer and account closing fees."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "How are fees calculated and paid?",
              "content":
              [
                {
                  "postSection": "Fees are calculated and paid monthly in arrears. The monthly fee calculated is the annual asset management fee of 0.25% divided by 12 months applied to the daily weighted average assets under management calculated in that month.  The fee will be deducted from the account the first business day after the end of the prior month.  For example, fees incurred during the month of July would be deducted the first business day of August."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            }
          ]
      },
      {
        "id": "faq-section-sri",
        "title": "Socially Responsible Investing",
        "posts": [
            {
              "title": "What is Socially Responsible Investing?",
              "content":
              [
                {
                  "postSection": "Socially responsible investing or SRI refers to an investing methodology that seeks a competitive financial return and contribute to social good."
                },
                {
                  "postSection": "This philosophy most frequently consists of a combination of negative and positive screens that serve as a sort of corporate social responsibility litmus test.  Positive filters screen companies based on their adherence to certain environmental, social and governance principles while negative screens exclude those companies involved in the manufacture or distribution of products with questionable social benefit. "
                },
                {
                  "postSection": "In addition, some SRI investors place a greater emphasis on investment activities such as micro-lending that are intended to promote stronger communities."
                },
                {
                  "postSection": "Often, SRI investors will use their status as shareholders to influence the managerial decisions of corporations in order to ensure that SRI principles are reflected in the day-to-day operations of the business."
                }
              ]
            },
            {
              "title": "Why should I invest in a socially responsible manner?",
              "content":
              [
                {
                  "postSection": "There are many reasons. First, we believe that over the long term, the marketplace will reward firms that adhere to socially responsible principles and all things being equal, this economic strength will translate to better long-term performance for investors."
                },
                {
                  "postSection": "In addition, through our platform, you have the capability to let your money dictate your principles and convictions directly to the companies you own and indirectly to the companies you don’t own. In other words, your voice is heard through your investment actions. In the same way lobbyists try to influence politicians (many of which are successful), we believe that affecting investment flows conveys a message that is difficult to ignore."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "How does the performance of socially responsible investing compare to traditional investing?",
              "content":
              [
                {
                  "postSection": "Because SRI is such a broad-based term with many manifestations, it’s difficult to historically quantify socially responsible investing in terms of investment performance.  Nevertheless, there have been many academic studies conducted on the subject with most of the research suggesting that SRI outperforms a traditional approach in some time periods and underperforms in others."
                },
                {
                  "postSection": "There is evidence to suggest that ESG screening has historically contributed to outperformance and negative screening has negatively affected performance, but based on total body of research, the results are inconclusive."
                },
                {
                  "postSection": "Investors should avoid choosing an investment advisor based on historical performance because typically, historical performance has very little impact on future results.  Instead, clients should focus on the investment thesis being offered by the advisor and whether it aligns with closely with the client’s interests.  The client should also consider the fees charged by the advisor."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "I only have a small amount to invest. What difference could I possibly hope to make?",
              "content":
              [
                {
                  "postSection": "We’re reminded of how many people used this explanation as a reason not to vote. Yet during the 2000 Presidential Election, the state of Florida (which decided the election) was won by a little over 500 votes!"
                },
                {
                  "postSection": "While it’s true that the person with $10,000 to invest can create a greater incentive than one with $1,000, every little bit makes a difference. Imagine the impact that 100,000 people all with $1,000 could make. That’s 100 million dollars of capital that could be use to support business adhering to SRI principles and 100 million not in the hands of companies that turn a blind eye. That’s a 200 million dollar message!"
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Why should I invest with Earthly instead of buying an SRI fund?",
              "content":
              [
                {
                  "postSection": "There are several advantages to investing with us.  To name a few:"
                },
                {
                  "postSection": "First, our platform allows you to custom tailor your portfolio to your specific SRI preferences. The problem with the current crop of SRI funds is that you get stuck with someone else’s opinion of what constitutes responsible investing."
                },
                {
                  "postSection": "Second, we create a diversified portfolio using a combination of stocks and bonds that fits your risk profile. We take all the legwork out of managing your portfolio by adjusting it over time to ensure it continues to meet your investment objectives and risk tolerances and continues to uphold your socially responsible standards."
                },
                {
                  "postSection": "Third, we tax manage your portfolio to ensure that you’re not paying unnecessary taxes on your investment gains. Because each of our portfolios consists of individual stocks and bonds, we can more efficiently pass through capital losses resulting in higher after-tax returns compared to advisors using a similar type of index fund."
                },
                {
                  "postSection": "Fourth, our fees are substantially less than traditional investment advisor fees and the fund fees that they pass on to you.  Less expenses means more money in your pocket."
                }
              ]
            },
            {
              "title": "How does Earthly rate the companies eligible for inclusion in my portfolio?",
              "content":
              [
                {
                  "postSection": "Earthly constructs its own proprietary client-neutral ratings for 15 sub-categories of ESG using data consisting of about 500 metrics for around 4,700 companies, manually collected based on public information."
                },
                {
                  "postSection": "We then take the results from a client’s Social Identity survey and assign an importance to each sub-category of ESG. "
                },
                {
                  "postSection": "The total client-weighted score for each company gives each company a client-specific rating which forms the basis of the client’s stock selection."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "How do you respond to critics who say socially responsible investing makes no difference because you’re not actually giving firms money directly when you buy shares on the open market?",
              "content":
              [
                {
                  "postSection": "It’s incorrect to assume that companies don’t have “skin in the game” just because they’ve successfully executed a public offering of shares.  While it’s true that a buyer of stock on the open market isn’t directly handing a firm their cash, they are increasing the demand of the company’s stock which, all other things equal, increases the stock price.  This increased price can have many positive effects on a firm:"
                },
                {
                  "postSectionIndent": "Firms are less likely to face investor pressure to adjust their operational strategy and can justify the past decisions of management."
                },
                {
                  "postSectionIndent": "Firms can raise greater amounts of equity capital and can do so at a cheaper cost should the firm ever decide to execute a public offering of shares."
                },
                {
                  "postSectionIndent": "Firms appear de-risked from the prospective of providers of debt and the company having to provide external credit support in contract negotiations."
                },
                {
                  "postSection": "All of these effects contribute to future stability and cheaper access to capital which can improve a company’s financial position relative to its competitors."
                }
              ]
            },
            {
              "title": "How do you respond to critics who say that using your status as a shareholder to vote is an ineffective way to encourage social change?",
              "content":
              [
                {
                  "postSection": "As we’ve mentioned in the prior FAQ, companies do still have “skin in the game” even after they offer shares on the open market.  So your investment dollars, whether you choose to invest in a company or not do affect corporate actions."
                },
                {
                  "postSection": "In terms of the measurable impact of your investment dollars, if there’s one constant in the history of civilization, it’s that no one individual can effect social change alone.  So while you may only have a small amount to invest, your contribution does make a difference on a grander scale.  And with Earthly, there’s no easier way to do so."
                },
                {
                  "postSection": "Now, some have argued that withholding or purchase of a company’s product or service sends a stronger message than voting shares.  Truth be told, we have no idea if a $500 smartphone purchase or voting rights from $500 of share value is a greater incentivizer for change, but what we do know is that you’re limited to the amount of smartphones you can buy just to make a point, but you can easily achieve a dual investment mandate of both building wealth and effecting social change with the dollars you would have invested anyway."
                }
              ]
            },
            {
              "title": "Why does Earthly offer traditional ETFs in addition to your socially responsible ETFs?",
              "content":
              [
                {
                  "postSection": "Many potential clients have stated that they would like to allocate only a portion of their assets towards socially responsible investments.  Offering traditional ETFs allows us to exclusively serve such clients since our portfolio management systems work best when clients hold all of their assets with us."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            }
          ]
      },
      {
        "id": "faq-section-taxes",
        "title": "Taxes",
        "posts": [
            {
              "title": "Does Earthly offer daily tax-loss harvesting similar to other automated investment advisors?",
              "content":
              [
                {
                  "postSection": "Earthly will absolutely be able to seamlessly and automatically tax loss harvest a client’s portfolio and with our Social Identity service, we’ll be able to pass along losses from individual holdings which is something that cannot be done with ETFs.  This will, in most cases, lead to a noticeably greater immediate after-tax return for our clients.  "
                },
                {
                  "postSection": "We dislike the term “daily” when referring to tax-loss harvesting because it misleads clients into thinking that tax losses are harvested every day the market value of a client’s asset drops below its tax lot cost basis.  In reality, while algorithms do look daily for a harvesting opportunity, an opportunity won’t be realized until a market loss reaches a predetermined threshold value that’s set by the advisor which implies that losses are almost never going to be harvested on a daily basis.  In fact, to do so would be nearly impossible because of the wash sale rule and the limited selection of correlated yet distinct ETFs tracking different indices."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Does Earthly guarantee that I will pay lower taxes as a result of its tax minimization strategies?",
              "content":
              [
                {
                  "postSection": "Note that we don’t guarantee any particular tax outcome with our automated tax-loss harvesting service or tax minimization strategies and any dialogue or advice we provide should not be considered tax advice.  There’s always a risk that due to the uncertainty around marginal income tax rates that your tax liability may eventually be higher as a result of our tax minimization strategies.  This is not unique to Earthly but to all financial advisors engaged in tax minimization for clients."
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Is tax-loss harvesting or any of the tax minimization strategies used by Earthly illegal?",
              "content":
              [
                {
                  "postSection": "No.  Tax avoidance strategies like tax-loss harvesting have been legal for years and are in use by many financial advisors."
                },
                {
                  "postSection": "Tax evasion is illegal and usually consists of deceptive underreporting of tax liability.  Earthly does not engage in or condone tax evasion on behalf of clients."
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
