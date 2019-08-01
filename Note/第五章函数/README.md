

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

`arguments`是**类数组合**（现在可以理解为是一个数组）

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

##### 作用域  ===>  Js代码执行的环境

***全局作用域***

- 所有在`script`标签里面的代码，都处在全局作用域中
- 全局作用域在页面打开时创建全局对象`GO(window对象)`，页面关闭时销毁`GO`对象
- 全局作用域中的变量是`GO`对象的属性名，变量的值是`GO`对象的属性值

***函数作用域***

- 所有在函数里面的代码，都处在函数作用域中
- 函数作用域在函数执行时创建`AO`对象，在函数结束时销毁`AO`对象
- 函数作用域中的变量是`AO`对象的属性名，变量的值是`AO`对象的属性值
- 当下一次执行函数时，会创建全新的`A0`对象

### **全局作用域**

- 全局变量会自动成为`window`对象的属性
- `window`对象也可以叫做`Global Object GO`对象
- 打开浏览器 自动生成`window`对象
- 关闭浏览器 `window`对象就自动销毁了

```JavaScript
var a = 1;//a是全局作用域中的变量，是声明全局的
        console.log(window);
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190615212536841.jpg)

打开浏览器，浏览器会**自动把全局变量储存在** `window`对象里也就是`Global Object GO`对象

```JavaScript
 var b = "huasheng";//变量b自动升为全局作用域中的变量
 // 存储在window对象上，属性名是b,属性值是字符串huasheng
 console.log(window);
```

把变量`b`作为`GO对象`的属性名字，`值huasheng`作为`GO对象属性值`把他存起来

![QQ截图20190730193706](C:\Users\de'l'l\Desktop\QQ截图20190730193706.png)

一旦关掉浏览器`window`对象就不复存在

***那函数能处在全局作用域里面吗***

**函数声明**

```JavaScript
function auto(){//-->auto是全局作用域中的变量储存在GO对象里
  var c = 2;//函数作用域中的变量
  console.log(window);
}
  auto();
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190615215458874.jpg)

**函数表达式**

```JavaScript
 var huasheng = function(){//函数表达式也可以在全局变量中
     console.log("huasheng");
 }
 huasheng();
 console.log(window)
```

 ![QQ截图20190730195122](C:\Users\de'l'l\Desktop\QQ截图20190730195122.png)

> 无论是变量还是函数，他都被放在全局变量当中，只要你是身处在全局

***全局的预编译三步：***

1. 创建`GO`对象	==> `Global Object`(GO对象)
2. 找到变量，把变量作为`GO`对象的属性名，值是`undefined`
3. 在全局中找到函数声明，把函数名作为`GO`对象的属性名，值是函数体

预编译之后才能执行JS代码

等到关闭浏览器的时候 `GO`对象就会被销毁了

### **函数作用域**

##### Js解释引擎执行js代码的步骤

***语法分析***

- Js解释引擎会先扫描所有的js代码，查看代码有没有低级的语法错误，如果存在语法错误，则整个程序就不会执行,如果没有语法错误，则进入预编译阶段  
- 报错信息:`Uncaught SyntaxError:Invalid or unexpected token`表示语法错误

***函数的预编译四步***：

1. **创建AO对象**	==> `Activated Object`(活动对象)【激活状态】
2. **找到形参和变量**，把**形参和变量作为AO对象的属性名**，值是`undefined`
3. **实参把值赋给形参**
4. 在**函数中找到函数声明**，把**函数名作为AO对象的属性名**，**值是函数体**

预编译之后才能执行JS代码

等到函数执行完成后`(return)` `AO`对象就会被销毁了

```javascript
 function auto(a){
       var b = 3;
       console.log(a,b);
 }
 auto(2)
 /*
 GO{
    auto:function(){}
 }
 AO{
    b : undefined --> b:3
    a : undefined --> a:2
 }
 console.log(2,3)
*/
//预先编译的环节，然后就执行函数内部的代码了
//函数的预编译四步结束了
//不符合条件直接跳过预编译然后就执行js代码
```

`AO对象`就像一个小型的仓库，他可以储存函数作用域中的变量，也可以查找函数中的变量

