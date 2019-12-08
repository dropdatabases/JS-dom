## vuex装饰器： 辅助函数

```js
//  vuex 的装饰器
// mapState  用来简化 state 代码
// mapGetters  用来简化 getters 代码
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
```

## 对象展开运算符：

```js
comp
```



## state：

```js
// state  里面的数据

state: {
    name:"这是vuex",
    num:130,
    list:[
      {
        id:1,
        title:"vuex",
        completed:true,
      },
      {
        id:2,
        title:"react",
        completed:true,
      },
      {
        id:3,
        title:"会了没",
        completed:false,
      }
    ]
  },
      
// 接收  state  里面的数据的方法
      
<template>
  <div id="app">
    // 任意组件可以通过 this.$store.state 拿取 state 里面相对应的数据 
    <h1>{{$store.state.name}}</h1>  
    <h2> {{name}}</h2>
    <h2> {{list}}</h2> 
  </div>
</template>



 // 可以在 computed  对数据进行处理

  // 拿取 store 中 state 的数据   通过 this.$store.state  直接调用
  /* computed:{
    name(){
      return this.$store.state.name + "比 react 简单多了"
    },
    list(){
      return this.$store.state.list.filter(item=>item.completed)
    },
    num(){
      return this.$store.getters.num
    }
  }, */


// mapState  用来简化 state 代码  可以传入一个对象  也可以是 一个数组 
//    一般情况下 只拿取数据的时候  就用 数组的方法
//   如果要对数据进行处理  就用 对象的方法 

  // 简化方法一：  数组方法    mapState  装饰器

  computed:mapState(["name","list",])

// 简化方法二：  对象方法
// computed:mapState({
//   name(state){
//     return state.name + "比 react 简单多了"
//   },
//   list(state){
//     return state.list + "比 react 简单多了"
//   },
// })
```

## getters：

```js
// getters 是store的计算属性  getters  来监听 state 里面的数据变化
  getters:{
    num(state){
    	return (++state.num)
    },
    completed(state){
      return state.list.filter(item=>item.completed)

      // 复习用
      return state.list.filter(item=>item.id ==3)
    },

    // 在 getters 里面获取 getters 里面的数据
    listLength(state,getters){
      return getters.completed.length
    },

    //   需求：输入 id 为几 就返回第几个数据  
    // 返回的是一个函数  id 默认为 1  也可以在调用的时候传参

    getId:state=>(id=1)=>state.list.find(item=>item.id==id)
    // getId(state){
    //   return  id=>state.list.find(item=>itemid==id)
    // }
  },
      
      
 // 接收  getters  里面的数据的方法    
      
<template>
  <div id="app">
    // 任意组件可以通过 this.$store.getters 拿取 getters 里面相对应的数据 
    <h2> {{num}}</h2> 
    <h2> {{completed}}</h2> 
    <h2> {{listLength}}</h2> 
    //这里可以传参 
    <h2> {{getId(2)}}</h2> 
   </div>
</template>



 // 拿取 store 中 getters 的数据  通过 this.$getters.state  直接调用
    /* computed:{
      num(){
        return this.$store.getters.num
      },
      completed(){
        return this.$store.getters.completed
      },
      listLength(){
        return this.$store.getters.listLength
      },
      getId(){
        return this.$store.getters.getId
      }
    }, */

  // mapGetters  用来简化 getters 代码
  computed:mapGetters(["num","completed","listLength","getId"])
```

## mutations:

```js
// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutations
  mutations: {
    add(state,n=1){
      state.num +=n
    },
    remove(state,n=1){
      state.num -=n
    }
  },
      
<template>
  <div id="app">
    //mutations 改变 store 中的状态
    //@click="add  不传参数  则默认递增递减1    @click="add(5)  如果穿参数  则在 commit("add",n) 里面用第二个参数 n 接收
    <input type="button" value="增加" @click="add(5)">
    <h2>{{$store.state.num}}</h2>
    <input type="button" value="减少" @click="remove(5)">
  </div>
</template>

        
        
        
    // mutations 改变 store 中的状态
	//   n  用来接收 传过来的参数
  /* methods: {
    add(n){
      this.$store.commit("add",n)
    },
    remove(n){
      this.$store.commit("remove",n)
    }
  }, */

// 简化写法  ：  简化写法不用 接收参数

methods: mapMutations(["add","remove"])
```

## 存储Cookie：

```js
//  main.js  代码

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import Cookie from 'js-cookie'
//   挂载全局axios
Vue.prototype.axios = axios
//   挂载全局cookie
Vue.prototype.Cookie = Cookie
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



<input type="button" value="cookie存储" @click="setCookie">

    
methods: {
    // 点击事件 点击后存储 cookie
  setCookie(){
    this.Cookie.set('key', 'keyZHI', { expires: 7 });
  }
},
```

#### 整个代码  store.js 文件代码：

