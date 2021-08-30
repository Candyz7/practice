<template>
  <div class="register">
    <!--必须在div中编写页面-->
    <Header title="注册账号"></Header>
    <van-form  class="box-son" @submit="submitRegiter">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
         <van-field
            v-model="userphone"
            type="number"
            name="手机号"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info">注册</van-button>
        </div>
    </van-form>
  </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
  components: { Header },
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      userphone: ''
    }
  },
  mounted () {
  },

  methods: {
    upPage () {
      this.$router.go(-1)
    },
    submitRegiter () {
      let vm = this
      if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.userphone))) {
        this.$dialog.alert({
          message: '您填写的手机号有误'
        })
        return false
      } else if (this.username.length < 6 || this.password.length < 6) {
        this.$dialog.alert({
          message: '用户名或密码不能少于6位'
        })
        return false
      } else {
        this.$axios.post('http://localhost:8080/practice/user/insert', {
          name: this.username,
          password: this.password,
          phone: this.userphone
        }).then(function (response) {
          console.log(this)
          if (response.status === 200) {
            vm.$dialog.alert({
              message: '注册成功'
            })
            vm.$router.go(-1)
          } else {
            vm.$dialog.alert({
              message: '注册失败'
            })
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
      // console.log(values)
    }
  }
}
</script>
<style scoped>
.register /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.register /deep/ .van-nav-bar__title{
  color: white;
}
.register /deep/ .van-nav-bar .van-icon{
  color: white;
}
.register /deep/ .van-nav-bar__text{
  color: white;
}
.box-son{
 margin-top: 50px;
 width: 300px;
 position: relative;
 left: 50%;
 margin-left: -150px;
}
</style>
