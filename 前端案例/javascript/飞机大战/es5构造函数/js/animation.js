 function animation(dom, target, time,callBack) {
             let initial = {};//存放初始值
             let speed = {};//存储速度值
             for(let arr in target){
                 initial[arr] = parseFloat(getStyle(dom,arr));
                 speed[arr] = (target[arr] - initial[arr]) / (time*1000);
             }
             let now = new Date();
             let timer = setInterval(function(){
                 let date = new Date();
                 let _t = date - now;//获取时间差
                 
                 //让oBox元素运动
                 for(let arr in target){
                     if(arr==='opacity'){
                         dom.style[arr] = initial[arr] + speed[arr] * _t; //初始值+速度值 * 时间差 = 元素运动时的变化量
                     }else{
                         dom.style[arr] = initial[arr] + speed[arr] * _t + 'px';
                     }
                 }

                 //关闭计时器
                 if(_t/1000>=time){
                     clearInterval(timer);
                     //强制归位到初始值
                     for(var arr in target){
                         if(arr==='opacity'){
                             dom.style[arr] = target[arr];
                         }else{
                             dom.style[arr] = target[arr] + 'px';
                         }
                     }
                     callBack&&callBack.call(dom,initial, time)
                 }
             },10)
             //获取元素的初始值
             function getStyle(dom,arr){
                 if(dom.currentStyle){
                     return dom.currentStyle[arr];
                 }else{
                     return window.getComputedStyle(dom,null)[arr];
                 }
             }
        }