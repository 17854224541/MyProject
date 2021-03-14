<template>
  <div>
    <div class="top">
      <img src="../../images/home/top.jpg" alt="">
    </div>
    <div class="container">
      <div class="toregister">
        <router-link to="/register">没有账号，去注册</router-link>
      </div>
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
        <el-button @click="login()">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data (){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return{
        active: 0,
        ruleForm: {
          tel:'',
          pass: '',
          checkPass: '',
        },
        rules: {
          tel:[
            {required: true, message: '请填写手机号', trigger: 'change'}
          ],
          yzm:[
            {required: true, message: '请填写验证码', trigger: 'change'}
          ],
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass2, trigger: 'blur' }
          ],
        },
      }
    },
    methods:{
      login(){
        this.$router.push({ path:'/home'})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .top{
    img{
      width: 100%;
    }
  }
  .container{
    padding: 20px;
    width: 1000px;
    margin: 0 auto;
    .toregister{
      text-align: right;
      color: blue;
    }
    .title{
      text-align: center;
      h1{
        font-weight: normal;
      }
    }
    .form{
      padding: 10px 200px;
      text-align: center;
    }
  }
</style>
