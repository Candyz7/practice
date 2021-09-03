<template>
  <div class="login">
    <img id="img" class="login-img" src="../assets/images/bg.png">
    <van-form  class="box-son" @submit="onSubmit">
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
        <div style="margin: 16px;">
          <van-button round block type="info">登录</van-button>
        </div>
        <div class="login-register" @click="Register">注册账号</div>
        <!-- <hello-world :nameInfo="username"></hello-world> -->
        <!-- <div class="test">
          <hello-world :nameInfo="username" @childFn="parentFn">
          </hello-world>
          <br/>
          子组件传来的值 : {{message}}
        </div> -->
    </van-form>
    <!-- ================= {{}}的使用=================-->
     <!-- <van-button round block type="info" @click="update">{{msg}}</van-button> -->
    <!-- ================= {{}} 里头表达式用法-->
     <!-- <van-button round block type="info">{{(number === 1 || cost === 1) ? 3 : 4}}</van-button> -->
    <!-- ================= v-html的使用=================-->
     <!-- <div v-html="testHtml"></div> -->
    <!-- ================= v-bind:的使用=================-->
     <!-- <van-button round block type="info" @click="updateStyle">修改样式的方式</van-button>
     <div class='test'>测试</div>
     <div v-bind:class='classValue'>测试</div>
     <div :class='classValue'>测试</div> -->
    <!-- ================= Class 与 Style 绑定:的使用=================-->
     <!-- <van-button round block type="info" @click="updateStyle2">修改样式的方式:Class 与 Style 绑定</van-button>
     <div :class="{'test': isTest, 'test-after': !isTest}">测试</div> -->
     <!-- ================= 过滤器的使用-->
     <!-- <van-button round block type="info">{{code | codeText}}</van-button> -->
     <!-- ================= v-if/v-else-if/v-else的使用-->
     <!-- <div v-if="role==='系统管理员'">{{role}}权限最大</div>
     <div v-else-if="role==='用户'">{{role}}权限只能读书</div>
     <div v-else>{{role}}没有权限</div> -->
     <!-- ================= v-show 的使用  v-show和v-if的区别-->
     <!-- <div v-show="isShow">是否显示</div>
     <div v-if="isShow">是否显示</div> -->
     <!-- ================= v-for 的使用-->
     <!-- <div v-for="(item, index) in arr" :key="index" @click="gggg(index)">
       <div>名字为：{{ item.name }}  年龄为：{{ item.age }}</div>
     </div> -->
  </div>
