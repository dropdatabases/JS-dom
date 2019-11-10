export let b1 = '我是b文件的数据'

export let b2 = 2

export let b3 = function(){}

/*
*   一个export 关键词只能导出一个数据
*
*   export {            这种方式一个export 可以导出多个数据
 *      变量1,变量2...
 *  }
* */

let b4 = [1,2]
let b5 = {
    name:'heaven'
}

export {
    b4,
    b5
}

//默认导出     在一个js文件中只能默认导出一次
export default {name:'heaven'};
