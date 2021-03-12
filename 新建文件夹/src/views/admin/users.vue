<template>
  <div class="container">
    <template>
      <el-table
        v-loading="loading"
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="用户ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="姓名">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="电话">
                <span>{{ props.row.tel }}</span>
              </el-form-item>
              <el-form-item label="地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="性别">
                <span>{{ props.row.sex }}</span>
              </el-form-item>
              <el-form-item label="出生年月">
                <span>{{ props.row.birthday }}</span>
              </el-form-item>
              <el-form-item label="就读学年">
                <span>{{ props.row.grade }}</span>
              </el-form-item>
              <el-form-item label="就读学校">
                <span>{{ props.row.school }}</span>
              </el-form-item>
              <el-form-item label="推荐人ID">
                <span>{{ props.row.reid }}</span>
              </el-form-item>
              <el-form-item label="得知渠道">
                <span>{{ props.row.channel }}</span>
              </el-form-item>
              <el-form-item label="付款方式">
                <span>{{ props.row.payType }}</span>
              </el-form-item>
              <el-form-item label="付款日期">
                <span>{{ props.row.payDate }}</span>
              </el-form-item>
              <el-form-item label="付款金额">
                <span>{{ props.row.payAmount }}</span>
              </el-form-item>
              <el-form-item label="到期时间">
                <span>{{ props.row.dueDate }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="用户 ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="姓名"
          prop="name">
        </el-table-column>
        <el-table-column
          label="姓别"
          prop="sex">
        </el-table-column>
        <el-table-column
          label="手机号"
          prop="tel">
        </el-table-column>
        <el-table-column
          label="地址"
          prop="address">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '王一一',
          tel: '13312341234',
          address: '上海市普陀区真北路',
          sex: '男',
          birthday: '2008.11.12',
          grade:'一年级',
          school:'青岛15中',
          reid:'001',
          channel:'推荐',
          payType:'支付宝',
          payDate:'2020.11.11',
          payAmount:'600',
          dueDate:'2021.11.11'
        },{
          id: '12987123',
          name: '赵尔尔',
          tel: '13356785678',
          address: '青岛市市北区海尔路',
          sex: '女',
          birthday: '2012.12.12',
          grade:'一年级',
          school:'青岛15中',
          reid:'002',
          channel:'推荐',
          payType:'银行转账',
          payDate:'2020.09.11',
          payAmount:'600',
          dueDate:'2021.09.11'
        }],
        loading: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    padding: 20px;
    .demo-table-expand {
        font-size: 0;
      }
      .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
      }
      .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
      }
  }
</style>
