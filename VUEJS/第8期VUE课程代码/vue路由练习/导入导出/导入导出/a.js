// import {b1 as b,b2,b3} from './b.js'
//
// import {b5,b4} from './b.js'
// //  as  可以给导入的变量起别名
// console.log(b5,b4)


// import b from './b.js'
//
// console.log(b)

//将b.js的所有数据打包在obj中
import * as obj from './b.js'

console.log(obj)