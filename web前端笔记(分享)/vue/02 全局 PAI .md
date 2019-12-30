### extend 

```js
是VUE上的 API可以扩展出一个组件
<body>
    <div id="app">
      <abc></abc>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        // extend 是VUE上的 API可以扩展出一个组件
         const extend = Vue.extend({

            template:`<h2><a :href="url">{{con}}</a></h2>`,
            data(){
             return{
                url:"https://www.baidu.com/",
                con:"extend"
             }
            }
         })
         console.log(new extend());
        //  new extend().$mount("abc")  和 abc 标签关联
         new extend().$mount("abc")
    </script>

  </body>
```

### nextTick   

```js
nextTick 相当于一个延时器  在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

 <body>
    <div id="app">
      <h2>{{msg}}</h2>
    </div>
    <script src="./js/vue.js"></script>
    <script>

      //  nextTick 相当于一个延时器  在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
        const vm = new Vue({
          el:"#app",
          data(){
            return{
              msg:"nexTick"
            }
          }
        })
        vm.msg="改变nexTick"
        // 当DOM视图渲染完成后 才可以通过 nextTick 操作DOM
        Vue.nextTick(function () {
          console.log("DOM已经更新完成");
        })
        Vue
          .nextTick()
          .then(()=>{console.log("就可以操作DOM了......");})
    </script>

  </body>
```

## set

```js
//  set(target,key,val)  第一个参数是目标 arr  第二个是 下标  第三个是要改变成什么

  <body>
    <div id="app">
      <h2>{{msg}}</h2>
      <h3 v-for="item in arr" >{{item}}</h3>
      <button @click="click" >去掉一个</button>
    </div>
    <button onclick="handleclick()">改变</button>
    <script src="./js/vue.js"></script>
    <script>

        const vm = new Vue({
          el:"#app",
          data(){
            return{
              msg:"set",
              arr:["小白","小红","小黑"]
            }
          },
          methods: {
            click(){
              // $set(target,key,val)  第一个参数是目标 arr  第二个是 下标  第三个是要改变成什么
              console.log(this);
              this.$set(this.arr,0,"大大白")
              
            }
          },
        })
        function handleclick(){
          vm.$set(vm.arr,1,"你好")
          // Vue.set(vm.arr,2,"123")
        }
    </script>

  </body>
```

### delete

```js
  <body>
    <div id="app">
      <h2>{{msg}}</h2>
      <h3 v-for="item in arr" >{{item}}</h3>
      <button @click="click" >去掉一个</button>
    </div>
    <button onclick="handleclick()">去掉最后的</button>
    <script src="./js/vue.js"></script>
    <script>

        const vm = new Vue({
          el:"#app",
          data(){
            return{
              msg:"set",
              arr:["小白","小红","小黑"]
            }
          },
          methods: {
            click(){
              // $delete(target,key)  第一个参数是目标 arr  第二个是 下标  
              console.log(this);
              this.$delete(this.arr,0)
              
            }
          },
        })
        function handleclick(){
          vm.$delete(vm.arr,1)
          // Vue.delete(vm.arr,2)
        }
    </script>

  </body>
```

###  自定义指令 directive

```js
  <body>
    <div id="app">
      <h2>{{msg}}</h2>
      <h2 v-lsl="con"></h2>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        // 注册指令
        Vue.directive("lsl",function(el,bind){
          console.log(el,bind);
          el.innerText = bind.value
          el.style.color= "red"
        })
        const vm = new Vue({
          el:"#app",
          // directive   配置一套自己的指令
          data(){
            return{
              msg:"directive",
              con:"自己封装的一套指令"
            }
          },
          methods: {
          },
        })
    </script>

  </body>
```

### 过滤器 filter

```js
 <body>
    <div id="app">
      <h2>{{msg | myfilter}}</h2>
      <ul>
        <li v-for="item in info" :key = "item.id">{{item.name}}</li>
      </ul>
      <button @click="handleclick"> 点击过滤</button>
      <div>{{price}}</div>
      <button @click="handlec">点击过滤qian</button>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        const vm = new Vue({
          el:"#app",
          // filter   过滤器
          // 注册过滤器
          filters:{
            myfilter(value){
              // 这里写规则   value代表 msg 变量
              console.log(value);
              
              return value.split("").reverse().join("")
            },
          },
          
          data(){
            return{
              msg:"filter",
              info:[
                { id:1,name:"书包"},
                { id:2,name:"小雨"},
                { id:3,name:"你好"}
              ],
              price:"99"
            }
          },
          methods: {
            // 通过点击 调用自己所写的过滤方法
            handleclick(){
              this.info = this.info.filter(item=>item.id !== 3)
            },
            handlec(){
              this.price = "$"+this.price+"元"
            }

          },
        })
    </script>

  </body>
```

#### 过滤器 Vue.filter全局过滤器

```js
  <body>
    <div id="app">
      //<!-- 主要  注意{{price | myprice}} -->
      <h2>{{price | myprice}}</h2>
    </div>
    <script src="./js/vue.js"></script>
    <script>
			// filter   过滤器
          // 注册过滤器  value 是price变量 是99
      Vue.filter("myprice",function(value){
        console.log(value);
        return "$"+value+"元"
      })
        const vm = new Vue({
          el:"#app",
          
          
          data(){
            return{
              price:"99"
            }
          },
        })
    </script>

  </body>
```

### 注册全局组件：

