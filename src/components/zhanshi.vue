<template>
<div class="newpractice-message">
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
</div>
</template>
<script>
export default {
  name: 'Zhanshi',
  props: ['data'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
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
</style>