</template>
<script>
// import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'Login',
  components: {
    // HelloWorld
  },
  data () {
    return {
      username: '',
      password: '',
      message: ''
      // msg: '开始'
      // number: 1,
      // cost: 100
      // testHtml: '<span style="color: red">hahahha</span>',
      // classValue: 'test'
      // code: '01'
      // isTest: true,
      // role: '系统管理员' // 系统管理员、用户
      // isShow: true
      // arr: [
      //   {
      //     name: '朱思凤',
      //     age: '30'
      //   },
      //   {
      //     name: '朱思维',
      //     age: '20'
      //   }
      // ]
    }
  },
  watch: {
    username: function (newVal, oldVal) {
      console.log('新值：' + newVal + '旧值：' + oldVal)
    }
  },
  // filters: {
  //   codeText: function (value) {
  //     if (value === '01') return '足球'
  //     if (value === '02') return '蓝球'
  //   }
  // },
  beforeCreate () { // 创建前
    console.log('beforeCreate')
    console.log(this.username)
    var img = document.getElementById('img')
    console.log(img)
    // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  },
  created () { // 创建完成
    console.log('created')
    console.log(this.username)
    var img = document.getElementById('img')
    console.log(img)
    // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
  },
  beforeMount () { // 元素渲染完成之前
    console.log('beforeMount')
    console.log(this.username)
    var img = document.getElementById('img')
    console.log(img)
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  },
  mounted () { // 元素渲染完成
    console.log('mounted')
    console.log(this.username)
    var img = document.getElementById('img')
    console.log(img)
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    // var ages = [22, 33, 16, 40]
    // var data = ages.filter(function (age) {
    //   return age >= 18
    // })
    // console.log(222, data)
    // var options = [
    //   {id: 'A', option: '违章行为', answer: true},
    //   {id: 'B', option: '违法行为', answer: false},
    //   {id: 'C', option: '过失行为', answer: true},
    //   {id: 'D', option: '违规行为', answer: false}
    // ]
    // var data = options.filter(function (item) {
    //   return item.answer === true
    // })
    // console.log(222, data)

    // var arr = [
    //   {name: '朱思凤', info: {age: 18, aihao: '羽毛球'}},
    //   {name: '朱维', info: {age: 20, aihao: '蓝球'}},
    //   {name: '朱思', info: {age: 27, aihao: '羽毛球'}},
    // ]
    // var aaa = arr.filter(function (fors) {
    //   console.log(fors);
    //   var re = fors.info.aihao === '羽毛球' || fors.info.age > 20
    //   return re
    // })
    // console.log(aaa);
    // var options = [
    //   {name: '朱思凤', info: {age: 18, aihao: '羽毛球'}},
    //   {name: '朱维', info: {age: 20, aihao: '蓝球'}},
    //   {name: '朱思', info: {age: 27, aihao: '羽毛球'}},
    //   {name: '朱思维', info: {age: 27, aihao: '羽毛球'}},
    //   {name: '朱维', info: {age: 27, aihao: '羽毛球'}}
    // ]
    // var item = options.find(function (data) {
    //   // console.log(data.name.indexOf('维') !== -1)
    //   return data.info.aihao === '羽毛球' && data.info.age > 20 && data.name.indexOf('维') !== -1
    // })
    // console.log(item)
  },
  // beforeUpdate () {
  //   console.log('beforeUpdate')
  //   // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  // },
  // updated () {
  //   console.log('updated')
  //   // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  //   // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环
  // },
  // beforeDestroy () {
  //   console.log('beforeDestroy')
  //   // 实例销毁之前调用。在这一步，实例仍然完全可用。
  // },
  // destroyed () {
  //   console.log('destroyed')
  //   // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
  // },
  methods: {
    parentFn (payload) {
      this.message = payload
    },
    async onSubmit () {
      let vm = this
      let url = 'http://localhost:8080/practice/user/ListUserByname?name=' + this.username + '&password=' + this.password
      let res = await vm.$axiosHttp.getHttp(url, {})
      if (res.length > 0) {
        vm.$toast('登录成功')
        vm.$router.push({ path: '/home', query: {name: vm.username, password: vm.password} })
      } else {
        vm.$dialog.alert({
          message: '用户不存在'
        })
      }
      // this.$axios.get(url, {
      // }).then(function (res) {
      // }).catch(function (error) {
      //   console.log(error)
      // })
    },
    Register () {
      this.$router.push({ path: '/register' })
    },
    update () {
      if (this.msg === '开始') {
        this.msg = '结束'
      } else if (this.msg === '结束') {
        this.msg = '开始'
      }
    },
    updateStyle () {
      // 第一种，通过元素js去改
      // var a = document.getElementsByClassName('test')
      // a[0].style.color = 'aqua'
      // a[0].style.background = 'brown'
      // a[0].style.fontSize = '20px'
      // 第二种，通过vue修改动态样式去做
      this.classValue = 'test-after'
    },
    updateStyle2 () {
      this.isTest = false
    },
    gggg (index) {
      console.log(index)
      if (index === 0) {
        this.$router.push({ path: '/home', query: { setid: 123456 } })
      }
    }
  }
}
</script>
<style scoped>
.login-img{
  width: 100%;
  height: 240px;
}
.box-son{
    margin-top: 50px;
    width: 300px;
    position: relative;
    left: 50%;
    margin-left: -150px;
}
.login-register{
  margin-right: 25px;
  text-align: right;
  font-size: 12px;
  color: rgb(25, 137, 250)
}
.test{
  color:brown;
}
.test-after{
  color:aqua;
  background: brown;
  font-size: 20px;
}
</style>
