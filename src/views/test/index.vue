<template>
    <div class="test">
        <imgupload></imgupload>

        <upload></upload>


        <Dupload></Dupload>

        <searchBox></searchBox>
    </div>
</template>

<script>
import imgupload from '@/components/imgupload/upload.vue'
import upload from '@/components/imgupload/dy-upload.vue'
import Dupload from '@/components/imgupload/hotel-photo.vue'
import searchBox from '@/components/searchBox/index.vue'
    export default {
        name:'test',
        components:{
            imgupload,
            upload,
            Dupload,
            searchBox

        },
        methods:{
            getData(){
                
            }
        }
    }
</script>

<style scoped>

</style>