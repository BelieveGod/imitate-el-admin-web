<template>
    <div class="cascadeMenu">
        <template v-for="(menu,index) in menus">
            <el-submenu v-if="menu.hasChild" :key="index" :index="menu.index">
                <template slot="title">{{menu.title}}</template>
                <cascade-menu :menus="menu.child"/>
            </el-submenu>
            <el-menu-item v-else :key="index" :index="menu.index">
                {{menu.title}}
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        name: "CascadeMenu",
        props:{
            menus:Array
        }
    }
</script>

<style scoped>

</style>
