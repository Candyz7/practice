<template>
  <div class="details">
    <Header title="题目详情"></Header>
    <div class="details-content">
        <div class="details-play">
            <div class="details-title">
                <span :class="{'question-first': data.type==='单选', 'question-next': data.type==='多选'}">{{data.type}}</span>
                {{data.title}}
            </div>
        </div>
        <div class="details-option">
            <div
             v-for="(item, index) in data.options"
             :key="index"
             :class="{'playb': item.answer, 'play': !item.answer}">{{item.id}}. {{item.option}}</div>
        </div>
        <div class="details-true">正确答案：<span>{{ answer}}</span></div>
    </div>
  </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
  components: { Header },
  name: 'details',
  data () {
    return {
      data: '',
      answer: ''
    }
  },
  mounted () {
    this.data = this.$route.query.data
    console.log(this.data)
    // var item = this.data.options.find(function (data) {
    //   return data.answer === true
    // })
    var item = this.data.options.filter(function (data) {
      return data.answer === true
    })
    // console.log(999, item)
    for (var i = 0; i < item.length; i++) {
      this.answer = this.answer + item[i].id
    }
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.details /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.details /deep/ .van-nav-bar .van-icon{
  color: white;
}
.details /deep/ .van-nav-bar__text{
  color: white;
}
.details /deep/ .van-nav-bar__title{
  color: white;
}
.details /deep/ .van-cell__title{
    text-align: left;
    font-weight: bold;
}
.details-content{
    height: calc(100vh - 50px);
}
.details-title{
    flex: 1;
    margin: 10px;
    TEXT-JUSTIFY: inter-ideograph;
    TEXT-ALIGN: justify;
}
.details-option{
    text-align: left;
    margin-top: 20px;
}
.details-true{
  text-align: left;
  margin: 30px 0px 0px 15px;
}
.play{
    margin: 15px 0px 10px 15px;
}
.playb{
    margin: 15px 0px 10px 15px;
    color: rgb(25, 137, 250);
}
.details-play{
    display: flex;
}
/* .details-type{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(25, 137, 250);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    margin: 10px 10px 0px 10px;
} */
.question-first{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(25, 137, 250);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    margin: 0px 10px 0px 10px;
}
.question-next{
    width: 40px;
    height: 20px;
    font-size: 14px;
    color: white;
    background-color: rgb(250, 228, 27);
    border: 1px solid rgb(183, 183, 183);
    border-radius: 10%;
    margin: 0px 10px 0px 10px;
}
</style>
