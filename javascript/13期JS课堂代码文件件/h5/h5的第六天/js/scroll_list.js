(function($){
    $.fn.scrollList = function(options){
        //设置默认值
        options = options?options:{};
        var limit = options.limit?options.limit:3;
        var speed = options.speed?options.speed:2000;
        var type = options.type?options.type:0;
        var item = this.children().first();
        var itemHeight = item.outerHeight()+
            parseFloat(item.css('margin-bottom'))

        this.css({
            height:itemHeight*limit
        })

        switch(type){
            case 0:
                setInterval(function(){
                    this.children().last().hide().prependTo(this).slideDown(1000)
                }.bind(this),speed)
                break;
            case 1:
                this.children().slice(limit).hide();
                setInterval(function(){
                    this.children().eq(limit-1).fadeOut(600,function(){
                        console.log(this);
                        this.children().last().prependTo(this).slideDown(1000)
                    }.bind(this))
                }.bind(this),speed)
        };
    };
})(jQuery);