[TOC]



# 数据类型转换

在js中只有函数后面才能加上`()`执行

## 转化为字符串类型

js的数据类型是可以互相转换的 `2 --> '2'`

字符串(`string`)：**字符串是被一对单引号或者双引号包裹的数据**

```javascript
"huasheng"	'hell world'   'false'   "123"
```

`toString`函数(是js内置的函数) **能够把js的数据类型转换成字符串**

|  `toString`检查原始值   |                      检查结果                       |
| :---------------------: | :-------------------------------------------------: |
|        数字类型         |                     `2 --> '2'`                     |
|        布尔类型         |                  `true --> 'true'`                  |
| `undefined`和`null`类型 | `null`/`undefined`不能使用`toString`函数 变成字符串 |

| `toString`检查引用值 |             检查结果              |
| :------------------: | :-------------------------------: |
|       普通对象       |    `{} --> '[object Object]'`     |
|       数组对象       |       `[1,2,3] --> '1,2,3'`       |
|       函数对象       | `function(){} --> 'function(){}'` |

## 转换为布尔类型

 布尔值(`boolean`)：**布尔数据类型只有两个值`true`和`false`用来表示逻辑**

`Boolean`函数 **能够把js的其他数据类型转换成布尔值**

- 只有 `0` 、 `NaN`、 `undefined` 、`null`、 `false` 、`''`转成布尔值是`false`
- 其他的所有js数据转成布尔值时都是 `true`

#### `!`取反运算符

***作用：对布尔值取反***

*例子*

```JavaScript
! true --> false
! false --> true
```

*如果`!`后面跟的不是布尔值 则*

- 先把`!`后面的js数据 转成布尔值
- 在取反

```javascript
!0 --> !false --> true
!2 --> !true --> false
```

> 结论:`!`会把其他数据类型先转换成布尔值，然后取反,这种情况称为隐式转换

***`!!`的作用是什么？？***

`!!`的作用和`Boolean`函数的作用是一样的 都是把js的数据转换成布尔值

```javascript
!!0 --> !true -->false
```

## 转换为数字类型

`0` 、`1` 、`-1`、 `1.0`、 `0.5`、 `NaN`(not a number) 这些都是数字类型

`Number`函数 能够把其他js的数据类型转成数字类型

> 字符串中只要含有**非数字**(除了**数字 负号和小数点**之外的)在使用`Number`函数转成数字类型时都是`NaN`

| Number检查原始值 |                           检查结果                           |
| :--------------: | :----------------------------------------------------------: |
|    字符串类型    | Number(`''`) --> 0 ，  Number(`'空格串'`) --> 0  ， Number(`"2"`) -->2 |
|     布尔类型     |         Number(`true`) --> 1 ，Number(`false`) --> 0         |
|    `null`类型    |                     Number(`null`) --> 0                     |
| `undefined`类型  |                  Number(`undefined`) -> NaN                  |

**引用值使用`Number`函数转换成数字类型有两步**

- 先把引用值隐式转换成字符串类型
- 再把隐式转换好的字符串类型放到`Number`函数中

| Number检查引用值 |                           检查结果                           |
| :--------------: | :----------------------------------------------------------: |
|     普通对象     |     Number({})  -->  Number('[object Object]')  -->  NaN     |
|     数组对象     | Number([1])  -->  Number('1')  -->  1<br/>Number([1,2,3])  -->  Number('1,2,3')  --> NaN |
|     函数对象     |   Number(function(){}) --> Number('function(){}')  --> NaN   |

#### `isNaN`判断是不是`NaN`

`isNaN`函数是js内置的一个函数

**`isNaN`这个函数可以判断一个数字是不是`NaN`**

- 如果是 则结果`true`
- 如果不是 则结果 `false`

如果用isNaN函数来判断其他js的数据类型 则会

1. 先隐式转成数字类型
2. 再把隐式转换好的数字类型放到`isNaN`中

> 结论：`isNaN()`这个方法会先把其他类型数据转化成数字类型，之后判断是不是`NaN`

`isNaN`练习题目

```javascript
   isNaN(true) --> isNaN(1) -->false

   isNaN(function(){})  -->  isNaN(NaN)  --> true

   isNaN([1,2])  -->  isNaN(NaN)  --> true

   isNaN([1])  -->  isNaN(1)  --> false

   isNaN('12.5px')  -->  isNaN(NaN)  --> true

   isNaN(null) -->  isNaN(0)  --> false

   isNaN(undefined)   -->  isNaN(NaN)  --> true
```



## `parseInt`和`parseFloat`函数

`parseInt`和`parseFloat`把字符串中的数字提取出来提取出来的数字为`number`类型

##### **`parseInt`函数**

- 从左向右提取数字
- 如果遇到数字之外（空格 小数点）的就会停止提取

##### **`parseFloat`函数**

- 从左向右提取数字
- 如果遇到数字和小数点之外（空格）的就会停止提取

> 如果一开始从左向右提取数字提取的时候遇见非数字，那返回的结果是`NaN`

练习

```javascript
 Number("123huasheng")  --> NaN
 Number(typeof  true) --> NaN
 Number(typeof  typeof   true) --> NaN
 Number(!NaN)  --> Number(!false) -->Number(true) -->Numbe(1)
 parseInt("he123avn") -->NaN
 Boolean([]) --> true
 !!null --> !true -->false
 ({}).toString()  --> [object Object]
 ([23,false]).toString() --> "23,false"
 parseInt("-20") --> -20
 parseFloat("-20.3px") --> -20.3
 parseFloat("px+26") --> NaN
```

