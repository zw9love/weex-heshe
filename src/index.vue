<template>
    <div class="container">
        <router-view/>
        <!--<div class="test">-->
            <!--<wxc-button text="Confirm"-->
                        <!--:btnStyle="{backgroundColor: 'red'}"-->
                        <!--:textStyle="{color: '#333'}"-->
                        <!--:disabled="false"-->
            <!--&gt;</wxc-button>-->
            <!--<switch></switch>-->
        <!--</div>-->
    </div>
</template>

<script>
    // 连格式化都会影响布局。。。垃圾的weex
    import { WxcButton } from 'weex-ui'
    export default {
        components: { WxcButton },
        name: 'App'
    }
</script>

<style scoped>
    .test{
        justify-content: center;
        align-items: center;
    }

</style>
