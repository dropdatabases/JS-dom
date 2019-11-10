// import a,{b1 as a1,b2,b3,b4,b5} from './b.js'

import * as obj from './b.js'

// console.log(a1,b2,b3,b4,b5)

/*
*   as 关键词的作用
*       可以把b.js文件中的变量名  重命名
* */
//接受默认导出的数据  是不需要{}
// console.log(a);

console.log(obj);