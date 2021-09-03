<template>
  <div class="modify">
    <Header title="修改密码"></Header>
    <div class="modify-header">
        <div class="modify-title">用户名</div>
        <div class="modify-name">{{ name }}</div>
    </div>
    <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
    />
        <van-field
        v-model="newpassword"
        type="password"
        name="新密码"
        label="新密码"
        placeholder="新密码"
        :rules="[{ required: true, message: '请填写新密码' }]"
    />
    <div style="margin: 16px;">
        <van-button round block type="info" @click="modifyPassword">修改</van-button>
    </div>
  </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
  components: { Header },
  name: 'Modify',
  data () {
    return {
      name: '',
      password: '',
      newpassword: ''
    }
  },
  mounted () {
    this.name = this.$route.query.name
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    async modifyPassword () {
      const vm = this
      let url = 'http://localhost:8080/practice/user/ListUserByname?name=' + this.name + '&password=' + this.password
      let res = await vm.$axiosHttp.getHttp(url, {})
      if (res[0].password === vm.password) {
        vm.updata(res)
      } else {
        vm.$dialog.alert({
          message: '您输入的密码与原密码不符'
        })
      }
      // this.$axios.get(url, {
      // }).then(function (res) {
      //   if (res.status === 200) {
      //     if (res.data[0].password === vm.password) {
      //       vm.updata(res)
      //     } else {
      //       vm.$dialog.alert({
      //         message: '您输入的密码与原密码不符'
      //       })
      //     }
      //   } else {
      //     vm.$dialog.alert({
      //       message: '接口异常'
      //     })
      //   }
      // }).catch(function (error) {
      //   console.log(error)
      // })
    },
    async updata (res) {
      let vm = this
      let url = 'http://localhost:8080/practice/user/update'
      let param = {
        id: res[0].id,
        name: res[0].name,
        password: vm.newpassword,
        phone: res[0].phone
      }
      // await方式
      try {
        let responseData = await vm.$axiosHttp.postHttp(url, param)
        if (responseData && responseData.message === '修改成功') {
          vm.$dialog.alert({
            message: '修改成功'
          })
        } else {
          vm.$dialog.alert({
            message: '修改失败'
          })
        }
      } catch (error) {
        console.log(error)
      }
      // promise方式
      // vm.$axiosHttp.postHttp(url, param).then((responseData) => {
      //   if (responseData.message === '修改成功') {
      //     vm.$dialog.alert({
      //       message: '修改成功'
      //     })
      //   } else {
      //     vm.$dialog.alert({
      //       message: '修改失败'
      //     })
      //   }
      // }).catch(() => {
      // })
    }
  }
}
</script>
<style scoped>
.modify-header{
    display: flex;
    margin-top: 60px;
}
.modify-title{
    width: 65px;
    height: 24px;
    text-align: left;
    padding: 10px 16px;
}
.modify-name{
    flex: 1;
    height: 24px;
    padding: 10px 16px;
    text-align: left;
}
</style>
