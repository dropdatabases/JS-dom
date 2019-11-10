(function(){
    change();
    window.addEventListener('resize',change,false);
    function change(){
        var fixedWidth = 750;//设计图的尺寸
        var width = window.screen.width;//获取设备的宽度
        var scale = width/fixedWidth;//计算视口的缩放比例
        /* 
         1.视口的宽度和设计图等宽
         2.让视口缩放一等比例k k = 设备的宽度/设计图的宽度
        */
        //动态的创建一个meta标签
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = `width=${fixedWidth},user-scalable=no,initial-scale=${scale}`;
        //添加meta标签
        document.head.appendChild(meta);
    }
})();