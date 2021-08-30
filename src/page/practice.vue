<template>
  <div class="practice">
    <Header title="个人资料"></Header>
    <div class="practice-content">
        <div class="a1" v-for="(item, index) in message" :key="index">
            <div class="practice-name">
                <div class="name">账号名</div>
                <div class="names">{{item.names}}</div>
            </div>
            <div class="practice-message">
                <div class="practice-messages">
                    <div class="practice-age">
                        <div class="age">年龄</div>
                        <div class="ages">{{item.ages}}</div>
                    </div>
                    <div class="practice-phone">
                        <div class="phone">电话</div>
                        <div class="phones">{{item.phones}}</div>
                    </div>
                    <div class="practice-userId">
                        <div class="userId">身份证</div>
                        <div class="userIds">{{item.userIds}}</div>
                    </div>
                    <div class="practice-address">
                        <div class="address">家庭住址</div>
                        <div class="myAddress">{{item.myAddress}}</div>
                    </div>
                </div>
                <div class="practice-img">
                    <img class="img" src="../assets/images/right.png" @click="gonewpractice(item)">
                </div>
            </div>
        </div>
    </div>
    <div  class="practice-footer" @click="findYuhua">查找住在雨花区的人: {{name}}</div>
  </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
  components: { Header },
  name: 'practice',
  data () {
    return {
      name: '',
      message: [
        {
          names: '张三',
          ages: '20',
          phones: '16622228888',
          userIds: '1247120957149',
          myAddress: '湖南省长沙市岳麓区麓谷大道湖南省长沙市岳麓区麓谷大道湖南省长沙市岳麓区麓谷大道湖南省长沙市岳麓区麓谷大道湖南省长沙市岳麓区麓谷大道',
          messages: [
            {number: '1', hobby: '蓝球', degree: '熟练'},
            {number: '2', hobby: '电玩', degree: '一般'},
            {number: '3', hobby: '唱歌', degree: '熟练'}
          ]
        },
        {
          names: '李四',
          ages: '25',
          phones: '15522227777',
          userIds: '9086410957149',
          myAddress: '湖南省长沙市天心区麓谷大道湖南省长沙市天心区麓谷大道湖南省长沙市天心区麓谷大道湖南省长沙市天心区麓谷大道湖南省长沙市天心区麓谷大道',
          messages: [
            {number: '1', hobby: '跳舞', degree: '很烂'},
            {number: '2', hobby: '电竞', degree: '冠军'},
            {number: '3', hobby: '唱歌', degree: '一般'}
          ]
        },
        {
          names: '王五',
          ages: '17',
          phones: '17622223435',
          userIds: '1249747771429',
          myAddress: '湖南省长沙市雨花区麓谷大道',
          messages: [
            {number: '1', hobby: '足球', degree: '职业'},
            {number: '2', hobby: '下棋', degree: '熟练'},
            {number: '3', hobby: '唱歌', degree: '熟练'}
          ]
        },
        {
          names: '老六',
          ages: '34',
          phones: '18922445588',
          userIds: '1249993333149',
          myAddress: '湖南省长沙市芙蓉区麓谷大道',
          messages: [
            {number: '1', hobby: '跳高', degree: '2.40'},
            {number: '2', hobby: '乒乓球', degree: '一般'},
            {number: '3', hobby: '唱歌', degree: '难听'}
          ]
        }
      ]
    }
  },
  mounted () {
    // eventHub.$off('update')
    // eventHub.$on('update', data => {
    //   console.log(8888, data)
    // })
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },
  methods: {
    upPage () {
      this.$router.go(-1)
    },
    gonewpractice (item) {
      this.$router.push({path: '/newpractice', query: { data: item }})
    },
    // findYuhua () {
    //   var item = this.message.find(function (mesg) {
    //     return mesg.myAddress.indexOf('雨花区') !== -1
    //   })
    //   this.$dialog.alert({
    //     message: '住在雨花区的是：' + item.names
    //   })
    //   this.name = item.names
    //   console.log(item)
    // },
    findYuhua () {
      var item = this.message.filter(function (mesg) {
        return mesg.myAddress.indexOf('雨花区') !== -1
      })
      console.log(item)
      this.message = item
      var name = ''
      for (var i = 0; i < item.length; i++) {
        name = name === '' ? name + item[i].names : name + ',' + item[i].names
      }
      this.name = name
      //   this.$dialog.alert({
      //     message: '住在雨花区的是：' + name
      //   })
      console.log(name)
    }
  }
}
</script>
<style scoped>
.practice /deep/ .van-nav-bar__content{
  height: 50px!important;
  background-color: rgb(25, 137, 250)
}
.practice /deep/ .van-nav-bar .van-icon{
  color: white;
}
.practice /deep/ .van-nav-bar__text{
  color: white;
}
.practice /deep/ .van-nav-bar__title{
  color: white;
}
.practice /deep/ .van-cell__title{
    text-align: left;
    font-weight: bold;
}
.practice-content{
    width: 100%;
    height: calc(100vh - 100px);
    position: absolute;
    overflow: auto;
    background-color: rgb(241, 241, 241);
}
.practice-footer{
    width: 100%;
    height: 50px;
    color: white;
    background-color: rgb(25, 137, 250);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    position: fixed;
    bottom: 0;
}
.a1{
    height: 151px;
    background-color: rgb(70, 160, 250);
}
.practice-name{
    display: flex;
    height: 30px;
    margin-top: 15px;
}
.name{
    width: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(70, 160, 250);
    font-size: 16px;
    margin-left: 10px;
    padding: 0px 30px 0px 10px;
    border-top: rgb(70, 160, 250) solid 1px;
    border-bottom: rgb(70, 160, 250) solid 1px;
}
.names{
    flex: 1;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    border-top: rgb(70, 160, 250) solid 1px;
    border-bottom: rgb(70, 160, 250) solid 1px;
}
.practice-message{
    display: flex;
}
.practice-messages{
    flex: 1;
    background-color: white;
    font-size: 16px;
    margin-left: 10px;
    border-bottom: rgb(70, 160, 250) solid 1px;
}
.practice-img{
    width: 60px;
    background-color: white;
    border-bottom: rgb(70, 160, 250) solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img{
    width: 30px;
    height: 30px;
}
.practice-age{
    display: flex;
    height: 30px;
}
.age{
    width: 50px;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    padding: 0px 30px 0px 10px;
}
.ages{
    flex: 1;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
}
.practice-phone{
    display: flex;
    height: 30px;
}
.phone{
    width: 50px;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    padding: 0px 30px 0px 10px;
}
.phones{
    flex: 1;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
}
.practice-userId{
    display: flex;
    height: 30px;
}
.userId{
    width: 50px;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    padding: 0px 30px 0px 10px;
}
.userIds{
    flex: 1;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
}
.practice-address{
    display: flex;
    height: 30px;
}
.address{
    width: 70px;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    padding: 0px 10px 0px 10px;
}
.myAddress{
    width: 215px;
    background-color: white;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
