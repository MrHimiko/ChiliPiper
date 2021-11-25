let html = `
<div id="meetings" class="tab-content current" data-tab-content="">
    <div class="container container--center container--large wrapper-small">
      <div class="grid grid--center grid--waffle grid--price price">
        <div class="grid__column grid__column--12 grid__column--1@large"></div>

        <div class="grid__column grid__column--12 grid__column--6@small grid__column--5@large">
          <!-- FIRST CALC -->
          <div class="price__calc price__calc-2b active">
            <h4>Concierge</h4>

            <div class="content">
              <div class="switch switch--horizontal switch--horizontal__checkbox">
                <input id="checkked-1" type="checkbox" name="checked-1" value="Buy Concierge">
                <label for="checkked-1">Buy Concierge</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
              </div>

              <div class="grid grid--stackable">
                <div class="grid__column">
                  <span class="h5 heading">Monthly Lead Volume</span>
                                  </div>
                <div class="grid__column">
                  <input type="text" maxlength="5" name="seats" class="seats" tabindex="1" readonly="readonly">
                </div>
              </div>

              <div class="grid grid--stackable">
                <div class="grid__column">
                  <span class="h5 heading">Users</span>
                                  </div>
                <div class="grid__column">
                  <input type="text" maxlength="4" name="seats1" class="seats" tabindex="2" readonly="readonly">
                </div>
              </div>
            </div>
          </div>
          <!-- SECOND CALC -->
          <div class="price__calc price__calc-2b">
            <h4>Distro</h4>

            <div class="content">
              <div class="switch switch--horizontal switch--horizontal__checkbox">
                <input id="checkked-2" type="checkbox" name="checked-2" value="Buy Distro">
                <label for="checkked-2">Buy Distro</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
              </div>

              <div class="grid grid--stackable">
                <div class="grid__column">
                  <span class="h5 heading">Users</span>
                                  </div>
                <div class="grid__column">
                  <input type="text" maxlength="4" name="seats2" class="seats" tabindex="3" readonly="readonly">
                </div>
              </div>
            </div>
          </div>
          <!-- THIRD CALC -->
          <div class="price__calc price__calc-2b">
            <h4>Concierge + Distro Bundle</h4>
            <div class="content">
              <div class="switch switch--horizontal switch--horizontal__checkbox">
                <input id="checkked-3" type="checkbox" name="checked-3" value="Concierge + Distro Bundle">
                <label for="checkked-3">Concierge + Distro Bundle</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
              </div>
              <div class="grid grid--stackable">
                <div class="grid__column">
                  <span class="h5 heading">Monthly Lead Volume</span>
                                  </div>
                <div class="grid__column">
                  <input type="text" maxlength="5" name="seats3" class="seats" tabindex="4" readonly="readonly">
                </div>
              </div>

              <div class="grid grid--stackable">
                <div class="grid__column">
                  <span class="h5 heading">Users</span>
                                  </div>
                <div class="grid__column">
                  <input type="text" maxlength="4" name="seats4" class="seats" tabindex="5" readonly="readonly">
                </div>
              </div>
            </div>
          </div>
          <!-- FOURTH CALC -->
          <div class="price__calc price__calc-2b ">
            <h4>Instant Booker</h4>
            <div class="content">
              <div class="switch switch--horizontal switch--horizontal__checkbox">
                <input id="checkked-4" type="checkbox" name="checked-4" value="Buy Instant Booker">
                <label for="checkked-4">Buy Instant Booker</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
              </div>
              <div class="grid grid--stackable">
                <div class="grid__column">
                  <span class="h5 heading">Spicy Users</span>
                                  </div>
                <div class="grid__column">
                  <input type="text" maxlength="4" name="seats5" class="seats" tabindex="6" readonly="readonly">
                </div>
              </div>

              <div class="grid grid--stackable">
                <div class="grid__column">
                  <span class="h5 heading">Hot Users</span>
                                  </div>
                <div class="grid__column">
                  <input type="text" maxlength="4" name="seats6" class="seats" tabindex="7" readonly="readonly">
                </div>
              </div>
            </div>
          </div>
          <!-- FIFTH CALC -->
          <div class="price__calc price__calc-event price__calc-2b">
            <h4>Events</h4>

            <div class="content">
              <div class="switch switch--horizontal switch--horizontal__checkbox">
                <input id="checkked-5" type="checkbox" name="checked-5" value="Buy Events">
                <label for="checkked-5">Buy Events</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
              </div>

              <div class="grid grid--stackable">
                <div class="grid__column">
                  <span class="h5 heading">Users</span>
                                  </div>
                <div class="grid__column">
                  <input type="text" maxlength="4" name="seats7" class="seats" tabindex="8" readonly="readonly">
                </div>
              </div>
            </div>
          </div>

          <div class="price__calc price__calc-last" style="display:none;">
            <h4>Distro</h4>
            <div class="d-md-block d-inline-block">
              <input type="radio" id="no" name="routing" value="no">
              <label for="no">No</label>
            </div>
            <div class="d-md-block d-inline-block">
              <input type="radio" id="yes" name="routing" value="yes" checked="">
              <label for="yes">Yes</label>
            </div>
          </div>
          
        </div><!-- ENDGRID -->

        <div class="grid__column grid__column--12 grid__column--6@small">
          <div class="price__box price__box--orange">
            <h1>$<span class="final-price">0</span> <span class="price__label price__label--standard">per month (billed at $0 per year)</span></h1>

            <div class="switch switch--horizontal">
              <input id="radio-a" type="radio" name="plan" value="monthly">
              <label for="radio-a">monthly</label>
              <input id="radio-b" type="radio" name="plan" value="annual" checked="checked">
              <label for="radio-b">annual</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
            </div>

            <div class="price__text-orange">
              <p>Save $<span class="price__save">0</span> per month with <span>annual billing</span></p>
            </div>

            <div class="price__box--repeat price__box--concierge" style="display: none;">
              <h4>CONCIERGE</h4>

              <div class="price__box--column">
                <div class="float-left">
                  <h3>Platform Fee<span class="h3 price__platform-label"></span></h3>
                </div>
                <div class="float-right">
                  <p>$<span class="unit-price">100</span></p>
                </div>
              </div><!-- .column-->

              <div class="price__box--column">
                <div class="float-left">
                  <h3>Users</h3>
                </div>
                <div class="float-right">
                  <p><span class="price__value price__value--standard fw-bold">x</span>$<span class="unit-price1">30</span> per user</p>
                </div>
              </div><!-- .column-->
            </div>

            <div class="price__box--repeat price__box--distro" style="display: none;">
              <h4>Distro</h4>

              <div class="price__box--column">
                <div class="float-left">
                  <h3>Users</h3>
                </div>
                <div class="float-right">
                  <p><span class="price__value price__value--standard1 fw-bold">x</span>$<span class="unit-price2">30</span> per user</p>
                </div>
              </div><!-- .column-->
            </div>

            <div class="price__box--repeat price__box--instant" style="display: none;">
              <h4>Concierge + Distro Bundle</h4>

              <div class="price__box--column">
                <div class="float-left">
                  <h3>Platform Fee<span class="h3 price__platform-label"></span></h3>
                </div>
                <div class="float-right">
                  <p>$<span class="unit-price3">100</span></p>
                </div>
              </div><!-- .column-->

              <div class="price__box--column">
                <div class="float-left">
                  <h3>Users</h3>
                </div>
                <div class="float-right">
                  <p><span class="price__value price__value--standard2 fw-bold">x</span>$<span class="unit-price4">40</span> per user</p>
                </div>
              </div><!-- .column-->
            </div>

            <div class="price__box--repeat price__box--booker" style="display: none;">
              <h4>Instant booker</h4>

              <div class="price__box--column">
                <div class="float-left">
                  <h3>Spicy</h3>
                </div>
                <div class="float-right">
                  <p><span class="price__value price__value--standard3 fw-bold">x</span>$<span class="unit-price6">15</span> per user</p>
                </div>
              </div><!-- .column-->

              <div class="price__box--column">
                <div class="float-left">
                  <h3>Hot</h3>
                </div>
                <div class="float-right">
                  <p><span class="price__value price__value--standard4 fw-bold">x</span>$<span class="unit-price5">15</span> per user</p>
                </div>
              </div><!-- .column-->
            </div>

            <div class="price__box--repeat price__box--events" style="display: none;">
              <h4>Events</h4>

              <div class="price__box--column">
                <div class="float-left">
                  <h3>Platform Fee<span class="h3 price__platform-label"></span></h3>
                </div>
                <div class="float-right">
                  <p>$<span class="unit-price7">100</span></p>
                </div>
              </div><!-- .column-->

              <div class="price__box--column">
                <div class="float-left">
                  <h3>Users</h3>
                </div>
                <div class="float-right">
                  <p><span class="price__value price__value--standard5 fw-bold">x</span>$<span class="unit-price8">30</span> per user</p>
                </div>
              </div><!-- .column-->
            </div>

            <a href="/request-demo" class="button button--primary tt-upper">Book a Demo</a>
          </div><!-- .box-->
        </div>
      </div>
    </div>

</div>

`;


