### 组件的两个重要的概念：

​       组件有非常重要的两个概念： 1.state  状态    负责页面的视图的数据  就是说根据state去渲染用户界面       

​							2.props  属性       组件传值（数据）   title  data

```js

//  组件传值（数据）
<Head
	title = {"头部组件"}
	data = {["首页","新闻","用户中心"]}
></Head>

//  渲染
function Head(props){
    return (
    	<header>这是页面头部，{porps.title}</header>
    )
}
```

### 组件的用法及其this指向：

```js
<div id="box"></div>
<script src="./node_modules/babel-standalone/babel.js"></script>
<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
<script type="text/babel">

   //  有状态的组件   正儿八经的组件
   //  定义 Head组件 继承自React的Component组件
   //  那么就可以调用React的 component组件提供的方法或属性
   class Head extends React.Component{
      constructor(){
         //  如果不在constructor构造函数里面  用实例对象上的props（this.props）
         //  那么可以不用传参  super(...arguments)  
         super(...arguments)   // 执行父类的构造函数 
         this.name = "dream",
         this.age = 18,

         //  固定写法   
         //  this.state对象里面的数据是从后端返回的    ajax请求的挂载到this.state对象里面
         //  state 是负责当前组件（Head）的用户界面
         //  通过state里面的数据发生了改变  视图就会自动更新   -->这就是响应式数据
         //  这种是写在了constructor构造函数里面
         this.state={
            abc:this.props.text
         }
         // this 是Head实例对象
         console.log(this.props.text);

         //  定时器  自动改变值
         /* setTimeout(() => {
            this.setState({
               abc:"这是点击改变的值"
            })
         }, 2000); */



         console.log(this);
         this.handleClick = this.handleClick.bind(this)
         
      }
      //  不要写function
      say(){
         console.log("say方法")
      }


      //  这个就是没有在 constructor构造函数里面  用实例对象上的props  也就是写在了constructor构造函数外面
      state={
            abc:this.props.text
         }





      //  下面是要修改的handleClick函数内部的this指向
      handleClick(res,e){
         console.log("handleClick");
         console.log(this,res,e,e.target);
         
      }
      handleClick2(){
         console.log("handleClick2");
      }

      //  常用的方法
      handleClick3 = () => {

         // 箭头函数 this指向父级对象   上下文对象  在这里指向实例对象 Head
         console.log(this);
         console.log("handleClick3");
         this.setState({
            abc:"这是点击改变的值"
         })
      }
      handleClick4 = (res,e) => {
         console.log("handleClick4",res,e.target);
      }
      //  渲染
      render(){   
         //  不管渲染什么都加一个判断
         return(
            <div>
               {
                  // bind的第一个参数是函数内部的this指向，
                  //  第二个参数   数据  参数（实参）
                  //  最后一个参数是事件对象
               }
               <header onClick = { this.handleClick.bind(this,"这是传参")}>{this.state.abc && this.state.abc}</header>
               {
                  //  第二种  this.handleClick2  不合适传参
               }
               <header onClick = { this.handleClick2}>{this.state.abc && this.state.abc}</header>
               <header onClick = { this.handleClick3}>{this.state.abc && this.state.abc}</header>
               <header onClick = { (e)=>{this.handleClick4("明天看电影",e)}}>{this.state.abc && this.state.abc}</header>
            
            </div>
            )
      }
         
   }

   let element = (
      <div>
         <hr />
         <Head text="这是真正的有状态组件  头部"></Head>
         <hr />
      </div>
   )

   ReactDOM.render(
      element,
      document.querySelector("#box")
   )

</script>
```

### 组件传参：

```js
//  下面是要修改的handleClick函数内部的this指向
      handleClick(res,e){
         console.log("handleClick");
         console.log(this,res,e,e.target);
         
      }
      handleClick2(){
         console.log("handleClick2");
      }


      //  常用的方法
      handleClick3 = () => {

         // 箭头函数 this指向父级对象   上下文对象  在这里指向实例对象 Head
         console.log(this);
         console.log("handleClick3");
         this.setState({
            abc:"这是点击改变的值"
         })
      }
      handleClick4 = (res,e) => {
         console.log("handleClick4",res,e.target);
      }

//  渲染
      render(){   
         //  不管渲染什么都加一个判断
         return(
            <div>
               {
                  // bind的第一个参数是函数内部的this指向，
                  //  第二个参数   数据  参数（实参）
                  //  最后一个参数是事件对象
               }
               <header onClick = { this.handleClick.bind(this,"这是传参")}>{this.state.abc && this.state.abc}</header>
               {
                  //  第二种  this.handleClick2  不合适传参
               }
               <header onClick = { this.handleClick2}>{this.state.abc && this.state.abc}</header>
               <header onClick = { this.handleClick3}>{this.state.abc && this.state.abc}</header>
               <header onClick = { (e)=>{this.handleClick4("明天看电影",e)}}>{this.state.abc && this.state.abc}</header>
            
            </div>
            )
      }
```

### class  语法 继承 :

```js
<script>

   // 用 class 语法去开发  会让代码更加清晰


   const Point = class{
      constructor(x,y){
         this.x = x,
         this.y = y
      }

      toString(){
         return `${this.x}+${this.y}`
      }
   }

   const P = new Point(1,2)
   console.log(P.toString());
   
//   写自个的代码 想更加容易去实现某些需求  那我们会继承react 那就可以调用react所封装的方法

   class Point2 extends Point{
      constructor(x,y){
         super(x,y)
         this.name = "li"
      }

      getData(){
         console.log("新的方法");
      }
   }


   const P2 = new Point2(4,6)

   console.log(P2);
   console.log(P2.toString());
   console.log(P2.getData);
   
</script>
```

### es6模块导入导出：

```js
打开谷歌浏览器  ---  帮助  ----   关于谷歌 ----  网址改为flags  ---- 搜索input  ----   打开  Enable ECMAScript 6 modules import.meta.url


//   html 里  js  代码  注意script type="module"
<script type="module">
   /* 
      开发项目时会有达拉大量的数据
      不可能放在当前页面，会影响代码整洁程序
    */

    import {data,arr,json,fn} from "./es6.js"
    console.log(data,arr,json,fn);
</script>


新建  js代码文件
export const data = "这是标题"

export const arr = ["132","321","132asd"]


export const json = {
   name:"nihao",
   asr : 18
}

export function fn(){
   return "name"
}

// 默认导出    default
export default {
   name:"liouren",
}

```

