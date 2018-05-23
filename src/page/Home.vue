<template>
    <div class="home">
        <div class="nav">
            <div class="first-nav">
                <!--<image :src="logo" style="width:100px;height: 50px" />-->
                <div style="width: 140px;height: 80px;background-color: skyblue;"></div>
                <!--<image :src="logo" style="width:100px;height: 50px" />-->
                <scroller class="first-nav-scroller" scroll-direction="horizontal">
                    <div
                            @click="firstNavClick(index)"
                            v-for="(item, index) in firstNavData"
                            class="first-nav-cell"
                            :key="index"
                    >
                        <text class="first-nav-txt"  :style="{color: index === activeIndex ? 'red' : '#333'}">{{item}}</text>
                    </div>
                </scroller>
            </div>
            <router-view/>
        </div>
        <scroller class="main">
            <div>
                <Recommend v-for="(item, index) in recommendData" :key="index" />
            </div>
        </scroller>
    </div>
</template>

<script>
    // 连格式化都会影响布局。。。垃圾的weex
    // require('./assets/img/nav.png')
    import { WxcButton } from 'weex-ui'
    import Recommend from '../components/Recommend'
    export default {
        name: 'Home',
        components: { WxcButton, Recommend },
        data() {
            return {
                // logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
                firstNavData: [
                    '推荐', '行业', '订阅', '时尚', '美妆', '娱乐', '生活',
                    '推荐2', '行业2', '订阅2', '时尚2', '美妆2', '娱乐2', '生活2',
                    '推荐3', '行业3', '订阅3', '时尚3', '美妆3', '娱乐3', '生活3'
                ],
                recommendData: [
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                    {name: '', info: ''},
                ],
                activeIndex: 0,
                secondActiveIndex: 0,
                logo: './assets/img/nav.png'
            }
        },
        methods: {
            firstNavClick(index){
                this.activeIndex = index
                if(index === 1){
                    this.$router.push({name: 'IndustryNav'})
                }else if(index === 2){
                    this.$router.push({name: 'OrderSearch'})
                }else{
                    this.$router.push({name: 'IndexSearch'})
                }
            },
            secondNavClick(index){
                this.secondActiveIndex = index
            },
            wxcButtonClicked (e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped>
    .home {
        padding: 0 10px;
        width: 100%;
    }

    .nav {
        width: 100%;
        align-items: center;
        padding: 0 10px;
        position: fixed;
        left: 0;
        top:0;
        z-index: 100;
        background-color: #fff;
    }

    .first-nav {
        flex: 1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #d3d3d3;
    }

    .first-nav-scroller{
        flex: 1;
        margin-left: 20px;
    }

    .first-nav-cell{
        justify-content: center;
        align-items: center;
    }

    .first-nav-txt{
        font-size: 32px;
        padding: 10px 20px;
    }

    .main{
        margin-top: 180px;
    }

</style>
