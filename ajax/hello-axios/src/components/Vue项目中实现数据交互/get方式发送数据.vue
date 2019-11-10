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
        //get方式发送数据
        axios.get("http://jsonplaceholder.typicode.com/posts",{
            params:{
                 pomelo: 'tt',
                 test: 'test'
            }
        }).then(function(response){
            window.console.log(response);
        }).catch(function(error){
            window.console.log(error)
        })
    }    
}
</script>
