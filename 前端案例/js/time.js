//获取元素
var title = document.querySelector('.timetitle');
var oSpan = document.querySelector('.timetitle span');
//设置秒杀时间 和 毫秒数
var target = new Date('2023');
var targetTime = target.getTime();

//开启定时器 倒计时效果
var setTime = setInterval(fn, 1000);

function fn() {
    //获取现在时间 和 毫秒数
    var date = new Date();
    var dateTime = date.getTime();
    //获取时间差
    var time = targetTime - dateTime;

    //一旦现在的时间 大于等于 自己设置的时间那么就是true执行if
    if (date >= target) {
        title.innerText = '';
        clearInterval(setTime);
        alert("毕业了，自己想一想学到了什么技术");
    };

    var timeNum = timeNumber(time);
    //把 0--->01形式的字符串
    var toTwo = num => (num < 10 ? '0' : '') + num;
    //存储以天时分秒形式的字符串
    var text = `${toTwo(timeNum.t)}天,${toTwo(timeNum.s)}时,${toTwo(timeNum.f)}分,${toTwo(timeNum.m)}秒`;
    oSpan.innerHTML = text;
};

//把毫秒数转换成 天 时 分 秒的形式
function timeNumber(num) {
    var t = Math.floor(num / (24 * 60 * 60 * 1000)); //天
    var ts = num % (24 * 60 * 60 * 1000); // 总毫秒数除了天的剩余时间
    var s = Math.floor(ts / (60 * 60 * 1000)); //小时
    var ss = num % (60 * 60 * 1000); //总毫秒数除了小时的时间
    var f = Math.floor(ss / (60 * 1000)); //分钟
    var fs = num % (60 * 1000); //总毫秒数除了分钟的时间
    var m = Math.floor(fs / 1000); //秒
    return {
        t,
        s,
        f,
        m,
    };
};