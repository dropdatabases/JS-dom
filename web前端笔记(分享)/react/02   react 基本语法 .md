### 前奏:

```js
// 项目初始化
cnpm init -y
//下载三个包
cnpm i babel-standalone react react-dom -D


<div id="box"></div>
// 引入 三个包
<script src="./node_modules/babel-standalone/babel.js"></script>
<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script><body>

<script type="text/babel">

let person = {
   name:"dream",
   age:18,
   sex:0
}

//  arr 是通过axjx 或者 fetch 请求后端 返回的数据 
let arr =["张三","李四","王二","狗蛋","大锤","狗子","十一"]

function getSex(){
   return <h2>函数调用</h2>
}

let styles = {
   title:{
      background:"red",
      color:"#ccc"
   },
   fS:{
      fontSize:"50px",
      color:"red"
   }
}




//  插入数据      {}  插值符号

{}是插值符号    插值符号里面可以写些什么内容：
                    1.表达式
                    2.数组
                    3.字符串
                    4.即时函数；
                        (function(){})
                        function kaidy(){}
                        kaidy()
                    5.布尔值；
                    6.不能插入if判断，只是使用三目表达式；   
                    7.不能直接使用json值，
let element = (
   <div>
      //  属性绑定
      <h1 style={styles.fS}> Hello Word</h1>   
      <span style={{color:"hotpink"}}>名字：{person.name}</span>
      <span>年龄：{person.age}</span>
      <span style={styles.title}>性别：{

         //  不能写 if 判断   只能写三目表达式
         person.sex ? "女":"男"

      }</span>
      <ul>
         {
          	//  列表渲染
            //  如果arr有长度  就遍历生成 li 标签
            //  在JSX里面    用{}插入数据 
            //  这里写真二八经的JS代码  返回字符串  html代码  即时函数   数组
            arr.length > 0 && arr.map((item,index)=>{

                //  属性写在行内
                //  li里面写的是属性绑定
               return (<li
                        key={index}
                        className="red"
                        title="标题">
                           {item}
                     </li>)
            })
         }   
      </ul>

      <em>
         {
            (function () {
               //  在函数里面可以  if 判断

               if (person.sex) return <h2>女</h2>
               return <h2>男</h2>
               // return "这是即时函数自执行返回的数据"
            })()  
         }
      </em>

      <p>
         {
         // 数组可以自动展开
            arr
         }   
      </p>
      <p>
         {
            //json 对象 不能展开  要转为字符串
            //   JSON.stringify(person)

            // 拿到 person 中每个 属性
            Object.keys(person)
         }
      </p>

      {
         getSex()
      }
   </div>
)

ReactDOM.render(
   element,
   document.querySelector("#box")
)

</script>
```

### 事件处理：

```js
<div id="box"></div>
 
<script src="node_modules/babel-standalone/babel.js"></script>
<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>
<script type="text/babel">

// 函数的最后一个 参数 是事件对象event
function hendleClick(data,e){	
   console.log("事件调用函数",data,e.target)
}


function hendleKetdown(data,e){
   console.log("hendleKetdown",data,e.target);
}

let element = (
   <div>
      <h2>事件处理</h2>
      <input
      type="button"
      value="自执行"
      onClick={
         console.log("自执行")
      }/>
      <br />
      <input
      type="button"
      value="箭头函数"
      onClick={
         ()=>{console.log("箭头函数")}
      }/>
      <br />
      <input
      type="button"
      value="事件调用函数"
      // onClick={hendleClick}

      //  自动执行函数
      // onClick={hendleClick.call({})}
      //  传参 点击执行函数
      onClick={hendleClick.bind(this,"这是传进来的参数")}
      
      />
      <br />
      
      <input
      type="text"
      defaultValue="ketdown"
      //  开始输入时执行
      // onKeyDown={hendleKetdown}
      // 立即执行
      // onKeyDown={hendleKetdown.call({})}
      //  不会自执行  开始输入时执行
      onKeyDown={hendleKetdown.bind(this,"这是传进来的参数")}
      />

   </div>
)

ReactDOM.render(
   element,
   document.querySelector("#box")
)
</script>
```

### 什么是组件：

```js
/* 
   此 element 只是一个普通的变量 是没有状态的
   我们区分是否是组件  也就看组件是否有状态 或 无状态
   什么是状态？
   就是让数据驱动视图的响应式数据
   状态 = 数据
   请求后端 返回  字符串 数据 数据 json
   这些数据  我们肯定得放在一个地方 方便管理 放在state = {}
   state = { arr:[], title:"",des:""  }
   state是方便管理  但是一个项目有太多的页面  这些页面都需要页面与页面互通（网络互联）
   那么需要一个js库   帮我们进行管理  方便与在每一个页面 都是拿到最新的数据（页面通讯）

   比如 redux js库能帮我们去管理大量的数据
   想要在每一个页面都能够很方便的去调取  redux 里面的数据  我们会用react-dedux 库


 */
let element = (
   <div>
   
   </div>
)


ReactDOM.render(
   element,
   document.querySelector("#box")
)
```

### 声明式无状态组件：、

```js
<div id="box"></div>
<script src="node_modules/babel-standalone/babel.js"></script>
<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>

<script type="text/babel">

//  开发项目 最好把每个部分拆分成一个个独立的小区块，能多小就多小
//  为什么？  因为可以重用（css）  需要用的时候直接引入 



// 这个不是组件  他只是一个变量  没有状态
let header = (
   <header>这是页面头部</header>
)
let main = (
   <main>这是页面主体</main>
)
let footer = (
   <footer>这是页面尾部</footer>
)



// 这是声明一个 函数组件
//   这种写法  也只是无状态的组件
function Head(){
   return(<header>这是页面头部</header>)
}
function Main(){
   return(<main>这是页面主体</main>)
}
function Footer(){
   return(<footer>这是页面尾部</footer>)
}
let element = (
   <div>
      {header}
      {main}
      {footer}
      {header}
      <hr />
      <Head></Head>
      <Main></Main>
      <Footer></Footer>
   </div>
)


ReactDOM.render(
   element,
   document.querySelector("#box")
)
</script>
```

### 声明式有状态组件：

```js
<div id="box"></div>
<script src="node_modules/babel-standalone/babel.js"></script>
<script src="node_modules/react/umd/react.development.js"></script>
<script src="node_modules/react-dom/umd/react-dom.development.js"></script>

<script type="text/babel">


   //  有状态的组件

   //  定义 Head组件  继承 React的Component组件
   //  那么久可以去调用React的Component组件所提供的方法 或者 属性
   class Head extends React.Component{
      constructor(){    //  构造函数
         super()       //超级函数 执行父类的构造函数
         //  定义属性
         this.name = "lsl"
         this.age=18
      }
      // 定义方法   不要写function

      sgy(){
         console.log("sgy方法")
      }
      render(){
         //  渲染
         return (
            <Head>这是真正的有状态的组件 头部</Head> 
         )
      }
   }
   let element = (
      <div>
         <Head></Head>
      </div>
   )
   ReactDOM.render(
      element,
      document.querySelector("#box")
   )
</script>
```

