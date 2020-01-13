<template>
     <div id="app">
         <h3>水果列表</h3>
         <ul>
              <!-- 在v-for的时候必须要写上 :key这个值 -->
             <li 
                v-for="(value,index) in listArr" :key="index"
                v-on:click="saySplice(index)"
             >{{value}}</li>
         </ul>
         <form action="#" v-on:submit.prevent="saySubmit()">
            <input type="text" v-model="model">
            <input type="submit" value="添加">
         </form>
     </div>
</template>

<script>
    export default {
       name:"app",
       data(){
         return{
            listArr:["香蕉","苹果","鸭梨","榴莲"],
            model:"",
         }
       },
       methods:{
          //点击添加按钮 添加数据
          saySubmit(){
              if(this.model === '')return;
              this.listArr.push(this.model);
          },
          //删除列表内容
          saySplice(index){
             this.listArr.splice(index,1);
          }
       }
    }
</script>

<style scoped>
    li{
      cursor: pointer;
    }
</style>
