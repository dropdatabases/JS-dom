<template>
  <div>
  
  </div>
</template>

<script>
//引入axios
import axios from 'axios';
export default {
  name: 'HelloWorld',
  // created:vue生命周期中的钩子函数，在这个时间点，data中的数据已经注入到响应式系统中
  created(){
     // 发送GET请求
     axios.get("http://jsonplaceholder.typicode.com/posts",{
       params:{
         title:"眼睛",
       }
     }).then(function(response){
        this.goodsList = response.data;//response.data才是真正返回的后台数据
     }).catch(function(error){
        window.console.log(error)
     })
  }
}
</script>

<style scoped>
 
</style>
