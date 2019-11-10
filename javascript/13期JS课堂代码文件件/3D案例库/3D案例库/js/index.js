var project = {
    num:125,//存储li的个数
    lastyDeg:0, //设置初始的旋转角度
    lastxDeg:0,
    lastX:0,    //设置上一次鼠标移动的初始水平位置
    lastY:0,
    moveZ:0,    //z轴的位移
    squareInfo:{    //矩阵场景的参数
        x:200,
        y:200,
        z:300
    },
    helixInfo:{  //螺旋体场景的参数
        n:3,
        moveZ:800,
        y:20
    },
    tableInfo:{   //元素周期表场景的参数
        x:150,
        y:200,
    },
    circleInfo:{  //球形场景的参数
        r:800
    },
    isMoved:false,//记录鼠标有没有move
    $(select){  //封装获取元素的函数
        return document.querySelector(select)
    },
    init(){
        //创建num个li
        this.createItems()
        this.setItems()
        //设置li的初始位置
        // this.setItems(180,180,300)
        //拖动ul
        this.ul.addEventListener('mousedown',this.handleMousedown.bind(this))
        document.addEventListener('mousewheel',this.handleMousewheel.bind(this))
        //点击square  切换到矩阵场景
        // this.$('#square').addEventListener('click',this.square.bind(this))
        // //点击helix   切换到螺旋体场景
        // this.$('#helix').addEventListener('click',this.helix.bind(this))
        // //点击random  切换到随机场景
        // this.$('#random').addEventListener('click',this.random.bind(this))
        // //点击table   切换到元素周期表场景
        // this.$('#table').addEventListener('click',this.table.bind(this))
        // //点击cirlce  切换到球形场景
        // this.$('#circle').addEventListener('click',this.circle.bind(this))

        this.$('.list').addEventListener('click',this.handleClick.bind(this))
    },
    handleClick(e){
        var id = e.target.id
        // switch(id){
        //     case 'square':
        //         this.square();
        //         break;
        //     case 'random':
        //         this.random();
        //         break;
        //     case 'helix':
        //         this.helix();
        //         break;
        //     case 'table':
        //         this.table();
        //         break;
        //     case 'circle':
        //         this.circle();
        //         break;
        // }
        if(id)this[id]();



    },
    circle(){
        /*
        *       arr要保证的是
         *      1.所有的数组成员之和是125
        *       2.数组成员要满足
        *           从1递增 到最大值（自定义）
        *           最大值递减到1
        *
        *
        *       怎么拼成球形
        *           1.每一层的li沿着y轴拼成一个圆圈360deg
        *           2.  第一层的li 绕着x轴旋转90deg
        *               第二层的li 绕着x轴旋转90+180*1/12deg
        *               第三层的li 绕着x轴旋转90+180*2/12deg
        *               第四层的li 绕着x轴旋转90+180*3/12deg
        *               第五层的li 绕着x轴旋转90+180*4/12deg
        *               第六层的li 绕着x轴旋转90+180*5/12deg
        *               第七层的li 绕着x轴旋转90+180*6/12deg
        *               第八层的li 绕着x轴旋转90+180*7/12deg
        *               第九层的li 绕着x轴旋转90+180*8/12deg
        *               第十层的li 绕着x轴旋转90+180*9/12deg
        *               第十一层的li 绕着x轴旋转90+180*10/12deg
        *               第十二层的li 绕着x轴旋转90+180*11/12deg
        *               第十三层的li 绕着x轴旋转90++180*12/12deg
        *
        *
        * */
        var arr = [1, 3, 7, 9, 11, 14, 21, 20, 12, 10, 9, 7, 1];// 每一层有多少个li
        var n = 0;
        var length = arr.length
        const {r} = this.circleInfo;
        for(var i=0;i<length;i++){  //循环length次
            var num = arr[i];   //存储每一层li的个数
            for(var j=0;j<num;j++){  //循环每一层li的个数
                var yDeg = 360*j/num;   //计算每一层li的y轴旋转角度
                var xDeg = 90+180*i/(length-1)
                var str =  `rotateY(${yDeg}deg) rotateX(${xDeg}deg) translateZ(${r}px)`
                this.aLi[n++].style.transform = str;
            }
        }
    },
    table(){
        var arr = [
            { x: -8, y: -3 },  //第一个li的位置信息
            { x: 9, y: -3 },
            { x: -8, y: -2 },
            { x: -7, y: -2 },
            { x: 4, y: -2 },
            { x: 5, y: -2 },
            { x: 6, y: -2 },
            { x: 7, y: -2 },
            { x: 8, y: -2 },
            { x: 9, y: -2 },
            { x: -8, y: -1 },
            { x: -7, y: -1 },
            { x: 4, y: -1 },
            { x: 5, y: -1 },
            { x: 6, y: -1 },
            { x: 7, y: -1 },
            { x: 8, y: -1 },
            { x: 9, y: -1 },
        ]

        for(var i=0;i<18*6;i++){
            arr.push({
                x:i%18-8,
                y:parseInt(i/18)
            })
        }

        var {x,y} = this.tableInfo;
        for(var j=0;j<this.num;j++){
            var str = `translate3d(${arr[j].x*x}px,${arr[j].y*y}px,0)`;
            this.aLi[j].style.transform = str
        }
    },
    random(){
        var arr = [];
        for(var i=0;i<this.num;i++) arr.push(i)

        arr.sort((a,b)=>Math.random()-0.5)

        console.log(arr);
        for(var j=0;j<this.num;j++){
           var styleObj = getComputedStyle(this.aLi[j]).transform;
            this.aLi[ arr[j] ].style.transform = styleObj
        }
    },
    helix(){
        var {n,moveZ,y} = this.helixInfo
        for(var i=0;i<this.num;i++){
            var yDeg = 360*n*i/this.num;
            var moveY = parseInt(this.num/2)-i;//0 在螺旋体的最上面  中间的在螺旋体的中间 124 在螺旋体的最下面

            this.aLi[i].style.transform = `rotateY(${yDeg}deg) translateZ(${moveZ}px) translateY(${moveY*y}px)`
        }
    },
    handleMousewheel(e){
        var wheelDelta = e.wheelDelta;//记录滚轮的方向
        if(wheelDelta>0){   //向上滚动   让box 沿着z轴负方向运动
            this.moveZ -= 100;
            this.moveZ = this.moveZ<-5000?-5000:this.moveZ
        }else{
            this.moveZ += 100;
            this.moveZ = this.moveZ>1000?1000:this.moveZ
        }
        this.$('#box').style.transform = `translateZ(${this.moveZ}px)`
    },
    handleMousedown(e){
        this.isMoved = false;

        clearInterval(this.timer)
        //记录鼠标按下的初始位置
        this.startX = e.clientX;
        this.startY = e.clientY;

        this.handleMousemove = this.handleMousemove.bind(this)
        this.handleMouseup = this.handleMouseup.bind(this)
        document.addEventListener('mousemove',this.handleMousemove)
        document.addEventListener('mouseup',this.handleMouseup)
    },
    handleMousemove(e){
        var bool = e.clientX!==this.startX
        if(!bool)return;
        this.isMoved = true;
        this.yDeg = (e.clientX-this.startX)*0.15+this.lastyDeg;
        this.xDeg = (e.clientY-this.startY)*0.15+this.lastxDeg;
        var str = `rotateY(${this.yDeg}deg) rotateX(${-this.xDeg}deg)`
        this.ul.style.transform = str;

        // var x = e.clientX;  //这一次鼠标的水平位置
        // var y = e.clientY;  //这一次鼠标的竖直位置

        this.moveX = (e.clientX - this.lastX)*0.1;  //相邻两次鼠标移动的水平差值
        this.moveY = (e.clientY - this.lastY)*0.1;  //相邻两次鼠标移动的竖直差值
        this.lastX = e.clientX;  //上一次鼠标的水平位置
        this.lastY = e.clientY;  //上一次鼠标的竖直位置
    },
    handleMouseup(){
        //鼠标抬起时记录 ul的旋转角度
        this.lastxDeg = this.xDeg||0
        this.lastyDeg = this.yDeg||0

        this.timer = setInterval(this.buffer.bind(this),20)

        document.removeEventListener('mousemove',this.handleMousemove)
        document.removeEventListener('mouseup',this.handleMouseup)
    },
    buffer(){
        if(!this.isMoved)return
        this.moveX *= 0.9
        this.moveY *= 0.9;
        this.lastxDeg += this.moveX;    //鼠标抬起时的旋转角度 不断累加 moveX（不断衰减的）
        this.lastyDeg += this.moveY;
        var str = `rotateY(${this.lastyDeg}deg) rotateX(${-this.lastxDeg}deg)`
        this.ul.style.transform = str;

        if(Math.abs(this.moveX)<=0.05&&Math.abs(this.moveY)<=0.05){
            clearInterval(this.timer)
        }

    },
    createItems(){
        this.ul = document.createElement('ul')
        for(var i=0;i<this.num;i++){
            var li = document.createElement('li')
            li.innerText = i
            this.ul.appendChild(li)
        }
        this.$('#box').appendChild(this.ul)

        this.aLi = this.ul.children;
    },
    square(){
        for(var i=0;i<this.num;i++){
            /*
                i  x    li的索引和参考物水平方向的关系
            *   0  -2
            *   1  -1
            *   2  0
            *   3  1
            *   4  2
            *
            *   5  -2
            *   6  -1
            *   7  0
            *   8  1
            *   9  2
            *
            *
            *
            *   i    y   li的索引和参考物竖直方向的关系
            *   0-4  -2
            *   5-9  -1
            *   10-14 0
            *   15-19 1
            *   20-24 2
            *
            *
            *   25  -2
            *
            *
            *   i       z      li的索引和参考物垂直方向的关系
            *   0-24    -2
            *   25-49   -1
            *   50-74    0
            *   75-99    1
            *   100-124  2
            *
            * */
            var disX = i%5-2;
            var disY = parseInt(i%25/5)-2;
            var disZ = parseInt(i/25)-2

            var {x,y,z} = this.squareInfo;
            //var str = `translateX(${x*disX}px) translateY(${y*disY}px) translateZ(${z*disZ}px)`
            var str = `translate3D(${x*disX}px,${y*disY}px,${z*disZ}px)`

            this.ul.children[i].style.transform = str;


        }
    },
    setItems(){
        for(var i=0;i<this.num;i++){
            var x = Math.random()*4000-2000;//[-2000,2000]
            var y = Math.random()*4000-2000;
            var z = Math.random()*4000-2000;
            var str = `translate3D(${x}px,${y}px,${z}px)`
            this.aLi[i].style.transform = str;
        }

        //开场后排成矩阵
        // setTimeout(this.square.bind(this),1000)
        setTimeout(()=>{
            this.square()
        },1000)
    }
}

project.init()

