import axios from 'axios'
import router from '../router'

const env = process.env.NODE_ENV
const baseURL = env == 'development' ? '/api' : '/'

const instance = axios.create({
    baseURL,
    timeout:20000
})
// 其他接口问人家登陆后那个reason是多少7（权限） 

const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params: data},config).then(res=>{
                // if(res.data.code == 401){
                //     console.log("登录失效get")
                //     Message.warning('登录状态失效，正在跳转。。。');
                //     router.push('/')
                //  }
                resolve(res.data) 
            }).catch(err=>{
                reject(err)
            })
        })
    },
    // post(url,data,config){
    //     return new Promise((resolve,reject)=>{
    //         instance.post(url,data,config).then(res=>{
    //             resolve(res.data)
    //         }).catch(err=>{
    //             reject(err)
    //         })
    //     })
    // },
    fetch (url,data,config,methods){
        return new Promise((resolve,reject)=>{
            instance[methods](url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url,data,config){
        return this.fetch(url,data,config,'post')
    },
    put(url,data,config){
        return this.fetch(url,data,config,'put')
    },
}
export const $axios = xhr