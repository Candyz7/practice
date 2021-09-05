<template>
  <div>
      <van-nav-bar
        title="练习题一"
        left-text="返回"
        left-arrow
        @click-left="upPage"
      />
      <!-- <div>{{(name === '我的' ) ? '张三' : '李四'}}</div><br><br><br>
      <van-button round block type="info" @click="testStyle">修改样式的方式</van-button>
      <div class='test'>测试</div>
      <div :class='classValue'>测试</div><br><br>
      <van-button round block type="info" @click="testStyle2">修改样式的方式:Class 与 Style 绑定</van-button>
      <div :class="{'test': isTest, 'next': !isTest}">测试</div><br><br> -->
      <div v-if="data ==='a'">a(v-if)</div>
      <div v-else-if="data ==='b'">b(v-if)</div>
      <div v-else>其他的(v-if)</div><br><br>
      <p v-show="data === 'a'">a(v-show)</p>
      <p v-show="data === 'b'">b(v-show)</p>
      <div v-for="(item, index) in arr" :key="index">
      <div>名字为：{{ item.name }}  年龄为：{{ item.age }}</div>
      </div><br><br>
      <input v-model.trim="msg">
      <div class="aa"></div>
  </div>
</template>
<script>
export default {
  name: 'Lianxi3',
  data () {
    return {
      name: '他的',
      testHtml: '<span style="color: skyblue">有意思</span>',
      classValue: 'test',
      isTest: true,
      code: '点击',
      data: 'a',
      msg: '',
      arr: [
        {
          name: '王五',
          age: '38'
        },
        {
          name: '老六',
          age: '42'
        }
      ]
    }
  },
  watch: {
    msg: function () {
      console.log(this.msg)
    }
  },
  mounted () {
    var mid = [3, 4]
    var newarray = [1, 2, ...mid, 5, 6]
    console.log(newarray)
    for (var i = 1; i <= 100; i++) {
      console.log('你好吗')
    }
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    testStyle () {
      this.classValue = 'next'
    },
    testStyle2 () {
      this.isTest = false
    }
  }
}
</script>
<style scoped>
.test{
  background: brown;
  color: fuchsia;
}
.next{
  background-color: gold;
  color: aquamarine;
}
.aa{
  width: 0;
height: 0;
border-top: 40px solid transparent;
border-left: 40px solid transparent;
border-right: 40px solid transparent;
border-bottom: 40px solid #ff0000;
}
</style>
