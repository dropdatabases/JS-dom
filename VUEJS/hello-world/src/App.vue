<template>
  <div id="app">
       <!-- <child 
              v-bind:data="str"
              v-on:sayEmit="sayEmitClick"
       ></child> -->
       <tit></tit>
  </div>
</template>

<script>
    //  import child from './components/组件传值/Child.vue';

    //  export default {
    //      name : "app",
    //      components : {
    //          child,
    //      },
    //      data(){
    //        return{
    //           str:"我是用props方式传递过来的值"
    //        }
    //      },
    //      methods : {
    //         // 利用emit传递过来的值 作为形参到data这个属性里面
    //          sayEmitClick(data){
    //              document.write(data);
    //          }
    //      }
    //  }

    /*
      父组件向子组件传值成功 总结：
        子组件在props中创建一个属性，用以接收父组件传过来的值  
        父组件中注册子组件  
        在父组件里面的子组件标签中添加子组件props中创建的属性  
        把需要传给子组件的值赋给该属性


      子组件向父组件传值成功 总结


      子组件中需要以某种方式例如点击事件的方法来触发一个自定义事件  
      将需要传的值作为$emit的第二个参数，该值将作为实参传给响应自定义事件的方法  
      在父组件中注册子组件并在子组件标签上绑定对自定义事件的监听  

      在通信中，无论是子组件向父组件传值还是父组件向子组件传值，
      他们都有一个共同点就是有中间介质，子向父的介质是自定义事件，父向子的介质是props中的属性。
      抓准这两点对于父子通信就好理解了

      同级组件传值
      vue 中没有直接子对子传参的方法，建议将需要传递数据的子组件，都合并为一个组件
      如果一定需要子对子传参，可以先从传到父组件，再传到子组件
    */
</script>

<script>
    import tit from './components/学员管理系统/tit.vue';

    export default {
      name : "app",
      components : {
         tit,
      },
    }
    //在运行VUE项目的时候 需要window.console.log(值即可)在控制台中打印你想看的值
</script>
<style>

</style>
