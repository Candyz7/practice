<template>
  <div class="myInfor">
    <Header title="我的信息"></Header>
      <div class="myInfor-content">
        <div class="myInfor-first">
          <img class="myInfor-img" src="../assets/images/userimg.png">
        </div>
        <div class="myInfor-next">
          <van-cell-group>
          <van-cell title="姓名" :value="name" />
          <van-cell title="电话" :value="password" />
          </van-cell-group>
        </div>
      </div>
  </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
  components: { Header },
  name: 'MyInfor',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  mounted () {
    this.name = this.$route.query.name
    this.password = this.$route.query.password
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.myInfor /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.myInfor /deep/ .van-nav-bar .van-icon{
  color: white;
}
.myInfor /deep/ .van-nav-bar__text{
  color: white;
}
.myInfor /deep/ .van-cell{
  display: flex;
  text-align: left;
}
.myInfor-content{
  background-color: rgb(241, 241, 241);
  height: calc(100vh - 50px);
}
.myInfor-first{
  height: 200px;
}
.myInfor-next{
  height: 200px;
}
.myInfor-img{
  width: 80px;
  height: 80px;
  margin-top: 50px;
}
.myInfor-name{
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: rgb(247, 245, 245);
}
.myInfor-phone{
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 1px;
  background-color: rgb(247, 245, 245);
}
</style>
