<template>
    <div>
        <header_l></header_l>
    </div>
</template>

<script>
import header_l from '../components/header-l/header-l'
export default {
    name: 'header_top',
    components: {
        header_l,
    },
}
</script>
<style>
ul {
    height: 36px;
    display: flex;
    list-style: none;
    box-sizing: border-box;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    line-height: 30px;
    justify-content: space-evenly;
}
li {
    list-style: none;
    font-size: 14px;
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
