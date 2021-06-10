<template>
    <div class="tageView">
        <span v-for="(tag,index) in visitedTagViews" :key="index">{{tag}}</span>
    </div>
</template>

<script>
    // 在单独构建的版本中辅助函数为 Vuex.mapState
    import { mapState } from 'vuex'
    export default {
        name: "TagView",
        computed:{
            ...mapState({
                visitedTagViews:state=>state.tagView.visitedTagViews
            })
        }
    }
</script>

<style scoped>

</style>
