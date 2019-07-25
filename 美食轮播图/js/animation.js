function animation(dom,target,tim,callback){

	var move = {};
	var timea = {};

	for(var attr in target){
		move[attr] = parseFloat(getC(dom,attr));
		timea[attr] = (target[attr] - move[attr]) / (tim*1000);
	}

	var date = new Date();

	var time = setInterval(function(){

		var Cdate = new Date();
		var _t = Cdate - date;

		for(var attr in target){
			if (attr==="opacity") {
				dom.style[attr] =  move[attr] + timea[attr] * _t;
			}else {
				dom.style[attr] = move[attr] + timea[attr] * _t +"px";
			  }
		}

		if (_t/1000>=tim) {
			clearInterval(time)

			for(var attr in target){
				if (attr==="opacity") {
					dom.style[attr] =  target[attr];
				}else {
				    dom.style[attr] = target[attr]+"px";
				}
		    }
			     callback&&callback.call(dom,move,tim);
		}
	},16)
			
	function getC(dom,attr){
		if (dom.currentStyle) {
			return dom.currentStyle();
		}else {
			return window.getComputedStyle(dom,null)[attr];
		}
	 }

}