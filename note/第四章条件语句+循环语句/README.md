# 条件语句+循环语句

### 条件语句

#### `if`,`else if`,`else`判断语句

**假设：今天大扫除让（10号）的同学大扫除**

```javascript
var num = 10;
if(num){
      console.log("我走进来了")
 }
```

当`num`值转换成**布尔值的时候是真**`true`才能执行花括号中的代码

**当条件为假走到另一个分支（条件）中**

```JavaScript
if(0){//当这个条件转换成布尔值为假就不会走以下代码
     console.log("条件为 真我走进来了")
}else{
     console.log("条件为 假我走进来了")
}
```

当前`if`条件为假，`0`转换成布尔值的时候是`false`就不会执行`if`里面的代码块了，就会走到`else`里面的代码块了

**假设：大扫除的时候前20名的同学去扫地**

```JavaScript
var num = 10
if(0<num<20){
    console.log("扫地")
}
```

当前`0<num<20`转换成布尔值是`true`，这个条件在数学中是成立的，而在JS中他是不成立的。

为什么在JS中不成立，看以下分析

```JavaScript
 0<num<20
   0<10 --> true//true转换成数字是1
   true<20 --> true//1<20比较必然是true
 0<num<20      
   0<30  -->  true//true转换成数字是1
   true<20 --> true//1<20比较必然是true
```

数学中 `0<num<20` 控制变量的`num`范围(0,20)区间的

**假设：大扫除的时候前20-40名的同学去扫地**

```javascript
var num = 30;//控制一个变量应当走到那个代码块中（控制流程）
        if(num>0 && num<20){
            console.log("扫地")
        }else if(num >=20 && num <40){
            console.log("上网")
        }else if(num>=40 && num < 60){
            console.log("拖地")
        }else if(num>=60 && num < 80){
            console.log("唱跳")
        }else{else上面所有条件都不成立的所有情况
            console.log("rap")
        }//（前面的条件都不满足才走到这个条件里来）
```

JS中 `num>0 && num<20` 控制变量`num`的范围 (0,20)区间（必须`&&`两侧都为真`true`）才会执行代码块里面的代码

**如果两个条件都满足该执行那个代码块**

```JavaScript
  var num = 30;
      if(num>1){
          console.log("if 成立 执行代码")
      }else if(num>2){
          console.log("else 成立 执行代码")
      }
```

> 当条件第一次成立的时候就会执行对应的代码，当后面的条件或者是后面的条件多次成立时，只会执行第一次对应成立的代码块（所有的条件都是互斥的）。如果同时满足多个条件，只会执行第一个条件成立的程序。



```JavaScript
   if(条件1){
          条件1为真，执行的JS代码
      }else if(条件2){
          条件2为真，执行的JS代码
      }else if(条件3){
          条件3为真，执行的JS代码
      }else{
          条件1 2 3 不满足时 执行的JS的代码
   }条件的结果最终是为了得到布尔值	true或者false
```

`if`只能有一个，`else if`可以有许多个， `else`只能有一个,也可以直接写一个`if`.

#### 三目运算符

三目运算符：是简化 `if`和`else`语句的（只能简化`if` `else`）

```javascript
 var num = 20;
        if(num<10){
            console.log("烫头")
        }else{
            console.log("rap")
        }
```

简写成三目：

```JavaScript
num<10?console.log("烫头"):console.log("rap")
```

```JavaScript
  if(条件){
       条件为真 执行的JS代码
   }else{
       条件为假 执行的JS代码
   }
   条件?条件为真 执行的JS代码:条件为假 执行的JS代码;
```

**当一个if里有2个数据该怎么简化成三目**

```JavaScript
  var num = 5;
        if(num<10){
            console.log("烫头");
            console.log("吸烟")
        }else{
            console.log("rap");
        }
```

简化成三目

```JavaScript
 num < 50?(console.log("烫头"),console.log("吸烟")):console.log("rap")
 //条件为正有2句js代码就不要用三目来简化了
```

**当`if`条件或者是`else`条件为空时怎么用三目来简化**

*当`if`条件为空时怎么用三目来简化*

```JavaScript
     var num = 15;
        if(num<15){
           
        }else{
            console.log("rap");
        }
```

简化成三目

```JavaScript
 num<10?null:console.log("rap");
//用null来占位（可以占位的有布尔值转换成false）
```

> 条件?占位:条件为假 执行的JS代码;

*当`else`条件为空时怎么用三目来简化*

```JavaScript
  var num = 15;
        if(num<10){
            console.log("烫头")
        }else{
            
        }
```

简化成三目

```JavaScript
 num<10? console.log("烫头"):null;
 //用null来占位（可以占位的有布尔值转换成false）
```

> 条件?条件为真 执行的JS代码:占位;

一般不用布尔值为`false`占位的，认识即可

#### `switch`判断语句

`switch`：控制变量该走哪一个代码块的

```JavaScript
    var num = 4;
    switch(num){
        case 2:
            console.log('我的学号是2');
            break;
        case 4:
            console.log('我的学号是4');
            break;
        case 6:
            console.log('我的学号是6');
            break;
        case 8:
            console.log('我的学号是8');
            break;
        case '10':
            console.log('我的学号是10');
            break;
        default:
            console.log('我的学号不是 2 4 6 8 10');
    }
```

```JavaScript
    switch( 变量 ){
        case 数据1://如果变量===数据1,就执行代码块
              条件成立,执行的JS代码;
              break;
        case 数据2://如果变量===数据2,就执行代码块
              条件成立,执行的JS代码;
              break;
        case 数据3://如果变量===数据3,就执行代码块
              条件成立,执行的JS代码;
              break;
         default://如果值和所有值都不全等，就执行程序default
              上述条件不成立,执行的JS代码
     }//switch case在判断时，使用的===
```

- `case`是场景（可以理解为代码块）
- 变量和`case`后面的数据 在判断时 是全等 `===`为（`true`）真才能执行
- `break` 在`switch`中的作用是 让程序终止（如果不写则会这块代码块会漏掉像沙漏一样）
- `default`所有条件不成立就写`default`（默认）

**练习**

```JavaScript
   var num = parseFloat('height:20.3px');
    //-->parseFloat作用：从左往右提取数字，遇到非数字除了(数字，小数点，负号)就会停止
    //-->遇到了字母h停止了提取-->结果是NaN
    if(num==20.3){-->NaN==20.3(NaN和任何数据类型做==判断结果都是false)
        console.log(20.3);//-->结果是false无法打印
    }else if(num==NaN){--> NaN==NaN -->ftyalse
        console.log(NaN)//-->结果是false无法打印
    }else if(typeof num=='number'){
    // -->1.typeof NaN=="number"
    //-->2.typeof优先级大于==（相当于typeof NaN）NaN(是一个不是数字的数字)
    //-->3.”number“=="number"
        console.log('number');//-->结果是true打印的是number
    }else{
        console.log('num 什么都不是');
       // -->当上面的结果都为假（false）时打印此字符串
    }
```



#### `for`循环

for循环的作用：可以让在`for`循环中的代码重复执行

##### `for`循环基本结构和运行机制

```JavaScript
  for(var i=0;i<6;i++){
       console.log(1);
    }
```

`for`循环基本结构

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190608151151550.jpg)

