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
        type="number"
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
    modifyPassword () {
      let url = 'http://localhost:8080/practice/user/ListUserByname?name=' + this.name + '&password=' + this.password
      let vm = this
      this.$axios.get(url, {
      }).then(function (res) {
        // console.log(res)
        // console.log(res.data)
        // console.log(res.data[0].password)
        // console.log(vm.password)
        if (res.status === 200 && res.data[0].password === vm.password) {
          vm.$axios.post('http://localhost:8080/practice/user/update', {
            id: res.data[0].id,
            name: res.data[0].name,
            password: vm.newpassword,
            phone: res.data[0].phone
          }).then(function (response) {
            if (response.status === 200 && response.data.message === '修改成功') {
              vm.$dialog.alert({
                message: '修改成功'
              })
            } else {
              vm.$dialog.alert({
                message: '修改失败'
              })
            }
          }).catch(function (error) {
            console.log(error)
          })
        } else {
          vm.$dialog.alert({
            message: '您输入的密码与原密码不符'
          })
        }
      }).catch(function (error) {
        console.log(error)
      })
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
