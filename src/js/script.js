const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close')

hamburger.addEventListener('click', () => {
	menu.classList.add('active')
})

closeElem.addEventListener('click', () => {
	menu.classList.remove('active')
})

const counters = document.querySelectorAll('.skills__percentages'),
	strip = document.querySelectorAll('.skills__strip span')

counters.forEach((item, i) => {
	strip[i].style.width = item.innerHTML
})

$(document).ready(function () {
	// Smooth scroll and pageup

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn()
		} else {
			$('.pageup').fadeOut()
		}
	})
	$('a[href=#up]').click(function () {
		const _href = $(this).attr('href')
		$('html, body').animate({ scrollTop: $(_href).offset().top + 'px' })
		return false
	})
	new WOW().init()
})
