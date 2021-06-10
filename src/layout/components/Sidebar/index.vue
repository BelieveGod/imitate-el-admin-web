<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router>
        <cascade-menu :menus="menuData"/>
        <!--      <el-submenu index="1">-->
        <!--        <template slot="title">-->
        <!--          <i class="el-icon-location"></i>-->
        <!--          <span>导航一</span>-->
        <!--        </template>-->
        <!--        <el-menu-item-group>-->
        <!--          <template slot="title">分组一</template>-->
        <!--          <el-menu-item index="1-1">选项1</el-menu-item>-->
        <!--          <el-menu-item index="1-2">选项2</el-menu-item>-->
        <!--        </el-menu-item-group>-->
        <!--        <el-menu-item-group title="分组2">-->
        <!--          <el-menu-item index="1-3">选项3</el-menu-item>-->
        <!--        </el-menu-item-group>-->
        <!--        <el-submenu index="1-4">-->
        <!--          <template slot="title">选项4</template>-->
        <!--          <el-menu-item index="1-4-1">选项1</el-menu-item>-->
        <!--        </el-submenu>-->
        <!--      </el-submenu>-->
        <!--      <el-menu-item index="2">-->
        <!--        <i class="el-icon-menu"></i>-->
        <!--        <span slot="title">导航二</span>-->
        <!--      </el-menu-item>-->
        <!--      <el-menu-item index="3" disabled>-->
        <!--        <i class="el-icon-document"></i>-->
        <!--        <span slot="title">导航三</span>-->
        <!--      </el-menu-item>-->
        <!--      <el-menu-item index="4">-->
        <!--        <i class="el-icon-setting"></i>-->
        <!--        <span slot="title">导航四</span>-->
        <!--      </el-menu-item>-->
    </el-menu>
</template>

<script>
    import MENU_DATA from './menuData';
    import CascadeMenu from "@/components/CascadeMenu";

    export default {
        name: "index",
        components: {CascadeMenu},
        comments: {
            CascadeMenu
        },
        data() {
            return {
                menuData: MENU_DATA,
            }
        },
        mounted() {
            console.log("输出菜单信息");
            console.log(this.menuData);
        },
        methods: {
            handleSelect(index,indexPath){
                console.log(index);
                console.log(indexPath)
            },
            handleOpen(){

            },
            handleClose(){

            }
        }
    }
</script>

<style scoped>
    .el-menu {
        height: 100%;
    }
</style>
