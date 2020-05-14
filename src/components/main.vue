<template>
  <div class="main">
    <el-container>
        <el-header height="42px" class="border-bottom">顶栏容器。</el-header>
        <el-container>
            <el-aside width="200px" class="border-right">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo border-none">
                    <el-menu-item index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span><router-link to="/home">Home</router-link></span>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">
                            <router-link to="/page1/123">page1</router-link>
                        </span>
                    </el-menu-item>
                    <!-- <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title"><router-link to="/wqeqeq">找不到的页面</router-link></span>
                    </el-menu-item> -->
                    <el-menu-item index="4">
                        <i class="el-icon-menu"></i>
                        <span slot="title">
                            <router-link to="/forms">form</router-link>
                        </span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view class="padding16" />
            </el-main>
        </el-container>
        <el-footer height="42px" class="border-top">底栏容器。</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
    },
    data () {
        return  {
            msg: 'Hello World'
        }
    },
    mounted () {
        console.log(this)
    }
}
</script>
<style lang="scss" scoped>
    @import '../style/common.scss';
    .main{
        height: 100%;
        background-color: $mainBgColor;
        .el-container{
            height: 100%;
        }
    }
</style>
