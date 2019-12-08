### 什么是react：

```js
用于构建用户界面的 JavaScript 库 。 UI（layui,jqueryUI,vue->elementUI）需要写布局，css样式，功能样式：js；

组件化：用html  //css js 封装起来的样式 以便于重复使用 
模块化【module】： //就是用单纯的js代码来封装API  提供接口供开发者使用
工程化：实际的开发过程： //结合组件化与模块化的组合；思想是基于面向对象或面向过程；


一次学习，随处编写【高效率开发】：
                    react支持浏览器渲染也支持在服务器上去渲染；
                    reactNative:
                    IOS,android【可以进行跨平台开发】
```

### babel：

```js
babel ： 解析器   //框架的代码想要在浏览器端预览  需要进行转换 ，  转换成浏览器认识的语言

   //先引入 babel.js 代码     cnpm i babel-standalone -s
   <script src="node_modules/babel-standalone/babel.js"></script>
<script>
   const es6 = `
      let{name,vesion } = {
         name : 'react',
         version : '16.8.6'
      }
   `
   const es5 = Babel.transform(es6,{presets:['es2015']})    // Babel.transform(被转换的参数,{presets:['转换成哪个版本']})
   console.log(es6);
   console.log(es5);
   console.log(es5.code);
   //  这种手动转换代码  效率太低  
   //  自动帮我们进行编译成浏览器识别的代码。
</script>


自动进行编译成浏览器识别的代码。：

<script type="text/babel" >
   //  设置  type="text/babel"   就会自动帮我们进行编译成浏览器识别的代码。
   //   在初始阶段 我们通过html文件引入 babel  。reactjs  在浏览器端进行测试
   //   在后期 在开发项目的时候  都是用非常方便的  脚手架工具去构建项目  

   const play = () => {
      console.log("react");
   }

   play()
</script>
```

### react的基本语法：

```js
<body>

   <div id="box"></div>
   <!-- 引入babel.js    react    react-dom   文件        cnpm i react react-dom -s  下载包  -->
<script src="node_modules/babel-standalone/babel.js"></script>
<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>

<script type="text/babel">   //  自动转换为浏览器认识的代码
   //   写react语法   需要babel的解析
   //   react框架  是用来实现  UI  用户界面   只关注ui层
   //   react-dom    用户交互   只处理dom
    
   第三种办法： 
//   这种方式用的最多    根据数据生成结构
//   return 的时候返回一个整体   一定要用()包住
 //  class  是关键词
   function createJSX() {
      return (<h1>
      <span className = "span">你好</span>
      <span>我好</span>
      <span>
         {
            //这里面就写正儿八经的 JS代码 和注释
            //  这是单行注释
            /* 这是多行注释 */
         }   
      </span>
   </h1>)
   }
   const element = createJSX()
   ReactDOM.render(
      element,
      document.querySelector('#box')   //  将<h1>hello world</h1>渲染到 div标签里面去
   )


第一种办法：

   //ReactDOM.render  第一个参数是html父节点不能有多个，所有的框架都是一个父节点
    ReactDOM.render(
      <h1>hello world</h1>,
      document.querySelector('#box')    //  将<h1>hello world</h1>渲染到 div标签里面去
   ) 



第二种办法：
   // 居然在js里面写html代码  这种语法就叫做 jsx  
   //  可以写很多代码
    const element = <h1>
       <span>你好</span>
       <span>我好</span>
       <span>
          {
             //这里面就写正儿八经的 JS代码 和注释
             //  这是单行注释
             /* 这是多行注释 */
          }   
       </span>
    </h1>
    ReactDOM.render(
       element,
       document.querySelector('#box')   //  将<h1>hello world</h1>渲染到 div标签里面去
    )

</script>
```

