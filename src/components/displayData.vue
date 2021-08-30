<template>
  <div class="displayData">
    <div class="question-box">
      <div class="question-type" v-for="(item, index) in listData" :key="index" @click="godetails(item)">
        <div :class="{'question-first': item.type==='单选', 'question-next': item.type==='多选'}">{{item.type}}</div>
        <div class="question-title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'displayData',
  props: ['listData'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    godetails (item) {
      this.$router.push({ path: '/details', query: { data: item } })
    }
  }
}
</script>
<style scoped>
.question-box{
    background-color: white;
    margin-top: 3px;
}
.question-type{
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(241, 241, 241);
}
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
.question-title{
    flex: 1;
    text-align: left;
    padding-left: 10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
</style>
