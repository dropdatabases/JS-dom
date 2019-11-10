
//使用export关键词一次性导出一个变量
export let b1 = '海文'

export let b2 =  function(){
    console.log('b的函数')
}

export let b3 = {name:'王思吉'}

//使用export关键词一次性导出多个变量

let b4 = '海文';
let b5 = [1,2];

export {
    b4,
    b5
}


//默认导出 只能使用一次
export default ()=>{
    console.log('我是b.js的 箭头函数')
}
