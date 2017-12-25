(function(){
// swiper 3.4.1 初始化：
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		autoplay: 1,
		speed: 1500,
		paginationClickable: true,
		pagination: '.swiper-pagination',
		paginationType: 'custom',
		paginationCustomRender: function (swiper, current, total) {
            var _html = '';
            for (var i = 1; i <= total; i++) {
              if (current == i) {
                _html += '<span class="pagination-item pagination-item-active"></span>';
              }else{
                _html += '<span class="pagination-item"></span>';
              }
            }
            return _html;//返回所有的页码html
        }
	});
	
})();
