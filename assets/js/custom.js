(function ($) {

	$(document).ready(function () {
		$('body').addClass('js');
		var $menu = $('#menu'),
			$menulink = $('.menu-link');

		$menulink.click(function () {
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
			return false;
		});
	});


	videoPopup();


	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			550: {
				items: 2
			},
			750: {
				items: 3
			},
			1000: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	})


	$(".Modern-Slider").slick({
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		pauseOnDotsHover: true,
		cssEase: 'fade',
		// fade:true,
		draggable: false,
		prevArrow: '<button class="PrevArrow"></button>',
		nextArrow: '<button class="NextArrow"></button>',
	});


	$("div.features-post").hover(
		function () {
			$(this).find("div.content-hide").slideToggle("medium");
		},
		function () {
			$(this).find("div.content-hide").slideToggle("medium");
		}
	);


	$("#tabs").tabs();


	(function init() {
		function getTimeRemaining(endtime) {
			var t = Date.parse(endtime) - Date.parse(new Date());
			var seconds = Math.floor((t / 1000) % 60);
			var minutes = Math.floor((t / 1000 / 60) % 60);
			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
			var days = Math.floor(t / (1000 * 60 * 60 * 24));
			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}

		function initializeClock(endtime) {
			var timeinterval = setInterval(function () {
				var t = getTimeRemaining(endtime);
				document.querySelector(".days > .value").innerText = t.days;
				document.querySelector(".hours > .value").innerText = t.hours;
				document.querySelector(".minutes > .value").innerText = t.minutes;
				document.querySelector(".seconds > .value").innerText = t.seconds;
				if (t.total <= 0) {
					clearInterval(timeinterval);
				}
			}, 1000);
		}
		initializeClock(((new Date()).getFullYear() + 1) + "/1/1")
	})()

})(jQuery);

/* Redirecting Function */
//Home Button
document.getElementById('home').addEventListener('click', function () {
	window.location.href = 'index.html';
});
//Patron Button
document.getElementById('patron').addEventListener('click', function () {
	window.location.href = 'patron.html';
});
//Trust Button
document.getElementById('trust').addEventListener('click', function () {
	window.location.href = 'trust.html';
});
//Vision and Mission Button
document.getElementById('v&m').addEventListener('click', function () {
	window.location.href = 'visionandmission.html';
});
//History Button
document.getElementById('history').addEventListener('click', function () {
	window.location.href = 'history.html';
});
//Goverance Button
document.getElementById('goverance').addEventListener('click', function () {
	window.location.href = 'goverance.html';
});
//academicfacility Button
document.getElementById('academicfacility').addEventListener('click', function () {
	window.location.href = 'academicfacility.html';
});
//healthandsafety Button
document.getElementById('healthandsafety').addEventListener('click', function () {
	window.location.href = 'healthandsafety.html';
});
//oncampus Button
document.getElementById('oncampus').addEventListener('click', function () {
	window.location.href = 'oncampus.html';
});

//sports Button
document.getElementById('sports').addEventListener('click', function () {
	window.location.href = 'sports.html';
});
//transportation Button
document.getElementById('transportation').addEventListener('click', function () {
	window.location.href = 'transportation.html';
});
//commerce Button
document.getElementById('commerce').addEventListener('click', function () {
	window.location.href = 'commerce.html';
});
//computerapplications Button
document.getElementById('computerapplications').addEventListener('click', function () {
	window.location.href = 'computerapplications.html';
});
//management Button
document.getElementById('management').addEventListener('click', function () {
	window.location.href = 'management.html';
});
//training Button
document.getElementById('training').addEventListener('click', function () {
	window.location.href = 'training.html';
});
//placements Button
document.getElementById('placements').addEventListener('click', function () {
	window.location.href = 'placements.html';
});
//recruiting Button
document.getElementById('recruiting').addEventListener('click', function () {
	window.location.href = 'recruiting.html';
});
//brochures Button
document.getElementById('brochures').addEventListener('click', function () {
	window.location.href = 'brochures.html';
});
//library Button
document.getElementById('library').addEventListener('click', function () {
	window.location.href = 'library.html';
});
//committees Button
document.getElementById('committees').addEventListener('click', function () {
	window.location.href = 'committees.html';
});
//iqac Button
document.getElementById('iqac').addEventListener('click', function () {
	window.location.href = 'iqac.html';
});
//newsletters Button
document.getElementById('newsletters').addEventListener('click', function () {
	window.location.href = 'newsletters.html';
});
//NAAC Button
document.getElementById('naac').addEventListener('click', function () {
	window.location.href = 'naac.html';
});