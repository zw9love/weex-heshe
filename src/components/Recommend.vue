<template>
    <div class="container">
        <!--<image :src=""/>-->
        <div class="main">
            <div class="left-wrapper"></div>
            <div class="right-wrapper">
                <text class="text-info">{{info}}</text>
                <text class="text-name">#{{name}}</text>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props: {
            info: {
                type: String,
                default: 'aaabbb'
            },
            name: {
                type: String,
                default: '贺喜时尚'
            },
        }
    }
</script>


<style scoped>
    /* 。。。scoped无效。。。*/
    /*.container{*/
        /*padidng: 0px!important;*/
    /*}*/
    .main{
        display: flex;
        flex-direction: row;
    }

    .left-wrapper{
        flex: 1;
        height: 220px;
        background-color: yellow;
    }

    .right-wrapper{
        flex: 1;
        height: 220px;
        background-color: green;
        display: flex;
        justify-content: center;
        align-items: left;
        padding-left: 30px;
    }

    .text-info{

    }

    .text-name{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 24px;
    }

    .line{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
        height: 1px;
        background-color: #d3d3d3;
    }
</style>
