<template>
    <div>
        <header_l></header_l>
    </div>
</template>

<script>
import header_l from '../components/header-l'
export default {
    name: 'header_top',
    components: {
        header_l,
    },
}
</script>
<style>
ul {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
</style>
