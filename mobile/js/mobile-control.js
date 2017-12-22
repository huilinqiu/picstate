// swiper 3.4.1 初始化：
var mySwiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	autoplay: 1,
	speed: 1500,
	paginationClickable: true,
	pagination: '.swiper-pagination',
	paginationType: 'custom',

});

// 控制分页active变化  
var items = document.querySelectorAll('.pagination-item');
if(items) {
	setInterval(function() {
		var current = 4 - mySwiper.activeIndex;
		for(var i = 0; i < items.length; i++) {
			if(items[i].classList.contains('pagination-item-active')) {
				items[i].classList.remove('pagination-item-active');
			}
		}
		items[current].classList.add('pagination-item-active');
	}, 1500);
}

//head 按键处理
var rightkey = document.querySelector('.m-menu-right');
if(rightkey) {
	rightkey.addEventListener('click', function() {
		var dropmenu = document.querySelector('.dropdown-menu');
		if(dropmenu) {
			var display = getComputedStyle(dropmenu, null).getPropertyValue('display');
			if(display === 'none') {
				dropmenu.style.display = 'block';
			} else {
				dropmenu.style.display = 'none';
			}
		}
	});
}