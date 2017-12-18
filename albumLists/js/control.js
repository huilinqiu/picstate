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
				var codeimage = this.querySelector('.modal-background.is-hidden');
				if(codeimage.classList.contains('is-hidden')) {
					codeimage.classList.remove('is-hidden');
				}
			});
			codecolumns[i].addEventListener('mouseleave',function(){
				var codeimage = this.querySelector('.modal-background');
				if(!codeimage.classList.contains('is-hidden')) {
					codeimage.classList.add('is-hidden');
				}
			});
		}
	}
})()
