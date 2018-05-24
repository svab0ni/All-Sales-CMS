import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dashboard from '@/components/Dashboard'
import Users from '@/components/Users'
import EditUser from '@/components/EditUser'
import CreateUser from '@/components/CreateUser'
import Offers from '@/components/Offers'
import EditOffer from '@/components/EditOffer'
import CreateOffer from '@/components/CreateOffer'
import Cities from '@/components/Cities'
import EditCity from '@/components/EditCity'
import CreateCity from '@/components/CreateCity'
import Contracts from '@/components/Contracts'
import EditContract from '@/components/EditContract'
import CreateContract from '@/components/CreateContract'

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
          component: Offers,
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
        },
        {
          path: 'cities',
          name: 'Cities',
          component: Cities,
          props: false
        },
        {
          path: 'cities/:id/edit',
          name: 'EditCities',
          component: EditCity,
          props: false
        },
        {
          path: 'cities/create',
          name: 'CreateCities',
          component: CreateCity,
          props: false
        },
        {
          path: 'contracts',
          name: 'Contracts',
          component: Contracts,
          props: false
        },
        {
          path: 'contracts/:id/edit',
          name: 'Contracts',
          component: EditContract,
          props: false
        },
        {
          path: 'contracts/create',
          name: 'Contracts',
          component: CreateContract,
          props: false
        }
      ]
    }
  ]
})
