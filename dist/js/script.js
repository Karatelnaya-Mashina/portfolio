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
