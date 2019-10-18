//类
class Game{
    constructor(str){//构造函数(存储一些特性)
    	this.content = document.getElementById(str);//获取div元素
        
        //获取盒子的宽度和高度值
    	this.contentWidth = this.content.clientWidth;
    	this.contentHeight = this.content.clientHeight;

    	//获取盒子距离定位父级的水平距离和数组距离
    	this.contentLeft = this.content.offsetLeft;
    	this.contentTop = this.content.offsetTop;

    	this.option = ['简单','中等','困难','噩梦'];//设置游戏选项
    	this.init();//初始化游戏界面
    }

    //原始模型(存储一些共性)
    init(){
    	//设置飞机大战标题
    	this.title = document.createElement('h2');
    	this.content.appendChild(this.title);
    	this.title.innerText = '飞机大战';
    	this.title.className = 'title';

    	//设置点击游戏选项
    	this.oUl = document.createElement('ul');

    	//遍历数组获取数组中的每一项设置li选项
    	for(let i=0;i<this.option.length;i++){
    		this.oLi = document.createElement('li');
    		this.oLi.innerText = this.option[i];
    		this.oUl.appendChild(this.oLi);
    	}

    	this.content.appendChild(this.oUl);

    	this.getIMG(1);//设置初始界面背景图

    	//开始游戏
    	this.oUl.addEventListener('click',this.openerClick.bind(this),false)
    }
    //设置游戏开始背景图
    getIMG(i){
    	this.content.style.backgroundImage = 'url(images/bg_'+i+'.jpg)';
    }
    //开始游戏
    openerClick(e){
    	e = e || window.event;

    	this.index = [].indexOf.call(this.oUl.children,e.target);//获取点击位置

    	if (e.target.nodeName==='UL')return;//如果点击的是ul那么直接抛出去让这个函数不执行
    	this.content.innerText = '';//清除初始界面的dom节点游戏开始

    	//设置飞机大战的分数栏
    	this.Minute = document.createElement('div')
    	this.Minute.className = 'Minute';
    	this.content.appendChild(this.Minute);
    	this.grade = 0;//存储飞机大战初始分数
    	this.Minute.innerText = '飞机大战分数：' + this.grade + '分';


    	this.getIMG(this.index+2);//设置游戏开始背景图

    	this.bulletStorage = [];//存储生成的子弹
    	this.enemyStorage = [];//存储生成的敌机

    	this.bulletGenerate = [200,150,100,50];//存储生成子弹的数量
    	this.enemyGenerate = [200,150,100,50];//存储生成敌机的数量

    	this.plane();//生成小飞机
    	this.planeMouse();//小飞机运动

    	this.bulletInterTimer = setInterval(this.bulletInter.bind(this),this.bulletGenerate[this.index]);//生成子弹
    	this.bulletMouseTimer = setInterval(this.bulletMouse.bind(this),30);//子弹运动

    	this.enemyInterTimer = setInterval(this.enemyInter.bind(this),this.enemyGenerate[this.index]);//生成敌机
    	this.enemyMouseTimer = setInterval(this.enemyMouse.bind(this),50);//敌机运动

    	//小飞机运动
    	this.planeMouse = this.planeMouse.bind(this);
    	document.addEventListener('mousemove',this.planeMouse,false)
    }
    //生成小飞机
    plane(){
    	// 生成小飞机
    	this.plane = document.createElement('div');
    	this.content.appendChild(this.plane)
    	this.plane.className = 'plane';
    }
    // 小飞机运动
    planeMouse(e){
    	e = e || window.event;

    	this.nowLeft = e.clientX - this.contentLeft - (this.plane.clientWidth/2);
    	this.nowTop = e.clientY - this.contentTop - (this.plane.clientHeight/2);

    	//边界检测
    	let {max,min} = Math;
    	//左右边界检测
    	this.nowLeft = max(this.nowLeft,0)
    	this.nowLeft = min(this.nowLeft,this.contentWidth-this.plane.clientWidth);
    	//上下边界检测
    	this.nowTop = max(this.nowTop,0)
    	this.nowTop = min(this.nowTop,this.contentHeight-this.plane.clientHeight)

    	this.plane.style.left = this.nowLeft + 'px';
    	this.plane.style.top = this.nowTop + 'px'
    }
    // 生成子弹
    bulletInter(){
    	//创建子弹
    	this.bullet = document.createElement('div');
    	this.bullet.className = 'bullet';
    	this.content.appendChild(this.bullet);

    	//子弹移动
    	this.bullet.style.left = this.plane.offsetLeft + (this.plane.clientWidth - this.bullet.clientWidth)/2+'px';
    	this.bullet.style.top = this.plane.offsetTop - this.bullet.offsetTop - 30 + 'px';

    	this.bulletStorage.push(this.bullet);//push生成的子弹
    }
    // 子弹运动
    bulletMouse(){
    	//遍历数组获取数组中的每一项让子弹运动
    	for(let i=0;i<this.bulletStorage.length;i++){
    		let bulletStoraGe = this.bulletStorage[i];//获取数组中的每一项

    		//子弹运动
    		bulletStoraGe.style.top = bulletStoraGe.offsetTop - 20 + 'px';

    		//如果子弹小于超出上边界那么删除子弹
    		if (bulletStoraGe.offsetTop<=0) {
    			bulletStoraGe.parentNode.removeChild(bulletStoraGe);//删除子弹
    			this.bulletStorage.splice(i,1);//在数组中删除子弹
    			i--;//预防数组坍塌
    		}

    		//获取敌机的每一项让我军和敌机发生碰撞关系
    		for(let j=0;j<this.enemyStorage.length;j++){
    			let enemyStorage = this.enemyStorage[j];//获取敌机的每一项
    			
    			// 敌机和我军方式碰撞关系
    			if (bulletStoraGe.parentNode && this.crash(enemyStorage,this.plane)) {
    				// 生成我军爆炸图
    				this.planeBoom = document.createElement('div');
    				this.planeBoom.className = 'planeBoom';
    				this.content.appendChild(this.planeBoom);

    				// 矫正我军爆炸图的位置
    				this.planeBoom.style.left = enemyStorage.offsetLeft +  'px';
    				this.planeBoom.style.top = enemyStorage.offsetTop + 'px';

    				// 调用animation函数让我军爆炸图opacity值为0，并且删除该节点
    				animation(this.planeBoom,{
    					opacity:0,
    				},1,function(){
    					this.planeBoom.parentNode.removeChild(this.planeBoom);//删除我军爆炸图
    					this.gameFrinish();//飞机大战游戏结束
    				}.bind(this))

    				// 删除子弹
    				bulletStoraGe.parentNode.removeChild(bulletStoraGe);//删除子弹
    				this.bulletStorage.splice(i,1);//从数组中删除敌机
    				i--;//预防数组坍塌

    				//删除敌机
    				enemyStorage.parentNode.removeChild(enemyStorage);//删除敌机
    				this.enemyStorage.splice(j,1);//从数组中删除敌机
    				j--;//预防数组坍塌

    				this.plane.parentNode.removeChild(this.plane);//删除我军
    			}
    		}
    	}
    }
    // 生成敌机
    enemyInter(){
    	// 生成敌机
    	this.enemy = document.createElement('div');
    	this.enemy.className = 'enemy';
    	this.content.appendChild(this.enemy);

    	// 敌机运动
    	this.enemy.style.left = (this.contentWidth - this.enemy.clientWidth)*Math.random() + 'px';
    	this.enemyStorage.push(this.enemy);//push生成完成的敌机
    }
    // 敌机运动
    enemyMouse(){
    	//获取敌机的每一项让敌机运动
    	for(let i=0;i<this.enemyStorage.length;i++){
    		let enemyStoraGe = this.enemyStorage[i]//获取敌机中的每一项
    		
    		// 敌机运动
    		enemyStoraGe.style.top = enemyStoraGe.offsetTop + 20 + 'px';

    		//超出下边界删除敌机
    		if (enemyStoraGe.offsetTop>this.contentHeight) {
    			enemyStoraGe.parentNode.removeChild(enemyStoraGe);//删除敌机
    			this.enemyStorage.splice(i,1);//从数组中删除敌机
    			i--;//预防数组坍塌
    		}

    		//遍历子弹获取子弹中的每一项检测是否碰撞
    		for(let j=0;j<this.bulletStorage.length;j++){
    			let bulletStorage = this.bulletStorage[j];//获取子弹中的每一项
    			
    			//检测两个元素是否碰撞
    			if (this.crash(enemyStoraGe,bulletStorage)) {
    				// 设置击落敌机的分数
    				this.grade += 10;
    				this.Minute.innerText = '飞机大战分数：' + this.grade + '分';

    				// 创建爆炸图
    				this.boom = document.createElement('div');
    				this.boom.className = 'boom';
    				this.content.appendChild(this.boom);

    				//矫正爆炸图的位置
    				this.boom.style.left = enemyStoraGe.offsetLeft + 'px';
    				this.boom.style.top = enemyStoraGe.offsetTop + 'px';

    				//引入animation函数让爆炸图opacity值为0,并且删除该节点
    				animation(this.boom,{
    					opacity :0,
    				},1,function(){
    					this.parentNode.removeChild(this)
    				})

    				//删除敌机
    				enemyStoraGe.parentNode.removeChild(enemyStoraGe);
    				this.enemyStorage.splice(i,1)//从数组中删除敌机
    				i--;//预防数组坍塌

    				//删除子弹
    				bulletStorage.parentNode.removeChild(bulletStorage);
    				this.bulletStorage.splice(j,1);//从数组中删除子弹
    				j--;//预防数组坍塌
    			}
    		}
    	}
    }
    //游戏结束
    gameFrinish(){
    	// 飞机大战游戏结束清除生成敌机和子弹的定时器
    	clearInterval(this.bulletInterTimer);//清除生成子弹的计时器
    	clearInterval(this.enemyInterTimer);//清除生成敌机的计时器

    	setTimeout(this.gameWicket.bind(this),1000);//游戏结束后窗口1秒钟之后弹出
    }
    //飞机大战游戏结束弹出游戏结束弹窗
    gameWicket(){
    	//设置游戏结束后弹窗的窗口
    	this.interFace = document.createElement('div');
    	this.interFace.className = 'interFace';
    	this.content.appendChild(this.interFace);

    	// 游戏结束后弹窗的按钮
    	this.button = document.createElement('button');
    	this.button.innerText = '从新开始'
    	this.interFace.appendChild(this.button);

    	//游戏结束后从新开始游戏
    	this.button.addEventListener('click',this.gameButton.bind(this),false);
    }
    // 游戏结束后从新开始游戏
    gameButton(){
    	this.content.innerText = '';//清除box内部的节点
    	new Game('box');//从新开始游戏
    }
    // 检测两个元素是否碰撞
    crash(dom1,dom2){
    	//dom1是敌机 dom2是我军
    	if (dom1===undefined||dom2===undefined) return;
    	let crash = 
    	    dom1.offsetTop + dom1.clientHeight < dom2.offsetTop ||
    	    dom1.offsetTop > dom2.clientHeight + dom2.offsetTop ||
    	    dom1.offsetLeft + dom1.clientWidth < dom2.offsetLeft ||
    	    dom1.offsetLeft > dom2.clientWidth + dom2.offsetLeft ;
    	return !crash;
    }
}

let game = new Game('box');//实例化产品