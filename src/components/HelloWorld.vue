<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ nameInfo }}</h1>
    <div class="testCom">
      <input type="text" v-model="message" />
      <button @click="click">Send</button>
    </div>
  </div>
</template>
<script>
// import { eventHub } from '../main'
export default {
  name: 'HelloWorld',
  props: ['nameInfo'],
  data () {
    return {
      msg: '忘记密码',
      message: '我是来自子组件的消息'
    }
  },
  mounted () {
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    click () {
      // eventHub.$emit('update', this.message)
      this.$emit('childFn', this.message)
    }
  }
}
</script>
<style scoped>
h1 {
  font-weight: normal;
  font-size: 12px;
  text-align: right;
}
</style>
