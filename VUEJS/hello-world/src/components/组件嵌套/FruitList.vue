<template>
     <p class="p">{{str}}</p>
</template>

<script>
     export default {
         name:"FruitList",
         data(){
             return {
                 str:"我是FruitList的组件"
             }
         }
     }
</script>

<style scoped>
    .p{
        color: blue;
    }
</style>