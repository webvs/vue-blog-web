import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import showblogs from '../components/showBlog'
import addblogs from '../components/AddBlog'
import singleblog from '../components/SingleBlog'
import home from '@/components/home'
Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',    
//       component: showblogs
//     },
//     {
//       path:'/add',
//       component:addblogs
//     }
//   ]
// })
export default[ {
path:'/', 
component:showblogs
        },  {
path:'/add', 
component:addblogs
              },  {
path:'/blog/:id', 
component:singleblog
            }
]
