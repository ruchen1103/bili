<template>
    <div class="main">
        <div class="left">
            <a href="https://www.bilibili.com/v/douga/">
                <div class="logo">
                    <img src="../../iconfont_main/keji-.png" /> <span>动画</span>
                </div>
                <span class="num">3666</span>
            </a>
            <a href="https://www.bilibili.com/anime/">
                <div class="logo">
                    <img src="../../iconfont_main/fanju.png" /> <span>番剧</span>
                </div>
                <span class="num">232</span>
            </a>
            <a href="https://www.bilibili.com/guochuang/">
                <div class="logo">
                    <img src="../../iconfont_main/guochuang.png" /> <span>国创</span>
                </div>
                <span class="num">464</span>
            </a>
            <a href="https://www.bilibili.com/v/music/">
                <div class="logo">
                    <img src="../../iconfont_main/yinle.png" /> <span>音乐</span>
                </div>
                <span class="num">5919</span>
            </a>
            <a href="https://www.bilibili.com/v/dance/">
                <div class="logo">
                    <img src="../../iconfont_main/wudao.png" /> <span>舞蹈</span>
                </div>
                <span class="num">1603</span>
            </a>
            <a href="https://www.bilibili.com/v/game/">
                <div class="logo">
                    <img src="../../iconfont_main/youxi.png" /> <span>游戏</span>
                </div>
                <span class="num">31278</span>
            </a>
            <a href="https://www.bilibili.com/v/technology/">
                <div class="logo">
                    <img src="../../iconfont_main/zu1kaobei.png" /> <span>知识</span>
                </div>
                <span class="num">14302</span>
            </a>
            <a href="https://www.bilibili.com/v/digital/">
                <div class="logo"><i class="iconfont icon-shuma"></i> <span>数码</span></div>
                <span class="num">1751</span>
            </a>
        </div>
        <div class="center">
            <a href="https://www.bilibili.com/v/life/">
                <div class="logo">
                    <img src="../../iconfont_main/shenghuo.png" /> <span>生活</span>
                </div>
                <span class="num">42245</span>
            </a>
            <a href="https://www.bilibili.com/v/food/">
                <div class="logo">
                    <img src="../../iconfont_main/meishiqu.png" /> <span>美食</span>
                </div>
                <span class="num">2848</span>
            </a>
            <a href="https://www.bilibili.com/v/kichiku/">
                <div class="logo">
                    <img src="../../iconfont_main/guixu.png" /> <span>鬼畜</span>
                </div>
                <span class="num">233</span>
            </a>
            <a href="https://www.bilibili.com/v/fashion/">
                <div class="logo">
                    <img src="../../iconfont_main/shishang.png" /> <span>时尚</span>
                </div>
                <span class="num">9196</span>
            </a>
            <a href="https://www.bilibili.com/v/information/">
                <div class="logo">
                    <img src="../../iconfont_main/zixun3.png" /> <span>资讯</span>
                </div>
                <span class="num">931</span>
            </a>
            <a href="https://www.bilibili.com/v/ent/">
                <div class="logo"><img src="../../iconfont_main/yule.png" /> <span>娱乐</span></div>
                <span class="num">5226</span>
            </a>
            <a href="https://www.bilibili.com/v/cinephile/">
                <div class="logo">
                    <img src="../../iconfont_main/dianying.png" /> <span>影视</span>
                </div>
                <span class="num">7471</span>
            </a>
            <a href="https://www.bilibili.com/cinema/">
                <div class="logo">
                    <i class="iconfont icon-fangyingshi"></i> <span>放映厅</span>
                </div>
                <span class="num">189</span>
            </a>
        </div>
        <div class="spacing"></div>
        <div class="right">
            <a href="https://www.bilibili.com/read/home">
                <div class="logo"><i class="iconfont icon-zhuanlan"></i><span>专栏</span></div>
            </a>
            <a href="https://live.bilibili.com/">
                <div class="logo">
                    <img src="../../iconfont_main/zhibo.png" /> <span>直播</span>
                </div>
            </a>
            <a href="https://www.bilibili.com/blackboard/x/act_list">
                <div class="logo"><i class="iconfont icon-huodong"></i> <span>活动</span></div>
            </a>
            <a href="https://www.bilibili.com/cheese/">
                <div class="logo"><i class="iconfont icon-ketang"></i> <span>课堂</span></div>
            </a>
            <a href="https://www.bilibili.com/blackroom/ban">
                <div class="logo">
                    <img src="../../iconfont_main/tianping.png" /> <span>小黑屋</span>
                </div>
            </a>
            <a href="https://www.bilibili.com/v/musicplus/">
                <div class="logo">
                    <img src="../../iconfont_main/dianying1.png" /> <span>音乐PLUS</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lodo_down',
    data: {
        active: '',
    },
    methods: {
        mouseOver: function() {
            this.active = 'background-color: #cccccc'
        },
        mouseLeave: function() {
            this.active = ''
        },
    },
}
</script>
<style scoped>
.icon-shuma,
.icon-huodong {
    color: #fb952c;
}
.icon-fangyingshi {
    color: #ffba7b;
}
.icon-zhuanlan {
    color: #54e2e2;
}
.icon-ketang {
    color: #ffea85;
}
.logo {
    display: flex;
    align-content: center;
    line-height: 20px;
    font-size: 14px;
    margin-left: 25px;
    margin-top: 15px;
}
.logo span {
    margin-left: 15px;
}
a {
    margin: 0px 5px 0px 5px;
    display: block;
    box-sizing: border-box;
    width: 214px;
    height: 47px;
    display: flex;
    align-content: center;
    justify-content: space-between;
}
a:hover {
    background-color: #f4f4f4;
}
img {
    width: 19px;
    height: 19px;
}
.main {
    display: flex;
    width: 671px;
    height: 375px;
}
.left {
    width: 223px;
    height: 375px;
}
.center {
    width: 223px;
    height: 375px;
}
.right {
    width: 223px;
    height: 375px;
}
.num {
    margin-right: 25px;
    margin-top: 7px;
    color: #a2a2a2;
}
.spacing {
    width: 1px;
    height: 355px;
    background-color: #e7e7e7;
}
</style>
