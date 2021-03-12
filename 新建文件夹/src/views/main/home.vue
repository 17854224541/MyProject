<template>
  <div class="container">
    <el-row :gutter="32">
      <!-- 1-2 -->
      <el-col :span="12">
        <div class="left">
          <el-row :gutter="32">

            <el-col :span="24">
              <div class="new">
                <img src="../../images/home/pic1.jpg" alt="">
              </div>
            </el-col>

            <el-col :span="12">
              <div class="part1">
                <img src="../../images/home/pic2.jpg" alt="">
              </div>
            </el-col>

            <el-col :span="12">
              <div class="part2">
                <h1>alien ... on qingdao beach</h1>
                <h3>"i conme in peace"</h3>
                <p>Trust and collaboration are the foundation for maximizing and sharing the value of 5G, and an open ecosystem is needed in particular to address the rising trend of "technology decoupling", experts and company executives said.</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <!-- 3-4 -->
      <el-col :span="12">
        <div class="right">
          <el-row :gutter="32">
            <!-- 3 -->
            <el-col :span="12">
              <div class="part3">
                <h1>up,up and away!</h1>
                <h2>chang'e 5</h2>
                <p>Jim Rogers, a well-known international investor from the United States, said protectionism was bad for the world as seen throughout history.</p>
                <p>"Anybody taking a unilateral approach to anything, certainly to technology and economics, will have problems. Foreign policy should be around opening. We need to avoid protectionism, especially in technology," he said in a video address at the second annual TrustInTech Summit held by Huawei Technologies Co.</p>
                <p>Huawei is currently facing restrictions as its access to US technologies has been curbed by the US government. Washington is also trying to persuade its allies in Europe to ban Huawei in their 5G rollout plans on alleged "national security risks", which has not been backed by factual evidence.</p>
              </div>
            </el-col>
            <!-- 4 -->
            <el-col :span="12">
              <div class="part4">
                <div class="contact">This website is published fortnightly by AAA Media.We fully appreciste your support and are constantly striving to make our work better.We love to hear your comments and suggestions.Drop us a line at:tell-us@aaa-media.com.</div>
                <div class="img-box">
                  <img src="../../images/home/pic3.jpg" alt="">
                </div>
                <div class="img-box">
                  <img src="../../images/home/pic4.jpg" alt="">
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .container{
    width: 1280px;
    margin: 0 auto;
    padding: 0 64px;
    .part3{
      h2{
        font-style: italic;
      }
    }
    .part4{
      .contact{
        border: 1px solid #000;
        padding: 5px;
        font-style: italic;
        font-size: 14px;
      }
      .img-box{
        padding-top: 10px;
      }
    }
  }
</style>
