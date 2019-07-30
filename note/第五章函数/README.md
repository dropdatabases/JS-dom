

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
            console.log(arguments.length);//获取实参的个数
        }
  auto(1,2,32,3,10);
  console.log(auto.length);//获取形参的个数
```

`arguments.length` 存放的是 **实参**的个数，它是表明当前数组有几项的，`函数名.length`获取形参的个数（`function`是对象，是对象都可以用`.`操作）

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

```JavaScript
num = 0+arguments[0]=10    i++ i=1
num = 10+arguments[1]=30   i++ i=2
num = 30+arguments[2]=60   i++ i=3
num = 60+arguments[3]=100  i++ i=4
num = 100+arguments[4]=150 i++ i=5
```

### 实参和`arguments`的映射关系

```JavaScript
 function auto(a,b){
     a = 20;
     console.log(arguments[0]);
  }
  auto(2,3);//建立了映射关系，会映射到arguments上
```

```javascript
 function auto2(a,b,c){
     c = "lalala";
     console.log(arguments[2]);
 }
 auto2(2,3)//没有建立映射关系，不会映射到arguments上
```

1.通过形参修改了实参的值  必须形参和实参建立了映射关系时

- 则实参的修改会映射到`arguments`上
- 反之  不会映射到`argument`上

```JavaScript
 function auto1(a,b){
   arguments[0] = "huasheng";
   console.log(a);
 }
 auto1(2,3)//通过arguments修改实参的值，实参的修改会映射到形参上
```

2.通过`arguments`修改是实参的值

- 则实参的修改会映射到形参上

> 在建立映射关系上的时候没有索引2的，也就是说形参没有跟实参建立起对应的映射关系的时候是不可能通过修改形参来映射到`argument`上的

## **函数的**`return`

**计算`a,b`俩数在`auto`外面的和**

```JavaScript
function auto(a,b){
     return a + b;
}
var result = auto(2,3);
console.log(result);
```

**`return`也可以结束函数内部的代码**

```JavaScript
function auto(a,b){
	return a+b;
	var a = 10;
	console.log(a)
	console.log(auto)
}
var result = auto(2,3);
console.log(result)
```

`return` 是函数里面的关键词 作用:

1. 把JS的数据抛出，让这个JS数据可以在函数的外部使用
2. 结束函数 不执行函数内部的代码了

函数在不写`return`的情况下，程序在函数的最后一句隐式添加`return undefined`（也可以把自己给抛出去）

```JavaScript
// var a = 2;
   console.log(a);
```

一个变量没有定义就使用  会报`ReferError`错误

## 递归

```JavaScript
 function auto(){//无限执行，自己调用自己
        // console.log(1);
        auto();
      }
  auto();
```

会报错表示（调用栈溢出重复执行导致内存不够）

***那什么是递归？？？***

函数内部又调用了函数自身，我们把这种情况叫做递归

### 用递归实现以下需求

#### 求1-100之内的所有偶数和

```JavaScript
 function num(n){
     if(n===0){//递归出口
          return 0;
      }
      return n+num(n-2)
 }
 var a = num(100);
 console.log(a);
```

> **使用递归做某事时**：首先是*函数内部必须是***使用自己调用自己的函数**，**但是一定要找到递归出口**（**如果找不找出口就会一直执行下去**）

#### 求n的阶乘

```JavaScript
 function num(n){
     if(n===1){
        return 1;//递归出口
     }
 return n*num(n-1);
 }
 var a = num(5)
 console.log(a);
```

#### 求1 - 100之内所有能被3并且被5整除的数字之和

```JavaScript
function num(n){
    if(n===0){
        return 0;//递归出口
     }
     if(n%3===0&&n%5===0){
        return n+num(n-1);//能够被3和5整除的数
     }
        return num(n-1);
}
var a = num(100);
console.log(a);
```

## 作用域

**在JS中 变量有两个存放的区域**

1. 全局作用域
2. 函数作用域

```JavaScript
var a = 1;//全局作用域中的变量
function auto() {
  var b = 2;//函数作用域中的变量
  console.log(a);
}
auto();
// console.log(b);
```



> 在函数作用域中可以使用全局变量，在全局作用域中不能够使用函数中的变量

### **全局作用域**

- 全局变量会自动成为`window`对象的属性
- `window`对象也可以叫做`Global Object GO`对象
- 打开浏览器 自动生成`window`对象
- 关闭浏览器 `window`对象就自动销毁了

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190615212536841.jpg)

打开浏览器，浏览器会**自动把全局变量储存在** `window`对象里也就是`Global Object GO`对象

```JavaScript
var b = 'heaven';
console.log(window);
```

把变量`b`作为`GO对象`的属性名字，`值heaven`作为`GO对象属性值`把他存起来

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190615221439588.jpg)

一旦关掉浏览器`window`对象就不复存在

```JavaScript
function auto(){//-->auto是全局作用域中的变量储存在GO对象里
  var a = 2;//函数作用域中的变量
  console.log(2);
}
  auto();
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190615215458874.jpg)

```JavaScript
var heaven = function(){//函数表达式也可以在全局变量中
     console.log('heaven');
}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190615215545343.jpg)

> 无论是变量还是函数，他都被放在全局变量当中，只要你是身处在全局

***全局的预编译三步：***

1. 创建`GO`对象	==> `Global Object`(GO对象)
2. 找到变量，把变量作为`GO`对象的属性名，值是`undefined`
3. 在全局中找到函数声明，把函数名作为`GO`对象的属性名，值是函数体

预编译之后才能执行JS代码

等到关闭浏览器的时候 `GO`对象就会被销毁了

