<template>
    <div class="container" :style="containerStyle">
        <text class="txt">搜索</text>
    </div>
</template>

<script>
    export default {
        name: "IndexSearch",
        data(){
            return {
                containerStyle: {}
            }
        },
        created(){
            // console.log(this.$getConfig().env)
            const env = this.$getConfig().env
            this.containerStyle = {width: env.deviceWidth +  'px'}
        },
    }
</script>

<style scoped>
    .container {
        /*width: 100%;*/
        height: 70px;
        justify-content: center;
        align-items: center;
        border-width: 1px;
        border-color: #d3d3d3;
        border-style: solid;
        border-radius: 40px;
        margin: 10px 0;
    }
    .txt{
        font-size: 30px;
        color: #333;
    }
</style>
