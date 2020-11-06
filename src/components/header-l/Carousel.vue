<template>
    <div class="libox">
        <a href="https://live.bilibili.com/6#/">
            <div class="loc-mc-box">
                <p class="bnj-txt txt-up">S10</p>
                <img class="bnj-gif" src="../../assets/S10.png" />
                <p class="bnj-txt txt-down">S10</p>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    name: 'carousel',
}
</script>
<style scoped>
.libox {
    width: 54px;
    height: 36px;
    overflow: hidden;
}
a {
    text-align: -webkit-match-parent;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.bnj-txt {
    margin: 0;
}
.loc-mc-box .txt-up {
    position: absolute;
    left: 0;
    top: 0;
}
.loc-mc-box .txt-down {
    position: absolute;
    left: 0;
    top: 72px;
}
.loc-mc-box .bnj-txt {
    line-height: 36px;
    text-align: center;
    width: 100%;
}
.loc-mc-box .bnj-gif {
    position: absolute;
    left: 0;
    top: 36px;
    width: 54px;
    height: 36px;
    transform: translateZ(0);
}
.loc-mc-box {
    width: 54px;
    height: 108px;
    overflow: hidden;
    position: relative;
    animation: locmoveclipslider 10s infinite ease-out;
    animation-delay: 4.5s;
}
@keyframes locmoveclipslider {
    0% {
        transform: translateY(0);
    }

    5% {
        transform: translateY(-36px);
    }

    50% {
        transform: translateY(-36px);
    }

    55% {
        transform: translateY(-72px);
    }

    100% {
        transform: translateY(-72px);
    }
}
</style>
