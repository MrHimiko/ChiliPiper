


let concierge = `
<div class="price__calc price__calc-2b">
    <h4>Concierge</h4>
    <div class="content">
        <div class="switch switch--horizontal switch--horizontal__checkbox">
            <input id="checked-concierge" type="checkbox" name="checked-concierge" value="Buy Concierge" price-data=".price__box--concierge"/>
            <label for="checked-concierge">Buy Concierge</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
        </div>
        <div class="grid grid--stackable">
            <div class="grid__column">
                <span class="h5 heading">Monthly Lead Volume</span>
            </div>
            <div class="grid__column">
                <input type="text" maxlength="5" name="seats" class="seats" tabindex="1" readonly="readonly" id="concierge_volume" />
            </div>
        </div>
        <div class="grid grid--stackable">
            <div class="grid__column">
                <span class="h5 heading">Users</span>
            </div>
            <div class="grid__column">
                <input type="text" maxlength="4" name="seats1" class="seats" tabindex="2" readonly="readonly" id="concierge_users" />
            </div>
        </div>
    </div>
</div>

`;


let distro = `
<div class="price__calc price__calc-2b">
    <h4>Distro</h4>
    <div class="content">
        <div class="switch switch--horizontal switch--horizontal__checkbox">
            <input id="checked-distro" type="checkbox" name="checked-distro" value="Buy Distro" price-data=".price__box--distro" />
            <label for="checked-distro">Buy Distro</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
        </div>
        <div class="grid grid--stackable">
            <div class="grid__column">
                <span class="h5 heading">Users</span>
            </div>
            <div class="grid__column">
                <input type="text" maxlength="4" name="seats2" class="seats" tabindex="3" readonly="readonly" id="distro_users" />
            </div>
        </div>
    </div>
</div>
`;


let distro_concierge = `
<div class="price__calc price__calc-2b">
    <h4>Concierge + Distro Bundle</h4>
    <div class="content">
        <div class="switch switch--horizontal switch--horizontal__checkbox">
            <input id="checked-distro_concierge" type="checkbox" name="checked-distro_concierge" value="Concierge + Distro Bundle" price-data=".price__box--instant"/>
            <label for="checked-distro_concierge">Concierge + Distro Bundle</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
        </div>
        <div class="grid grid--stackable">
            <div class="grid__column">
                <span class="h5 heading">Monthly Lead Volume</span>
            </div>
            <div class="grid__column">
                <input type="text" maxlength="5" name="seats3" class="seats" tabindex="4" readonly="readonly" id="distro_concierge_volume"/>
            </div>
        </div>
        <div class="grid grid--stackable">
            <div class="grid__column">
                <span class="h5 heading">Users</span>
            </div>
            <div class="grid__column">
                <input type="text" maxlength="4" name="seats4" class="seats" tabindex="5" readonly="readonly"  id="distro_concierge_users" />
            </div>
        </div>
    </div>
</div>
`;


let handoff = `
<div class="price__calc price__calc-2b">
    <h4> Handoff </h4>
    <div class="content">
        <div class="switch switch--horizontal switch--horizontal__checkbox">
            <input id="checked-handoff" type="checkbox" name="checked-handoff" value="Buy Handoff" price-data=".price__box--handoff" />
            <label for="checked-handoff">Buy Handoff </label><span class="toggle-outside"><span class="toggle-inside"></span></span>
        </div>
        <div class="grid grid--stackable">
            <div class="grid__column">
                <span class="h5 heading">Users</span>
            </div>
            <div class="grid__column">
                <input type="text" maxlength="4" name="seats5" class="seats" tabindex="10" readonly="readonly" id="handoff_users"/>
            </div>
        </div>
        
    </div>
</div>
`;



let instant_booker = `
<div class="price__calc price__calc-2b">
    <h4>Instant Booker</h4>
    <div class="content">
        <div class="switch switch--horizontal switch--horizontal__checkbox">
            <input id="checked-instant_booker" type="checkbox" name="checked-instant_booker" value="Buy Instant Booker" price-data=".price__box--booker" />
            <label for="checked-instant_booker">Buy Instant Booker</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
        </div>

        <div class="grid grid--stackable">
            <div class="grid__column">
                <span class="h5 heading">Users</span>
            </div>
            <div class="grid__column">
                <input type="text" maxlength="4" name="seats5" class="seats" tabindex="6" readonly="readonly" id="instant_booker_users"/>
            </div>
        </div>
        
    </div>
</div>
`;






