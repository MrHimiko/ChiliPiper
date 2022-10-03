let html = `
<div class="container container--center container--large wrapper-small">
  <div class="grid grid--center grid--waffle grid--price price">
    <div class="grid__column grid__column--12 grid__column--6@small">
      <div class="section--rio__form">
        <form>
          <div class="paragraph paragraph--small">
            <h3 class="text-center">Enter your inbound marketing metrics</h3>
          </div>
          <div class="form-group">
            <label>Monthly inbound leads</label>
            <input type="text" name="roi_leads" placeholder="10000" id="roi_leads" required="">
          </div>

          <div class="form-group">
            <label>Monthly booked demos</label>
            <input type="text" name="roi_demos" placeholder="5000" id="roi_demos" equired="">
          </div>

          <div class="form-group">
            <label class="tooltip-label">Average win rate <span class="tooltip-sign">?</span><span class="tooltip">This is the percent of your booked meetings that are closed-won. If you’re not sure, use 5%.</span></label>
            <input type="text" name="roi_rate" placeholder="5" id="roi_rate" required="">
            <span class="append-field">%</span>
          </div>

          <div class="form-group">
            <label>Average sales price</label>
            <input type="text" name="roi_price" placeholder="5000" id="roi_price" required="">
            <span class="append-field">$</span>
          </div>

          <div class="form-group">
            <label>Number of sales reps</label>
            <input type="text" name="roi_reps" placeholder="10" id="roi_reps" required="">
          </div>

                    <div class="form-group">
            <input type="email" name="roi_email" placeholder="Your email address" id="roi_email" required="">
          </div>
          
          <div class="form-group">
            <button type="submit" class="button button--primary tt-upper" id="roi-calculate">Calculate</button>
          </div>
          <div class="paragraph paragraph--small">
            <p>Chili Piper <a href="/privacy-policy" rel="noopener" target="_blank">Privacy Policy</a></p>
            <a href="#" class="form-save-link d-none" rel="noopener">Share Results</a>
            <span class="form-save-copied d-none"> - Link copied!</span>
          </div>
        </form>
      </div> 
    </div>
  </div>
</div>

<section class="hidden js-show-result">


    <div class="container container--center container--large wrapper-small js-calculator-roi" id="show-result">
      <div class="grid grid--center grid--waffle grid--price price">
        <div class="grid__column id__column--12 grid__column--10@large">
          <div class="roi-results">
            <p class="heading h2 text-center">Your ROI with Chili Piper</p>
            <div class="paragraph text-center">
              <p>Your estimated return on investment with Chili Piper is <span class="month-revenue"></span> per <br>month and <span class="year-revenue"></span> per year. That’s a return of <span class="revenue-diff"></span>.</p>
            </div>
          </div>
        </div>

        <div class="grid__column grid__column--12 grid__column--4@large roi-results order-2 small-extra-padding extra-minus-margin">
          <h3 class="d-lg-block d-none">Lead to Meeting - Conversion Rate</h3>
          <p>Allowing customers to book a meeting at the moment they’re interested is proven to increase the number of booked meetings. </p>
          <p>Based on our customer average, we estimate we can improve your lead to meeting rate <br>from <span class="rate-from no-bg"></span> to 
          <span class="rate-to-wrapper"><input type="text" class="rate-to" data-min=""></span>
        </p>
        </div>
        <div class="grid__column grid__column--12 grid__column--6@large order-1 roi-results">
          <h3 class="d-lg-none d-block">Lead to Meeting - Conversion Rate</h3>
          <div id="chart_div"></div>
        </div>
      </div>
    </div>

    <div class="linear-gray-bg">
      <div class="container container--center container--large wrapper-small js-calculator-roi">
        <div class="grid grid--center grid--waffle grid--price price">
          <div class="grid__column grid__column--12 grid__column--10@large">
            <div class="roi-results rois-results--next">
              <div class="paragraph paragraph--small text-center">
                <p>Increasing your lead to meeting rate will lead to <span class="roi_leads_to"></span> more booked meetings and <span class="roi_closed_deals"></span> more <br>closed deals per month.</p>
              </div>
            </div>
          </div>

          <div class="grid__column grid__column--12 grid__column--6@large roi-results">
          <h3 class="d-lg-none d-block">Inbound Monthly Revenue</h3>
          <div id="chart_div_finance"></div>
          </div>
          <div class="grid__column grid__column--12 grid__column--4@large roi-results extra-minus-margin">
          <h3 class="d-lg-block d-none">Inbound Monthly Revenue</h3>
            <p>Based on the average sales price you input, <br>you will earn an additional <span class="roi_additional"></span> per <br>month in revenue with Chili Piper. That’s <br><span class="roi_additional_year"></span> in additional revenue per year.</p>
          </div>
          <div class="roi-results">
            <div class="paragraph paragraph--small text-center">
              <p>Your estimated cost is <span class="roi_cost"></span> per month, which means your return on investment is <br><span class="roi_cost_add_month"></span> per month and <span class="roi_cost_add_year"></span> per year. </p>
            </div>
          </div>
        </div>
      </div>
    </div>


</section>

`;


