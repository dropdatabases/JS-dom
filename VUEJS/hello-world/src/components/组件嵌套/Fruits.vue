<template>
    <div id="app">
        <p class="oP">{{str}}</p>
        <!-- 第三步调用FruitList组件 -->
        <FruitList></FruitList>
    </div>
</template>

<script>
    //第一步使用 import指令 引入FruitList.vue的文件
    import FruitList from '../组件嵌套/FruitList.vue';
    export default {
        name:"app",
        data(){
            return {
                str:"我是Fruits的组件",
            }
        },
        components:{
            //第二步在components中全局组成FruitList.vue的组件
            FruitList,
        }
    }
</script>

<style scoped>
    .oP{
        color: red;
    }
</style>
