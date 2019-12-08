### JSX插值-属性：

```js
<body>
   //<!--   通过ReactDOM.render 把jsx代码 渲染到 APP节点里 -->
   <div id="app"></div>
   //<!-- 把开发环境中写的JSX代码 转化成 浏览器识别的 html 代码 -->
<script src="./node_modules/babel-standalone/babel.js"></script>
   //<!-- react 渐进式UI框架   根据它开发项目 效率更高 很方便迭代更新 维护-->
<script src="./node_modules/react/umd/react.development.js"></script>
   //<!-- ReactDOM.render（） 操作dom  负责渲染jsx 到指定的节点里面 -->
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
<script type="text/babel">
/* 
   html 或 xml 直接写在JS代码中  不要加引号，这是jsx代码的语法 
   jsx允许  在模板里面 插入js变量  用插值符号{} 
   {}  里面可以写 数字 布尔值 字符串 表达式 即时函数 数组（数组用 map遍历）

   style  要定义成一个对象  style = {}
   class  要写成  className
   value  要写成  defaultValue
   for    要写成  htmlFor
  focus    要写成   autoFocus  自动获取焦点

   单标签要闭合

   前端三大框架  angularJS  reactJS vueJS  都是基于 VM  DOM  去进行实现的
   VM  虚拟DOM在内存里面  去生成真实的DOM
     根据数据生成DOM节点
*/
   const styles = {
      bgc:{
         color:"red"
      },
      title:{
         background:"hotpink"
      }
   }


   const element = (
      <div>
         <div>nihao</div>   
         <input id="txt" type="text" /><br/>
         <input type="text" autoFocus />
         <label htmlFor="text"></label>
         
         { [<h1 
            className="nihao"
            key="1">h1</h1>,

         <h2
         style={styles.bgc}
         key="2">h2</h2>,

         <h3 
         className="hao"
         key="3">h3</h3>] }
      </div>
   )

   ReactDOM.render(
      element,
      document.getElementById("app")
   )
</script>//  通过ReactDOM.render 把jsx代码 渲染到 APP节点里
```

### 多种方式操作DOM节点：