let events_calc = 
`<div class="price__calc price__calc-event price__calc-2b" style="display:none!important">
    <h4>Events</h4>
    <div class="content">
        <div class="switch switch--horizontal switch--horizontal__checkbox">
            <input id="checked-events" type="checkbox" name="checked-events" value="Buy Events" price-data=".price__box--events"/>
            <label for="checked-events">Buy Events</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
        </div>
        <div class="grid grid--stackable">
            <div class="grid__column">
                <span class="h5 heading">Users</span>
            </div>
            <div class="grid__column">
                <input type="text" maxlength="4" name="seats7" class="seats" tabindex="8" readonly="readonly" id="events_users"/>
            </div>
        </div>
    </div>
</div>
`;


let html = `
<div id="meetings" class="tab-content current" data-tab-content="">
    <div class="container container--center container--large wrapper-small">
        <div class="grid grid--center grid--waffle grid--price price">
            <div class="grid__column grid__column--12 grid__column--1@large"></div>
            <div class="grid__column grid__column--12 grid__column--6@small grid__column--5@large">
               	${concierge}
                ${distro}
                ${distro_concierge}
                ${handoff}
                ${instant_booker}
                ${events_calc}
            </div>

            <!-- ENDGRID -->
            <div class="grid__column grid__column--12 grid__column--6@small">
                <div class="price__box price__box--orange">


                    <h1>$<span class="final-price">0</span> <span class="price__label price__label--standard">per month (billed at $0 per year)</span></h1>

                    <div class="switch switch--horizontal" id="price-switcher">
                        <input id="radio-a" type="radio" name="plan" value="monthly" />
                        <label for="radio-a">monthly</label>
                        <input id="radio-b" type="radio" name="plan" value="annual" checked="checked" />
                        <label for="radio-b">annual</label><span class="toggle-outside"><span class="toggle-inside"></span></span>
                    </div>

                    <div class="price__text-orange" id="save-price">
                        <p>Save $<span class="price__save">0</span> per month with <span>annual billing</span></p>
                        <span style=" font-size: 13px;line-height: 25px; color: #f40; font-family: "Rubik", sans-serif; margin: 0;"></span>
                    </div>



                    <div class="price__box--repeat price__box--concierge" style="display: none;">
                        <h4>CONCIERGE</h4>
                        <div class="price__box--column">
                            <div class="float-left">
                                <h3>Platform Fee<span class="h3 price__platform-label"></span></h3>
                            </div>
                            <div class="float-right">
                                <p>$<span class="unit-price" id="concierge_tab_platform_fee">100</span></p>
                            </div>
                        </div>
                        <!-- .column-->
                        <div class="price__box--column">
                            <div class="float-left">
                                <h3>Users</h3>
                            </div>
                            <div class="float-right">
                                <p><span class="price__value price__value--standard fw-bold" id="concierge_tab_users">x</span>$<span class="unit-price1" id="concierge_per_user"></span> per user</p>
                            </div>
                        </div>
                        <!-- .column-->
                    </div>



                    <div class="price__box--repeat price__box--distro" style="display: none;">
                        <h4>Distro</h4>
                        <div class="price__box--column">
                            <div class="float-left">
                                <h3>Users</h3>
                            </div>
                            <div class="float-right">
                                <p><span class="price__value price__value--standard1 fw-bold" id="distro_tab_users">x</span>$<span class="unit-price2" id="distro_per_user"></span> per user</p>
                            </div>
                        </div>
                        <!-- .column-->
                    </div>



                    <div class="price__box--repeat price__box--instant" style="display: none;">
                        <h4>Concierge + Distro Bundle</h4>
                        <div class="price__box--column">
                            <div class="float-left">
                                <h3>Platform Fee<span class="h3 price__platform-label"></span></h3>
                            </div>
                            <div class="float-right">
                                <p>$<span class="unit-price3" id="concierge_distro_tab_platform_fee">100</span></p>
                            </div>
                        </div>
                        <!-- .column-->
                        <div class="price__box--column">
                            <div class="float-left">
                                <h3>Users</h3>
                            </div>
                            <div class="float-right">
                                <p><span class="price__value price__value--standard2 fw-bold" id="concierge_distro_tab_users">x</span>$<span class="unit-price4"id="concierge_distro_per_user"></span> per user</p>
                            </div>
                        </div>
                        <!-- .column-->
                    </div>



                   

                    <div class="price__box--repeat price__box--handoff" style="display: none;">
                        <h4> Handoff </h4>
                        <div class="price__box--column">
                            <div class="float-left">
                                <h3>Users</h3>
                            </div>
                            <div class="float-right">
                                <p><span class="price__value price__value--standard3 fw-bold" id="handoff_tab_users">x</span>$<span class="unit-price6" id="handoff_per_user"></span> per user</p>
                            </div>
                        </div>
                       
                    </div>

                     <div class="price__box--repeat price__box--booker" style="display: none;">
                        <h4>Instant booker</h4>
                        <div class="price__box--column">
                            <div class="float-left">
                                <h3>Price</h3>
                            </div>
                            <div class="float-right">
                                <p><span class="price__value price__value--standard3 fw-bold" id="instant_booker_tab_users">x</span>$<span class="unit-price6" id="instant_booker_per_user">15</span> per user</p>
                            </div>
                        </div>
                       
                    </div>

                    <div class="price__box--repeat price__box--events" style="display: none;">
                        <h4>Events</h4>
                        <div class="price__box--column">
                            <div class="float-left">
                                <h3>Platform Fee<span class="h3 price__platform-label"></span></h3>
                            </div>
                            <div class="float-right">
                                <p>$<span class="unit-price7" id="events_tab_platform_fee">100</span></p>
                            </div>
                        </div>
                        <!-- .column-->
                        <div class="price__box--column">
                            <div class="float-left">
                                <h3>Users</h3>
                            </div>
                            <div class="float-right">
                                <p><span class="price__value price__value--standard5 fw-bold" id="events_tab_users">x</span>$<span class="unit-price8" id="events_per_user">20</span> per user</p>
                            </div>
                        </div>
                        <!-- .column-->
                    </div>


                    <a href="/request-demo" class="button button--primary tt-upper">Book a Demo</a>


                </div>
                <!-- .box-->
            </div>
        </div>
    </div>
</div>


`;



