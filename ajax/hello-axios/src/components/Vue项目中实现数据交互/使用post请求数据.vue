<template>
    <div>

    </div>
</template>

<script>
//引入axios
import axios from 'axios';

export default {
    name:"app",
    created(){
        axios({
            //用post方式请求数据
            method:"post",
            //请求数据的URL路径
            url:"http://jsonplaceholder.typicode.com/posts",
        }).then(function(response){
            //成功触发promise中的then方法
            window.console.log(response);
        }).catch(function(error){
            //失败触发promise中的catch方法
            window.console.log(error)
        })
    }    
}
</script>
