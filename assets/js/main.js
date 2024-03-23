$(document).ready(function (){

	update();
	setInterval(update, 1000);

	// $('body').addClass('theme-lime');
	$('#login-btn').click(function (){
		window.location.href = "dashboard.html";
	});

	//dashboard interest log demo data
	for(var i=0; i<9; i++) {
		$('#dashboard-interest-log').append('<tr><td><span class="text-decoration-none text-inverse-transparent-3">9999</span></td><td><span class="text-decoration-none text-inverse-transparent-3"><i class="bi bi-circle-fill fs-6px text-theme me-2"></i>SAMPLE PROJECT 1</span></td><td><span class="d-flex align-items-center">+ MYR 100</span></td><td><small>just now</small></td><td><span class="badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px" style="min-height:18px">INTEREST</span></td></tr>');
	}

	//dashboard transaction log demo data
	for(var i=0; i<3; i++) {
		$('#dashboard-transaction-log').append('<tr><td><span class="text-decoration-none text-inverse-transparent-3">9999</span></td><td><span class="d-flex align-items-center"><i class="bi bi-circle-fill fs-6px text-theme me-2"></i>Deposit</span></td><td><span class="text-decoration-none text-inverse-transparent-3">+ MYR 999</span></td><td><small>just now</small></td><td><span class="badge d-block bg-theme text-theme-900 rounded-0 pt-5px w-70px" style="min-height:18px">SUCCESS</span></td></tr><tr><td><span class="text-decoration-none text-inverse-transparent-3">9999</span></td><td><span class="d-flex align-items-center"><i class="bi bi-circle-fill fs-6px text-inverse text-opacity-25 me-2"></i>Transfer</span></td><td><span class="text-decoration-none text-inverse-transparent-3">- MYR 999</span></td><td><small>just now</small></td><td><span class="badge d-block text-inverse bg-secondary rounded-0 pt-5px w-70px" style="min-height:18px">PENDING</span></td></tr><tr><td><span class="text-decoration-none text-inverse-transparent-3">9999</span></td><td><span class="d-flex align-items-center"><i class="bi bi-circle-fill fs-6px text-danger me-2"></i>Withdrawal</span></td><td><span class="text-decoration-none text-inverse-transparent-3">- MYR 999</span></td><td><small>just now</small></td><td><span class="badge d-block text-inverse bg-danger rounded-0 pt-5px w-70px" style="min-height:18px">FAIL</span></td></tr>');
	}

	var isMobile = $(window).width() < 950;

	if(isMobile) {
		$('#hero-slider').owlCarousel({
		    loop:true,
		    margin:20,
		    stagePadding: 0,
		    slideTransition: 'cubic-bezier(0,0,.5,1)',
		    nav:true,
		    items: 1,
		    smartSpeed: 500,
		    autoplay: true,
		    autoplayHoverPause: true,
		    checkVisible: false,
		    navText: ['<span class="icon-keyboard_arrow_left"> <i class="fas fa-chevron-left"/>', '<span class="icon-keyboard_arrow_right"> <i class="fas fa-chevron-right"/>']
		})
	} else {
		$('#hero-slider').owlCarousel({
		    loop:true,
		    margin:20,
		    stagePadding: 70,
		    slideTransition: 'cubic-bezier(0,0,.5,1)',
		    nav:true,
		    items: 1,
		    smartSpeed: 500,
		    autoplay: true,
		    autoplayHoverPause: true,
		    checkVisible: false,
		    navText: ['<span class="icon-keyboard_arrow_left"> <i class="fas fa-chevron-left"/>', '<span class="icon-keyboard_arrow_right"> <i class="fas fa-chevron-right"/>']
		})
	}

	//dashboard time
	function update() {
	    var dt = new Date();
	    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	    var formattedDate = (("0" + dt.getDate()).slice(-2)) + " " + monthNames[dt.getMonth()] + " " + dt.getFullYear();
	    
	    var hours = dt.getHours();
	    var meridiem = hours >= 12 ? "PM" : "AM";
	    hours = hours % 12;
	    hours = hours ? hours : 12;
	    
	    var formattedTime = (("0" + hours).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) + ":" + (("0" + dt.getSeconds()).slice(-2)) + " " + meridiem;
	    
	    $('.datetime').html(formattedDate + '<h6 class="text-inverse text-truncate text-opacity-50">' + formattedTime + '</h6>');
	}

});