$(".get-calc-from-js").html(html);






// FORMULAS
function concierge_platform_fee(volume, is_annual) {
	let money = 0;

	let p1 = 225;
	let p2 = 600;
	let p3 = 1500;

	if ( is_annual ) {
		p1 = 150;
		p2 = 400;
		p3 = 1000;
	}


	if ( volume == 0) { money = 0;}
	else if ( volume < 101 && volume > 0 ) { money = p1;}
	else if ( volume < 1001 && volume > 100) { money = p2;}
	else if ( volume > 100) { money = p3;}
	return money;
}


function user_x_price(users, price) {
	let money = users * price;
	return money;
}


function events_platform_fee(users) {
 	let money = 0;
 	if ( users == 0) { money = 0;}
	else if ( users > 0 ) { money = 250;}
	return money;
}




// CALCULATE ALL TABS

function calculate_prices() {


	let total_price = 0;

	let is_annual = true;

	if ( $('input[name="plan"]:checked').val() == 'monthly') {
		is_annual = false;
	}



	//hide events tabs if annual is not selected

	console.log("is_annual", is_annual);

	if ( !is_annual ) {
		$(".price__calc-event").hide();
		$(".price__box--events").hide();
	} else {
		$(".price__calc-event").show();

		if ( $("#events_users").attr("readonly") == undefined ) {
			$(".price__box--events").show();
		}

	}



	// define annual and monthly prices by user!

	let concierge_per_user_ann = 30;
	let distro_per_user_ann = 20;
	let concierge_distro_per_user_ann = 40;
	let handoff_per_user_ann = 25;
	let instant_booker_per_user_ann = 15;
	let events_per_user_ann = 20;

	let	concierge_per_user_mon = 45;
	let	distro_per_user_mon = 30;
	let	concierge_distro_per_user_mon = 60;
	let	handoff_per_user_mon = 37.5;
	let	instant_booker_per_user_mon = 22.5;
	


	// calculate annual and monthly total prices
	let monthly_price = 0;
	let annual_price = 0;

	
	let concierge_tab_platform_fee_ann = concierge_platform_fee( $("#concierge_volume").val(), true );
	let concierge_tab_users_ann = user_x_price( $("#concierge_users").val() , concierge_per_user_ann );

	let distro_tab_users_ann = user_x_price( $("#distro_users").val(), distro_per_user_ann );

	let concierge_distro_tab_platform_fee_ann = concierge_platform_fee( $("#distro_concierge_volume").val(), true);
	let concierge_distro_tab_users_ann = user_x_price( $("#distro_concierge_users").val(),  concierge_distro_per_user_ann  );
	let handoff_tab_users_ann = user_x_price( $("#handoff_users").val(), handoff_per_user_ann );

	let instant_booker_tab_users_ann = user_x_price( $("#instant_booker_users").val(), instant_booker_per_user_ann );

	let events_tab_platform_fee_ann = events_platform_fee( $("#events_users").val() );
	let events_tab_users_ann = user_x_price( $("#events_users").val(), events_per_user_ann);



	// calculate monthly
	let concierge_tab_platform_fee_mon = concierge_platform_fee( $("#concierge_volume").val(), false );
	let concierge_tab_users_mon = user_x_price( $("#concierge_users").val() , concierge_per_user_mon );

	let distro_tab_users_mon = user_x_price( $("#distro_users").val(), distro_per_user_mon );

	let concierge_distro_tab_platform_fee_mon = concierge_platform_fee( $("#distro_concierge_volume").val(), false);
	let concierge_distro_tab_users_mon = user_x_price( $("#distro_concierge_users").val(),  concierge_distro_per_user_mon  );

	let handoff_tab_users_mon = user_x_price( $("#handoff_users").val(), handoff_per_user_mon );

	let instant_booker_tab_users_mon = user_x_price( $("#instant_booker_users").val(), instant_booker_per_user_mon );





	// create a total price out of the prices that are not disabled


	if ( $("#concierge_volume").attr("readonly") == undefined ) {
		annual_price += concierge_tab_platform_fee_ann + concierge_tab_users_ann;
		monthly_price += concierge_tab_platform_fee_mon + concierge_tab_users_mon;
	}

	if ( $("#distro_users").attr("readonly") == undefined ) {
		annual_price += distro_tab_users_ann;
		monthly_price += distro_tab_users_mon;
	}

	if ( $("#distro_concierge_volume").attr("readonly") == undefined ) {
		annual_price += concierge_distro_tab_platform_fee_ann + concierge_distro_tab_users_ann;
		monthly_price += concierge_distro_tab_platform_fee_mon + concierge_distro_tab_users_mon;
	}

	if ( $("#handoff_users").attr("readonly") == undefined ) {
		annual_price += handoff_tab_users_ann;
		monthly_price += handoff_tab_users_mon;
	}

	if ( $("#instant_booker_users").attr("readonly") == undefined ) {
		annual_price += instant_booker_tab_users_ann;
		monthly_price += instant_booker_tab_users_mon;
	}

	let events_are_added = false;
	if ( $("#events_users").attr("readonly") == undefined && is_annual ) {
		annual_price += events_tab_platform_fee_ann + events_tab_users_ann;
		events_are_added = true;
	}




	// show final price, based on montly or annual payment
	let finalRes = monthly_price;

	let 
	priceSave = $('.price__save'),
    priceLabel = $('.price__label--standard'),
    pricePlatformLabel = $('.price__platform-label');

    let formatedSave;


    if ( !is_annual ) {
	    priceLabel.html('per month')
    } else {
    	finalRes = annual_price;
      	yearPrice = String(annual_price * 12).replace(/(.)(?=(\d{3})+$)/g,'$1,')
      	priceLabel.html('per month (billed at $'+ yearPrice +' per year)')
    }


	//hide save text if events are added, since they are allowed only in annual
  	if (!events_are_added) { 
  		formatedSave = Math.ceil( monthly_price - annual_price );
  		priceSave.html(String(formatedSave).replace(/(.)(?=(\d{3})+$)/g,'$1,'))
  		$("#save-price > p").show();
  		$("#save-price > span").hide();
  		$("#price-switcher").show();

  		$("#save-price").css("margin-top", 0);
  	} 
    else { 
    	$("#save-price > span").text("Our Events product only offers annual pricing");
    	$("#save-price > p").hide();
  		$("#save-price > span").show();
  		$("#price-switcher").hide();

  		$("#save-price").css("margin-top", "10px");
	}



	//show final rice
    if(isNaN(finalRes)) {
      	price.html('0')
    } else {
      	$(".final-price").html(String(finalRes).replace(/(.)(?=(\d{3})+$)/g,'$1,'))
    }




	// Update visual data (each tab pricing under total price on the right side)
	let concierge_tab_platform_fee = concierge_tab_platform_fee_mon;
	let concierge_distro_tab_platform_fee = concierge_distro_tab_platform_fee_mon;

	if ( is_annual ) {  concierge_tab_platform_fee = concierge_tab_platform_fee_ann; }
	if ( is_annual ) {  concierge_distro_tab_platform_fee = concierge_distro_tab_platform_fee_ann; }




	update_visual_data(	
		concierge_tab_platform_fee,
		$("#concierge_users").val(),
		$("#distro_users").val(),
		concierge_distro_tab_platform_fee,
		$("#distro_concierge_users").val(),
		$("#handoff_users").val(),
		$("#instant_booker_users").val(),
		events_tab_platform_fee_ann,
		$("#events_users").val()
	);
}






