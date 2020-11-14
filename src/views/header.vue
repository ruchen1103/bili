<template>
    <div class="">
        <div class="header"></div>
        <div class="container">
            <div class="center">
                <form action=""></form><input type="text" class="inputing" /></form>
            </div>
            <div class="left"><header_l></header_l></div>
            <div class="right"><header_r></header_r></div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
import header_l from '../components/header-l/header-l'
import header_r from '../components/header-r/header-r'
export default {
    name: 'header_top',
    components: {
        header_l,
        header_r,
    },
}
</script>
<style>
.container {
    padding-left: 600px;
    padding-right: 340px;
}
.left {
    position: relative;
    float: left;
    margin-left: -100%;
    right: 600px;
    width: 600px;
    overflow: hidden;
}
.right {
    float: left;
    max-width: 340px;
    margin-right: -340px;
    overflow: hidden;
}
.center {
    float: left;
    width: 100%;
    height: 34px;
    border-radius: 2px;
    border: 1px solid #e7e7e7;
}
.footer {
    clear: both;
}
.inputing {
    display: inline-block;
    font-size: 14px;
    height: 34px;
    border: 0px;
    padding: 0;
    outline: none;
}
a {
    color: rgb(33, 33, 33);
    text-decoration: none;
}
a:hover {
    color: rgb(33, 33, 33);
}
.el-dropdown-menu__item {
    padding: 0;
    margin: 0;
    width: 0;
    height: 0;
}
.el-dropdown-menu {
    padding: 0;
    margin: 0;
    width: 0;
    height: 0;
    border: 0;
}
</style>
