<template>
    <!-- 导航栏logo -->
    <el-dropdown>
        <span class="el-dropdown-link">
            <a href="https://www.bilibili.com/">
                <i class="iconfont icon-bilibili1"></i>
                <span class="txt">
                    主站
                    <i class="iconfont icon-xialaxiao"></i>
                </span>
            </a>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
                <logo_down></logo_down>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import logo_down from './logo-down'
export default {
    name: 'main_logo',
    components: {
        logo_down,
    },
}
</script>
<style scoped>
a {
    display: flex;
    justify-content: center;
    text-align: center;
}
.icon-bilibili1 {
    color: #1296db;
    font-size: 32.7px;
}
.txt {
    margin-left: 20px;
    padding-bottom: 2px;
    font-size: 14px;
}
.el-dropdown-menu /deep/.el-dropdown-menu__item {
    padding: 0;
}
</style>
