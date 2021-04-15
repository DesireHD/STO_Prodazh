//
new Swiper('.slider',{
	spaceBetween:50,
	effect: 'coverFlow',
	cowerflowEffect: {
		rotate: 20,
		slideShadows: 50,
	},
	loop:true,
	autoplay: {
		delay: 1000,
		disableOnInteraction: false
	}
});

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}