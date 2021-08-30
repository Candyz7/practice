import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'
import Login from '@/page/login'
import Setin from '@/page/setin'
import MyInfor from '@/page/myInfor'
import Register from '@/page/register'
import Newsubject from '@/page/newsubject'
import Question from '@/page/question'
import Answers from '@/page/answers'
import Details from '@/page/details'
import Practice from '@/page/practice'
import Newpractice from '@/page/newpractice'
import Lianxi3 from '@/page/lianxi3'
import Modify from '@/page/modify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/setin',
      name: 'Setin',
      component: Setin
    },
    {
      path: '/myInfor',
      name: 'MyInfor',
      component: MyInfor
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/newsubject',
      name: 'Newsubject',
      component: Newsubject
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    },
    {
      path: '/answers',
      name: 'Answers',
      component: Answers
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/practice',
      name: 'Practice',
      component: Practice
    },
    {
      path: '/newpractice',
      name: 'Newpractice',
      component: Newpractice
    },
    {
      path: '/lianxi3',
      name: 'Lianxi3',
      component: Lianxi3
    },
    {
      path: '/modify',
      name: 'Modify',
      component: Modify
    },
    {
      path: '*',
      redirect: to => {
        return '/modify'
      }
    }
  ]
})
