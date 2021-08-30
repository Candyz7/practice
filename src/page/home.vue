<template>
  <div class="home">
    <!--必须在div中编写页面-->
    <div class="home-title">
      <Header title="模拟题库">
        <div slot="left" style="font-size: 12px">欢迎：{{name}}</div>
        <!-- <div slot="center" style="font-size: 16px">模拟题库</div> -->
      </Header>
    </div>
    <div class="home-content">
      <img class="home-img" src="../assets/images/bg.png">
      <div class="home-content2">
          <div class="home-establish" @click="gonewsubject">
            <img class="home-imgLuru" src="../assets/images/luru.png">
            <div>新建题目</div>
          </div>
          <div class="home-myestablish" @click="goquestion">
            <img class="home-imgTiku" src="../assets/images/tiku.png">
            <div>我的题库</div>
          </div>
      </div>
      <div class="home-content3">
          <div class="home-answer" @click="goanswers">
            <img class="home-imgDati" src="../assets/images/dati.png">
            <div>答题</div>
          </div>
          <div class="home-practice" @click="gopractice">
            <img class="home-imgLuru" src="../assets/images/luru.png">
            <div>练习页面</div>
          </div>
      </div>
      <!-- <div>{{(homeMy === '我的' ) ? '朱思维' : '朱思凤'}}</div>
      <div v-html="testHtml"></div> -->
      <!-- <van-button round block type="info" @click="updateStyle">修改样式的方式</van-button>
      <div class='test'>测试</div>
      <div :class='classValue'>测试</div> -->
      <!-- <van-button round block type="info" @click="updateStyle2">修改样式的方式:Class 与 Style 绑定</van-button> -->
      <!-- <div :class="{'test': isTest, 'test-after': !isTest}">测试</div> -->
     <!-- <van-button round block type="info">{{code | meIbf}}</van-button>
     <div v-if="role==='运营'">{{role}}权限最大</div>
     <div v-else-if="role==='玩家'">{{role}}权限只能使用</div>
     <div v-else>{{role}}没有权限</div>
     <div v-show="isShow">是否显示</div>
     <div v-if="isShow">是否显示</div>
     <div v-for="(item, index) in arr" :key="index" @click="tiaozhuan(index)">
       <div>名字为：{{ item.name }}  年龄为：{{ item.age }}</div>
     </div> -->
    </div>
    <div class="home-footer">
    <Footer  @clickFooterRight="gosetin"></Footer>
      <!-- <div class="home-firstpage">
        <van-icon name="wap-home-o" size="28px"/>
        <div>主页</div>
      </div>
      <div class="home-list">
        <van-icon name="send-gift-o" size="28px"/>
        <div>任务列表</div>
      </div>
      <div class="home-my" @click="gosetin">
        <van-icon name="manager-o" size="28px"/>
        <div>我的</div>
      </div> -->
    </div>
  </div>