```JavaScript
function outer(){
 /*
  AO{
      b : undefined --> b : 3;
      inner:function(){}
  }
*/
  function inner(){
/*
  AO{
      a : undefined --> a : 4;
      c : undefined --> c : 5;
   }
*/
   var a = 4;
   c = 5;//c已经在全局作用域中声明了变量c
   //相当于 var c = 5;
   console.log(a);//4 a是在inner函数作用域AO中找到的
   console.log(b);//3 b是在函数作用域outer中找到的
   console.log(c);//5 c是在全局作用域早到的
   }
   var b = 3;
       inner();
}
   var a = 2;
   outer();
   console.log(outer);//函数体
   /*
     GO{
        a : undefined --> a : 2;
        outer:function(){};
        c : 5
        }
   */
```

一个变量 ，没有`var`关键词，直接赋值，则这个变量是全局的 ，叫做**暗示全局变量**，如`  c = 5`这个变量`c`就是全局变量

`GO`和`AO`都是相互独立的，如果没有相对应的变量会往父级去找，如果有就不会去父级找了

预编译之后才能执行JS代码

等函数执行完成后，`AO`对象就会被销毁了

**作用域有两个规则**

1. 规则是用来定义变量到底储存在哪里的
2. 如何查询

##### 补充变量提升

```JavaScript
 console.log(a);
 var a = 2;//当前变量a在全局作用域中
```

结果是`undefined`他是怎么来的呢？？？

**变量提升**

- 系统会自动地把变量`var a = 2;`提升到前面变为`var a;`
- js会把`var`**关键词声明的变量**，和**函数声明**的提升到前面

```JavaScript
 var a;//先打印
 console.log(a)
 var a = 2;//后赋值
 /*
   GO{
       a : undefined //先打印的是这个
       a : undefined --> a : 2 //后赋值
    }
 */
```

### 函数作用域链

```JavaScript
 function outer(){ 
    var a = 2;
    function inner(){
        console.log(a);
    }
    inner();
 }
 outer();
       /*
         GO{
             outer:function(){};
         }
         AO{ --> outer
             a : undefined --> a : 2;
             inner:function(){};
         }
         AO{ --> inner
             console.log(a)
             自己没有变量a会往父级的AO中去找变量a
         }
       */
```

这个变量`a`是是从`outer`函数的`AO`中找到的，不是从自己的`AO`中找到的,为什么可以从父级`AO`找到变量？？

#### 为什么可以在父级`AO`中找到变量`a`???

函数是一个对象，其中有些属性我们可以访问，比如`name`,`length`,`arguments.`但有些不可以，这些属性仅供Js解释引擎存取，`[[scope]]`就是其中一个。`[[scope]]`这个属性指的就是常说的作用域,其中存储了`AO`对象的集合。

```javascript
function outer() {
     var a = 2;
     function inner() {
         console.log(a);
     }
     inner();
}
outer();
console.dir(outer)//把函数的详细信息打印出来
```

`console.dir(函数)`  可以把函数的详细信息打印出来

函数的`[[Scopes]]`这个属性 存放在函数的作用域链

那为什么可以去父级`AO`中去找变量`a`呢，是因为`inner`函数里面没有自己要的变量，我会顺着作用域链去`outer`的`AO`里面找变量`a`，如果`outer`里面还没有对应的变量，那就去`GO`中找有没有变量`a`那如果有就是有，如果没有那就是没有。(只要函数有作用域链)

#### 函数作用域链

```javascript
function outer() {
     var a = 2;
     function inner() {
         console.log(a);
     }
     inner();
}
outer();
```

作用域链是分两种情况的

1. 死函数（函数名后面没有加上`()`执行的函数）
2. 激活函数（函数名后面有加上`()`执行的函数）

***`inner`函数的作用域链***

> **`inner`函数未执行（死函数）**
>
> `inner`函数的作用域链  =  `outer:AO + GO`



> **`inner()`函数执行（激活的函数）**
>
> `inner`函数的作用域链  = `inner:AO + outer:AO + GO`

***`outer`函数的作用域链***

> **`outer`函数未执行（死函数）**
>
> `outer`函数的作用域链  = `GO`



> **`outer()`函数执行（激活的函数）**
>
> `outer`函数的作用域链  =` outer:AO + GO`

