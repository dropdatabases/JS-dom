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
        //post方式发送数据
        axios.post("http://jsonplaceholder.typicode.com/posts",{
            pomelo: 'tt',
            test: 'test',
        }).then(response=>{
            window.console.log(response);
        }).catch(error=>{
            window.console.log(error);
        })
    }    
}
</script>
