<template>
  <div>
    <header class="jobname min414">Web前端工程师 - {{resume.name}}</header>
    <h1 class="title">个人信息<span class="max414">-&nbsp;&nbsp;Web前端工程师</span></h1>
    <div class="avatar" style="background-image:url(http://cdn.lintaohai.xyz/avatar.jpeg);"></div>
    <div class="flex-box">
      <section class="flex-item">
        <div class="max414"><span class="tag"></span> {{resume.name}} | {{resume.age}} | 汉族 | {{resume.hukou}}</div>
        <div class="min414"><span class="tag"></span> 民族：汉族</div>
        <div class="min414"><span class="tag"></span> 年龄：{{resume.age}}</div>
      </section>
      <section class="flex-item">
        <div class="min414"><span class="tag"></span> 籍贯：{{resume.hukou}}</div>
        <div><span class="tag"></span> QQ: 415558560</div>
      </section>
      <section class="flex-item">
        <div class="company"><span class="tag"></span> 手机: {{resume.mobile}}</div>
        <div><span class="tag"></span> 邮箱: {{resume.email}}</div>
      </section>
    </div>
    <!--  -->
    <h1 class="title">教育经历</h1>
    <div class="flex-box">
      <section class="flex-item">
        <div v-for="(item, index) in resume.education" :key="index"><span class="tag"></span> {{item}}</div>
      </section>
    </div>
    <!--  -->
    <h1 class="title">专业技能</h1>
    <div class="flex-box">
      <section class="flex-item" v-for="(item, index) in resume.skill" :key=index>
        <div><span class="tag"></span>{{item}}</div>
      </section> 
    </div>
    <!--  -->
    <h1 class="title">工作经验</h1>
    <div class="flex-box" v-for="(item, index) in resume.pro" :key=index>
      <section class="flex-item">
        <div class="company"><span class="tag">
          </span> {{item.name}} （ {{item.job_time}} ）
          <div>{{item.company}}</div>
        </div>
      </section>
      <section class="flex-item" v-for="(pro, sindex) in item.projects" :key=sindex>
        <div>
            <!-- <h1 class="product">项目{{sindex | proItem}}：&nbsp;&nbsp;&nbsp;&nbsp;{{pro.name}}</h1> -->
          <p>项目描述：&nbsp;{{pro.proj}}</p>
          <div><p v-for="(duty, dindex) in pro.duty" :key="dindex">{{duty}}</p></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resume: {}
    }
  },
  filters: {
    proItem (num) {
      let data = ['一', '二', '三', '四', '五']
      return data[num]
    }
  },
  created () {
    this.$http.get('https://www.lintaohai.xyz/admin/v1/resume/7458')
    .then(res => {
      let data = res.data
      this.resume = data
      this.resume.education = data.education || []
      this.resume.projects = data.projects || []
      this.resume.pro = data.pro || []
      console.log(data.pro);
      
    })
  }
}
</script>


<style lang="less">
html,
body {
  background-color: #f5f5f5;
}
.jobname{
  font-size: 26px;
  margin-bottom: 20px;
}
.title {
  padding: 8px;
  margin-left: -20px;
  padding-left: 25px;
  background: #ff6000;
  color: #fff;
  width: 120px;
  font-size: 14px;
}
.flex-box{
  margin-top: 18px;
  margin-bottom: 30px;
  border: 2px solid #ddd;
  border-radius: 5px;
}
.flex-item {
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  font-size: 14px;
  div {
    flex: 1;
    padding: 10px 15px;
    border-right: 2px solid #ddd;
    letter-spacing: 1.2px;
    line-height: 24px;
    &:last-child {
      border: 0;
    }
    .product{
      margin: 10px 0;
      +p {
        line-height: 1.48;
      }
    }
  }
  &+.flex-item {
      border-top: 1px solid #ddd;
  }
  .tag{
    display: inline-block;
    border: 4px solid #fb8a46;
    border-radius: 5px;
    margin-right: 6px;
  }
}
.max414{display: none}
.avatar{
  position: absolute;
  top: 20px;
  right: 50px;
  width: 100px;
  height: 120px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  border: 1px solid #ddd;
}

@media screen and (max-width: 700px) {
  #app{
    padding: 10px; 
    margin: 0;
  }
  .avatar{
    top: 30px;
    right: 10px;
    width: 60px;
    height: 70px;
    // border-radius: 50%;
  }
  .title{
    padding: 10px 0;
    margin-top: 20px;
    width: 100%;
    margin-left: 0;
    text-indent: 12px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .flex-box{
    margin-top: 0px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .flex-item {
    flex-wrap:wrap;
    .company {
      border-bottom: 1px solid #ddd;
    }
    div {
      flex: auto;
      width: 100%;
      padding: 6px 10px;
      letter-spacing: normal;
      border-right: 0;
      line-height: 24px;
    }
  }
  .max414{
    display: inline-block !important;
    border: 0 !important;
  }
  .min414{display: none;}
  .tag{font-size: 12px;color: #ff6000;}
}
</style>