```js
import Vue from 'vue'
import Vuex from 'vuex'
import {Add} from './type'
import Axios from 'axios'
Vue.use(Vuex)
// 各个组件共享的数据都在 Store 里面
export default new Vuex.Store({
  state: {
    name:"这是vuex",
    num:130,
    list:[
      {
        id:1,
        title:"vuex",
        completed:true,
      },
      {
        id:2,
        title:"react",
        completed:true,
      },
      {
        id:3,
        title:"会了没",
        completed:false,
      }
    ]
  },
  // getters 是store的计算属性  getters  来监听 state 里面的数据变化
  getters:{
    // num(state){
    //   return (++state.num)
    // },
    completed(state){
      return state.list.filter(item=>item.completed)

      // 复习用
      return state.list.filter(item=>item.id ==3)
    },

    // 在 getters 里面获取 getters 里面的数据
    listLength(state,getters){
      return getters.completed.length
    },

    //   需求：输入 id 为几 就返回第几个数据  
    // 返回的是一个函数  id 默认为 1  也可以在调用的时候传参

    getId:state=>(id=1)=>state.list.find(item=>item.id==id)
    // getId(state){
    //   return  id=>state.list.find(item=>itemid==id)
    // }
  },

  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutations
  mutations: {
    // add(state,n=1){
    //   state.num +=n
    // },
    [Add](state,n=1){
      state.num +=n
    },
    remove(state,n=1){
      state.num -=n
    },
    updataState(state,ef){
      state.list = ef
    },
    fatchTodos(state,ef){
      state.list = ef
    }
  },
  // Action 是用于处理异步提交 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作
  actions: {
    AddAsync(context){
      setTimeout(()=>{
        context.commit("add")
      },2000)
    },
    // addAsync({commit},abc){
    //   setTimeout(()=>{
    //     commit("add",abc)
    //   },2000)
    // },
    removeAsync({commit},abc){
      setTimeout(()=>{
        commit("remove",abc)
      },2000)
    },
    async getTodos({commit}){
      const result = await Axios.get("http://jsonplaceholder.typicode.com/photos?_limit=10")
      // .then(res=>{ console.log(res);})
      // console.log(result);
      
      commit("updataState",result.data)

    },
    fatchTodos({commit},abc){
      return new Promise((resolve,reject)=>{
        fetch("http://jsonplaceholder.typicode.com/photos?_limit=2")
          .then(res=>res.json())
          .then(r=>{commit("fatchTodos",r)})
      })
    }
  }
})

```

#### App.vue文件代码：

```js
<template>
  <div id="app">
    <!-- 任意组件可以通过 this.$store.state 拿取 state 里面相对应的数据 -->
    <h1>{{$store.state.name}}</h1>      
    <h2> {{msg}}</h2>
    <h2> {{name}}</h2>
    <h2> {{list}}</h2>


    <!-- 任意组件可以通过 this.$store.getters 拿取 getters 里面相对应的数据 -->
    <!-- <h2> {{num}}</h2> -->
    <h2> {{completed}}</h2>
    <h2> {{listLength}}</h2>
    <!--  这里可以传参 -->
    <h2> {{getId(2)}}</h2>


    <!-- mutations 改变 store 中的状态-->
    <!-- @click="add  不传参数  则默认递增递减1    @click="add(5)  如果穿参数  则在 commit("add",n) 里面用第二个参数 n 接收-->
    <input type="button" value="增加" @click="add(5)">
      <h2>{{$store.state.num}}</h2>
    <input type="button" value="减少" @click="remove(5)">
    <br/>
    <input type="button" value="增加" @click="addAsync(3)">
    <input type="button" value="增加" @click="AddAsync(3)">
      <h2>{{$store.state.num}}</h2>
    <input type="button" value="减少" @click="removeAsync(3)">
    <input type="button" value="异步获取数据getTodos" @click="getTodos(3)">
    <input type="button" value="异步获取数据fatchTodos" @click="fatchTodos(3)">
    <br/>
    <input type="button" value="cookie存储" @click="setCookie">
  </div>
</template>
<script>

//  vuex 的装饰器
// mapState  用来简化 state 代码
// mapGetters  用来简化 getters 代码
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'



export default {
  name:"App",
  data() {
    return {
      msg:this.$store.state.name
    }
  },

  // 可以在 computed  对数据进行处理

  // 拿取 store 中 state 的数据   通过 this.$store.state  直接调用
  /* computed:{
    name(){
      return this.$store.state.name + "比 react 简单多了"
    },
    list(){
      return this.$store.state.list.filter(item=>item.completed)
    },
    num(){
      return this.$store.getters.num
    }
  }, */


   // mapState  用来简化 state 代码  可以传入一个对象  也可以是 一个数组 
  //    一般情况下 只拿取数据的时候  就用 数组的方法
  //   如果要对数据进行处理  就用 对象的方法 

  // 简化方法一：  数组方法

  // computed:mapState(["name","list",])

// 简化方法二：  对象方法
// computed:mapState({
//   name(state){
//     return state.name + "比 react 简单多了"
//   },
//   list(state){
//     return state.list + "比 react 简单多了"
//   },
// })

  
  

  // 拿取 store 中 getters 的数据  通过 this.$getters.state  直接调用
    /* computed:{
      num(){
        return this.$store.getters.num
      },
      completed(){
        return this.$store.getters.completed
      },
      listLength(){
        return this.$store.getters.listLength
      },
      getId(){
        return this.$store.getters.getId
      }
    }, */

  // mapGetters  用来简化 getters 代码
  // computed:mapGetters(["num","completed","listLength","getId"])



// mutations 改变 store 中的状态
//   n  用来接收 传过来的参数
  /* methods: {
    add(n){
      this.$store.commit("add",n)
    },
    remove(n){
      this.$store.commit("remove",n)
    }
  }, */

// 简化写法  ：  简化写法不用 接收参数

// methods: mapMutations(["add","remove"])

// 展开运算符

computed: {
  ...mapState(["name","list",]),
  ...mapGetters(["completed","listLength","getId"])
},
methods: {
  ...mapMutations(["add","remove"]),
  // ...mapActions(["addAsync","reomveAsync"])
  AddAsync(){
    this.$store.dispatch("AddAsync")
  },
  // addAsync(abc){
  //   this.$store.dispatch("addAsync",abc)
  // },
  removeAsync(abc){
    this.$store.dispatch("removeAsync",abc)
  },
  getTodos(){
    this.$store.dispatch("getTodos")
  },
  fatchTodos(abc){
    this.$store.dispatch("fatchTodos",abc)
  },
  setCookie(){
    this.Cookie.set('key', 'keyZHI', { expires: 7 });
  }
},

}
</script>

```

