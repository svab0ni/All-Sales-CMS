import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dashboard from '@/components/Dashboard'
import Users from '@/components/Users'
import EditUser from '@/components/EditUser'
import CreateUser from '@/components/CreateUser'
import Offer from '@/components/Offer'
import EditOffer from '@/components/EditOffer'
import CreateOffer from '@/components/CreateOffer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: 'users',
          name: 'Users',
          component: Users
        },
        {
          path: 'users/:id/edit',
          name: 'EditUsers',
          component: EditUser,
          props: true
        },
        {
          path: 'users/create',
          name: 'Users',
          component: CreateUser,
          props: true
        },
        {
          path: 'offers',
          name: 'Offers',
          component: Offer,
          props: true
        },
        {
          path: 'offers/:id/edit',
          name: 'EditOffers',
          component: EditOffer,
          props: false
        },
        {
          path: 'offers/create',
          name: 'CreateOffers',
          component: CreateOffer,
          props: false
        }
      ]
    }
  ]
})
