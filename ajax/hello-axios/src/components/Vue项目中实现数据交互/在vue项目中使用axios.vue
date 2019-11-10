<template>
    <div>

    </div>
</template>

<script>
export default {
    name:"app",
    data(){
        return {
            userId:666,
            token:"",
        };
    },
    created(){
        this.$axios({
            method:"post",
            url:"http://jsonplaceholder.typicode.com/posts",
            data:this.qs.stringify({//这里是发送给后台的数据
                userId:this.userId,
                token:this.token,
            })
        }).then(response=>{
            window.console.log(response)//请求成功返回的数据
        }).catch(error=>{
            window.console.log(error)//请求失败返回的数据
        })
    }
}
</script>