```js
<body>
    <div id="app">
		<h2 >{{des}}</h2>
		<!-- 用 - 分割 大写变小写 比如   headNav 写成 head-nav -->
		<head-nav></head-nav>
    </div>
    <script src="./js/vue.js"></script>
    <script>
		Vue.component(
			"headNav",   //组件的名称用驼峰命名  也可以使用 head-nav 来命名
			{
				template:`<h1 style="color: #ff0">{{con}}</h1>`,
				// 在这个组件里面配置变量
				data() {
					return {
						con:"headNav组件a a a"
					}
				},
			}
		)
        const vm = new Vue({
          el:"#app",
          data(){
            return{
              des:"注册全局组件"
            }
          },
        })
    </script>

  </body>
```

### 局部组件：

```js
<body>
    <div id="app">
      <h2>{{des}}</h2>
      <v-menu></v-menu>
      <v-lsl></v-lsl>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        const vm = new Vue({
          el:"#app",
          data(){
            return{
              des:"注册全局组件"
            }
          },
          components:{

            vMenu:{
              template:` <h2>这是局部组件</h2>`,
            },
              
            // 两种写法
            vLsl:{
              template:` <h2>{{des}}</h2>`,
              data() {
                return {
                  des:"这还是一个局部组件"
                }
              },
            }

          }
        })
    </script>

  </body>
```

# 组件传值：

```js
<body>
    <div id="app">
      <h2>{{des}}</h2>
      //<!-- 第三部 父组件把 变量或者常量 传递给子组件 v-menu是子组件-->
      <v-menu :des="des" :title="title" lsl="这是常量" my-lsl="如果是带 - 的常量 接收时要用驼峰命名"></v-menu>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        const title = "这是组件传值"  //  /第一步  自定义一个变量

        const vm = new Vue({
          el:"#app",
          data(){
            return{
              des:"组件传值",
              title,      //第二部    vm接受变量
            }
          },
          components:{
            // 定义组件  vMenu
            vMenu:{
              data(){
                return{
                  msg:"这是组件内部值"
                }
              },
              //   第五步   渲染数据
              template:`
                <div>
                   <h1>这是v-menu组件 {{title}} {{msg}} {{lsl}} {{des}} {{myLsl}}</h1>
                </div>
              `,

              // 第四步  子组件用 props 接收 父组件传递过来的 变量或数据
                // 数组接收
              props:["title","des","lsl","myLsl"]

              // 对象接收
              // props:{
              //   title:String,
              //   des:String,
              //   lsl:{
              //     type:String,
              //     default:"",
              //     required:true,
              //     validator:function(value){
              //       return value
              //     }
              //   },
              //   myLsl:String
              // }
            },
          }
        })
    </script>

  </body>
```

## 父组件引用子组件：

```js
<body>
    <div id="app">
      <h2 v-text="des">{{des}}</h2>
      <p-con></p-con>
      
    </div>
    <script src="./js/vue.js"></script>
    <script>
      // 子组件
        let child = {
          template:' <div> child 这是子组件  {{ppp}}</div> ',
          props:["ppp"]
        }

      // 父组件
        let parent = {
              data() {
                return {
                  ppp:"这是父组件传递的值"
                }
              },
              template:'<div> parent这是父组件 <c-con :ppp="ppp"></c-con> </div>',

              // 在父组件里面生成子组件
              components:{
                  // 定义子组件
                cCon:child
              }
         }


        let vm = new Vue({
          el:"#app",
          data(){
            return{
              des:"父组件引用子组件",
            }
          },
          components:{
            // 定义父组件
            pCon:parent
          }
        })
    </script>

  </body>
```

### component 根据值不同 显示不同的组件：

```js
<body>
    <div id="app">
      <h2>{{des}}</h2>
      <component :is="componentA"></component>
      <component :is="componentB"></component>
      <button @click="handleClick">改变值</button>
      <component :is="toggle"></component>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        // 模块化

        let componentA ={
           template:`<h2 style="color:red">这是组件A</h2>`
        }
        let componentB ={
           template:`<h2 style="color:blue">这是组件B</h2>`
        }


        let vm = new Vue({
          el:"#app",
          data(){
            return{
              des:"component 根据值不同 显示不同的组件",
              componentA,
              componentB,
              toggle:componentB,
              arr:[componentA,componentB]
            }
          },
          components:{
            // 注册组件
            componentA,
            componentB
          },
          methods: {
            handleClick(){
                //  随机取整
              this.toggle = this.arr[Math.random()*2 | 0]
            }
          },
        })
    </script>

  </body>
```



### vue 使用 jq 及修改插值符号

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>VUE</title>
	//	 引入 jq 
    <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
  </head>
  <style>
  </style>
<body>
    <div id="app">
      <h2 >{{des}}</h2>
      <ul>
        <li v-for="item in todos" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
    <script src="./js/vue.js"></script>
    <script>
        // 在Vue原型上面定义$可以更好的使用jQuery
        Vue.prototype.$ = $

        let vm = new Vue({
          el:"#app",
          data(){
            return{
              des:"component 根据值不同 显示不同的组件",
              todos:[]
            }
          },
          mounted() {
            console.log(this);
            this.$.get("http://jsonplaceholder.typicode.com/todos?_limit=5")
              .then((res)=>{
                console.log(res)
                this.todos = res
                })
          },
        })
    </script>

  </body>
```

