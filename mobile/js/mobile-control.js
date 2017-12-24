(function(){
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

// 回到顶部按键，在scrollTop>0时候，显示，按下则回到top
	var last_known_scroll_position = 0;
	var toTop = document.querySelector('.m-backTop');
	function scrollDisplay(scroll_pos) {
		if(scroll_pos > 100) {
			toTop.classList.remove('is-hidden');
		}else{
			toTop.classList.add('is-hidden');
		}
	}
	
	window.addEventListener('scroll', function(e){
	    last_known_scroll_position = window.scrollY;
	    window.requestAnimationFrame(function(){
	    	scrollDisplay(last_known_scroll_position);
	    });
	   
	});
	toTop.addEventListener('click',function(){
		document.body.scrollTop = document.documentElement.scrollTop = 0; 
	});
	
//input 搜索去掉placeholder
	var sousuo = document.querySelector('.m-sousuo-input');
	if(sousuo){
		var placeholder = sousuo.getAttribute('placeholder');
		sousuo.addEventListener('focus',function(){
			this.setAttribute('placeholder','');
		});
		sousuo.addEventListener('blur',function(){
			this.setAttribute('placeholder',placeholder);
		});
	}
	
//相册列表激活动作
	var itemlists = document.querySelectorAll('.m-level .m-level-item');
	var all =['liveAlbums.html','liveAlbums-activity.html','liveAlbums-forum.html','liveAlbums-sport.html','liveAlbums-team.html',
	'liveAlbums-celebration.html','liveAlbums-show.html','liveAlbums-wedding.html','liveAlbums-other.html'];
	var addr = location.href;
	for(var m=0;m<itemlists.length;m++){
		itemlists[m].classList.remove('m-itemactive-bg');
	}
	for(var i=0;i<all.length;i++){
		if(addr.indexOf(all[i]) !== -1){
			itemlists[i].classList.add('m-itemactive-bg');
		}
	}
	
// 点击a标签后背景变化蓝色的处理   --目前没有找到办法处理
   
// 预约菜单类型选择下拉菜单
	var inputtype = document.querySelector('.m-input-type');
	if(inputtype){
		var dropmenu = document.querySelector('.m-dropdown-menu');
		inputtype.addEventListener('click',function(){
			var displayvalue = getComputedStyle(dropmenu,null).getPropertyValue('display');
			if(displayvalue === 'none'){
				dropmenu.style.display = 'block';
			}
			if(displayvalue === 'block'){
				dropmenu.style.display = 'none';
			}
		});
	}	
   

})();