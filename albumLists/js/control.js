(function(){
	// 内容栏首，导航栏项目处理鼠标移入移出的背景变化
	var items = document.querySelectorAll('.level-item p.subtitle');
	for(var i=1;i<items.length;i++){
		items[i].addEventListener('mouseenter',function(event){
			this.style.background = '#FFC237';
		});
		items[i].addEventListener('mouseleave',function(event){
			this.style.background = '';
		});
	}
	
	//页头的导航左边部分处理鼠标移入移出的变化
	var navitems = document.querySelectorAll('.level-item.level-left');
	if(navitems){
		for(var i=1;i<navitems.length;i++){
			var aitem = navitems[i].querySelector('a.m-header-menu');
			if(aitem){
				aitem.addEventListener('mouseenter',function(event){
					if(!this.classList.contains('m-menu-control')){
						this.classList.add('m-menu-control');
					}
				});
				aitem.addEventListener('mouseleave',function(event){
					if(this.classList.contains('m-menu-control')){
						this.classList.remove('m-menu-control');
					}
				});
			}
		}
	}
	
	//处理鼠标移入二维码覆盖图片效果，以及移出后恢复原样。
	var codecolumns = document.querySelectorAll('.column');
	if(codecolumns){
		for(var i=0;i<codecolumns.length;i++){
			codecolumns[i].addEventListener('mouseenter',function(){
				var codeimage = this.querySelector('.m-modal-background.is-hidden');
				if(codeimage.classList.contains('is-hidden')) {
					codeimage.classList.remove('is-hidden');
				}
			});
			codecolumns[i].addEventListener('mouseleave',function(){
				var codeimage = this.querySelector('.m-modal-background');
				if(!codeimage.classList.contains('is-hidden')) {
					codeimage.classList.add('is-hidden');
				}
			});
		}
	}
	
	// 分页显示鼠标移入移出处理
	var pages = document.querySelectorAll('.pagination .pagination-link');
	if(pages){
		for(var i=0;i<pages.length;i++){
			pages[i].addEventListener('mouseenter',function(){
				this.classList.add('is-current');
			});
			pages[i].addEventListener('mouseleave',function(){
				this.classList.remove('is-current');
			});
		}
	}
	
	//预约点击菜单
	var reservation = document.querySelector('.m-reservation');
	if(reservation) {
		var modal = document.querySelector('.modal');
		if(!modal.classList.contains('is-active') && modal) {
			reservation.addEventListener('click',function(){
				modal.classList.add('is-active');
			});
		}
		var deletebutton = modal.querySelector('.modal-card-head .delete');
		if(deletebutton){
			deletebutton.addEventListener('click',function(){
				modal.classList.remove('is-active');
			});
		}
	}
	
	// 预约菜单类型选择下拉菜单
	var inputtype = document.querySelector('.m-input-type');
	if(inputtype){
		var dropmenu = document.querySelector('.dropdown-menu');
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
})()
