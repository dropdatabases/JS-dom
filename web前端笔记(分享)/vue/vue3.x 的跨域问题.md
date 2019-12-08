**在当前项目的根路径下新建一个文件,文件名是固定的 vue.config.js**

```js
//  vue.config.js  修改以后要重新启动项目

module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {      //配置跨域
            '/api': {
                target: 'http://localhost:5001/api/',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }
            
        }
    }
}
```

**跨域页面使用:**

```js
// 请求接口 后台的接口为5001 我们本地的接口为8080,所以我们需要去到vue.config.js配置跨域 http://localhost:5001/api/
            this.$axios.post('/api/users/register',this.user)
            .then(res =>{
                // 注册成功
                alert('注册成功!')
                this.$router.push('/login')
                console.log(res)
            })//在http全局配置了catch所以这边是不用配置的
 }
```

