<template>
    <div class="container">
        <router-view/>
        <!--<div class="test">-->
            <!--<wxc-button text="Confirm"-->
                        <!--@wxcButtonClicked="wxcButtonClicked"-->
                        <!--:btnStyle="{backgroundColor: 'red'}"-->
                        <!--:textStyle="{color: '#333'}"-->
                        <!--:disabled="false"-->
            <!--&gt;</wxc-button>-->
        <!--</div>-->
        <!--<image :src="logo" class="logo" />-->
        <!--<text class="greeting">The environment is ready111!</text>-->
        <!--<switch></switch>-->
        <!---->
    </div>
</template>

<script>
    // 连格式化都会影响布局。。。垃圾的weex
    export default {
        name: 'App'
    }
</script>

<style scoped>


</style>
