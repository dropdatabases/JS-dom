### redux基本操作：

```js
/*
state是方便管理  但是一个项目有太多的页面  这些页面都需要页面与页面互通（网络互联）
   那么需要一个js库   帮我们进行管理  方便与在每一个页面 都是拿到最新的数据（页面通讯）

   比如 redux js库能帮我们去管理大量的数据
   想要在每一个页面都能够很方便的去调取  redux 里面的数据  我们会用react-dedux 库
*/


新建redux1/index.js文件  代码如下：


// createStore创建一个商店
// 提供项目所需要的方法
// reduce   格则  函数   
// 初始化state  可以是数字，{}，[].
// reduce你做的具体的事情  对队里增删改查  存储等   返回state(数据)  就可以在任何组件都可以拿到state
import {createStore} from "redux"

function reduce(state=0,action){
   switch (action.type) {
      case "骑兵营":
         return state+5
      case "意大利炮兵营":
         
         return state-1
   
      default:
         return 0
   }
}


const store = createStore(reduce)   //参数接收一个纯函数

console.log(store.getState())


// 订阅模式
function listener(){
   const getCurrent = store.getState()
   console.log(`现在的状态是${getCurrent}`);
   
}

store.subscribe(listener)

// 派发事件   传递 action
store.dispatch({
   type:"骑兵营"
})
store.dispatch({
   type:"意大利炮兵营"
})



//在父级index.js文件里面引入此文件   import "./redux1/index"
```

### redux与react结合基本操作        ++++异步操作：

```js
新建redux1/index.js文件  代码如下：

// import {createStore} from "redux"
// 把要用到的函数 导出去   只有这样   才能在react组件当中  导入使用
// 要拿到reducer 函数返回的新状态  去渲染新视图（用户界面）
const ADD_NUM = "增加意大利炮兵营"
const REMOVE_NUM = "减少意大利炮兵营"


export function reduce(state=0,action){
   switch (action.type) {
      case ADD_NUM:
         return state+1
      case REMOVE_NUM:
         
         return state-1
   
      default:
         return 100
   }
}


// const store = createStore(reduce)   //参数接收一个纯函数

// console.log(store.getState())


// 订阅模式
// function listener(){
//    const getCurrent = store.getState()
//    console.log(`现在的状态是${getCurrent}`);
// }
// store.subscribe(listener)



// action返回一个对象
export function addNum(){
   return{
      type:ADD_NUM
   }
}
export function removeNum(){
   return{
      type:REMOVE_NUM
   }
}

// 在redux里面做异步操作
export function removeAsync(){
   // 可以返回一个函数
   return function(dispatch){
      setTimeout(()=>{
         dispatch(removeNum())
      },2000)
   }
}
/*
// 在redux里面做异步操作
export function removeAsync(){
   // 可以返回一个函数
   return dispatch=>{
      setTimeout(()=>{
         dispatch(removeNum())
      },2000)
   }
}

*/


// 派发事件   传递 action
// store.dispatch({
//    type:"骑兵营"
// })
// store.dispatch({
//    type:"意大利炮兵营"
// })
```

父级index.js文件里面的代码

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./redux1/index"
import {createStore,applyMiddleware,compose} from "redux"
import {reduce,addNum,removeNum,removeAsync} from"./redux2/index"
//  redux-thunk 允许redux做异步操作
import thunk from "redux-thunk"

const devToolsExtension = window.devToolsExtension ? window.devToolsExtension():()=>{}

const store = createStore(
   reduce,
    //  异步操作
   compose(
      applyMiddleware(thunk),
      devToolsExtension
   )
)
//  刚开始渲染一次
 render()
 function render(){
   ReactDOM.render(
      <App
         store = {store}
         addNum = {addNum}
         removeNum = {removeNum}
         removeAsync = {removeAsync}
      />,
      document.getElementById('root')
    );
 }

store.subscribe(render)   //  重新渲染


// middleware  中间件   封装一些方法
// 脚手架  集成项目开发环境  不需要我们开发者各种配置
```

父级app.js文件里面的代码

```js
import React, { Component } from 'react'

export default class App extends Component {
   render() {
      const {store,addNum,removeNum,removeAsync}  = this.props
      console.log(store,addNum,removeNum,removeAsync);
      
      return (
         <div>
            {
               store.getState()
            }
            <h2>react</h2>
              <input 
              type="button" 
              defaultValue={"增加意大利炮"}
               onClick = {
                  ()=>{
                     store.dispatch(addNum())
                  }
               }
              
              />
              <br/>
              <input 
              type="button" 
              defaultValue={"减少意大利炮"}
               onClick = {
                  ()=>{
                     store.dispatch(removeNum())
                  }
               }
              
              />

//  异步操作
              <input 
              type="button" 
              defaultValue={"减少意大利炮"}
               onClick = {
                  ()=>{
                     store.dispatch(removeAsync())
                  }
               }
              
              />
         </div>
      )
   }
}
```

