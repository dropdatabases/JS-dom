function ajax(json){
    var xhr = new XMLHttpRequest();
    var method = json.method;
    var url = json.url;
    var success = json.success;
    var error = json.error;
    var data = json.data||{};   //设置默认值
    //  https://jsonplaceholder.typicode.com/posts?username=heaven&age=28

    switch(method){ //区分get 和post方式
        case 'get':
            xhr.open(method,url+'?'+fn(data),true);
            xhr.send(null);
            break;
        case 'post':
            xhr.open(method,url,true);
            xhr.setRequestHeader('content-type','application/x-www-urlencoded');
            xhr.send(fn(data));
            break;
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState===4){
            if(xhr.status>=200&&xhr.status<300||xhr.status===304){
                // console.log(xhr.responseText)
                success(JSON.parse(xhr.responseText))
            }else{
                error(xhr.status)
            }
        }
    }

    //fn函数的作用把  {username:'heaven',age:28} --> 'username=heaven&age=28'
    function fn(obj){
        var arr = [];
        for(var key in obj){
            arr.push(key+'='+obj[key])
        }
        return arr.join('&')
    }
}