<template>
    <div id="app">
        <h1 class="title">学生管理</h1>
        <div class="btnBox">
            <button class="grade" v-on:click="sayPupil()">班级列表</button>
            <button class="student" v-on:click="sayStudent()">学生列表</button>
        </div>
        <student v-if="is"></student>
        <pupil v-else></pupil>
    </div>
</template>

<script>
    import student from "./student.vue";
    import pupil from "./pupil.vue";

    export default {
        name:"app",
        components:{
            student,
            pupil,
        },
        data(){
            return{
                is:true,
            }
        },
        methods:{
            sayPupil(){
                this.is = true;
            },
            sayStudent(){
                this.is = false;
            }
        },
    }
</script>

<style>
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .title{
        margin-left:54%;
        font-size: 49px;
        color: #0000ff; 
    }
    .btnBox{
        margin-left: 43.5%;
        margin-top: 60px;
    }
    .btnBox button{
        width: 250px;
        height: 76px;
        color: #606266;
        font-size: 23px;
        background-color: transparent;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
    .btnBox .grade{
        border: 1px #c2e7b0 solid;
        background-color: #f0f9eb;
    }
    .btnBox .student{
        border: 1px #f5dab1 solid; 
        background-color: #fdf6ec;
        margin-left: 20px;
    }
</style>