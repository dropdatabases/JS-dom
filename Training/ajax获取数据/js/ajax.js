  function ajax(json){
      var xhr = new XMLHttpRequest();//生成ajax对象

      var method = json.method;//存储获取数据的方式
      var url = json.url;//存储去哪个地址获取数据
      var date = json.date||{};//通过get方式要发送的数据，如果没有传数据就是{}对象
      var success = json.success;//存储回调函数
      var error = json.error;//当你获取数据失败时（服务器出错）

      switch (method) {//区分是get方式还是post方式发送数据
         case 'get'://如果是get方式发送数据
               xhr.open(method,url+'?'+fn(),true);
               //定义向哪个服务器地址发送数据，以及发送数据的方法
               xhr.send(null);//发送请求
         break;
         case 'post'://如果是post方式发送数据
               xhr.open(method,url,true);//定义向哪个服务器地址发送数据，以及发送数据的方法
               xhr.setRequestHeader('content-type','application/x-www-urlencoded');
               //设置请求头post发送数据的基本格式
               xhr.send(fn());//发送请求
         break;
      };

      xhr.onreadystatechange = function(){//获取服务器发送的响应数据
          if (xhr.readyState===4) {//当你的状态码是4的时候走一下代码块
             if (xhr.status>=200&&xhr.status<300||xhr.status===304) {
             //获取http协议的状态码（成功）
                 success(JSON.parse(xhr.responseText));
                 //接收服务器发送过来的数据并且 序列化数据
             }else{//（失败）
                 error(xhr.status);
             }
          }
      }

      fn(date);//把date这个要发送的数据给传进去
     //fn这个函数的作用是把 {username:"huasheng,age:28"} -->
     // 'username=huasheng&age=28'这样的字符串
      function fn(obj){
         var arr = [];//存储遍历完成的数据
         //遍历对象
        for(var key in obj){
            arr.push(key + '=' + obj[key]);//把这个字符串添加到这个数组里面
        }
        return arr.join('&');//用join方法连接起来
     }
 }