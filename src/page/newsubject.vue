<template>
  <div class="newsubject">
    <Header title="新建题目"></Header>
    <div class="newsubject-content">
        <div class="newsubject-type">题型：</div>
        <div class="newsubject-option">
            <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1">单选题</van-radio>
                <van-radio name="2">多选题</van-radio>
            </van-radio-group>
        </div>
        <div class="newsubject-title">题目：</div>
        <div class="newsubject-text">
            <van-cell-group>
                <van-field v-model="value" placeholder="请输入题目内容" />
            </van-cell-group>
        </div>
        <div class="newsubject-key">答案选项：</div>
        <div>
            <van-field v-model="playA" label="选项A" placeholder="请输入选项A内容"/>
            <van-field v-model="playB" label="选项B" placeholder="请输入选项B内容"/>
            <van-field v-model="playC" label="选项C" placeholder="请输入选项C内容"/>
            <van-field v-model="playD" label="选项D" placeholder="请输入选项D内容"/>
        </div>
        <div class="newsubject-rightKey">正确答案是：</div>
        <div class="newsubject-option">
            <van-checkbox-group v-model="result" direction="horizontal" :max="nub" :disabled="why">
                <van-checkbox name="A">A</van-checkbox>
                <van-checkbox name="B">B</van-checkbox>
                <van-checkbox name="C">C</van-checkbox>
                <van-checkbox name="D">D</van-checkbox>
            </van-checkbox-group>
        </div>
    </div>
    <van-button color="rgb(25, 137, 250)" type="primary" size="large" @click="gohome">提交</van-button>
  </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
  components: { Header },
  name: 'newsubject',
  data () {
    return {
      radio: '',
      value: '',
      playA: '',
      playB: '',
      playC: '',
      playD: '',
      result: [],
      nub: '0',
      why: true
    }
  },
  watch: {
    radio: function () {
      if (this.radio === '1') {
        this.why = false
        this.nub = 1
        // console.log(this.radio)
      } else if (this.radio === '2') {
        this.why = false
        this.nub = 4
        // console.log(this.radio)
      }
      this.result = []
    }
  },
  mounted () {
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    gohome () {
      var radios = this.radio
      var values = this.value
      var playAs = this.playA
      var playBs = this.playB
      var playCs = this.playC
      var playDs = this.playD
      var results = this.result

      if (!(radios && values && playAs && playBs && playCs && playDs && results)) {
        this.$dialog.alert({
          message: '您还未输入'
        })
      } else {
        this.$router.go(-1)
      }
    }
    // judgeFn () {
    //   this.result = []
    // }
  }
}
</script>
<style scoped>
.newsubject /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.newsubject /deep/ .van-nav-bar__title{
    color: white;
}
.newsubject /deep/ .van-nav-bar .van-icon{
  color: white;
}
.newsubject /deep/ .van-nav-bar__text{
  color: white;
}
.newsubject-content{
  background-color: rgb(241, 241, 241);
  height: calc(100vh - 100px);
}
.newsubject-type{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.newsubject-option{
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
}
.newsubject /deep/ .van-radio--horizontal{
    padding-left: 20px;
}
.newsubject-title{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.newsubject /deep/ .van-cell{
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
}
.newsubject-key{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.newsubject-rightKey{
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.newsubject /deep/ .van-checkbox{
    padding-left: 30px;
}
</style>
