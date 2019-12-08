### 脚手架：

```js
//  第一部安装所谓的集成环境（脚手架）
	cnpm i create-react-app -g      // 全局小写 全局安装脚手架（-global）
	npx create-react-app myapp    //  创建一个项目文件	

    
 //  如果要安装 cnpm run eject   必须走三步：  git init ，  git add .  git commit -m "init"，然后 cnpm run eject  ，cnpm install babel-plugin-transform-decorators-legacy --save-dev，          package.json中babel上加入"plugins": [ ["@babel/plugin-proposal-decorators", { "legacy": true }]]
    
    
    
//  启动项目
    	cnpm start   //  启动项目
        cnpm run build   //  项目上线打包用
        //  打包以后可以在index.html文件中 使用live-server代码运行
        cnpm i live-server -g    //服务器下运行
			//  如果文件名为index.html   则直接在文件夹中使用live-server代码运行


cnpm run build   //  项目上线打包用      打包在cmd里面打包
打包后  将package.json  和  build  放入上线当中     再写一个app.js  来运行项目

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(80)



        
//需要先cd到对应的文件夹里面；
//默认的端口为3000端口，如果3000端口被占用，端口会依次加1;

//如果拿到别人的react代码，需要在自己电脑上面运行，需要安装模块
      //cnpm i 
      //如果后期报错，说少了什么模块的情况需要对应地去进行安装
      //如果要运行别人的项目，最好拿到开发环境 -D
        
        
// public 静态的资源比如说：html ，css , js
//src( resource )资源  ：包括  components(组件),img,js,css,README:说明介绍  
```

### 官方推荐用yarn包管理器：

```js
npm i yarn -g       //安装yarn
yarn add jquery  相当于 cnpm i jquery   //  下载jquery包
yarn start     相当于 cnpm start   // 启动项目
yarn     相当于 cnpm i      //  安装环境依赖
```

### 路由：

```js
cnpm i react-router-dom -S    // 安装路由标签
cnpm i url -S    //  get获取路由
cnpm i antd -S   //安装蚂蚁设计
cnpm i react-amap -S   //  安装高德地图
cnpm i react-bmap -S   //  安装百度地图
```

