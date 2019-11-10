//此函数的作用是让一个元素运动到指定位置和时间
function animation(dom,target,time,callBack){
		/*
		dom表示需要运动的元素
		target表示元素运动到的终点位置
		time表示元素运动的所需时间
		callBack表示回调函数
		*/
		let initial = {};//存储初始元素值
		let speed = {};//存储元素运动的速度

		for(arr in target){
			initial[arr] = parseFloat(getStyle(dom,arr));//获取初始值
			speed[arr] = (target[arr] - initial[arr]) / (time*1000);//获取元素运动的速度值
		}

		let now = new Date();//获取当前时间

		let timer = setInterval(()=>{
		let date = new Date();//获取现在时间
		let _t = date - now;//获取时间差

		//遍历target让元素运动
		for(arr in target){
			if (arr==='opacity') {//opacity属性
				dom.style[arr] = initial[arr] + speed[arr] * _t;
			}else {//其他属性
				dom.style[arr] = initial[arr] + speed[arr] * _t + 'px';
			}
		}

		//如果时间差大于等于规定的时间的话那么清楚定时器，并且矫正元素的位置
		if (_t/1000>=time) {
			clearInterval(timer)//清楚定时器

			for(arr in target){//矫正元素的位置
				if (arr==='opacity') {
					dom.style[arr] = target[arr]
				}else {
					dom.style[arr] = target[arr] + 'px';
				}
			}

			callBack&&callBack.call(dom,initial,time);//把this执行修改从dom所需运动的元素
			//同时满足才能走以上代码
		}
		},20)

		//此函数的作用是获取需要运动元素的初始值
		function getStyle(dom,arr){
		if (dom.currentStyle) {//IE8一下第版本
			return dom.currentStyle[arr];
		}else {//谷歌高版本
			return window.getComputedStyle(dom,null)[arr];
		}
		}

}