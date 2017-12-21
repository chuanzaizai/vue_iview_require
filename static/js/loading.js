// 定义loading节点
let loading = document.createElement("div");
	loading.className = 'loading-wrapper';
	loading.innerHTML = `<div class="spinner">
    						<div class="double-bounce1"></div>
    						<div class="double-bounce2"></div>
							<div class="spinner-text">努力加载中···</div>
						</div>`; 
let ifLoading = document.getElementsByClassName('loading-wrapper');

// 注册事件
window.$loading = {
	showLoading: function() {
		if(ifLoading.length < 1){
	    	document.body.appendChild(loading);
		}
	},
	hideLoading: function() {
		if(ifLoading.length > 0){
	    	document.body.removeChild(loading); 
		}
	}
} 

