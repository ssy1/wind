import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Admin from '@/components/Admin';
import About from '@/components/About';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Menu from '@/components/Menu';
import Register from '@/components/Register';

//二级路由
import Activity from '@/components/about/Activity';
import Contact from '@/components/about/Contact';
import Delivery from '@/components/about/Delivery';
import History from '@/components/about/History';

//三级路由
import Address from '@/components/about/contact/Address';
import Person from '@/components/about/contact/Person';
import Telphone from '@/components/about/contact/Telphone';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default:Home,
        'history':History
      }
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      //设置默认跳转项
      redirect:'/contact',
      children:[//二级路由
        {
          path:'/contact',
          name:'Contact',
          component:Contact,
          redirect:'/contact/address',
          children:[//三级路由
            {
              path:'/contact/address',
              name:'Address',
              component:Address
            },
            {
              path:'/contact/person',
              name:'Person',
              component:Person
            },
            {
              path:'/contact/tel',
              name:'Telphone',
              component:Telphone
            }
          ]
        },
        {
          path:'/delivery',
          name:'Delivery',
          component:Delivery
        },
        {
          path:'/activity',
          name:'Activity',
          component:Activity
        },
        {
          path:'/history',
          name:'History',
          component: History
        }
      ]

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ],
  //取消#的锚点链接
  mode:'history'
})
