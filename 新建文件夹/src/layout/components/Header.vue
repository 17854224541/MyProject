<template>
  <div class="header">
    <div class="top">
      <img src="../../images/home/top.jpg" alt="">
    </div>
    <div class="navbar">
      <el-row :gutter="32">
        <el-col :span="6">
          <router-link to="/login" tag="div" class="menu menu1">
            <h4>My Space</h4>
            <p>Login</p>
          </router-link>
        </el-col>
        <el-col :span="6">
          <div class="menu menu2">
            <h4>Look-Do-Learn</h4>
            <p>STEM,Geography and more...</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="menu menu3">
            <h4>X-10 Learns English</h4>
            <p>...take the challenge!</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="menu menu4">
            <h4>Business</h4>
            <p>Subscribe,Programs,Gift Shop,more</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .header{
    width: 100%;
    height: 352px;
    .top{
      img{
        width: 100%;
      }
    }
    .navbar{
      width: 1280px;
      margin: 0 auto;
      padding: 10px 64px;
      .menu{
        padding: 10px;
        height: 100px;
        box-sizing: border-box;
        h4{
          margin: 0;
          padding: 5px 0;
        }
        p{
          margin: 0;
          font-style: italic;
        }
      }
      .menu1{
        background-color: #8eda53;
      }
      .menu2{
        background-color: #5c76ff;
      }
      .menu3{
        background-color: #fe7b21;
      }
      .menu4{
        background-color: #bcbdc1;
      }
    }
  }
</style>
