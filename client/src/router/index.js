import Vue from 'vue'
import Router from 'vue-router'
//Users
import UserIndex from '@/components/Users/Index'
import UserCreate from'@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
//Authen
import Login from '@/components/Login'
//Comments
import CommentIndex from '@/components/Comments/Index'
// Blogs
import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'users-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    //blogs
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blog-edit',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog',
      component: BlogShow
    },
    //Comment
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    }

  ]
})
