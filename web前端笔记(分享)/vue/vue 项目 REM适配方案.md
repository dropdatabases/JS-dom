**第一步**下载依赖  npm i postcss-plugin-px2rem --save 

**第二步**然后在vue 项目 根目录创建一个JS文件    名字叫   vue.config.js   把里面的内容都删掉

**第三步** 在vue.config.js   文件里面进行配置  代码如下：

```js
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            rootValue: 75,
            unitPrecision: 2, // 允许REM单位增长到的十进制数字。
            propWhiteList: [],  // 默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            propBlackList: [], // 黑名单
            // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            exclude: /(node_module)/,
            selectorBlackList: [], // 要忽略并保留为px的选择器
            ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      },
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  }
}
```

**第四步**

```js
安装 npm i amfe-flexible -S   依赖     //  这个属于 vant  UI 组件  移动端
```

**第五步**   在视口文件 index.html文件中  加入代码

```js
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```

**第六步**   安装完成之后  在 main.js文件中全局引入

```js
import 'amfe-flexible'
```

