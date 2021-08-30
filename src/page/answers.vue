<template>
  <div class="answers">
    <Header title="答题"></Header>
    <div class="answers-content">
        <van-cell-group>
        <van-cell :title="titles" value="1/5" />
        </van-cell-group>
        <div class="answers-title">{{content}}</div>
        <div class="answers-option">
            <van-radio-group v-model="radio"  @change="judgeFn">
              <van-radio :name='item.name' v-for="(item, index) in options"
              :key="index"
              >{{item.option}}</van-radio>
            </van-radio-group>
        </div>
        <div class="answers-button">
          {{answers}}
        </div>
        <!-- <div class="answers-title">{{content}}</div>
        <div class="answers-option">
          <van-checkbox-group v-model="radio" @change="dddddd">
            <van-checkbox :name='item.name' v-for="(item, index) in options"
              :key="index"
              >{{item.option}}</van-checkbox>
            </van-checkbox-group>
        </div>
        <div class="answers-button">
          {{answers}}
        </div> -->
    </div>
  </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
  name: 'answers',
  components: { Header },
  data () {
    return {
      radio: '',
      answers: '',
      titles: '单选题',
      content: '驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？',
      options: [
        {name: '1', option: 'A. 违章行为', answer: false},
        {name: '2', option: 'B. 违法行为', answer: true},
        {name: '3', option: 'C. 过失行为', answer: false},
        {name: '4', option: 'D. 违规行为', answer: false}
      ]
      // radio: [],
      // answers: '',
      // titles: '多选题',
      // content: '驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？',
      // options: [
      //   {name: '1', option: 'A. 违章行为', answer: false},
      //   {name: '2', option: 'B. 违法行为', answer: true},
      //   {name: '3', option: 'C. 过失行为', answer: false},
      //   {name: '4', option: 'D. 违规行为', answer: true}
      // ]
    }
  },
  mounted () {
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    judgeFn () {
      console.log(this.radio)
      var item = this.options.find(function (opt) {
        return opt.answer === true
      })
      console.log(item)
      if (this.radio === item.name) {
        this.answers = '答案正确'
      } else {
        this.answers = '答案错误'
      }
    }
    // dddddd () {
    //   console.log(this.radio)
    //   var item = this.options.filter(function (opt) {
    //     return opt.answer === true
    //   })
    //   console.log(item)
    //   var UserChooserightAnswer = 0
    //   var rightAnswer = item.length
    //   for (var i = 0; i < this.radio.length; i++) {
    //     var key1 = this.radio[i]
    //     for (var j = 0; j < item.length; j++) {
    //       var key2 = item[j].name
    //       if (key1 === key2) {
    //         UserChooserightAnswer = UserChooserightAnswer + 1
    //       }
    //     }
    //   }
    //   if (rightAnswer === UserChooserightAnswer) {
    //     this.answers = '答案正确'
    //   } else {
    //     this.answers = '答案错误'
    //   }
    // }
  }
}
</script>
<style scoped>
.answers /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.answers /deep/ .van-nav-bar .van-icon{
  color: white;
}
.answers /deep/ .van-nav-bar__text{
  color: white;
}
.answers /deep/ .van-nav-bar__title{
  color: white;
}
.answers /deep/ .van-cell__title{
    text-align: left;
    font-weight: bold;
}
.answers /deep/ .van-cell{
    height: 50px;
    border-bottom: 1px solid rgb(241,241,241);
}
.answers-content{
    height: calc(100vh - 50px);
}
.answers-title{
    margin:10px 10px 0px 10px;
    TEXT-JUSTIFY: inter-ideograph;
    TEXT-ALIGN: justify;
}
.answers-option{
    margin-top: 20px;
}
.answers /deep/ .van-radio{
    margin: 0px 15px 15px 15px;
}
.answers /deep/ .van-radio__label{
    margin-left: 30px;
}
.answers-button{
    display: flex;
    margin-left: 15px;
}
</style>
