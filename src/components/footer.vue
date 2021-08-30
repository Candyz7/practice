<template>
  <div class="footer">
    <div class="left">
       <slot name="left">
        <div @click="clickFooterLeft"><van-icon name="wap-home" size="25px"/><div>主页</div></div>
       </slot>
    </div>
    <div class="center">
       <slot name="center">
         <van-icon name="label" size="25px"/><div>任务列表{{topInfo}}</div>
       </slot>
    </div>
    <div class="right">
      <slot name="right">
        <div @click="clickFooterRight"><van-icon name="manager" size="25px"/><div>我的</div></div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: ['topInfo'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    clickFooterLeft () {
      this.$emit('clickFooterLeft')
    },
    clickFooterRight () {
      this.$emit('clickFooterRight')
    }
  }
}
</script>
<style scoped>
  .footer{
    display: flex;
    align-items: center;
    height: 50px;
    width: 100vw;
  }
  .left{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .center{
    font-size: 14px;
    flex: 1;
  }
  .right{
    flex: 1;
    font-size: 14px;
    text-align: center;
  }
</style>
