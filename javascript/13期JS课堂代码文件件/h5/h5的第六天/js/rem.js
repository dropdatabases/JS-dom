(function(){//避免污染全局变量 不和外界任何变量有冲突
    charge();
    //当切换到不同的设备时触 触发resize的charge回调函数
    window.addEventListener('resize',charge,false);
    function charge(){
        //获取html标签
        var html = document.querySelector('html');
        
        //获取手机设备的宽度值
        //通过window.screen.width获取设备屏幕当前的宽度
        var width = window.screen.width;//screen记录屏幕的宽度

        /*
        html的font-size值 = 1rem

        1rem=37.5px 10rem=375px 375px和当前设备屏幕等宽 
        */
        //设置html元素的 font-size值
        // 10rem/750 = x/设计图的尺寸
        html.style.fontSize = width/10 + 'px';
    };
})();