作用域链：当函数执行时会生成`AO`对象，并且把这个`AO`对象放在`[[scope]]`的最顶端，和函数创建时的环境，形成链式结构，我们把这种链式结构叫做作用域链。

**作用域链** **=** **函数执行时的**`AO`**对象** **+** **函数创建时的环境**

**变量查找规则：沿着作用域链顶端，自上而下寻找变量**

***`AO`是一个对象，是对象就会占据空间，如果空间占据很多的话那该怎么办***

那就让JS系统来解决这个问题

> JS内部存在垃圾回收机制：每隔一段时间就会清理掉不使用的数据（垃圾）

#### 实例

```javascript
        function outer(){
            /*
              AO{
                  b : undefined; --> b : 3;
                  inner:function(){};
              }
            */
            function inner(){
                /*
                  AO{
                      a : 2; --> a : 4;//个变量a重新赋值
                  }
                */
                var a = 4;
                c = 5;//变量提升，暗示全局变量
                console.log(a);//4；在自己的AO中找到的
                console.log(b);//3；在outer的AO中找到的
                console.log(c);//5；在全局GO中找到的
            }
            var b =3;
            inner();
        }
        var a = 2;
        outer();
        /*
          GO{
              a : undefined; --> a : 2;
              outer:function(){};
              c : 5;
          }
          outer的函数作用域链 = outer:AO + GO
          inner的函数作用域链 = inner:AO + outer:AO + GO
        */
```

![QQ截图20190801142723](C:\Users\de'l'l\Desktop\QQ截图20190801142723.png)

![QQ截图20190801142811](C:\Users\de'l'l\Desktop\QQ截图20190801142811.png)

在查找变量`a` `b`  `c`时，从作用域链顶端从上到下开始寻找对应的变量，分别找到的是

`inner`函数`AO`中的`a`是4，`outer`函数`AO`中的`b`是3，还有全局作用域GO的`c`是5

## 闭包

```JavaScript
       function outer(){
            /*
              outer:AO{
                  inner:function(){};
                  b : undefined; --> b : 3 --> b:4
              }
            */
            function inner(){
                b++;//给b+1
                console.log(b);
                /*
                  inner:AO{
                      在outer的AO中找到变量a并打印
                  }
                */
            }
            var b = 3;
            return inner;
        }
        var result = outer();
        result();
        /*
          GO{
              outer:function(){};
              result : undefined; --> result:function inner(){};
          }
          outer的作用域链 = outer:AO + GO
          inner的作用域链 = inner:AO + outer:AO + GO
        */
```

### 闭包的特点

![QQ截图20190801154244](C:\Users\de'l'l\Desktop\QQ截图20190801154244.png)

在`outer`函数执行结束前把`inner`函数抛出，并且把`inner`函数赋值给`result`,所以`result===inner`

![QQ截图20190801154840](C:\Users\de'l'l\Desktop\QQ截图20190801154840.png)

现在的变量`b`是在外部被使用的，`inner`函数被抛出来了并且在外部接收这`inner`，就是相当于在外部通过`result`变量的执行修改了内部`outer`函数的值，通过全局的一些代码修改了`outer`函数内部的一些值由原本的3变成4。

全局作用域的代码不能访问函数作用域的代码，但是通过一些全局的代码修改了函数作用域的代码而这种情况就叫做闭包

那么如何实现这种闭包呢，就通过`return`把一个函数给抛出去，用外界的一个变量给接收这，因为你抛出函数的同时还要把函数的作用域链给抛出来了，而函数的作用域链存储了不仅仅是自己的`AO`中的变量还有父级`AO`中的变量。

把这个函数给抛出来之后还把函数的作用域链给抛出，所有在外界用一个新的变量给他接收了之后，新的变量执行了就相当于执行了`inner`函数，就相当于在全局的情况下执行了`inner`函数，在外界执行了`inner`函数修改了`outer`函数内部的值这种情况就构成了闭包

***什么是闭包：***

> 当内部函数被保存在外部时，由于内部函数的作用域链上存在内部函数创建时的环境(即父级
>
> 函数和祖先函数的`AO`对象，全局对象`GO`)，导致内部函数可以顺着作用域链寻找变量，所以形成了
>
> 闭包，同时内部函数的作用域链上(即父级函数和祖先函数的`AO`对象，全局对象`GO`)无法被垃圾回
>
> 收机制回收，导致了内存泄漏

