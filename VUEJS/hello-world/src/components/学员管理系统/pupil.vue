<template>
     <div>
         <div class="pupi">
             <button class="push" v-on:click="sayPush()">添加</button>
             <table>
                 <tr class="titTr">
                     <th>序号</th>
                     <th>学生名称</th>
                     <th>所在班级</th>
                     <th>操作</th>
                 </tr>
                 <tr class="tr" @click="switchover(index)" v-for="(value,index) in newArr" :key="index">
                     <td>
                         <i v-bind:class="src"></i>
                         <span>{{index+1}}</span>
                     </td>
                     <td>
                         <div class="trName oBox" 
                              v-bind:contenteditable="content"
                              @blur="sayBlur"
                         >{{value.name}}</div>
                     </td>
                     <td>
                         <div class="trClass oBox" 
                              v-bind:contenteditable="content"
                              @blur="sayBlur"
                         >{{value.grade}}</div>
                     </td>
                    <td class="tdBtn">
                        <button class="tdBtn_left" v-on:click="sayCompile()">编辑</button>
                        <button class="tdBtn_right" v-on:click="saySplice(index)">删除</button>
                    </td>
                 </tr>
             </table>
         </div>
     </div>
</template>

<script>
    //引入jQuery npm install jquery --save
    import $ from 'jquery';
    export default {
        nam:"app",
        data(){
            return{
                goolist:[
                    {
                        count:1,
                        name:"张三",
                        grade:"计算机一班",
                    },
                    {
                        count:1,
                        name:"李四",
                        grade:"计算机二班",
                    }
                ],
                newArr:[],
                content:false,
                isClass:false,
                src:"iconfont iconicon-test onI",
            }
        },
        created(){
            this.newArr = [].concat(this.goolist);
        },        
        methods:{
            //点击添加按钮 添加数据
            sayPush(){
                this.newArr.push(this.goolist[0]);
            },
            //点击删除按钮 删除数据
            saySplice(index){
                this.newArr.splice(index,1);
            },
            //点击编辑按钮 编辑数据
            sayCompile(){
                this.content = true;
                var oTr = document.querySelector(".tr");
                
                oTr.addEventListener('keydown',function(e){
                    e = e || window.event;
                    var which = e.which;
                    if(which === 13){
                        e.preventDefault();
                    }
                },false);
            },
            //失去焦点时触发blur事件 值为false
            sayBlur(){
                this.content = false;
            },
            //点击tr切换类名
            switchover(index){
                $('.tr').eq(index).addClass('on').siblings('tr').removeClass("on");
            }
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .push{
        width: 88px;
        height: 49px;
        border-radius: 10px;
        border: none;
        background-color: #409eff;
        color: #ffffff;
        font-size: 17px;
        cursor: pointer;
    }
    table{
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
    }
    .titTr{
        width: 100%;
        height: 59px;
    }
    .titTr th{
        text-align: left;
        font-size: 17px;
        color: #909399;
        padding-left: 13px;
    }
    .titTr th:nth-child(1){
        width: 226px;
    }
    .titTr th:nth-child(2){
        width: 225px;
    }
    .titTr th:nth-child(3){
        width: 225px;
    }
    .tr{
        width: 100%;
        height: 64px;
        border-top: 1px #ebeef5 solid;
        border-bottom: 1px #ebeef5 solid;
    }
    .tr td{
        border-spacing: 0;
    }
    .tr td span{
        padding-left: 5px;
    }
    .trName,.trClass{
        width: 58px;
        height: 36px;
        font-size: 13px;
        text-align: center;
        line-height: 35px;
        background-color: #ecf5ff;
        color: #409eff;
        border-radius: 5px;
        cursor: default;
        margin-left: 14px;
    }
    .trName{
        width: 58px;
    }
    .trClass{
        width: 104px;
    }
    .tdBtn button{
        width: 70px;
        height: 34px;
        font-size: 13px;
        border-radius: 5px;
        cursor: pointer;
    }
    .tdBtn .tdBtn_left{
        background-color: #ffffff;
        border: 1px #dcdfe6 solid;
        color: #606266;
        margin-left: 20px;
    }
    .tdBtn .tdBtn_right{
        background-color: #f56c6c;
        border: none;
        color: #fff;
        margin-left: 11px;
    }
    .onI{
        padding-left: 15px;
    }
    .on{
         background-color: #f5f7fa;
    }
</style>