function update_visual_data(
	concierge_tab_platform_fee,
	concierge_tab_users,
	distro_tab_users,
	concierge_distro_tab_platform_fee,
	concierge_distro_tab_users,
	handoff_tab_users,
	instant_booker_tab_users,
	events_tab_platform_fee,
	events_tab_users
) {

	if ( concierge_tab_users == "") {concierge_tab_users = 0;}
	if ( distro_tab_users == "") {distro_tab_users = 0;}
	if ( concierge_distro_tab_users == "") {concierge_distro_tab_users = 0;}
	if ( handoff_tab_users == "") {handoff_tab_users = 0;}
	if ( instant_booker_tab_users == "") {instant_booker_tab_users = 0;}
	if ( events_tab_users == "") {events_tab_users = 0;}


	$("#concierge_tab_platform_fee").text(concierge_tab_platform_fee);
	$("#concierge_tab_users").text("x"+concierge_tab_users);
	$("#distro_tab_users").text("x"+distro_tab_users);
	$("#concierge_distro_tab_platform_fee").text(concierge_distro_tab_platform_fee);
	$("#concierge_distro_tab_users").text("x"+concierge_distro_tab_users);
	$("#handoff_tab_users").text("x"+handoff_tab_users);
	$("#instant_booker_tab_users").text("x"+instant_booker_tab_users);
	$("#events_tab_platform_fee").text(events_tab_platform_fee);
	$("#events_tab_users").text("x"+events_tab_users);








	// define and show prices in right table based on what is selected
	let concierge_per_user = 30;
	let distro_per_user = 20;
	let concierge_distro_per_user = 40;
	let handoff_per_user = 25;
	let instant_booker_per_user = 15;
	let events_per_user = 20;

	if ( $('input[name="plan"]:checked').val() == 'monthly') {
		concierge_per_user = 45;
		distro_per_user = 30;
		concierge_distro_per_user = 60;
		handoff_per_user = 37.5;
		instant_booker_per_user = 22.5;
	}

	$("#concierge_per_user").text(concierge_per_user);
	$("#distro_per_user").text(distro_per_user);
	$("#concierge_distro_per_user").text(concierge_distro_per_user);
	$("#handoff_per_user").text(handoff_per_user);
	$("#instant_booker_per_user").text(instant_booker_per_user);
	$("#events_per_user").text(events_per_user);



}











// toggled dropdowns

$(document).on('click', '.price__calc-2b h4', function() {
    $(this).parent().toggleClass('active');
});




$('#meetings input').on('change keyup', function() {
    calculate_prices();
});



$('#meetings .switch input').on('change', function() {

	let x = $(this).attr("price-data");
    if ($(this).is(':checked')) {
        $(this).closest(".content").find("input").removeAttr('readonly');
        $(x).show();
    } else {
        $(this).closest(".content").find("input").attr('readonly', 'readonly');
        $(x).hide();
    }
    calculate_prices()
})
