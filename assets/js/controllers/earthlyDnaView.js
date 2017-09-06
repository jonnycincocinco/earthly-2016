angular.module('Earthly.controllers')

.controller('earthlyDnaView', ['$scope', '$rootScope', '$state', 'PostsByType', '$sce', function ($scope, $rootScope, $state, PostsByType, $sce) {
    'use strict';

    $rootScope.$state = $state;

    $rootScope.bodylayout = 'earthly-dna';

    var startAnimations = function(){

        var tl1 = new TimelineMax({delay: 0});

        tl1.to('.below-hero', .5, { opacity: 1, ease: Power0.easeNone  }, '-=0.4');

    };

    startAnimations();

//    window.sr = ScrollReveal().reveal('.container, .site-footer');

    $scope.getRetina = function (imageSrc) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '@2x.jpg');
        var newPath2 = $sce.trustAsResourceUrl(newPath);
        return newPath2;
      }
    };

    $scope.getImageBreakpointSrc = function (imageSrc, breakpoint) {
      if (typeof imageSrc === 'string') {
        var newPath = imageSrc.replace('.jpg', '-' + breakpoint + '.jpg');
        var newPath2 = $sce.trustAsResourceUrl(newPath);
        return newPath2;
      }
    };

    var seriesOptions = [],
        seriesCounter = 0,
        names = ['edna', 'spew'],
        fullnames = ['Earthly(DNA) Composite', 'S&P 500 Equal-Weight Index (Benchmark)'],
        color = ['#00e600','#0000cc'],
        dashstyle = ['solid','shortdot'];


    /**
     * Create the chart when all data is loaded
     * @returns {undefined}
     */
    $(document).ready(function createChart() {

        Highcharts.stockChart('ednaperfchart', {

            legend: {
                enabled: true
            },

            navigator: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            rangeSelector: {
                selected: 6,
            },

            scrollbar: {
                enabled: false
            },

            yAxis: {
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    },
                    style: {
                        fontSize: '12px',
                    },
                    align: 'left'
                },

                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]

            },

            xAxis: {
                  type: 'datetime',
                  minTickInterval: 28*24*3600*1000,
                labels: {
                    style: {
                        fontSize: '12px',
                    },
                }
            },

            plotOptions: {
                series: {
                    compare: 'value',
                    showInNavigator: false,
                    lineWidth: 5
                }
            },

            tooltip: {
                pointFormat: '<span style=  "color:{series.color}">{series.name}</span>: <b>{point.change}%</b><br/>',
                valueDecimals: 2,
                split: true,
                /*xDateFormat: '%m/%d/%Y'*/
            },

            series: seriesOptions
        });

        Highcharts.setOptions({
            chart: {
                style: {
                    fontFamily: 'sans-serif'
                }
            }
        });




        $.each(names, function (i, name) {

            $.getJSON('/wp-content/themes/earthly-2016/ednaperf/' + name + '.json',    function (data) {

                seriesOptions[i] = {
                    name: fullnames[i],
                    color: color[i],
                    dashStyle: dashstyle[i],
                    data: data,
                    type: 'spline'
                };

                // As we're loading the data asynchronously, we don't know what order it will arrive. So
                // we keep a counter and create the chart when all the data is loaded.
                seriesCounter += 1;

                if (seriesCounter === names.length) {
                    createChart();
                }
            });
        });
    }
    );


    // input comma-adder
      $('input.number').keyup(function(event) {
      if(event.which >= 37 && event.which <= 40) return;
      $(this).val(function(index, value) {
        return value
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        ;
      });
    });

}]);