## vuex自己封装方法：

```js
创建一个文件夹  utils   里面编写自己封装的vuex方法

const shopTools = {}

//获取查找 不能直接存   只能存字符串  不能存数据 和对象   要转换成字符串    
let shop = JSON.parse(window.localStorage.getItem("shopInfo") || "{}")


// 更新并且存储商品数量  添加到购物车 判断购物车里是否有这种商品  有则数量增加  无则商品和数量都增加
// goods 是传进来的对象 键值对    商品ID 和 商品数量   {id ：num}  {id:5654132,num:5}
shopTools.addUpdata = function(goods){
    if (shop[goods.id]) {
        shop[goods.id] += goods.num
    }else{
        shop[goods.id] = goods.num
    }
}


// 本地存储商品   也就是添加
shopTools.saveShops = function(){
    window.localStorage.setItem("shopInfo",JSON.stringify("shop"))
}

// 本地删除商品 
shopTools.delete = function(id){
    // 删除一个对象属性 用delete
    delete shop[id]
    this.saveShops()
}

// 渲染添加到购物车里面的商品    获取商品的数据
shopTools.getShop = function(){
    return JSON.parse(window.localStorage.getItem("shopInfo")||"{}")
}

export default shopTools
```

### store里面调用：

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import shopTools from '../utils/shoptool'
export default new Vuex.Store({
  state: {

  },
  getters:{
// 第二 接着从本地拿取商品数据 渲染   拿取数据要 return    在购物车组件里面调用
    naqushuju(){
      return shopTools.getShop()
    }
  },
  mutations: {
    // 第一 点击添加 商品
    tianjiashangping(state,参数){
      console.log(state,参数);  // {id:5654132,num:5}
      shopTools.addUpdata(参数)
      
    }
  },
  actions: {

  }
})

```

#### 所有点击事件：

```js
<van-goods-action-button type="warning" text="加入购物车" @click="jiarugouwuche" />
    
   methods:{
     jiarugouwuche() {
        const {num,id} = this
        console.log(num,id);
        num && this.tianjiashangping({id,num})
     },
     ...mapMutations(["tianjiashangping"])
   }




activated() {
        this.num = 0   //  把点击商品的数量清零
        this.id = 0
        const itemid = this.$route.query.itemid
        this.getInfo(itemid)
    },
    
```

#### 购物车代码：

```js
<template>
    <div>
        购物车
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'Search',
    data() {
        return {
            shopList:[]
        };
    },
    computed: {
        ...mapGetters(["naqushuju"])
    },
    created() {
        console.log(this.naqushuju);   //  {132154:5,546732:8,54655:3}
        const shop = this.naqushuju
        this.shopList = shop
        // 得到对象的一个值   得到id  键名
        let id = Object.keys(shop)
        // 得到对象的一个值   得到num  键值
        let num = Object.values(shop)
        // 循环 id
        id.forEach((item,index) => {
            this.Axios.get("商品地址",{
                itemid:item   //  item是每个商品的ID
            }).then((res)=>{
                console.log(res);
            }).catch(err=> console.log(err))
            
        });
    },
};
</script>
<style scoped lang='less'>
</style>

```

