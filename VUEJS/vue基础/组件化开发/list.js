var ous = new Vue();

Vue.component("app",{
    template:`
        <div>
            <tit v-bind:titl="til"></tit>
            <list v-bind:arrS="arr"></list>
            <fom></fom>
        </div>`,
    data:function(){
        return{
            til:"水果列表",
            arr:["香蕉", "西瓜", "苹果"],
        }
    }
})

Vue.component("tit",{
    props:["titl"],
    template:`<h3>{{titl}}</h3>`,
})

Vue.component("list",{
    props:["arrS"],
    template:`
        <ul>
            <li v-for="(value,index) in arrS">
                {{value}}
                <span v-on:click="spliceArr(index)">删除</span>
            </li>
        </ul>
    `,
    mounted:function(){
        var self = this;
        ous.$on("sayFom",function(data){
            if(data==="")return;
            self.arrS.push(data);
        })
    },
    methods:{
        spliceArr:function(index){
            this.arrS.splice(index,1)
        }
    }
})

Vue.component("fom",{
    template:`
        <form v-on:submit.prevent="sayNmae">
            <input type="text" v-model="newModel">
            <input type="submit" value="添加">    
        </form>
    `,
    methods:{
        sayNmae:function(){
            ous.$emit("sayFom",this.newModel);
        },
    },
    data:function(){
        return{
            newModel:"",
        }
    }
})