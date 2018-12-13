<template>
    <div class="upload-img">    
        <el-upload
        action='https://upload-z1.qiniup.com'
        :data='this.formData'
        list-type="picture-card"
        :limit='5'
        multiple:true
        :click="handleClick"
        :on-preview="handlePictureCardPreview"
        :on-success='handleSuccess'
        :on-exceed='handleOver'
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl">
        <!-- action="https://upload-z1.qiniup.com" -->
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'imgupload',
        data(){
            return{   
                dialogImageUrl:[],
                imgUrl:[],
                dialogVisible: false,
                formData:{
                     token:'',
                },
                list:[]
            }
        },
          methods: {
            getToken(){
                axios.get('http://upload.yaojunrong.com/getToken').then(res=>{  
                    // console.log(res)
                    this.formData.token = res.data.data
                })
            },
            handleOver(files, fileList){
                this.$message.warning('最多上传五张图片哦~')
                this.list = [...fileList]
            },
            handleRemove(file, fileList) {
                this.list = [...fileList]
                // console.log(file, fileList);
            },
            handleSuccess(response, file, fileList){
                console.log( fileList);
                this.list = [...fileList]
            },
            handlePictureCardPreview(file) {
                // console.log('1111111');
                // console.log(file);
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleClick(fileList){
                console.log(this.list);
                this.$emit('getdata',this.list)
            },
            // upload(event){
            //     console.log('111111111');
            //     console.log(event);
            //     console.log('222222');
            //     let file = event.target.files[0]
            //     let formData = new FormData()
            //     formData.append('file',file,file.name)
            //     formData.append('token',this.token)

            //     axios.post("https://upload-z1.qiniup.com",formData,{
            //         headers:{
            //         "Content-Type":"multipart/form-data"
            //         }
            //     }).then(res=>{
            //         console.log(res);
            //         this.imgUrl = res.data.url
            //         this.$emit('input',res.data.url)
            //         this.$emit('change',res.data.url)
            //         this.$emit('success',res.data.url)
                    
                    
            //     })
            //     }

        },
        created(){
            this.getToken()
        }
    }
</script>

<style scoped lang='scss'>


</style>