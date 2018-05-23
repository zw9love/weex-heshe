<template>
    <div class="second-nav">
        <scroller class="second-nav-scroller" scroll-direction="horizontal">
            <div
                    @click="secondNavClick(index)"
                    v-for="(item, index) in secondNavData"
                    class="second-nav-cell"
                    :key="index"
            >
                <text class="second-nav-txt"  :style="{color: index === secondActiveIndex ? 'red' : '#333', borderColor: index === secondActiveIndex ? 'red' : '#d3d3d3'}">{{item}}</text>
            </div>
        </scroller>
    </div>
</template>

<script>
    export default {
        name: "IndustryNav",
        data(){
            return {
                secondNavData: [
                    '咨询', '人物', '买手', '设计师', '时尚周', '智慧少年', '生活',
                    '咨询2', '人物2', '买手2', '设计师2', '时尚周2', '智慧少年2', '生活2',
                    '咨询3', '人物3', '买手3', '设计师3', '时尚周3', '智慧少年3', '生活3',
                ],
                secondActiveIndex: 0
            }
        },
        methods: {
            secondNavClick(index){
                this.secondActiveIndex = index
            },
        }
    }
</script>

<style scoped>
    .second-nav{
        flex: 1;
        flex-direction: row;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        /*height: 30px;*/
        /*background-color: red;*/
    }

    .second-nav-scroller{
        flex: 1;
    }

    .second-nav-cell{
        margin-right: 20px;
    }

    .second-nav-txt{
        font-size: 30px;
        padding: 6px 30px;
        border-width: 1px;
        border-color: #d3d3d3;
        border-style: solid;
        border-radius: 30px;
    }
</style>
