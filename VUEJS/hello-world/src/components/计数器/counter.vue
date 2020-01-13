<template>
     <!-- 组件的应用 -->
     <!-- template标签中添加的是html代码 -->
     <div id="app">
         <p>{{count}}</p>
         <div class="btn" v-on:click="btn1()">{{btnLeft}}</div>
         <div class="btn" v-on:click="btn2()" style="margin-left:5px">{{btnRightL}}</div>
     </div>
</template>

<script>
    // 导入其他组件，定义该组件的数据、方法等
    // script标签中添加的是JavaScript代码
    export default {
        name:"counter",
        data(){
            return{
                count:0,
                btnLeft:"+",
                btnRightL:"-",
            }
        },
        methods:{
            //点击增加的方法
            btn1(){
                this.count++
            },
            //点击减少的方法
            btn2(){
                if(this.count === 0)return;
                this.count--;
            }
        }
    }
    //点击终端 中的运行任务 中的 npm:serve 运行任务 复制生成的网页地址 如http://localhost:8080/
</script>

<style scoped>
     /* 组件的样式 */
     /* style标签中添加的是CSS样式。 */
     *{
         margin: 0;
         padding:0;
     }
     p{
         font-size: 30px;
     }
     .btn{
         float: left;
         width: 20px;
         height: 20px;
         border: 1px red solid;
         cursor: pointer;
         text-align: center;
         line-height: 20px;
     }
</style>