<template>
    <div class="test">
        <imgupload></imgupload>

        <upload></upload>


        <Dupload></Dupload>
    </div>
</template>

<script>
import imgupload from '@/components/imgupload/upload.vue'
import upload from '@/components/imgupload/dy-upload.vue'
import Dupload from '@/components/imgupload/hotel-photo.vue'
    export default {
        name:'test',
        components:{
            imgupload,
            upload,
            Dupload

        },
        methods:{
            getData(){
                
            }
        }
    }
</script>

<style scoped>

</style>