</template>
<script>
import Footer from '../components/footer.vue'
import Header from '../components/header.vue'
export default {
  name: 'Home',
  components: { Header, Footer },
  data () {
    return {
      // homeMy: '我的',
      // testHtml: '<span style="color: skyblue">有意思</span>',
      // classValue: 'test',
      // isTest: true,
      // code: '01',
      // role: '玩家',
      // isShow: true,
      // arr: [
      //   {
      //     name: '张三',
      //     age: '18'
      //   },
      //   {
      //     name: '李四',
      //     age: '15'
      //   }
      // ]
      name: '',
      password: ''
    }
  },
  // filters: {
  //   meIbf: function (value) {
  //     if (value === '01') return '足球'
  //     if (value === '02') return '蓝球'
  //   }
  // },
  mounted () {
    this.name = this.$route.query.name
    this.password = this.$route.query.password
    console.log(this.name)
    console.log(this.password)
    // push()和pop()的使用 ==========================================
    // var arr = ['1', '2', '3']
    // var count = arr.push('4', '5')
    // console.log(count)
    // console.log(arr)
    // var item = arr.pop()
    // console.log(item)
    // console.log(arr)
    // shift()和unshift()的使用======================================
    // var arr = ['1', '2', '3']
    // var count = arr.unshift('4', '5')
    // console.log(count)
    // console.log(arr)
    // var item = arr.shift()
    // console.log(item)
    // console.log(arr)
    // slice==============================================
    // var arr = [1, 3, 5, 7, 9, 11]
    // var arrCopy = arr.slice(1)
    // var arrCopy2 = arr.slice(1, 4)
    // console.log(arr)
    // console.log(arrCopy)
    // console.log(arrCopy2)
    // splice=====================================
    // var arr = [1, 2, 5, 7, 9, 12]
    // var nub1 = arr.splice(0, 2)
    // console.log(nub1)
    // console.log(arr)
    // var nub2 = arr.splice(2, 0, 3, 7)
    // console.log(nub2)
    // console.log(arr)
    // concat连接数组===============================================
    // var arr = ['Hello']
    // console.log(arr.concat('world'))
    // join分隔符===================================================
    // var arr1 = ['red', 'green', 'blue', 'pink']
    // console.log(arr1.join())
    // console.log(arr1.join('~'))
    // console.log(arr1.join('*'))
    // console.log(arr1.join('&'))
    // reverse反转数组元素============================================
    // var arr = [1, 2, 3, 4]
    // console.log(arr.reverse())
    // sort()冒泡排序=============================================
    // var arr = [2, 4, 1, 5, 3]
    // arr.sort(function (a, b) {
    //   return a - b
    // })
    // console.log(arr)
    // filter()查找多个元素============================================
    // var arr = [1, 3, 5, 7, 8, 9, 12]
    // var arr2 = arr.filter(function (index) {
    //   return index < 6
    // })
    // console.log(arr2)
    // find()方法=========================================
    // var arr = [1, 2, 4, 5, 7, 9, 14]
    // var arr2 = arr.find(function (data, index) {
    //   return index < 3
    // })
    // console.log(arr2)
    // forEach()方法=============================================
    // var arr = [1, 2, 3, 4]
    // arr.forEach(function (data, index) {
    //   console.log(data + '&' + index)
    // })
    // map()方法=============================================
    // var arr = [1, 2, 3, 4]
    // var arr2 = arr.map(function (data) {
    //   return data * data
    // })
    // console.log(arr2)
    // some()方法============================================
    // var arr = [2, 4, 3, 6, 9]
    // var arr2 = arr.some(function (data) {
    //   return data < 5
    // })
    // console.log(arr2)
    // var arr3 = arr.some(function (data) {
    //   return data < 2
    // })
    // console.log(arr3)
  },
  methods: {
    gosetin () {
      this.$router.push({ path: '/setin', query: { name: this.name, password: this.password } })
    },
    gonewsubject () {
      this.$router.push({ path: '/newsubject' })
    },
    goquestion () {
      this.$router.push({ path: '/question' })
    },
    goanswers () {
      this.$router.push({ path: '/answers' })
    },
    gopractice () {
      this.$router.push({ path: '/practice' })
    }
    // updateStyle () {
    //   this.classValue = 'test-after'
    // },
    // updateStyle2 () {
    //   this.isTest = false
    // },
    // tiaozhuan (index) {
    //   console.log(index)
    //   if (index === 1) {
    //     this.$router.push({ path: '/login' })
    //   }
    // }
  }
}
</script>
<style scoped>
.home-title{
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(25, 137, 250);
    color: #ffffff;
}
.home-username{
  position: fixed;
  left: 15px;
  font-size: 12px;
}
.home-img{
  width: 100%;
  height: 220px;
}
.home-content{
  width: 100%;
    height: calc(100vh - 110px);
    position: absolute;
    overflow: auto;
}
.home-content2{
    display: flex;
}
.home-content3{
    display: flex;
}
.home-establish{
    flex: 1;
    height: 140px;
    color: rgb(25, 137, 250);
    margin: 4px 4px 4px 8px;
    border: 2px solid rgb(235, 235, 235);
}
.home-imgLuru{
  width: 50px;
  height: 50px;
  margin-top: 25px;
}
.home-myestablish{
    flex: 1;
    height: 140px;
    color: rgb(25, 137, 250);
    margin: 4px 8px 4px 4px;
    border: 2px solid rgb(235, 235, 235);
}
.home-imgTiku{
  width: 50px;
  height: 50px;
  margin-top: 25px;
}
.home-answer{
    flex: 1;
    height: 140px;
    color: rgb(25, 137, 250);
    margin: 4px 4px 4px 8px;
    border: 2px solid rgb(235, 235, 235);
}
.home-practice{
    flex: 1;
    height: 140px;
    color: rgb(25, 137, 250);
    margin: 4px 8px 4px 4px;
    border: 2px solid rgb(235, 235, 235);
}
.home-imgDati{
  width: 60px;
  height: 60px;
  margin-top: 25px;
}
.home-footer{
    display: flex;
    width: 100%;
    height: 60px;
    position: fixed;
    align-items: center;
    bottom: 0;
    background-color: rgb(241, 241, 241);
}
.home-firstpage{
    flex: 1;
    font-size: 12px;
}
.home-list{
    flex: 1;
    font-size: 12px;
}
.home-my{
    flex: 1;
    font-size: 12px;
}
.test{
  background: brown;
  color: fuchsia;
}
.test-after{
  background-color: gold;
  color: aquamarine;
}
</style>
