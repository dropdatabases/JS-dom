# 函数

**什么是函数？？？**

函数是多个参数作用出一个结果，是可以实现相应功能的方法

**函数的特点**

- 可以被重复使用
- 高内聚、低耦合 

## 函数的定义方式

####js定义函数的方式

- 函数表达式
- 函数声明 (必须写上函数名字)

#### **函数表达式**

1.  具名函数表达式
2. 匿名函数表达式 (常用的)

`function`关键词前面有东西 就是函数表达式，函数表达式是把一个函数赋值给了一个变量

***具名函数表达式***

```JavaScript
var x = function auto(){//具名函数表达式
    //auto是具名函数表达式的名字
    console.log('x');
};
```

***匿名函数表达式***

```JavaScript
var x = function (){//匿名函数表达式 (常用的)
    console.log('x');
};
```

#### 函数声明

***函数声明***

`function`关键词前面没有任何东西 就是函数声明，函数声明必须写上函数名字

```JavaScript
 function auto(){  //函数声明
        console.log('o')
 }
```

在js里没有**匿名的函数声明**如：

```JavaScript
  function (){//js中不允许这种方式声明函数(语法错误)
         console.log('语法错误)')
  }
```

表示这个函数语句在JS中需要一个函数名（语法错误）

`function`关键词前面没有任何东西就是函数声明，后面就相当于`var`变量名字一样

## 函数的参数

这是一个函数声明

```JavaScript
 function auto(){  
        console.log('auto')
 }//当前函数没有启动是个死函数所有就不会console.log
```

`function`关键字后面的`auto`是**函数当前的名字**

**如何启用函数的名字**

```JavaScript
 function auto(){  //函数声明
     console.log('huasheng');
 }
    auto();//启用函数当前名字
```

在JS中：**只有函数名字加上()才能执行**

### 形参和实参

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190615101436449.jpg)

```JavaScript
  function auto(a){
  //a(它是没有任何意义的)只是接收传递过来的实际参数的
  //a是函数的形式参数 -->形参
       console.log(a);
  }
  auto(2);//2是函数执行时 传递的实际参数 -->实参
```

### 多个形参和多个实参的情况

```JavaScript
function auto(a,b){  
    console.log(a);
    console.log(b)
}
 auto(2,"height");
```

他是可以传递多个参数（***形参和实参***）执行的

- 形参可以有无数个
- 实参也可以有无数个
- 形参和实参是一一对应的

###形参和实参不是一一对应的情况

**实参的数量>形参的数量**

```JavaScript
  function auto(a,b){  
        console.log(a);
        console.log(b)
    }
    auto(2,"height",[1,2,3]);
```

*实参的数量>形参的数量* `是不会报错的`

现在的`[1,2,3]`的实参没有形参接收（其实这个`[1,2,3]`是被别的东西接收住了）

到底是被谁接收了咱们后续再说，。

**实参的数量<形参的数量**

```JavaScript
 function auto(a,b,c){  
        console.log(a);
        console.log(b)
        console.log(c)
    }
 auto(2,"height");
```

*实参的数量<形参的数量*没有接受到实参的形参值是`undefined`

其实上面`function(){}`函数中花括号中**隐式**的代码入下

![在这里插入图片描述](https://img-blog.csdnimg.cn/201906151043016.jpg)

上面的`auto(a,b,a)`由隐式的三行代码（如上图第二个黄圈）他会偷偷的给你加上的
***在函数的花括号内部会隐式的声明参数***(参数是变量)

## `arguments`

### 函数的`arguments`

接：实参的数量>形参的数量，为什么形参和实参没有一一对应的情况，还没有返回值。

其实，**没有被形参接收的实参是被`arguments`给接收了**

```JavaScript
function auto(a,b){
            console.log(a);
            console.log(b);
            console.log(arguments);
        }
 auto(2,"height",[1,2,3])
```

`arguments`是函数内部的关键词

![QQ截图20190728231827](C:\Users\de'l'l\Desktop\QQ截图20190728231827.png)

这种东西叫**类数组合**（现在可以理解为是一个数组）

索引0表示实参数字`2`就被接收实参的形参`a`，索引1表示实参字符串`height`就被接收实参的形参`b`，索引3表示实参字符串`[1,2,3]`就是没有接收到的形参他是被`arguments`放在类数组中给存起来了

**`arguments`储存所有实参全集**

***那能不能求去所有实参的和呢***

使用`arguments`求出实参（实参的个数不确定）的和

```JavaScript
 function auto (a,b,c){
            console.log(arguments.length);
        }
  auto(1,2,32,3,10);
```

`arguments.length` 存放的是 **实参**的个数，它是表明当前数组有几项的

```JavaScript
 function auto(a,b,c){
         var sum = 0;//储存实参的和
         for(var i=0;i<arguments.length;i++){
             sum += arguments[i];
         }
         console.log(sum);
     }
 auto(1,2,32,3,10,20);
```

*获取形参的个数*

```JavaScript
console.log(auto.length);//获取形参的个数
```

