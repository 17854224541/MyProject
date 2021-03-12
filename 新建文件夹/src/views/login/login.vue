<template>
  <div>
    <div class="top">
      <img src="../../images/home/top.jpg" alt="">
    </div>
    <div class="container">
      <div class="title">
        <h1>会员登录</h1>
      </div>
      <div class="form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手 机 号" prop="tel">
            <el-input v-model.number="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="短信验证码" prop="yzm">
            <el-input v-model.number="ruleForm.yzm" style="width: 60%;"></el-input>
            <el-button @click="" style="width: 38%;">获取验证码</el-button>
          </el-form-item>
          <el-form-item label="密 码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
