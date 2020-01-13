<template> 
     <div>
         <h2>child子级部分</h2>
         <p>{{data}}</p>

         <button v-on:click="sayClick">向父级传值</button>
     </div>
</template>

<script>
    export default {
        props : ["data"],
        methods:{
            sayClick(){
                //使用$emit自定义事件里面的第二个参数 传值
                this.$emit("sayEmit","我是利用emit传递过来的值");
            }
        }
    }
</script>