function mousewheel(dom,callBack){
    var type = 'mousewheel';   //在谷歌浏览器中事件名
    if(dom.onmousewheel===undefined){   //火狐浏览器中的事件名
        type = 'DOMMouseScroll'
    }

    if(dom.addEventListener){//如果是谷歌和火狐
        dom.addEventListener(type,callBack)
    }else{    //如果是IE低版本
        dom.attachEvent('on'+type,function(){
            callBack.call(dom)
        })
    }

}