$(".get-calc-from-js").html(html);


jQuery(document).ready(function($) {
    $('.rate-to-wrapper').on('click', function() {
        $(this).addClass('rate-to-wrapper--active').find('input').focus();
    })

    $('.roi-results input.rate-to').on('focusout', function() {
        $(this).parent().removeClass('rate-to-wrapper--active')
    })

    $('.section--rio__form .form-save-link').on('click', function(e) {
        e.preventDefault();
        let tab = [];
        $('.section--rio__form input').each(function(ind) {
            tab[ind] = $(this).val();
        })
        let url = window.location.href;
        url = url.split('#')[0];
        url = url.split('?')[0];
        url += '?';
        for (let i = 0; i < tab.length; i++) {
            url += 'param' + i + '=' + tab[i] + '&';
        }

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(url).select();
        document.execCommand("copy");
        $temp.remove();
        $('.form-save-copied').removeClass('d-none');
    })

    $(window).on("load", function() {
        let searchParams = new URLSearchParams(window.location.search)
        if (searchParams.get('param0')) {
            let tab2 = [];
            for (let j = 0; j < 6; j++) {
                tab2[j] = searchParams.get(`param${j}`)
            }

            $('.section--rio__form input').each(function(ind) {
                $(this).val(tab2[ind]);
            })

            setTimeout(function() {
                $('.section--rio__form .button').trigger("click");
            }, 1500);
            $('.form-save-link').removeClass('d-none');
        }
    });

    // Ajax URL
    const ajaxURL = ajax_url.url

    // Calculate Button Element
    const submitBtn = $('#roi-calculate')
    const URL = window.location.href

    $('.get-calc-from-js input[type="text"]').on('keypress', function(e) {
        if (e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57)) {
            return false
        }
    })

    $('.get-calc-from-js input[type="text"]').on('keyup', function(e) {
        let fieldValue = $(this).val().replace(/,/gi, "")
        let newFieldValue = fieldValue.split(/(?=(?:\d{3})+$)/).join(",")
        $(this).val(newFieldValue)
    })

    function drawTrendlines(perc1, perc2, container) {
        var data = google.visualization.arrayToDataTable([
            ['Before Chili Piper', 'Percentage', {
                role: 'style'
            }],
            ['Before Chili Piper', parseInt(perc1) / 100, '#EBEBEB'],

            ['After Chili Piper', parseInt(perc2) / 100, 'color: #FF4400'],
        ]);

        var options = {
            legend: 'none',
            bar: {
                groupWidth: '40%'
            },
            height: 473,
            animation: {
                duration: 1000,
                easing: 'out',
            },
            backgroundColor: {
                fill: '#fff',
                fillOpacity: 0
            },
            enableInteractivity: false,
            trendlines: {
                0: {
                    type: 'linear',
                    lineWidth: 1,
                    opacity: .3
                },
                1: {
                    type: 'exponential',
                    lineWidth: 1,
                    opacity: .3
                }
            },

            vAxis: {
                minValue: 0,
                ticks: [0, .2, .4, .6, .8, 1],
                format: 'percent',
                textStyle: {
                    bold: false
                }
            },
        };

        if (container == 'chart_div_finance') {
            data = google.visualization.arrayToDataTable([
                ['Before Chili Piper', 'Percentage', {
                    role: 'style'
                }],
                ['Before Chili Piper', parseInt(perc1), '#EBEBEB'],

                ['After Chili Piper', parseInt(perc2), 'color: #FF4400'],
            ]);
            options = {
                legend: 'none',
                bar: {
                    groupWidth: '40%'
                },
                animation: {
                    duration: 1000,
                    easing: 'out',
                },
                axisTitlesPosition: 'out',
                height: 473,
                vAxes: {
                    // 0: {title: 'Monthly revenue'},
                },
                backgroundColor: {
                    fill: '#fff',
                    fillOpacity: 0
                },
                enableInteractivity: false,
                trendlines: {
                    0: {
                        type: 'linear',
                        lineWidth: 1,
                        opacity: .3
                    },
                    1: {
                        type: 'exponential',
                        lineWidth: 1,
                        opacity: .3
                    }
                },
                vAxis: {
                    titleTextStyle: {
                        color: '#A0A0A8',
                        fontSize: 12,
                        italic: 0,
                        bold: 0
                    },
                    format: '$#,###',
                    minValue: 0
                },
            };
        }

        var chart = new google.visualization.ColumnChart(document.getElementById(container));

        chart.draw(data, options);
    }

    google.charts.load('current', {
        packages: ['corechart', 'bar']
    });


    const costCalc = (inBoundLeads, salesReps) => {
        if (inBoundLeads >= 0 && inBoundLeads <= 100) {
            return 150 + salesReps * 30;
        } else if (inBoundLeads >= 101 && inBoundLeads <= 1000) {
            return 400 + salesReps * 30;
        } else {
            return 1000 + salesReps * 30;
        }
    }

    const percentageCalc = (bookedDemos, inBoundLeads) => {
        const fromPercent = bookedDemos / inBoundLeads * 100;
        //console.log(fromPercent);
        if (fromPercent <= 10) {
            return 20;
        } else if (fromPercent >= 11 && fromPercent <= 20) {
            return 40;
        } else if (fromPercent > 20 && fromPercent <= 30) {
            return 60;
        } else if (fromPercent > 30 && fromPercent <= 50) {
            return 70;
        } else if (fromPercent > 50 && fromPercent <= 70) {
            return 80;
        } else if (fromPercent > 70 && fromPercent <= 80) {
            return 85;
        } else if (fromPercent > 80 && fromPercent <= 85) {
            return 90;
        } else if (fromPercent > 85) {
            if (parseInt(bookedDemos) < parseInt(inBoundLeads)) {
                window.location.href = `/roi-single-page?leads=${fromPercent}`
            }
            return false;
        }
    }

    const smoothScroll = (container) => {
        $('body, html').animate({
            scrollTop: $(container).offset().top - 100
        }, 1000)
    }


    function success_ajax(  percentageToParam = 0 ) {

   

        let flag = true;
        let successData = '';

        // Form Elements
        const inBoundLeads = parseInt($("#roi_leads").val().replace(/\,/g, ''))
        const bookedDemos = $("#roi_demos").val().replace(/\,/g, '')
        const winRate = $("#roi_rate").val()
        const salesPrice = $("#roi_price").val().replace(/\,/g, '')
        const salesReps = $("#roi_reps").val().replace(/\,/g, '')
        const emailAddress = $("#roi_email").val()

        const leadsTo = percentageToParam ? inBoundLeads * percentageToParam / 100 - bookedDemos : inBoundLeads * percentageCalc(bookedDemos, inBoundLeads) / 100 - bookedDemos
        const closedDeals = Math.round(leadsTo * winRate / 100)
        const additionalEarn = closedDeals * salesPrice
        const investmetReturn = additionalEarn - costCalc(inBoundLeads, salesReps)


        let data = {
            action: "roiCalculator",
            leads: inBoundLeads ? inBoundLeads : 0,
            demos: bookedDemos ? bookedDemos : 0,
            rate: winRate ? winRate : 0,
            price: salesPrice ? salesPrice : 0,
            reps: salesReps ? salesReps : 0,
            email: emailAddress,
            cost: costCalc(inBoundLeads, salesReps),
            percentageFrom: Math.round(bookedDemos / inBoundLeads * 100),
            percentageTo: percentageToParam ? percentageToParam : percentageCalc(bookedDemos, inBoundLeads),
            leadsTo: leadsTo,
            closedDeals: closedDeals,
            additionalEarn: additionalEarn,
            investmetReturn: investmetReturn,
            returnPoints: Math.round(investmetReturn / costCalc(inBoundLeads, salesReps)),
            inBoundMonthly: bookedDemos * winRate / 100 * salesPrice
        }


        let some_value_bad = false;
        let bookdemos_bigger = false;
        let returned_value = false;

        Object.keys(data).forEach(function(key) {
            let value = data[key];
            console.log( key, value);
            if (value == null || value == NaN || value == 0 || value == "") {
                some_value_bad = true;
                returned_value = value;

            } else if (parseInt(bookedDemos) >= parseInt(inBoundLeads)) {
                bookdemos_bigger = true;
            }
        })

      
        if ( some_value_bad ) {
            if ($('.alert').length == 0) {
                if (returned_value == 0 || returned_value < 0) {
                    $('.section--rio__form').prepend('<span class="alert text-center">Your numbers are either too low or are yielding a negative result. Please adjust your numbers and try again.</span>')
                } else {
                    $('.section--rio__form').prepend('<span class="alert text-center">All fields are required</span>')
                }
                flag = false;
                $(".js-show-result").css({
                    opacity: 0,
                    visibility: 'hidden',
                    height: 0
                })
            }
            return false
        } else if ( bookdemos_bigger ) {
            if ($('.alert').length == 0) {
                $('.section--rio__form').prepend('<span class="alert text-center">Booked demos must be lower than inbound leads</span>')
                flag = false;
                return false
            }
        } else {





            flag = true;
            $('.alert').remove();
            $(".month-revenue").text("$" + data["investmetReturn"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".year-revenue").text("$" + (data["investmetReturn"]*12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
            $(".revenue-diff").text(data["returnPoints"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "x");
            $(".rate-from").text(data["percentageFrom"]);
            $(".rate-to").val(data["percentageTo"]);
            if (percentageToParam == 0) {
                let rateToMin = parseInt($('.rate-from').text());
                let rateToCurrent = 51;

                if(!isNaN(rateToMin))
                {
                  rateToCurrent = rateToMin + 1;
                }

                $(".rate-to").attr('data-min', rateToCurrent);
            }
            $(".roi_leads_to").text(data["leadsTo"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".roi_closed_deals").text(data["closedDeals"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".roi_additional").text("$" + data["additionalEarn"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".roi_additional_year").text("$" + (data["additionalEarn"]*12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".roi_cost").text("$" + data["cost"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".roi_cost_add_month").text("$" + data["investmetReturn"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            $(".roi_cost_add_year").text("$" + ( data["investmetReturn"]*12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
            $(".js-show-result").css({
                opacity: 1,
                visibility: 'visible',
                height: 100 + '%'
            })
            $("#chart_div").attr("data-one", data["percentageFrom"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") )
            $("#chart_div").attr("data-two", data["percentageTo"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") )
            $("#chart_div_finance").attr("data-one", bookedDemos * winRate / 100 * salesPrice)
            $("#chart_div_finance").attr("data-two", bookedDemos * winRate / 100 * salesPrice + additionalEarn)
          
          
            $(".roi-success-hidden").show();
            successData = data;
          
            
      

          
            
            $("[name='monthly_inbound_leads___roi_calc']").val(  $("[name='roi_leads']").val() );
            $("[name='monthly_booked_demos___roi_calc']").val(  $("[name='roi_demos']").val() );
            $("[name='avg_win_rate___roi_calc']").val(  $("[name='roi_rate']").val() );
            $("[name='avg_sales_price___roi_calc']").val(  $("[name='roi_price']").val() );
            $("[name='number_of_sales_reps___roi_calc']").val(  $("[name='roi_reps']").val() );
            $("#email-5").val( $("[name='roi_email']").val() ) ;
            
  
            setTimeout(function(){
              $("#ROI-calculator .chillisubmit ").trigger("click");
            }, 1000)

          
          
        }


        window.history.pushState({}, 'ROI Calculated', `${URL}`);
        window.history.replaceState({}, 'ROI Calculated', `${URL}/#calculate`);
      
        setTimeout(function()
        {
          window.history.replaceState({}, 'ROI Calculated', `${URL}`);
        }, 500);
      
        $('#roi-calculate').text('Calculate')
        if (flag) {
            drawTrendlines(successData[3], successData[4], 'chart_div');
            drawTrendlines(bookedDemos * winRate / 100 * salesPrice, bookedDemos * winRate / 100 * salesPrice + additionalEarn, 'chart_div_finance');
            smoothScroll('#show-result');
        }

    }



    $(window).resize(function() {
        const dataChartOne = $("#chart_div").attr("data-one")
        const dataChartTwo = $("#chart_div").attr("data-two")

        const dataCharFinancetOne = $("#chart_div_finance").attr("data-one")
        const dataCharFinancetTwo = $("#chart_div_finance").attr("data-two")
        drawTrendlines(dataChartOne, dataChartTwo, 'chart_div');
        drawTrendlines(dataCharFinancetOne, dataCharFinancetTwo, 'chart_div_finance');
    })

    $(".rate-to").on('change', function() {



        const minValue = $(this).attr('data-min')

         console.log("AAA", minValue, $(this).val());

        if ( parseInt ( $(this).val() ) <  parseInt ( minValue) ) {
            $(this).val('')
            if ($('.alert--small').length < 1) {
                $(this).parent().append(`<span class="alert alert--small">The number must be higher or equal to ${minValue}<span>`)
            }
        } else {
            $('.alert--small').remove()
            success_ajax( parseInt($(this).val()) )
        }
    })

    submitBtn.on("click", function(e) {
        e.preventDefault();
        success_ajax();
        $('.form-save-link').removeClass('d-none');
        // ajaxHSData();
        // ajaxStart();
    })
})



function sendAjaxHS(formID, data, step) {

    var xhr = new XMLHttpRequest()
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/' + chili.portalId + '/' + formID;
    console.log(url)
    var finalData = JSON.stringify(data)
    console.log(finalData)
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(finalData)
}
