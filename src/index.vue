<template>
    <div class="wrapper">
        <div class="nav">
            <image :src="logo" style="width:60px;height: 30px"/>
            <scroller class="first-nav" scroll-direction="horizontal">
               <div
                   @click="firstNavClick(index)"
                   v-for="(item, index) in firstNavData"
                   class="first-nav-cell"
                >
                   <text class="first-nav-txt" :class="{activeColor: index === activeIndex}">{{item}}</text>
               </div>
            </scroller>
        </div>
        <!--<image :src="logo" class="logo" />-->
        <!--<text class="greeting">The environment is ready111!</text>-->
        <!--<switch></switch>-->
        <!--<router-view/>-->
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
                firstNavData: [
                    '推荐', '行业', '订阅', '时尚', '美妆', '娱乐', '生活',
                    '推荐2', '行业2', '订阅2', '时尚2', '美妆2', '娱乐2', '生活2',
                    '推荐3', '行业3', '订阅3', '时尚3', '美妆3', '娱乐3', '生活3'
                ],
                activeIndex: 0
                // logo: './assets/img/nav.png'
            }
        },
        methods: {
            firstNavClick(index){
                this.activeIndex = index
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        /*height: 50px;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*display: flex;*/
        flex: 1;
    }

    .nav {
        flex-direction: row;
        height: 50px;
        /*background-color: skyblue;*/
        /*justify-content: center;*/
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px solid #d3d3d3;
    }

    .first-nav {
        flex: 1;
        flex-direction: column;
        /*height: 30px;*/
        /*background-color: red;*/
        margin-left: 20px;
    }

    .first-nav-cell{
        justify-content: center;
        align-items: center;
    }

    .first-nav-txt{
        font-size: 12px;
        padding: 5px 10px;
    }

    .activeColor {
        color: red
    }

</style>