```js
<body>
   <!--   通过ReactDOM.render 把jsx代码 渲染到 APP节点里 -->
   <div id="app"></div>
   <!-- 把开发环境中写的JSX代码 转化成 浏览器识别的 html 代码 -->
<script src="./node_modules/babel-standalone/babel.js"></script>
   <!-- react 渐进式UI框架   根据它开发项目 效率更高 很方便迭代更新 维护-->
<script src="./node_modules/react/umd/react.development.js"></script>
   <!-- ReactDOM.render（） 操作dom  负责渲染jsx 到指定的节点里面 -->
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
<script type="text/babel">  

  /*  // 通过ID 获取dom节点
   function handleClick(){
      const ipt = document.getElementById("input")
      ipt.style.background = "red"
      console.log(ipt)
   }


    // 通过事件对象  操作dom节点
   function handleClick1(e){
      console.log(e.target);
      const{target} = e
      console.log(target);
   }

   // 通过ref属性 操作dom节点
   // ref  只能在真正的组件里面使用
   function handleClick2(e){
      console.log(e.target);
      const{target} = e
      console.log(target);
   } */
   class List extends React.Component{
      render() {
         return (
            <div>
               <h2>item</h2>
            </div>
         )
      }
   }
   class Element extends React.Component{

      // 通过ID 获取dom节点
      handleClick(){
         const ipt = document.getElementById("input")
         ipt.style.background = "red"
         console.log(ipt)
      }


      // 通过事件对象  操作dom节点
      handleClick1(e){
         console.log(e.target);
         const{target} = e
         console.log(target);
      }

      // 通过ref属性 操作dom节点
      // ref  只能在真正的组件里面使用
      handleClick2(){
         console.log(this.refs.btn);
      }

      // 通过ReactDOM.findDOMNode方法 操作dom节点
      handleClick3(){
         const ipt = document.getElementById("input")
         console.log(ReactDOM.findDOMNode(ipt));
         console.log(this);
         console.log(this._div);
         this._div.style.color = "red"
         console.log(this);
         console.log(this._list);
         
         
      }
      handleClick4(){
          //  组件转化为节点
           console.log(ReactDOM.findDOMNode(this._list));
      }


      /* 
         框架基于虚拟DOM   只有当它插入文档以后，才会变成真正的DOM
         有时我们需要从组件中获取真实的DOM 可以用ref属性来获取
         新版本React 不推荐使用 ref = "btn" 字符串  
         转而使用 ref ->callback 通过此种方式 挂载实例对象上面 ref ->callback -> this.属性名
         {itemDiv => this._div = itemDiv}
         大多数情况下应该使用DOM的固定引用 而非使用ReactDOM.findDOMNode(ipt)方法
         因为当render返回null 时ReactDOM.findDOMNode(ipt)方法也会返回null
         在使用ReactDOM.findDOMNode方法时  当参数是 DOM 返回值就是 DOM
         当参数是Component组件时  获取的是就是 Component 的 render中的 DOM
      */
      render() {
         return (
            <div>
               <h1>nihaoa</h1>
               <div 
                  ref = {itemDiv => this._div = itemDiv}
               >div</div>
               <List
                  ref = {listComponent => this._list = listComponent}
               ></List>
               <input 
               id = "input"
               type="button"
               defaultValue = "操作dom"
               onClick = {this.handleClick}
               />
               <input 
               type="button"
               defaultValue = "操作dom1"
               onClick = {this.handleClick1.bind(this)}
               />
               <input 
               ref = "btn"
               type="button"
               defaultValue = "操作dom2"
               onClick ={this.handleClick2.bind(this)}
               />
               <input 
               ref = "btn"
               type="button"
               defaultValue = "操作dom3"
               onClick ={
                  this.handleClick3.bind(this)
               }
               />
               <input 
               ref = "btn"
               type="button"
               defaultValue = "操作dom4"
               onClick = {
                  ()=>{
                     this.handleClick4.bind(this)
                     // 传入一个组件
                     console.log(ReactDOM.findDOMNode(this._list)==this._list);
                     // 传入一个节点
                     console.log(ReactDOM.findDOMNode(this._div)==this._div);
                  }
               }
               />
            </div>
         )
      }
   }
   /* const element = (
      <div>
         <h1>nihaoa</h1>
         <div>div</div>
         <input 
         id = "input"
         type="button"
         defaultValue = "操作dom"
         onClick = {handleClick}
         />
         <input 
         type="button"
         defaultValue = "操作dom1"
         onClick = {handleClick1.bind(this)}
         />
         <input 
         // ref = "btn"
         type="button"
         defaultValue = "操作dom2"
         onClick = {handleClick2}
         />
      </div>
   ) */

   ReactDOM.render(
      <Element/>,
      document.getElementById("app")
   )
</script>
```

### 组件及组件父子通讯：

```js
<body>
   <!--   通过ReactDOM.render 把jsx代码 渲染到 APP节点里 -->
   <div id="app"></div>
   <!-- 把开发环境中写的JSX代码 转化成 浏览器识别的 html 代码 -->
<script src="./node_modules/babel-standalone/babel.js"></script>
   <!-- react 渐进式UI框架   根据它开发项目 效率更高 很方便迭代更新 维护-->
<script src="./node_modules/react/umd/react.development.js"></script>
   <!-- ReactDOM.render（） 操作dom  负责渲染jsx 到指定的节点里面 -->
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
<script type="text/babel">
   /*
      组件两个重要的概念：
            state：  状态      负责页面的视图的数据  就是说根据state去渲染用户界面     
            props： 属性       组件传值（数据）   通讯

            后期会把组件独立成一个个文件  一个后缀名（jsx  js） 就是一个组件  方便能够重复使用
            每个组件负责一个页面  或者 一部分视图的显示
   
   */
   class List extends React.Component{
      render() {
         console.log(this.props);
         
         return (
            <div>
               <h2>list</h2>
               <h2>{this.props.abc}</h2>
               <h2>{this.props.data}</h2>
               {
                  // 子组件去调用父组件的函数的方法
                  // 子组件向父组件通讯
               }
               <button
                  onClick = {this.props.fn.bind(this,"传参")}
               >事件按钮</button>
               <button
                  onClick = {()=>{this.props.fn("传参123")}}
               >事件按钮1</button>
            </div>
         )
      }
   }

   class Element extends React.Component{
      state = {
         data : "父组件的数据"
      }
      getData(zxc){
         console.log("你好",zxc);
         
      }
      render() {
         return (
            <div>
               <h1>组件</h1>
               <List 
               abc = {"list"} 
               data={this.state.data}
               fn = {this.getData}
               
               ></List>
               
               
            </div>
         )
      }
   }

   ReactDOM.render(
      <Element/>,
      document.getElementById("app")
   )
</script>
```

