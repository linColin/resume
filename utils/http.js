import axios from 'axios'

var http = axios.create({
    baseURL: '',
    timeout: 5000
})

http.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use(response => {
    let data = response.data
    if (data.code === 200) {
        return data
    }
    data.msg = '请求出错没拿到数据.'
    return Promise.reject(data)
}, error => {
    return Promise.reject(error)
})

http.install = (Vue) => {
    Vue.prototype.http = http
    Vue.prototype.$http = http
}

export {
    http
}

export default http