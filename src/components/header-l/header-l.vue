<template>
    <ul>
        <li><main_logo></main_logo></li>
        <li><a href="https://www.bilibili.com/anime/">番剧</a></li>
        <li>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <a href="https://game.bilibili.com/">游戏中心</a>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <iframe
                            frameborder="0"
                            src="https://www.bilibili.com/page-proxy/game-nav.html"
                        ></iframe>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </li>
        <li>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <a href="https://live.bilibili.com/">直播</a>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <iframe
                            frameborder="0"
                            src="https://live.bilibili.com/blackboard/dropdown-menu.html"
                        ></iframe>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </li>
        <li><a href="https://show.bilibili.com/platform/home.html?msource=pc_web">会员购</a></li>
        <li>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <a href="https://manga.bilibili.com/?from=bill_top_mnav">漫画</a>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <iframe
                            frameborder="0"
                            src="https://manga.bilibili.com/eden/bilibili-nav-panel.html"
                        ></iframe>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </li>
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
<style>
iframe {
    width: 700px;
    height: 300px;
    transform: translateX(-15%);
}
.el-dropdown-menu {
    border: 0px;
}
</style>
