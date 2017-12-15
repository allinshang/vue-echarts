import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import PieSimple from '@/pages/PieSimple'
import PieSimpleFirst from '@/pages/PieSimpleFirst'
import Line from '@/pages/Line'
import LineFirst from '@/pages/LineFirst'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/PieSimple',
      name: 'PieSimple',
      component: PieSimple
    },
    {
      path: '/PieSimpleFirst',
      name: 'PieSimpleFirst',
      component: PieSimpleFirst
    },
    {
      path: '/Line',
      name: 'Line',
      component: Line
    },
    {
      path: '/LineFirst',
      name: 'LineFirst',
      component: LineFirst
    }
  ]
})
