<template>
  <div class="answers">
    <Header title="答题"></Header>
    <div class="answers-content">
        <van-cell-group>
          <van-cell>
            <span slot="title">{{listRandomData[currentIndex].subjectType === '1' ? '单选题' : '多选题'}}</span>
            <span slot="default">{{ currentIndex + 1}}/{{listRandomData.length}}</span>
          </van-cell>
        </van-cell-group>
        <div class="answers-title">{{listRandomData[currentIndex].title}}</div>
        <div class="answers-option">
            <van-checkbox-group v-model="listRandomData[currentIndex].radio" :max="listRandomData[currentIndex].subjectType === '1' ? 1 : 4" @change="judgeFn">
              <van-checkbox
              v-for="(item, index) in listRandomData[currentIndex].answers"
              :key="index"
               :name='item.seq'
              >{{item.answerDesc}}</van-checkbox>
            </van-checkbox-group>
        </div>
        <div class="answers-button">
          {{listRandomData[currentIndex].result}}
        </div>
        <button v-show="listRandomData[currentIndex].result && currentIndex < listRandomData.length - 1" @click="next">下一题</button>
        <button v-show="listRandomData[currentIndex].result && currentIndex === listRandomData.length - 1" @click="goFraction">查看答案分数</button>
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
      listRandomData: [],
      currentIndex: 0
      // data: '',
      // radio: '',
      // answers: '',
      // titles: '单选题',
      // content: '驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？',
      // options: [
      //   {name: '1', option: 'A. 违章行为', answer: false},
      //   {name: '2', option: 'B. 违法行为', answer: true},
      //   {name: '3', option: 'C. 过失行为', answer: false},
      //   {name: '4', option: 'D. 违规行为', answer: false}
      // ]
    }
  },
  mounted () {
    this.getListRandom()
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    async getListRandom () {
      let vm = this
      let url = 'http://localhost:8080/practice/subject/listRandom?number=' + 5
      let res = await vm.$axiosHttp.postHttp(url, {})
      // console.log(res)
      vm.listRandomData = res
    },
    judgeFn () {
      // console.log(this.listRandomData[this.currentIndex].radio)
      var rightAnswerArr = this.listRandomData[this.currentIndex].answers.filter(function (opt) {
        return opt.rightAnswer === '1'
      })
      let arr = []
      rightAnswerArr.map((item) => {
        arr.push(item.seq)
      })
      console.log(arr)
      let raidoVale = JSON.parse(JSON.stringify(this.listRandomData[this.currentIndex].radio))
      if (raidoVale.sort().toString() === arr.sort().toString()) {
        this.listRandomData[this.currentIndex].result = '答案正确'
      } else {
        if (this.listRandomData[this.currentIndex].radio.length === 0) {
          this.listRandomData[this.currentIndex].result = ''
        } else {
          this.listRandomData[this.currentIndex].result = '答案错误'
        }
      }
      console.log(33, this.listRandomData[this.currentIndex].result)
      this.$forceUpdate()
    },
    next () {
      this.currentIndex++
    },
    goFraction () {
      var item = this.listRandomData.filter(function (mesg) {
        return mesg.result.indexOf('答案正确') !== -1
      })
      // console.log(this.listRandomData.length)
      // console.log(item.length)
      this.$dialog.alert({
        message: '你的分数是' + 100 / this.listRandomData.length * item.length
      }).then(() => {
        this.$router.go(-1)
      })
    }
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
.answers /deep/ .van-checkbox{
    margin: 0px 15px 15px 15px;
    text-align: left;
}
.answers /deep/ .van-checkbox-group{
    margin-left: 10px;
}
.answers-button{
    display: flex;
    margin-left: 15px;
}
</style>
