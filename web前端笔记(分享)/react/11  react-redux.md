### index：

```js
// Provider 高阶组件  作用把状态传递到各个组件
import {Provider} from "react-redux"
// createStore 创建仓库  用来存储信息 比如用户信息  位置信息  登录信息
import {createStore,applyMiddleware} from "redux"
//   think  处理异步操作
import thunk from 'redux-thunk'

import Reducers from "./reducers/index"

// 创建store
const store = createStore(
	Reducers,
    applyMiddleware( thunk )
)


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
```

### Reducers:

```js
// 定义规则
import cartCount from "./cartCount"
// import user from "./user"
// import local from "./local"



// combineReducers  能够把想要做的事情集中起来  合并reducer 并且返回
import {combineReducers} from "redux"

let Reducers = combineReducers({
   cartCount,
   // user,
   // local,
})

export default Reducers
```

### 创建各个要做事情的方法：  例如 cartCount,

```js
// export default function reducer(state=[],action){
//    let newState = Object.assign([],state)
//    let goods = action.data
//    switch (action.type) {
//       case "CART_ADD":
//          newState.push(goods)
//          return newState
   
//       case "CART_REMOVE":
//          newState.push(goods)
//          return newState
   
//       default:
//          return newState
//    }
// }

export default function reducer(state={
   data:[]
},action){
   switch (action.type) {
      case "CART_ADD":
         return {
            data:action.data
         }
   
      case "CART_REMOVE":
         return {
            data:action.data
         }
   
      default:
         return state
   }
}
```

###  action：

```js
// action
export function addCart(data){
   console.log(data);
   
   return {
      type:"CART_ADD",
      data
   }
}
export function removeCart(data){
   console.log(data);
   return {
      type:"CART_REMOVE",
      data
   }
}
```

### 组件页面操作：

```js
// 连接器
import {connect} from "react-redux"

//  把方法结构出来
import {addCart,removeCart} from "../../../actions/cart"




// @connect(
//    state=>({shop:state}),
//    {addCart,removeCart}
// )
console.log(this.props.shop);

export default connect( 
    //你要state什么属性放到props里
    state=>({num:state}),
    // 你要什么方法，放到props里 自动dispatch
    {addCart,removeCart}
)(组件名称)
```

