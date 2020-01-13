
<template>
    <div>
        <h3>表单</h3>
        <form action="#" v-on:submit.prevent="sayButton()">
            <label for="name">姓名</label>
            <input type="text" name="for" id="name" placeholder="姓名" v-model="obj.name">
            <br>
            <label for="age">年龄</label>
            <input type="text" name="for" id="age" placeholder="年龄" v-model="obj.age">
            <br>
            <label for="six">性别</label>
            <select name="for" id="six" v-model="obj.six">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
            <br>
            <input type="submit" value="Submit">
        </form>
        <h3>学生列表</h3>
        <table>
            <tr>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>删除</th>
            </tr>
            <tr v-for="(value,index) in newArr" :key="index">
                <td>{{value.name}}</td>
                <td>{{value.age}}</td>
                <td>{{value.six}}</td>
                <td>
                    <button v-on:click="saySplice(index)">删除</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:"tabel",
        data(){
            return {
                obj:{},
                newArr:[],
            }
        },
        methods:{
            //点击提交数据
            sayButton(){
                //克隆一个对象 预防引用值操作相同地址的问题
                var newObj = {};
                for(var i in this.obj){
                    newObj[i] = this.obj[i];
                }
                this.newArr.push(newObj)
            },
            //点击删除 按钮删除数据
            saySplice(index){
                this.newArr.splice(index,1);
            }
        }
    }
</script>