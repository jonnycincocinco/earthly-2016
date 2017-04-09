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
    }

    $scope.activeTab = 0;
    $scope.currentPage = 0;
    $scope.activateTab =function(indx){

      $scope.activeTab=indx

    };

    $scope.$watch('currentPage', function(){

      $scope.activeTab = 0;
   })

    $scope.faqs = [
      {
        "id": "faq-section-general",
        "title": "General Questions",
        "posts": [
            {
              "title": "What is  Earthly?",
              "content":
              [
                {
                  "postSection": "Earthly is the first automated investment advisory and portfolio management company devoted to sustainable investing. We harness the power and cost saving potential of automated systems to create a more affordable and seamless advisory experience."
                },
                {
                  "postSection": "Our primary focus centers around helping clients create diversified investment portfolios that reflect their principles and then managing that portfolio for sustainability, risk and taxes."
                },
                {
                  "postSection": "Our goal is to help our clients both build wealth and make a difference in the world."
                }
              ]
            },
            {
              "title": "Is Earthly right for me?",
              "content":
              [
                {
                  "postSection": "Our offerings are targeted towards individual investors and institutions who desire to divest from unethical movements and focus investment on causes that mirror their principles. Earthly may be right for you if you identify with any of the following:"
                },
                {
                  "postSection": "Environmentally-minded investors looking to divest from fossil fuels and support clean energy;"
                },
                {
                  "postSection": "Religious investors looking to divest from weapons, alcohol and tobacco;"
                },
                {
                  "postSection": "Social justice activists looking to focus on companies not employing impoverished labor, companies with a focus on employment diversity and companies that support local communities."
                },
                {
                  "postSection": "We also cater to clients indifferent about sustainable management and desiring automated portfolio management and advice.  We offer traditional index portfolios as a complementary or standalone option."
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
                  "title": "How can I gauge your level of performance?",
                  "content":
                  [
                    {
                      "postSection": "We publish Earthly(DNA) and composite performance information on our website.  Our Earthly(DNA) whitepaper also provides historical simulated performance and portfolio dispersion for reference purposes.  All clients have the ability to view their individual performance history through their online account."
                    },
                    {
                      "postSection": "Clients and prospective clients should be advised that past or simulated performance is no guarantee of future results."
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
                      "postSection": "We normally invest 100% of your invested capital, however there may be periods where we hold cash such as before a market order."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
        "id": "faq-section-edna",
        "title": "Earthly(DNA)",
        "posts": [
             {
              "title": "What is Earthly(DNA)?",
              "content":
              [
                {
                  "postSection": "Earthly(DNA) is our fsustainable equity investment vehicle and is a passively managed account of around 100 equally-weighted individual stocks custom tailored to each client’s Earthly(DNA) and fully diversified to maximize total stock market exposure.   It is designed to make up the core equity component of a client’s sustainable portfolio."
                },
                {
                  "postSection": "It is similar in concept to an ETF and possesses additional advantages, but with the downside of increased management complexity.  Advanced algorithms and optimization logic drives the creation of our Earthly(DNA) portfolios in real-time."
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
              "title": "How can I get Earthly(DNA)?",
              "content":
              [
                {
                  "postSection": "Earthly(DNA) is included at no extra charge for all clients.  As a result, you pay no equity ETF expenses if you utilize Earthly(DNA) as your sole equity investment vehicle."
                },
                {
                  "postSection": "Note that if you select 0% sustainable investments, Earthly(DNA) will not be part of your portfolio."
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
              "title": "How does Earthly(DNA) determine the securities that go into my portfolio?",
              "content":
              [
                {
                  "postSection": "Security selection is a two-stage process."
                },
                {
                  "postSection": "First, based on your responses to our questionnaire we generate importance values to the various sub-categories of ESG that correspond to your profile.  We then rank the universe of securities using our internal rating system and your importance values while throwing out securities which are deemed to conflict with your principles."
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
              "title": "So an algorithm will select individual stocks for me and manage it over time.  Isn’t this active management?",
              "content":
              [
                {
                  "postSection": "Earthly(DNA) relies on the same principles of passive investment management that drive the creation of many of today’s socially responsible index ETFs."
                },
                {
                  "postSection": "Whereas an active manager would seek to earn above market before-tax returns by examining and researching the economic fundamentals of select investments, a passive manager would seek to match the performance of a specific index by closely tracking the composition of that index.  "
                },
                {
                  "postSection": "Our approach is similar to the passive manager, however we create our indices in real-time by drawing on quantitative security selection methods that evaluate the sustainability and business involvement of companies."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Shouldn’t I get better performance if Earthly(DNA) manages my portfolio actively rather than passively?",
              "content":
              [
                {
                  "postSection": "The major distinction that separates Earthly(DNA) and most automated advisors from active managers is that we seek to earn an average before-tax market return for our clients by ignoring the economic fundamentals of specific companies.  While being average may sound like a bad thing, consider that greater than 80% of active managers typically fail to beat their benchmark index in any given year.  And active management typically results in higher taxes and much higher fees, often making the performance difference even more pronounced."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Why does Earthly(DNA) only include around 100 individual stocks instead of 500 or 1000?  Am I really diversified with that number of stocks?",
              "content":
              [
                {
                  "postSection": "ESG screening inherently involves sacrificing a small amount of diversification in favor of environmental, social and governance outperformance and exclusionary screening.  One of our goals when conceptualizing Earthly(DNA) was to determine the appropriate number of stocks that would provide our clients with the bulk of diversification benefits and at the same time ensure that only the upper ESG echelon of securities is selected."
                },
                {
                  "postSection": "We eventually agreed upon a target of 100 securities based on an analysis of historical data which suggests that greater than 99% of diversification benefits would be captured with this number of securities.  In addition, 100 securities allows us to target an average ESG performance percentile ranking in the top 15%, ensuring that clients are provided with only the strongest ESG performers."
                }
              ]
            },
            {
              "title": "Am I really diversified with Earthly(DNA) when other advisors invest me in 5-10 stock ETFs?",
              "content":
              [
                {
                  "postSection": "The number of ETFs that constitutes a portfolio has very little bearing on the level of diversification of that portfolio.  Today, a single ETF such as the Vanguard Total World Stock ETF (VT) provides complete total stock market coverage and miniscule unsystematic risk exposure.  Advisors typically use greater numbers of ETFs for style, sector and capitalization tilt away from a total market index because Modern Portfolio Theory (MPT) has indicated that such a portfolio will provide superior risk-adjusted returns.  There are also slightly greater tax benefits to owning a greater number of ETFs."
                },
                {
                  "postSection": "Earthly(DNA) does not ascribe to the notion that MPT yields any actionable conclusions because of the dynamically changing nature of markets and large number of questionable input parameters.  Please see our other FAQs for more information about our position on MPT."
                }
              ]
            },
            {
              "title": "How does Earthly(DNA) compare to a socially responsible or ESG mutual/index fund?",
              "content":
              [
                {
                  "postSection": "Socially responsible mutual and index funds suffer from several problems:"
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
                  "postSection": "Earthly(DNA), our diversified sustainable index portfolio addresses these problems in the following ways:"
                },
                {
                  "postSectionIndent": "1) We charge a low 0.30% management fee which is significantly less than the average SRI mutual fund and ETF."
                },
                {
                  "postSectionIndent": "2) We offer customized portfolios tailored to each client’s ESG and ethical preferences."
                },
                {
                  "postSectionIndent": "3) We use a data-driven, quantitative approach to rating companies’ ESG and ethical performance and we disclose our methods."
                },
                {
                  "postSectionIndent": "4) We vote client proxies on their behalf according to a published set of guidelines."
                }
              },
            {
              "title": "How does the performance of Earthly(DNA) differ to that of a socially responsible mutual fund or ETF?",
              "content":
              [
                {
                  "postSection": "Our Earthly(DNA) whitepaper provides an analysis of simulated performance over the past 10 years compared to the S&P 500 and a popular SRI ETF."
                },
                {
                  "postSection": "Past or simulated performance is no guarantee of actual or future performance."
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
              "title": "How does Earthly(DNA) determine which stocks to exclude based on the criteria I specify?",
              "content":
              [
                {
                  "postSection": "Earthly(DNA) excludes a company if it is determined that the company has any tie to the business activity in question."
                },
                {
                  "postSection": "Any tie is defined as a relationship in which the company serves as an investor, holds ownership, or receives revenue at any point on the supply chain related to the business activity in question."
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
              "title": "Why is Earthly(DNA) an equal-weighted index instead of capitalization weighted?",
              "content":
              [
                {
                  "postSection": "Capitalization weighted indices overweight companies who have a higher market capitalization which is often at odds with a company's ESG performance."
                },
                {
                  "postSection": "Equal weighted indicies allow Earthly(DNA) a greater degree of freedom to balance ESG performance with market factor exposures."
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
              "title": "Can Earthly(DNA) exclude individual stocks that I specify?",
              "content":
              [
                {
                  "postSection": "Yes.  You may specify up to 10 stocks to exclude from an Earthly(DNA) portfolio."
                },
                {
                  "postSection": "These stocks will not be eligible for inclusion under Earthly(DNA).  They may still be included if you choose anything other than 100% sustainable investments."
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
              "title": "Can Earthly(DNA) include individual stocks that I specify?",
              "content":
              [
                {
                  "postSection": "Yes.  You may specify up to 10 stocks to include in an Earthly(DNA) portfolio.  Each stock will be given an allocation of 1% of the Earthly(DNA) allocation."
                },
                {
                  "postSection": "These stocks will not necessarily be included in a portfolio if you allocate 0% towards sustainable investments."
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
              "title": "What kind of tracking error should I expect from Earthly(DNA)?",
              "content":
              [
                {
                  "postSection": "Tracking error is a statistic used to benchmark how closely a portfolio tracks an index.  Since each client portfolio is unique, our service is not designed to track indices in the same way that index funds do."
                },
                {
                  "postSection": "Unlike a total stock market index, indices used to create SRI portfolios are somewhat arbitrary with regards to the number of stocks selected, the weights of those stocks and the market capitalization, style and sector profiles.  Using tracking error as a means of comparing one of our Earthly(DNA) portfolios to an SRI index may not be entirely appropriate since the stock selection parameters will not align well."
                },
                {
                  "postSection": "Our Earthly(DNA) whitepaper provides S&P 500, S&P 500 Equal Weight and MSCI USA ESG Select Index tracking error estimates for simulated portfolios examined over a historical ten year period."
                }
              ]
            },
            {
              "title": "How does Earthly(DNA) rate the companies eligible for inclusion in my portfolio?",
              "content":
              [
                {
                  "postSection": "Earthly constructs its own proprietary client-neutral ratings for 37 sub-categories of ESG using data consisting of about 500 metrics for around 2,500 companies, manually collected based on public information."
                },
                {
                  "postSection": "We then take the results from a client’s Earthly(DNA) survey and assign an importance to each category of ESG. "
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
              "title": "What is the model total market portfolio that serves the input to Earthly(DNA)?",
              "content":
              [
                {
                  "postSection": "We use an aggregate of several popular total stock market index funds as the backbone of our security selection constraints.  We chose an aggregate due to slight discrepancies between the various total stock market index options and to avoid licensing fees on index products that would drive up client costs."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Which benchmark should I use to evaluate the performance of Earthly(DNA)?",
              "content":
              [
                {
                  "postSection": "Since Earthly(DNA) is structured to mimic market capitalization and sector weightings of a market portfolio, the most appropriate benchmark would probably be an equal weight broad market index such as the S&P 500 Equal Weight Index.  Comparing the performance history of the two will allow a client to gauge how sustainability is affecting their portfolio’s performance controlling for most other factors. "
                },
                {
                  "postSection": "Alternatively, a client could simply compare their Earthly(DNA) portfolio to a well-established SRI ETF such as DSI or KLD.  This would provide the benefit of gauging how a client’s sustainable principles affect their portfolio’s performance.  Caution is again advised as sustainable portfolios do not necessarily benchmark a market capitalization and sector weighted market portfolio, nor are their ESG and ethical screening criteria the same or similar, making a true apples-to-apples comparison difficult."
                }
              ]
            },
            {
              "title": "What happens to the proxy voting rights of the stock I own?",
              "content":
              [
                {
                  "postSection": "Earthly currently votes your securities in accordance with its core mission."
                },
                {
                  "postSection": "Over time, we plan to introduce some exciting new features pertaining to voting rights.  Stay tuned for more details."
                }
              ]
            },
            {
              "title": "How often is my target Earthly(DNA) Index updated?",
              "content":
              [
                {
                  "postSection": "Clients should expect their target Earthly(DNA) index to be updated every quarter.  Typically, company ESG scores are updated once on a staggered basis throughout the year with the exception of black swan events such as a corporate scandal or major product recall.  In the latter case, revised interim scores are typically issued within a month. "
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "Will investing in Earthly(DNA) help to avoid investing in a company that may be involved in a major corporate scandal?",
              "content":
              [
                {
                  "postSection": "Earthly(DNA) is designed to incorporate ESG criteria into its security selection process.  There is research that suggests that companies exhibiting strong ESG outperformance are less likely to be involved in major scandals and other negative corporate events, however we can’t even say that an Earthly(DNA) constituent will never be involved in such an event."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "What happens to a company in my Earthly(DNA) index that has a corporate scandal or similar black swan event?",
              "content":
              [
                {
                  "postSection": "Your Earthly(DNA) index will be updated quarterly to account for any recent scandals or events."
                },
                {
                  "postSection": ""
                }
              ]
            },
          ]
      },
      {
        "id": "faq-section-portfolio",
        "title": "Portfolio",
        "posts": [
            {
              "title": "Can I select a mix of both sustainable and traditional investments?",
              "content":
              [
                {
                  "postSection": "Yes, our recommended investment plans can be customized to include a mix of both sustainable and traditional investments."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "How do you justify a bundle of mortgage-backed securities, municipal and government bonds as sustainable bond investments?",
              "content":
              [
                {
                  "postSection": "Sustainable lending standards can depend on principles of a particular client.  When selecting our sustainable bond basket, we sought to balance the following principles:"
                },
                {
                  "postSection": "1) Investing in local communities;"
                },
                {
                  "postSection": "2) Investing in the disadvantaged and the underprivileged;"
                },
                {
                  "postSection": "3) Avoid investing in activities that destroy the environment or promote conflict;"
                },
                {
                  "postSection": "4) Ensure that investment costs are sufficiently low;"
                },
                {
                  "postSection": "With the exception of (4), these principles generally form the basis of most sustainable mutual funds.  Currently, no sustainable ETFs exist that exhibit all four of the above principles.  There do exist a handful of mutual funds, however these funds typically average close to 1.00% in annual fund fees which conflicts with our objective of providing low-cost sustainable investment options."
                },
                {
                  "postSection": "We conducted extensive analysis of the individual holdings of the current crop of sustainable mutual funds and found that all of them invest predominantly in mortgage-backed securities, municipal bonds and government debt.  When examining price movement, correlation history and adjusting for duration/convexity, our bond basket tracks these mutual funds very well, without the burden of the higher fees.  In addition, our service will allow you to exclude certain categories of controversial investment such as government bonds whereas mutual funds are not customizable."
                }
              ]
            },
            {
              "title": "Why are your sustainable offerings so highly concentrated in US investments?",
              "content":
              [
                {
                  "postSection": "Investing in local communities is part of the sustainable philosophy.  Because Earthly only serves US clients, we structure our sustainable offerings to focus on US-based investments."
                },
                {
                  "postSection": "A secondary reason we offer only US-based sustainable investment options are the lack of liquidity, research and accessibility of sustainable international investments."
                }
              ]
            },
            {
              "title": "Am I really diversified investing only in US-based socially responsible stocks and bonds?",
              "content":
              [
                {
                  "postSection": "Many years ago, there were significant diversification benefits to investing internationally.  With increasing economic globalization, many of these diversification benefits have evaporated and now, international and domestic markets appear very highly correlated, especially in periods of financial distress. Today, a company like Apple Computer, sells its products all over the world and is exposed to international economic forces despite being domiciled in the US.  As a result, adding international securities to a portfolio doesn’t provide as much of a diversification benefit as one might think."
                },
                {
                  "postSection": "Sustainable investing inherently involves sacrificing a small amount of diversification in favor of environmental, social and governance outperformance and exclusionary screening.  We believe the exclusion of international investments in favor of ESG outperformance and community-based lending represents a tradeoff that is in our client’s interest."
                },
                {
                  "postSection": "Our traditional investment offerings still offer international securities in market weighted amounts.  Even though correlations between international and domestic stocks have been high in recent decades, there’s no guarantee going forward that this dynamic will continue to exist.  In the absence of any ethical and ESG considerations, we recommend that clients own a market-weighted portfolio which includes international investments."
                }
              ]
            },
            {
              "title": "Why did Earthly select its particular basket of Traditional ETFs?",
              "content":
              [
                {
                  "postSection": "Earthly's traditional ETF basket was selected to provide maximum global diversification which we believe will minimize unsystematic risk for the client."
                },
                {
                  "postSection": "Individual ETFs were selected based on a thorough analysis of expense ratio, average bid/ask spread, degree of liquidity and provider reputation."
                }
              ]
            },
            {
              "title": "Can I select the exact securities that go into my portfolio?",
              "content":
              [
                {
                  "postSection": "Earthly(DNA) allows clients to designate up to 10 specific stocks, each of which may occupy 1% of the overall Earthly(DNA) allocation."
                },
                {
                  "postSection": "A client will be able to select up to 10 specific stocks only if the client's allocation to sustainable investments is greater than 0%."
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
              "title": "Does Earthly strictly use Black-Litterman or mean-variance optimization to create client portfolios?",
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
              "title": "Why does Earthly only offer stocks and bonds and not natural resources and real estate ETFs like other providers?",
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
                  "postSection": "We currently don’t offer the ability to tilt towards specific equity styles."
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
                  "postSection": "There is no minimum amount to open an account with us."
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
                  "postSection": "We only charge one fee; the greater of an annualized asset management fee of 0.30% of total assets paid monthly or $5 per month. There are no other fees of any kind and that includes no trading, transfer and account closing fees."
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
                  "postSection": "Fees are calculated and paid monthly in arrears. For example, the monthly fee calculated is the annual asset management fee of 0.30% divided by 12 months applied to the daily weighted average assets under management calculated in that month (or $5, whichever is greater).  The fee will be deducted from the account the first business day after the end of the prior month.  For example, fees incurred during the month of July would be deducted the first business day of August."
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
        "title": "Sustainable Investing",
        "posts": [
            {
              "title": "What is Sustainable Investing?",
              "content":
              [
                {
                  "postSection": "Sustainable investing refers to an investing methodology that seeks a competitive financial return and contribute to social good."
                },
                {
                  "postSection": "This philosophy most frequently consists of a combination of negative and positive screens that serve as a sort of corporate social responsibility litmus test.  Positive filters screen companies based on their adherence to certain environmental, social and governance principles while negative screens exclude those companies involved in the manufacture or distribution of products with questionable social benefit. "
                },
                {
                  "postSection": "In addition, some sustainable investors place a greater emphasis on investment activities such as micro-lending that are intended to promote stronger communities."
                },
                {
                  "postSection": "Often, sustainable investors will use their status as shareholders to influence the managerial decisions of corporations in order to ensure that SRI principles are reflected in the day-to-day operations of the business."
                }
              ]
            },
            {
              "title": "Why should I invest in a sustainable manner?",
              "content":
              [
                {
                  "postSection": "There are many reasons. First, we believe that over the long term, the marketplace will reward firms that adhere to sustainable principles and all things being equal, this economic strength will translate to better long-term performance for investors."
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
              "title": "What is impact investing and how does it differ from socially responsible or sustainable investing?",
              "content":
              [
                {
                  "postSection": "Similar to socially responsible investing, impact investing is an investing methodology that seeks a competitive financial return and contribute to social good."
                },
                {
                  "postSection": "In addition to utilizing similar screening methods, impact investing seeks to measure the impact of the investment by examining pre and post investment quantitative and qualitative metrics."
                },
                {
                  "postSection": "Often, impact investors will use their status as stakeholders to influence the managerial decisions of corporations in order to ensure that SRI principles are reflected in the day-to-day operations of the business."
                },
                {
                  "postSection": ""
                }
              ]
            },
            {
              "title": "How does the performance of sustainable, ESG or socially responsible investing compare to traditional investing?",
              "content":
              [
                {
                  "postSection": "There have been several published academic studies that attempt to quantify the performance difference between socially responsible investing (SRI) with traditional investing.  Most of the research suggests that SRI outperforms a traditional approach in some time periods and underperforms in others."
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
                  "postSection": "First, our platform allows you to custom tailor your portfolio to your specific sustainability preferences. The problem with the current crop of SRI funds is that you get stuck with someone else’s opinion of what constitutes sustainable investing."
                },
                {
                  "postSection": "Second, we create a diversified portfolio using a combination of stocks and bonds that fits your risk profile. We take all the legwork out of managing your portfolio by adjusting it over time to ensure it continues to meet your investment objectives and risk tolerances and continues to uphold your principles."
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
              "title": "Why does Earthly offer traditional ETFs in addition to your sustainable ETFs?",
              "content":
              [
                {
                  "postSection": "Many potential clients have stated that they would like to allocate only a portion of their assets towards sustainable investments.  Offering traditional ETFs allows us to exclusively serve such clients since our portfolio management systems work best when clients hold all of their assets with us."
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
              "title": "Does Earthly guarantee that I will pay lower taxes as a result of its tax minimization strategies?",
              "content":
              [
                {
                  "postSection": "Note that we don’t guarantee any particular tax outcome with our tax minimization strategies and any dialogue or advice we provide should not be considered tax advice.  There’s always a risk that due to the uncertainty around marginal income tax rates that your tax liability may eventually be higher as a result of our tax minimization strategies.  This is not unique to Earthly but to all financial advisors engaged in tax minimization for clients."
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
              "title": "Is tax-aware rebalancing or any of the tax minimization strategies used by Earthly illegal?",
              "content":
              [
                {
                  "postSection": "No.  Tax avoidance strategies like tax-aware rebalancing have been legal for years and are in use by many financial advisors."
                },
                {
                  "postSection": "Tax evasion is illegal and usually consists of deceptive underreporting of tax liability.  Earthly does not engage in or condone tax evasion on behalf of clients."
                }
              ]
            },
            {
              "title": "Will Earthly(DNA) incur short-term capital gains in the event of revised ESG scores or business involvement screens?",
              "content":
              [
                {
                  "postSection": "Because the primary mission of Earthly(DNA) is to uphold the ethical and ESG principles of our clients, we prioritize changes to the client’s Earthly(DNA) index above unfavorable tax implications."
                },
                {
                  "postSection": "This policy will lead to some clients incurring short-term capital gains for the sake of revisions to their Earthly(DNA) index."
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


}])
app.filter('parseUrlFilter', function () {
    var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/gi;
    return function (text, target) {
        return text.replace(urlPattern, '<a target="' + target + '" href="$&">$&</a>');
    };
});