### 验证闭包的机制

***闭包1***

```JavaScript
        function outer(){
            var a = 4399;
            function inner(){
                a++;
                // console.log(a);//4400
            }
            return inner;
        }
        var result1 = outer();
        result1();
        var result2 = outer();
        result2();
        //两个不同的变量名字，执行了两次outer和inner函数是两个次不同的AO对象
        //是开辟了两个不同的AO对象result1个result2都执行了一次是两个不同的内存泄漏
        /*
          GO{
              result1:undefined; -->result1:function inner(){};
              result2:undefined; -->result1:function inner(){};
              outer:function(){};
          }
          outer:AO{ result1
              a:undefined; --> a:4399 --> a:4400
              inner:function(){};
          }
          inner:AO{ result1

          }
           outer:AO{ result2
              a:undefined; --> a:4399 --> a:4400
              inner:function(){};
          }
          inner:AO{ result2

          }

          这个两个是每次执行生成的新的AO对象
        */
```

***闭包2***

```JavaScript
 	   function outer() {
            var a = 4399;
            function inner() {
                 a++;
                 console.log(a);//4400和4401
            }
            return inner;
        }
        var result = outer();
        result();
        result();
        //两个想相同的result函数在这种情况下，会造成闭包的特性，
        // 致result函数的AO对象不被JS系统获取导致内存泄漏是
        // 两个相同的函数都执行一边,都会在内存泄漏的那条函数作用域链上累加的执行
        /*
          GO{
              result:undefined; --> result:function inner(){}
              outer:function(){};
          }
          outer:AO(1){
              a:undefined; --> a:4399 -->a:4400
              inner:function(){};
          }
          inner:AO(1){

          }
          outer:AO(1){
              a:undefined; -->a:4400 -->a:4401
              inner:function(){};
          }
          inner:AO(2){

          }

        */
```

***闭包的用处：***

1. 实现累加器  ===>对父级函数内部变量的操作
2. 可以做缓存
3. 构建模块化实例
4. 对象的变量私有化

## 函数表达式和函数声明之间的转换

***定义一个函数表达式***

```JavaScript
 var x = function(){//函数表达式
       console.log("花生")
 }
 x();//函数表达式执行
```

### 函数声明转换函数表达式的方法

***用`!`号，把函数声明转换成函数表达式***

```JavaScript
!function auto(){
    console.log("name");
 }();
```

***用`~`号，把函数声明转换成函数表达式***

```JavaScript
~function auto(){
    console.log("name")
}();
```

***用`+`号，把函数声明转换成函数表达式***

```JavaScript
+function auto(){
     console.log("name")
}();
```

***用`-`号，把函数声明转换成函数表达式***

```JavaScript
-function auto(){
     console.log("name");
}();
```

***把函数声明整体放置在`()`的方法，把函数声明转换成函数表达式***

```javascript
(function auto(){
     console.log("name")
}())
```

***那具名的函数表达式名字的作用是什么？***？

```JavaScript
 var fn = function x(){
      console.log(x)
 };
```

**那具名函数表达式的意义是什么？？？**

具名函数表达式的名字是可以在函数内部使用

**从作用域角度的话可以这样理解**

> 具名函数表达式他的名字是绑定在函数内部的，只有在函数的内部使用，不可以在函数的外部使用（否则会报错）只能在当前的函数作用域里面使用

***立即执行函数：***

1. 立即执行函数是一次性的，在执行一次后，`AO`对象立马被销毁，不能重复使用，一般用在初始化工作。
2. 只有函数表达式才可以被立即执行
3. `!`、`~ ` 、`+`、`-`、把函数声明整体放置在`()` ，都可以把函数声明变成函数表达式
4. 函数表达式默认是匿名函数，即使函数表达式有名字，也会被系统当做匿名的

***重要结论:***

1. 函数表达式的名字只能在自身作用域中使用，不能在外部作用域里面使用
2. 只有函数表达式后面跟上`()`才能执行，后面跟着的`()` 是用来传实参的

