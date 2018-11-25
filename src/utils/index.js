import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui';

const baseURL = ''

const instance = axios.create({
    baseURL,
    timeout:2000
})

const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.get(url,{params: data},config).then(res=>{
                if(res.data.code == 401){
                   this.$message.success("登录状态失效，正在进行跳转...")
                  router.push('/login')
                }else{
                    resolve(res.data) 
                }                     
            })
        })
    },
    post(url,data,config){
        return new Promise((resolve,reject)=>{
            instance.post(url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch (url,data,config,methods){
        return new Promise((resolve,reject)=>{
            instance[methods](url,data,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    put(url,data,config){
        return this.fetch(url,data,config,'put')
    }
}
export const $axios = xhr