$(".get-calc-from-js").html(html);








  $(document).on('click', '.price__calc-2b h4', function () {
    $(this).parent().toggleClass('active')
  })

  var seats_default = $('input.seats'),
      seats = $('input[name="seats"]'),
      seats1 = $('input[name="seats1"]'),
      seats2 = $('input[name="seats2"]'),
      seats3 = $('input[name="seats3"]'),
      seats4 = $('input[name="seats4"]'),
      seats5 = $('input[name="seats5"]'),
      seats6 = $('input[name="seats6"]'),
      seats7 = $('input[name="seats7"]'),
      //routing = $('input[name="routing"]'),
      //concierge = $('input[name="concierge"]'),
      plan = $('input[name="plan"]'),
      price = $('.final-price'),
      unit_price = $('.unit-price'),
      unit_price1 = $('.unit-price1'),
      unit_price2 = $('.unit-price2'),
      unit_price3 = $('.unit-price3'),
      unit_price4 = $('.unit-price4'),
      unit_price5 = $('.unit-price5'),
      unit_price6 = $('.unit-price6'),
      unit_price7 = $('.unit-price7'),
      unit_price8 = $('.unit-price8'),
      booker = $('.price__value--standard'),
      booker1 = $('.price__value--standard1'),
      booker2 = $('.price__value--standard2'),
      booker3 = $('.price__value--standard3'),
      booker4 = $('.price__value--standard4'),
      booker5 = $('.price__value--standard5'),
      conciergeLine = $('.price__box--concierge'),
      distroLine = $('.price__box--distro'),
      eventsLine = $('.price__box--events'),
      bookerLine = $('.price__box--booker'),
      priceSave = $('.price__save'),
      priceLabel = $('.price__label--standard'),
      pricePlatformLabel = $('.price__platform-label');

  var priceArray = {
    conciergeUsersMonthly: parseFloat(pricing.concierge_users_monthly_new),
    conciergeUsersAnnual: parseFloat(pricing.concierge_users_annual_new),
    distroUsersMonthly: parseFloat(pricing.distro_users_monthly_new),
    distroUsersAnnual: parseFloat(pricing.distro_users_annual_new),
    conciergeDistroUsersMonthly: parseFloat(pricing.concierge_distro_users_monthly_new),
    conciergeDistroUsersAnnual: parseFloat(pricing.concierge_distro_users_annual_new),
    spicyUsersMonthly: parseFloat(pricing.spicy_users_monthly_new),
    spicyUsersAnnual: parseFloat(pricing.spicy_users_annual_new),
    hotUsersMonthly: parseFloat(pricing.hot_users_monthly_new),
    hotUsersAnnual: parseFloat(pricing.hot_users_annual_new),
    eventsUsersAnnual: parseFloat(pricing.events_users_annual_new),
    eventsPlatform: parseFloat(pricing.events_annual),
    platformMonthly: parseFloat(pricing.platform_monthly),
    platformAnnual: parseInt(pricing.platform_annual),
    platformMonthlyHot: parseFloat(pricing.platform_monthly_hot),
    platformAnnualHot: parseInt(pricing.platform_annual_hot),
    platformMonthlyInferno: parseFloat(pricing.platform_monthly_inferno),
    platformAnnualInferno: parseInt(pricing.platform_annual_inferno),
  };

  // console.log(priceArray)

  // init calculator
  runCalculator()

  $(document).on('keydown', seats_default, function (e) {
    if (e.keyCode == 8 || e.keyCode == 9 || (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
    } else {
      e.preventDefault()
      return false
    }
  })

  $(document).on('keyup', seats_default, function (e) {
    if ($(this).val() < 10000) {
      runCalculator()
    }
  })

  plan.on('change', function () {
    if ($('input[name="plan"]:checked').val() == 'monthly') {
      $('#checkked-5').removeAttr('checked')
      $('.price__box--events').css('display', 'none')
      $('.price__calc-event').addClass('off-cat').removeClass('active')
      seats7.attr('readonly', 'readonly')
    } else {
      $('.price__calc-event').removeClass('off-cat')
    }
    runCalculator()
  })

  $(document).on('change', '#checkked-1,#checkked-2,#checkked-3,#checkked-4,#checkked-5', function () {
    runCalculator()
  })

  $('#checkked-1').on('change', function () {
    if ($(this).is(':checked')) {
      seats.removeAttr('readonly')
      seats1.removeAttr('readonly')
      conciergeLine.show()
    } else {
      seats.attr('readonly', 'readonly')
      seats1.attr('readonly', 'readonly')
      conciergeLine.hide()
    }
  })

  $('#checkked-2').on('change', function () {
    if ($(this).is(':checked')) {
      seats2.removeAttr('readonly')
      distroLine.show()
    } else {
      seats2.attr('readonly', 'readonly')
      distroLine.hide()
    }
  })

  $('#checkked-3').on('change', function () {
    if ($(this).is(':checked')) {
      seats3.removeAttr('readonly')
      seats4.removeAttr('readonly')
      $('.price__box--instant').show()
    } else {
      seats3.attr('readonly', 'readonly')
      seats4.attr('readonly', 'readonly')
      $('.price__box--instant').hide()
    }
  })

  $('#checkked-4').on('change', function () {
    if ($(this).is(':checked')) {
      seats5.removeAttr('readonly')
      seats6.removeAttr('readonly')
      bookerLine.show()
    } else {
      seats5.attr('readonly', 'readonly')
      seats6.attr('readonly', 'readonly')
      bookerLine.hide()
    }
  })

  $('#checkked-5').on('change', function () {
    if ($(this).is(':checked')) {
      seats7.removeAttr('readonly')
      eventsLine.show()
    } else {
      seats7.attr('readonly', 'readonly')
      eventsLine.hide()
    }
  })

  function runCalculator() {
    var seatsValue = seats.val(),
        seatsValue1 = seats1.val(),
        seatsValue2 = seats2.val(),
        seatsValue3 = seats3.val(),
        seatsValue4 = seats4.val(),
        seatsValue5 = seats5.val(),
        seatsValue6 = seats6.val(),
        seatsValue7 = seats7.val(),
      formatedPrice = 0,
      formatedPrice2 = 0,
      formatedPrice3 = 0,
      formatedPrice4 = 0,
      formatedPrice5 = 0,
      formatedSave,
      pricingLead,
      pricingLead2,
      pricingLead3,
      platformLabel;
      booker.html('x' + seatsValue1)
      booker1.html('x' + seatsValue2)
      booker2.html('x' + seatsValue4)
      booker3.html('x' + seatsValue5)
      booker4.html('x' + seatsValue6)
      booker5.html('x' + seatsValue7)

    if (!($('.switch #checkked-5').is(':checked'))) {
      $('.switch #checkked-5').on('click', function () {
        $('.switch #checkked-5').toggleClass('btn-off')
        seats7.removeAttr('readonly')
        seats7.val("0")
      })
    } else {
      $('.switch #checkked-5').on('click', function () {
        $('.switch #checkked-5').removeClass('btn-off')
      })
    }

    if (!($('.switch #checkked-4').is(':checked'))) {
      $('.switch #checkked-4').on('click', function () {
        $('.switch #checkked-4').addClass('btn-off')
        seats5.removeAttr('readonly')
        seats6.removeAttr('readonly')
        seats5.val("0")
        seats6.val("0")
      })
    } else {
      $('.switch #checkked-4').on('click', function () {
        $('.switch #checkked-4').removeClass('btn-off')
      })
    }

    if (!($('.switch #checkked-3').is(':checked'))) {
      $('.switch #checkked-3').on('click', function () {
        $('.switch #checkked-3').addClass('btn-off')
        seats3.removeAttr('readonly')
        seats4.removeAttr('readonly')
        seats3.val("0")
        seats4.val("0")
      })
    } else {
      $('.switch #checkked-3').on('click', function () {
        $('.switch #checkked-3').removeClass('btn-off')
      })
    }

    if (!($('.switch #checkked-2').is(':checked'))) {
      $('.switch #checkked-2').on('click', function () {
        $('.switch #checkked-2').addClass('btn-off')
        seats2.removeAttr('readonly')
        seats2.val("0")
      })
    } else {
      $('.switch #checkked-2').on('click', function () {
        $('.switch #checkked-2').removeClass('btn-off')
      })
    }

    if (!($('.switch #checkked-1').is(':checked'))) {
      $('.switch #checkked-1').on('click', function () {
        $('.switch #checkked-1').addClass('btn-off')
        seats.removeAttr('readonly')
        seats1.removeAttr('readonly')
        conciergeLine.show()
        seats.val("0")
        seats1.val("0")
      })
    } else {
      $('.switch #checkked-1').on('click', function () {
        $('.switch #checkked-1').removeClass('btn-off')
      })
    }

    if ($('input[name="plan"]:checked').val() == 'monthly') {
      if (seatsValue < 101) {
        pricingLead = priceArray.platformMonthly
      } else if (seatsValue > 100 && seatsValue < 1001) {
        pricingLead = priceArray.platformMonthlyHot
      } else if (seatsValue > 1000) {
        pricingLead = priceArray.platformMonthlyInferno
      }
      if (seatsValue3 < 101) {
        pricingLead2 = priceArray.platformMonthly
      } else if (seatsValue3 > 100 && seatsValue3 < 1001) {
        pricingLead2 = priceArray.platformMonthlyHot
      } else if (seatsValue3 > 1000) {
        pricingLead2 = priceArray.platformMonthlyInferno
      }
    } else {
      if (seatsValue < 101) {
        pricingLead = priceArray.platformAnnual
      } else if (seatsValue > 100 && seatsValue < 1001) {
        pricingLead = priceArray.platformAnnualHot
      } else if (seatsValue > 1000) {
        pricingLead = priceArray.platformAnnualInferno
      }
      if (seatsValue3 < 101) {
        pricingLead2 = priceArray.platformAnnual
      } else if (seatsValue3 > 100 && seatsValue3 < 1001) {
        pricingLead2 = priceArray.platformAnnualHot
      } else if (seatsValue3 > 1000) {
        pricingLead2 = priceArray.platformAnnualInferno
      }
      if (seatsValue7 > 0) {
        pricingLead3 = priceArray.eventsPlatform
      }
    }

    if ($('#checkked-1').is(':checked')) {
      if ($('input[name="plan"]:checked').val() == 'monthly') {
        if (seats1.val() == 0 && seats.val() == 0) {
          pricingLead = 0
        }
        formatedPrice = Math.round(pricingLead + (seatsValue1 * priceArray.conciergeUsersMonthly))
        unit_price.html(pricingLead)
        unit_price1.html(priceArray.conciergeUsersMonthly)
        pricePlatformLabel.html(platformLabel)
      } else {
        if (seats1.val() == 0 && seats.val() == 0) {
          pricingLead = 0
        }
        formatedPrice = Math.round(pricingLead + (seatsValue1 * priceArray.conciergeUsersAnnual))
        unit_price.html(pricingLead)
        unit_price1.html(priceArray.conciergeUsersAnnual)
        pricePlatformLabel.html(platformLabel)
      }
    }
    if ($('#checkked-2').is(':checked')) {
      if ($('input[name="plan"]:checked').val() == 'monthly') {
        formatedPrice2 = Math.round(seatsValue2 * priceArray.distroUsersMonthly)
        unit_price2.html(priceArray.distroUsersMonthly)
      } else {
        formatedPrice2 = Math.round(seatsValue2 * priceArray.distroUsersAnnual)
        unit_price2.html(priceArray.distroUsersAnnual)
      }
    }
    if ($('#checkked-3').is(':checked')) {
      if ($('input[name="plan"]:checked').val() == 'monthly') {
        if (seats3.val() == 0 && seats4.val() == 0) {
          pricingLead2 = 0
        }
        unit_price3.html(pricingLead2)
        formatedPrice3 = Math.round(pricingLead2 + (seatsValue4 * priceArray.conciergeDistroUsersMonthly))
        unit_price4.html(priceArray.conciergeDistroUsersMonthly)
        pricePlatformLabel.html(platformLabel)
      } else {
        if (seats3.val() == 0 && seats4.val() == 0) {
          pricingLead2 = 0
        }
        unit_price3.html(pricingLead2)
        formatedPrice3 = Math.round(pricingLead2 + (seatsValue4 * priceArray.conciergeDistroUsersAnnual))
        unit_price4.html(priceArray.conciergeDistroUsersAnnual)
        pricePlatformLabel.html(platformLabel)
      }
    }
    if ($('#checkked-4').is(':checked')) {
      if ($('input[name="plan"]:checked').val() == 'monthly') {
        formatedPrice4 = Math.round((seatsValue5 * priceArray.spicyUsersMonthly) + (seatsValue6 * priceArray.hotUsersMonthly))
        unit_price5.html(priceArray.hotUsersMonthly)
        unit_price6.html(priceArray.spicyUsersMonthly)
      } else {
        formatedPrice4 = Math.round((seatsValue5 * priceArray.spicyUsersAnnual) + (seatsValue6 * priceArray.hotUsersAnnual))
        unit_price5.html(priceArray.hotUsersAnnual)
        unit_price6.html(priceArray.spicyUsersAnnual)
      }
    }
    if ($('#checkked-5').is(':checked')) {
      if ($('input[name="plan"]:checked').val() == 'annual') {
        formatedPrice5 = Math.round(pricingLead3 + (seatsValue7 * priceArray.eventsUsersAnnual))
        unit_price7.html(pricingLead3)
        unit_price8.html(priceArray.eventsUsersAnnual)
      } else {
        formatedPrice5 = 0
      }
    }

    var finalRes = formatedPrice + formatedPrice2 + formatedPrice3 + formatedPrice4 + formatedPrice5
    if ($('input[name="plan"]:checked').val() == 'monthly') {
      priceLabel.html('per month')
      formatedSave = Math.ceil(finalRes - (finalRes * 0.66666667))
      priceSave.html(String(formatedSave).replace(/(.)(?=(\d{3})+$)/g,'$1,'))
    } else {
      yearPrice = String(finalRes * 12).replace(/(.)(?=(\d{3})+$)/g,'$1,')
      priceLabel.html('per month (billed at $'+ yearPrice +' per year)')
      formatedSave = Math.ceil((finalRes / 0.66666667) - finalRes)
      priceSave.html(String(formatedSave).replace(/(.)(?=(\d{3})+$)/g,'$1,'))
    }

    if(isNaN(finalRes)) {
      price.html('0')
    } else {
      price.html(String(finalRes).replace(/(.)(?=(\d{3})+$)/g,'$1,'))
    }
  }

