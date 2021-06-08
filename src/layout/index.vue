<template>
 <div>
   <el-container>
     <el-aside width="200px">
       <sisebar/>
     </el-aside>
     <el-container>
       <el-header>Header</el-header>
       <el-main>
         <h1>main</h1>
         <router-view/>
       </el-main>
       <el-footer>Footer</el-footer>
     </el-container>
   </el-container>
 </div>
</template>

<script>
  import Sisebar from './components/Sidebar';
  export default {
    name: "index",
    components: {
      Sisebar
    },
    computed:{

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
    /*height: 70px;*/
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /*line-height: 200px;*/
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100%;
  }

   .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
</style>
