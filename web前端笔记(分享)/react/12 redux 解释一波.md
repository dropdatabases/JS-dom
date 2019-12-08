Redux是一个库专注于状态管理的  前端三大框架都可以用redux库

Redux核心概念：store   state    action   reducer

 



### store 

所有有状态都归Redux管理   redux里面有个保险箱（store）就是保存数据的地方，可以把它看成一个容器，整个应用只能有一个 Store。Redux 提供`createStore`这个函数，通过reducer来生成 Store

```js
 import { createStore } from 'Redux';
 const store = createStore(reducer);
// createStore函数接受另一个函数作为参数，返回新生成的 Store 对象，这个函数就是下文提到的reducer
```

###  state

`Store`对象包含所有数据。**当前时刻的 State，可以通过`store.getState()`拿到**

```js
import { createStore } from 'Redux';
const store = createStore(reducer);
const state = store.getState();
```

### action   

`dispacth`相当于创建方法 要做什么，  而具体去做的是action

需要状态变更时store.dispatch（action）来修改状态

### reducer

reducer拿到老的状态state和action  生成新的状态state，可以用`store.subscribe`来监听每次修改



## Redux 和React连接

忘记subscribe  记住reducer ， action，dispatch

react-redux提供Provider和connect两个接口来连接

Provider用来向各个组件传递store 只用一次

connect获取组件所需要的参数

```js
// connect连接器  把react和redux连接起来
import {connect} from "react-redux"

```

###  redux-thunk 中间件

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// Note: this API requires redux@>=3.1.0
// 然后直接引用中间件就好
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
```

#### redux 调试工具

```js
import {createStore,applyMiddleware,compose} from "redux"

const devToolsExtension = window.devToolsExtension ? window.devToolsExtension():()=>{}

const store = createStore(
   reduce,
    //  异步操作
   compose(
      applyMiddleware(thunk),
      devToolsExtension
   )
)
```

