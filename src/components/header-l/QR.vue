<template>
    <a
        href="https://app.bilibili.com/?spm_id_from=333.999.b_696e7465726e6174696f6e616c486561646572.9"
    >
        <el-dropdown>
            <span class="el-dropdown-link">
                <i class="iconfont icon-shouji"></i>
                下载APP
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <img class="qrimg" src="../../assets/qr.png" />
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </a>
</template>

<script>
export default {
    name: 'qr',
}
</script>
<style scoped>
.qrimg {
    margin: 0;
    padding: 0;
    width: 232px;
    height: 203px;
    transform: translateX(-50%);
}
i {
    color: #00a1d6;
}
</style>
