<template>
    <div>
        <h3>商品列表</h3>
        <table>
            <tr>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>商品数量</th>
                <th>添加至购物车</th>
            </tr>
            <tr v-for="(value,index) in goodsList" :key="index">
                <td>{{value.name}}</td>
                <td>{{value.price}}</td>
                <td>
                    <button v-on:click="saydel(index)">-</button>
                    <span>{{value.count}}</span>
                    <button v-on:click="sayAdd(index)">+</button>
                </td>
                <td>
                    <button v-on:click="sayCat(index)">添加购物车</button>
                </td>
            </tr>
        </table>
        <h3>购物车</h3>
        <table>
            <tr>
                <th>商品名称</th>
                <th>商品单价</th>
                <th>商品数量</th>
                <th>删除</th>
            </tr>
            <tr v-for="(value,index) in newArr" :key="index">
                <td>{{value.name}}</td>
                <td>{{value.price}}</td>
                <td>
                    <button v-on:click="delbtn(index)">-</button>
                    <span>{{value.count}}</span>
                    <button v-on:click="delAdd(index)">+</button>
                </td>
                <td>
                    <button v-on:click="saySplice(index)">删除</button>
                </td>
            </tr>
        </table>
        <button v-on:click="sayJz()">结账</button>
    </div>
</template>

<script>
    export default {
        name:"app",
        data(){
            return{
                //初始的老数据
                goodsList:[
					{
						name:"香蕉",
						price:10.5,
						count:0
					},
					{
						name:"苹果",
						price:5.7,
						count:0
					},
					{
						name:"鸭梨",
						price:2.1,
						count:0
					}
                ],
                //新添加的新数据
                newArr:[

                ],
            }
        },
        methods:{
            sayAdd(index){
                this.goodsList[index].count ++;
            },
            saydel(index){
                if(this.goodsList[index].count > 0){
                    this.goodsList[index].count--;
                }
            },
            //克隆对象 预防引用值操作地址相同的问题
            clone(data){
                var newObj = {};
                for(var i in data){
                    newObj[i] = data[i];
                }
                return newObj;
            },
            //添加至购物车
            sayCat(index){
                var obj = this.clone(this.goodsList[index]);

                if(this.goodsList[index].count ===0){
                    alert("请添加商品的数量！");
                    return;
                }
                for(var i=0;i<this.newArr.length;i++){
                    if(this.goodsList[index].name === this.newArr[i].name){
                        this.newArr[i].count += this.goodsList[index].count;
                        return;
                    }
                }

                this.newArr.push(obj);
            },
            delAdd(index){
                this.newArr[index].count++;
            },
            delbtn(index){
                if(this.newArr[index].count > 0){
                    this.newArr[index].count--;
                }
            },
            //点击按钮 删除购物车里面的数据
            saySplice(index){
                this.newArr.splice(index,1);
            },
            //结账功能
            sayJz(){
                var num = 0;
                this.newArr.map((value)=>{
                    var jz = value.price *= value.count;
                    num += jz;
                });
                alert(`一共消费${num}元`);
                return;
            }
        }
    }
</script>