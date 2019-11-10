<template>
    <div>

    </div>
</template>

<script>
//引入axios
import axios from 'axios';
export default {
    name:"HelloWorld",
// created:vue生命周期中的钩子函数，在这个时间点，data中的数据已经注入到响应式系统中
    created(){
        axios.post("http://jsonplaceholder.typicode.com/posts",{
             firstName: 'Fred',
             lastName: 'Flintstone'
        }).then(function(response){
            window.console.log(response);
        }).catch(function(error){
            window.console.log(error);
        })

        // 注意: 如果发送请求时，发现传递的参数是对象，那么可用如下方式传参数
        var params = new URLSearchParams();
        params.append("title","眼睛");
        params.append("id","1");
        axios.post("http://jsonplaceholder.typicode.com/posts",params)
            .then(function(response){
                window.console.log(response);
            }).catch(function(error){
                window.console.log(error);
            })
    }
}
</script>

