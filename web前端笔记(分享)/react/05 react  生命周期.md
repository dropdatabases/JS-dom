### 生命周期-挂载阶段：

```js
constructor(){}      //数据接收 实现继承super(props) 
componentWillMount(){}   更新了    //数据挂载之前 可以操作数据    不可以操作dom      
render(){}        //渲染组件 和 html 标签
componentDidMount(){}         /*数据挂载之后 可以操作数据和dom    
	真实的ajax请求数据是在这一步请求的   会在此请求后端数据接口   通过this.setState（{}）挂载数据   请求回来的数据会挂载到state里面  
	放在state里面的好处就是：当前组件是根据state数据渲染，state里面的数据是响应式数据，一旦数据变化了，就会自动触发render函数进行重新渲染 
        点击当前组件元素，执行当前事件函数，更新当前的组件数据b，数据变化自动触发render数据    当前组件维护当前组件的数据*/



<body>
<div id="app"></div>
<script src="./node_modules/babel-standalone/babel.js"></script>
<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
<script type="text/babel">
   class Element extends React.Component{
      constructor(props){
         super(props)
         /* 
            构造函数只执行一次
            数据接收 实现继承super(props) 
            this.props.title
            this.state = {}  初始化一个状态
          */
         this.state = {
            a:this.props.title,
            b:props.title
         }
         console.log("01-构造函数，在创建组件的时候调用一次01");
      }
      
      // componentWillMount(){}    在组件即将被挂载的时候执行一次  数据挂载之前 可以操作数据 不可以操作dom    快捷键 cwm
      componentWillMount() {
         //  this.setState({})   this.state()   this.props() 都是异步操作
         
         console.log("01-在组件即将被挂载的时候执行一次02");
         this.setState({
            c:"后端请求的数据"
         })

         setTimeout(() => {
            console.log(this.state.c);
         }, 2000);
      }
      handleClick = () => {
         this.setState({
            b:"数据改变"
         })
      }
      render(){
         console.log("01-渲染组件 和 html 标签03");
         return(
            <div>
               <h2 ref= {"h2"}>{this.state.a}</h2>
               <h2>{this.state.b}</h2>
               <button 
                  onClick = {this.handleClick}
               >点击改变数据</button>
            </div>
         )
      }


      // componentDidMount(){}    组件以及挂载完成   数据挂载之后 可以操作数据和dom    快捷键 cdm
      componentDidMount() {
         console.log("01-组件已经挂载完成04");
         console.log(this.refs.h2);

      }
   }


   ReactDOM.render(
      <Element title= "这是父组件传过来的数据"/>,
      document.getElementById("app")
   )
</script>
</body>
```

### 生命周期-更新期：

```js
constructor(){}                 // 构造函数值执行一次
componentWillReceiveProps    更新了  // 简写cwr   父组件更新时触发此函数     nextProps 父组件更新的值
shouldComponentUpdate(){}     //简写scu  是否将来更新组件   检测组件内的变化 可以用作页面性能的优化(默认值为true)    return true
componentWillUpdate(){}              //  简写cwup   即将更新      组件更新之前调用 
render(){}                           // 组件更新之后渲染组件
componentDidUpdate(){}                //  简写cdup     完成更新  组件更新之后调用 




<body>
<div id="app"></div>
<script src="./node_modules/babel-standalone/babel.js"></script>
<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
<script type="text/babel">
   class List extends React.Component{
      constructor(){
         super(...arguments)
         // 构造函数值执行一次
         this.state={
            list:"这是List数据",
            abc:this.props.title
         }
         console.log("02 构造函数01");
         
      }

      // 简写cwr      nextProps 父组件更新的值
      componentWillReceiveProps(nextProps) {
         console.log("02父组件更新时触发此函数02",nextProps)
         this.setState({
            abc:nextProps.title
         })
      }
      // 简写scu   是否更新渲染   nextProps 父组件更新的值
      shouldComponentUpdate(nextProps, nextState) {
         console.log("02是否将来更新组件03");
         // console.log(nextProps, nextState);

         if (this.state.abc !== nextProps.title) {
            this.setState({
               abc:nextProps.title
            })
         }
         return true
      }
      // 简写cwup   即将更新
      componentWillUpdate(nextProps, nextState) {
         console.log("02组件即将更新04",nextProps, nextState);
         
      }
      
      render() {
         console.log("02组件更新05")
         return (
            <div>
               <h1>这是List子组件</h1>
               {
                  // 不要直接拿数据   当前组件维护当前组件的数据
                  // this.props.title

                  this.state.abc
               }
               
            </div>
         )
      }
      // 简写cdup   
      componentDidUpdate(prevProps, prevState) {
         console.log("02组件更新完成06",prevProps, prevState);
      }
      
   }



   class Element extends React.Component{
      constructor(props){
         super(props)
         this.state={
            p:"Element"
         }
         console.log("01-构造函数，在创建组件的时候调用一次01");
      }
      componentWillMount() {
         console.log("01-在组件即将被挂载的时候执行一次02");
      }
      handleClick = () => {
         this.setState({
            p:"改变数据"
         })
      }
      render(){
         console.log("01-渲染组件 和 html 标签03");
         return(
            <div>
               <h2>APP</h2>
               <List title = {this.state.p}/>
               <button 
                  onClick = {this.handleClick}
               >事件点击</button>
            </div>
         )
      }
      componentDidMount() {
         console.log("01-组件已经挂载完成04");

      }
   }
   ReactDOM.render(
      <Element/>,
      document.getElementById("app")
   )
</script>
</body>

```

### 生命周期-销毁期：

```js
componentWillUnmount(){}       //      简写cwun     组件销毁时调用 可以做一些内存的优化 (全局变量,闭包,计时器,事件)



```

