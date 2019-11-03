
Vue.component("app",{
    template:`
        <div>
            <titList v-on:childChangeShow="changeShow"></titList>
            <classList v-if="isShow"></classList>
            <student   v-else></student>
        </div>
    `,
    data(){
        return{
            isShow:true,
        }
    },
    methods:{
        changeShow(childData){
            // childData 子组件传递的参数
            this.isShow = childData;
        }
    }
})

//学员管理系统 列表选项和标题
Vue.component("titList",{
    props:["theClass","students","btnTex"],
    template:`
        <div class="clear">
            <h1 class="title">学员管理</h1>
            <div class="btn">
                <div class="btn_left"  
                     v-bind:theClass="the" 
                     v-on:click="handleClick(the)"
                >{{the}}</div>
                <div class="btn_right" 
                     v-bind:students="stu"
                     v-on:click="handleClick(stu)"
                >{{stu}}</div>
            </div>
        </div>
    `,
    data(){
        return{
            the:"班级列表",
            stu:"学生列表",
        }
    },
    methods:{
        handleClick(data){
            let result = null;
            if(data === '班级列表') result = true;
            if(data === '学生列表') result = false;
            this.$emit('childChangeShow',result);
        }
    }
})

//学员管理系统 班级列表内容
Vue.component("classList",{
    template:`
        <div class="list">
            <button class="addition" 
                    v-bind:btnTex="btntext"
                    v-on:click="sayPush"
            >{{btntext}}</button>
            <table class="table">
                <tr class="trTitle">
                    <th>序号</th>
                    <th>班级名称</th>
                    <th>操作</th>
                </tr>
                <tr class="tr"
                    v-for="(value,index) in newGooList"
                    >
                    <td>
                        <i v-bind:class="iClass"></i>
                        <span>{{index+1}}</span>
                    </td>
                    <td>
                        <div class="grade" 
                             v-bind:contenteditable="itable" 
                             v-on:blur="sayBlur"
                        >{{value.grade}}</div>
                    </td>
                    <td>
                        <div class="tdBtn">
                            <button class="tdBtn_left" v-on:click="compile">编辑</button>
                            <button class="tdBtn_right" v-on:click="spliceList(index)">删除</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    `,
    data(){
        return{
            btntext:"添加",
            iClass:"iconfont icon-icon-test on",
            itable:false,
            //初始数据
            gooList:[
                {
                    count:1,
                    grade:"计算机一班",
                },
                {
                    count:2,
                    grade:"计算机二班",
                },
                {
                    count:3,
                    grade:"计算机三班",
                }
            ],
            newGooList:[],
        }
    },
    //在组件初始化的时候把老数组赋值给新数组
    created(){
        this.newGooList = [].concat(this.gooList);
    },
    methods:{
        //点击编辑按钮，编辑 并且让contenteditable可以编辑
        compile(){
            let grade = document.querySelector(".grade");
            this.itable = true;
            //监听键盘事件 阻止按下回车键换行
            grade.addEventListener('keydown',(e)=>{
                e = e || window.event;
                if(e.keyCode === 13){
                    e.preventDefault();
                }
            },false);
        },
        //失去焦点 让div不可以编辑
        sayBlur(){
            this.itable = false;
        },
        //点击删除按钮，删除
        spliceList(index){
            this.newGooList.splice(index,1);
        },
        //点击添加按钮 添加数据
        sayPush(){
            this.newGooList.push(this.gooList[0]);
        },
    },
});

//学员管理系统 学员列表内容
Vue.component("student",{
    template:`
        <div class="name">
            <button class="addition" v-on:click="sayPush">添加</button>
            <table class="nameTable">
                <tr class="trTitle">
                    <th>序号</th>
                    <th>学员名称</th>
                    <th>所在班级</th>
                    <th>操作</th>
                </tr>
                <tr class="trName" v-for="(value,index) in newGooNameList">
                    <td>
                        <i v-bind:class="iClass"></i>
                        <span>{{index+1}}</span>
                    </td>
                    <td>
                        <div class="grade" 
                             v-bind:contenteditable="itable"
                             v-on:blur="sayBlur"
                        >{{value.name}}</div>
                    </td>
                    <td>
                        <div class="grade" 
                            v-bind:contenteditable="itable"
                            v-on:blur="sayBlur"
                        >{{value.grade}}</div>
                    </td>
                    <td>
                        <div class="tdBtn">
                            <button class="tdBtn_left" v-on:click="compile">编辑</button>
                            <button class="tdBtn_right" v-on:click="sayDele(index)">删除</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    `,
    data(){
        return{
             iClass:"iconfont icon-icon-test on",
             itable:false,
             gooNameList:[
                 {
                     count:1,
                     name:"张三",
                     grade:"计算机一班",
                 },
                 {
                     count:2,
                     name:"李四",
                     grade:"计算机二班",
                 }
             ],
             newGooNameList:[],
        }
    },
    created() {
        this.newGooNameList = [].concat(this.gooNameList);
    },
    methods:{
        //点击删除按钮 删除
        sayDele(index){
            this.newGooNameList.splice(index,1);
        },
        //点击编辑按钮 编辑
        compile(){
            let grade = document.querySelector(".grade");
            this.itable = true;
            //监听键盘事件 阻止按下回车键换行
            grade.addEventListener('keydown',(e)=>{
                e = e || window.event;
                if(e.keyCode === 13){
                    e.preventDefault();
                }
            },false);
        },
        //失去焦点 让div不可以编辑
        sayBlur(){
            this.itable = false;
        },
        //点击添加按钮 添加数据
        sayPush(){
            this.newGooNameList.push(this.gooNameList[0]);
        }
    }
     
})
new Vue({
    el:"#app",
})