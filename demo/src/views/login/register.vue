<template>
  <div>
    <div class="top">
      <!-- <img src="../../images/home/top.jpg" alt=""> -->
    </div>
    <div class="container">
      <div class="title">
        <h1>会员账号注册</h1>
      </div>
      <div class="step-box">
        <el-steps :active="active" finish-status="success">
          <el-step title="注册账号"></el-step>
          <el-step title="登记会员信息"></el-step>
          <el-step title="付款"></el-step>
          <el-step title="成为会员"></el-step>
          <el-step title="能力测评"></el-step>
        </el-steps>
      </div>
      <div class="form-box">
        <!-- step1 -->
        <div v-if="active==0" class="step1">
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
        <!-- step2 -->
        <div v-if="active==1" class="step2">
          <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm2.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="所在地区" prop="address">
              <v-distpicker :placeholders="placeholders"></v-distpicker>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm2.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="出生年月" prop="birthday">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm2.birthday" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="就读学年" prop="grade">
              <el-select v-model="ruleForm.grade" placeholder="请选择就读学年">
                <el-option label="一年级" value="1"></el-option>
                <el-option label="二年级" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="就读学校" prop="school">
              <el-input v-model="ruleForm2.school" placeholder="请输入就读学校(非必填)"></el-input>
            </el-form-item>
            <el-form-item label="推荐人" prop="reid">
              <el-select v-model="ruleForm.reid" placeholder="是否有推荐人">
                <el-option label="无" value="0"></el-option>
                <el-option label="001" value="001"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="得知渠道" prop="channel">
              <el-checkbox-group v-model="ruleForm2.channel">
                <el-checkbox label="公众号" name="type"></el-checkbox>
                <el-checkbox label="微博" name="type"></el-checkbox>
                <el-checkbox label="朋友推荐" name="type"></el-checkbox>
                <el-checkbox label="其他" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </div>
        <!-- step3 -->
        <div v-if="active==2" class="step3">
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="pay-way" :class="{'pay-way-1':payWay==1}" @click="Payway(1)">
                <div class="pay-zhifubao">
                  支付宝支付
                </div>
                <img src="../../images/icons/icon-duihao.png" alt="">
              </div>
            </el-col>
            <el-col :span="8">
              <div class="pay-way" :class="{'pay-way-1':payWay==2}" @click="Payway(2)">
                <div class="pay-weixin">
                  微信支付
                </div>
                <img src="../../images/icons/icon-duihao.png" alt="">
              </div>
            </el-col>
            <el-col :span="8">
              <div class="pay-way" :class="{'pay-way-1':payWay==3}" @click="Payway(3)">
                <div class="pay-yinlian">
                  银联支付
                </div>
                <img src="../../images/icons/icon-duihao.png" alt="">
              </div>
            </el-col>
          </el-row>
          <div class="choose-bank" v-if="payWay==3">
            <h4>请选择银行</h4>
            <ul>
              <li :class="{li:bank==1}" @click="Bank(1)">
                <img src="../../images/icons/zhongguoyinhang.png" alt="">
                <img class="duihao" src="../../images/icons/icon-duihao.png" alt="">
              </li>
              <li :class="{li:bank==2}" @click="Bank(2)">
                <img src="../../images/icons/zhongguojiansheyinhang.png" alt="">
                <img class="duihao" src="../../images/icons/icon-duihao.png" alt="">
              </li>
              <li :class="{li:bank==3}" @click="Bank(3)">
                <img src="../../images/icons/zhongguogongshangyinhang.png" alt="">
                <img class="duihao" src="../../images/icons/icon-duihao.png" alt="">
              </li>
              <li :class="{li:bank==4}" @click="Bank(4)">
                <img src="../../images/icons/zhongguonongyeyinhang.png" alt="">
                <img class="duihao" src="../../images/icons/icon-duihao.png" alt="">
              </li>
              <div style="clear: both;"></div>
            </ul>
          </div>
        </div>
        <!-- step4 -->
        <div v-if="active==3">
          恭喜你！开始学习探索之旅吧！
        </div>
        <!-- step5 -->
        <div v-if="active==4">
          nengliceping
        </div>
        <!-- 完成 -->
        <div v-if="active==5">
          完成
        </div>
      </div>
      <div class="btn-box">
        <el-button @click="next">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
      data() {
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
        return {
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
          ruleForm2: {
            name: '',
            address: '',
            sex: '',
            birthday: '',
            grade: '',
            school: '',
            reid:'',
            channel:''
          },
          rules2: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            address: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            sex: [
              { required: true, message: '请选择活动性别', trigger: 'change' }
            ],
            birthday: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            grade: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            school: [
              { message: '请选择活动资源', trigger: 'change' }
            ],
            reid: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
            ],
            channel: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
            ],
          },
          // 省市区三级联动
          placeholders: {
              province: '------- 省 --------',
              city: '--- 市 ---',
              area: '--- 区 ---',
          },
          // 支付
          payWay:1,
          // 银行
          bank:1,
        };
      },
      components: {
        VDistpicker
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        // 下一步
        next() {
          if (this.active++ > 4) this.active = 0;
        },
        // 选择支付方式
        Payway(n) {
          this.payWay = n
        },
        // 选择银行
        Bank(n) {
          this.bank = n
        },
      },
      created() {

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
    .title{
      text-align: center;
      h1{
        font-weight: normal;
      }
    }
    .step-box{
      padding: 10px 80px;
    }
    .form-box{
      padding: 10px 80px;
      .step1{
        width: 500px;
        margin: 0 auto;
      }
      .step2{
        width: 600px;
        margin: 0 auto;
      }
      .step3{
        padding-top: 30px;
        .pay-way{
          padding: 5px 30px;
          line-height: 50px;
          border: 1px solid #000;
          position: relative;
          cursor: pointer;
          img{
            width: 30px;
            position: absolute;
            bottom: 0px;
            right: 0px;
            display: none;
          }
        }
        .pay-way-1{
          border: 1px solid red;
          img{
            display: block;
          }
        }
        .pay-zhifubao{
          padding-left: 65px;
          background: url(../../images/icons/icon-zhifubao.png) no-repeat;
          background-size: contain;
        }
        .pay-weixin{
          padding-left: 65px;
          background: url(../../images/icons/icon-weixin.png) no-repeat;
          background-size: contain;
        }
        .pay-yinlian{
          padding-left: 65px;
          background: url(../../images/icons/icon-yinlian.png) no-repeat;
          background-size: contain;
        }
        .choose-bank{
          ul{
            list-style: none;
            padding: 0;
            li{
              padding: 0 10px;
              border: 1px solid transparent;
              float: left;
              width: 25%;
              position: relative;
              img{
                width: 100%;
              }
              .duihao{
                width: 30px;
                position: absolute;
                bottom: 0px;
                right: 0px;
                display: none;
              }
            }
            .li{
              border: 1px solid red;
              .duihao{
                display: block;
              }
            }
          }
        }
      }
    }
    .btn-box{
      padding: 20px;
      text-align: center;
    }
  }
</style>
