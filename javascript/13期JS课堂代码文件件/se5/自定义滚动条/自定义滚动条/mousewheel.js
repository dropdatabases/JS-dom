  // 这个函数可以兼容 谷歌 火狐 IE 浏览器的鼠标滚轮事件
        function mousewheel(dom,callBack){//callBack回调函数传进来一把就用这个形参名
            var type = 'mousewheel';//在谷歌浏览器应当绑定的事件名字

            // 在谷歌中你能在加DOM0级事件和DOM2级事件
            // 在火狐中你只能添加DOM2级事件

            // 在谷歌中oBox.mousewheel（在还没有赋事件的时候）他是null 空对象（事件也是对象）

            // 在火狐中oBox.mousewheel(在还没有赋事件的时候)他是undefined 未定义的值

            if (dom.onmousewheel===undefined) {
                /*
                  null===null-->true

                  undefined===undefined-->true 火狐浏览器走进来

                  undefined===null-->false

                  null==undefined-->true那么谷歌浏览器也能走进来
                */
                type = 'DOMMouseScroll';//火狐浏览器中的事件名
            };

            if (dom.addEventListener) {//如果是谷歌和火狐
                dom.addEventListener(type,callBack);//type可以区分你是谷歌函数火狐
            }else {//如果是IE的低版本
                dom.attachEvent('on'+type,function(){
                    callBack.call(dom);
                    //解决方法添加一个匿名的事件处理函数，然后里面执行你要执行的函数然后在通过call修改内部的this执行
                });//在IE低版本浏览器添加对应的事件名字是要加上on的 
                //IE低版本的内部事件处理函数this执行window
            }
        };