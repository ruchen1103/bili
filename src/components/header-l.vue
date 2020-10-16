<template>
    <ul>
        <li><main_logo></main_logo></li>
        <li><a href="https://www.bilibili.com/anime/">番剧</a></li>
        <li><a href="https://game.bilibili.com/">游戏中心</a></li>
        <li><a href="https://live.bilibili.com/">直播</a></li>
        <li><a href="https://show.bilibili.com/platform/home.html?msource=pc_web">会员购</a></li>
        <li><a href="https://manga.bilibili.com/?from=bill_top_mnav">漫画</a></li>
        <li><a href="https://www.bilibili.com/v/game/match/">赛事</a></li>
        <li><carousel></carousel></li>
        <li><qr></qr></li>
    </ul>
</template>

<script>
import main_logo from './main-logo'
import carousel from './Carousel'
import qr from './QR'
export default {
    name: 'header_l',
    components: {
        main_logo,
        carousel,
        qr,
    },
}
</script>
<style scoped>
a {
    color: rgb(33, 33, 33);
    text-decoration: none;
}
a:hover {
    color: rgb(33, 33, 33);
}
ul {
    height: 36px;
    display: flex;
    align-items: center;
    list-style: none;
    box-sizing: border-box;
}
li {
    list-style: none;
    font-size: 14px;
}
</style>
