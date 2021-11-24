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
          <div class="price__calc price__calc-2b active">
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
          <div class="price__calc price__calc-2b active">
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
          <div class="price__calc price__calc-2b active">
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
          <div class="price__calc price__calc-event price__calc-2b active">
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

            <a href="https://www.chilipiper.com/request-demo" class="button button--primary tt-upper">Book a Demo</a>
          </div><!-- .box-->
        </div>
      </div>
    </div>

</div>

`;


$(".get-calc-from-js").html(html)
