<template>
  <div class="newpractice">
    <Header title="详细资料">
         <div slot="right" @click="golianxi3">下一个</div>
    </Header>
      <div class="newpractice-content">
          <div class="ai"></div>
          <Zhanshi :data="data"></Zhanshi>
            <!-- <div class="newpractice-message">
                <div class="newpractice-name">
                    <div class="name">姓名</div>
                    <div class="names">{{data.names}}</div>
                </div>
                <div class="newpractice-age">
                    <div class="age">年龄</div>
                    <div class="ages">{{data.ages}}</div>
                </div>
                <div class="newpractice-phone">
                    <div class="phone">电话</div>
                    <div class="phones">{{data.phones}}</div>
                </div>
                <div class="newpractice-userId">
                    <div class="userId">身份证</div>
                    <div class="userIds">{{data.userIds}}</div>
                </div>
                <div class="newpractice-address">
                    <div class="address">家庭住址</div>
                    <div class="myAddress">{{data.myAddress}}</div>
                </div>
            </div> -->
          <div class="like">个人爱好</div>
          <div class="newpractice-hobby">
              <div class="back">
                  <div class="bak">
                    <div class="one">
                        <div class="xuhao">序号</div>
                        <div class="mingcheng">名称</div>
                        <div class="chengdu">程度</div>
                    </div>
                    <div class="one" v-for="(items, index) in data.messages" :key="index">
                        <div class="number">{{index + 1}}</div>
                        <div class="hobby">{{items.hobby}}</div>
                        <div class="degree">{{items.degree}}</div>
                    </div>
                </div>
              </div>
          </div>
          <div class="newpractice-button">
              <div class="button" @click="findshulian">筛选</div>
          </div>
      </div>
  </div>
</template>
<script>
import Header from '../components/header.vue'
import Zhanshi from '../components/zhanshi.vue'
export default {
  components: { Header, Zhanshi },
  name: 'newpractice',
  data () {
    return {
      data: ''
    }
  },
  mounted () {
    this.data = this.$route.query.data
    console.log(this.data)
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    golianxi3 () {
      this.$router.push({ path: '/lianxi3' })
    },
    findshulian () {
      var item = this.data.messages.filter(function (mesg) {
        return mesg.degree.indexOf('熟练') !== -1
      })
      console.log(item)
      this.data.messages = item
    }
  }
}
</script>
<style scoped>
.newpractice /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.newpractice /deep/ .van-nav-bar .van-icon{
  color: white;
}
.newpractice /deep/ .van-nav-bar__text{
  color: white;
}
.newpractice /deep/ .van-nav-bar__title{
  color: white;
}
.newpractice /deep/ .van-cell__title{
    text-align: left;
    font-weight: bold;
}
.newpractice-content{
    width: 100%;
    height: calc(100vh - 50px);
    background-color: rgb(241,241,241);
    position: absolute;
    overflow: auto;
}
.ai{
    background-color: rgb(241,241,241);
    height: 10px;
}
.newpractice-message{
    padding-bottom: 15px;
    background-color: white;
}
.newpractice-name{
    display: flex;
}
.name{
    width: 60px;
    font-weight: bold;
    margin: 10px 10px 0px 10px;
}
.names{
    flex: 1;
    margin: 10px 10px 0px 38px;
    text-align: left;
}
.newpractice-age{
    display: flex;
}
.age{
    width: 60px;
    font-weight: bold;
    margin: 10px 10px 0px 10px;
}
.ages{
    flex: 1;
    margin: 10px 10px 0px 38px;
    text-align: left;
}
.newpractice-phone{
    display: flex;
}
.phone{
    width: 60px;
    font-weight: bold;
    margin: 10px 10px 0px 10px;
}
.phones{
    flex: 1;
    margin: 10px 10px 0px 38px;
    text-align: left;
}
.newpractice-userId{
    display: flex;
}
.userId{
    width: 60px;
    font-weight: bold;
    margin: 10px 10px 0px 17px;
}
.userIds{
    flex: 1;
    margin: 10px 10px 0px 33px;
    text-align: left;
}
.newpractice-address{
    display: flex;
}
.address{
    width: 80px;
    font-weight: bold;
    margin: 10px 10px 0px 16px;
}
.myAddress{
    flex: 1;
    margin: 10px 10px 0px 14px;
    text-align: left;
}
.like{
    height: 35px;
    margin-left: 22px;
    display: flex;
    text-align: left;
    align-items: center;
    font-weight: bold;
}
.newpractice-hobby{
    background-color: white;
}
.bak{
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    margin-left: 20px;
    margin-right: 20px;
}
.one{
    display: flex;
    border-bottom: 1px solid black;
}
.xuhao{
    width: 33%;
    height: 41px;
    color: white;
    background-color: rgb(25, 137, 250);
    display: flex;
    justify-content: center;
    align-items: center;
}
.mingcheng{
    width: 33%;
    height: 41px;
    color: white;
    background-color: rgb(25, 137, 250);
    display: flex;
    justify-content: center;
    align-items: center;
}
.chengdu{
    width: 34%;
    height: 41px;
    color: white;
    background-color: rgb(25, 137, 250);
    display: flex;
    justify-content: center;
    align-items: center;
}
.number{
    width: 33%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;
}
.hobby{
    width: 33%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;
}
.degree{
    width: 34%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.newpractice-button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
.button{
    height: 40px;
    width: 180px;
    color: white;
    background-color: rgb(25, 137, 250);
    border: 1px solid rgb(105, 104, 104);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
