import  axios from 'axios'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data.data;
});


//请求home组件的数据接口
export let getHome = ()=>{
  return axios.get('/static/mork/index.json')
}

