const fields = {
  user: {
    user_id: {
      label: 'ID',
      description: 'USER Descr'
    },
    username: {
      label: 'Username',
      description: 'USER Descr'
    },
    name: {
      label: 'Name',
      description: 'User Descr'
    },
    lastname: {
      label: 'Lastname',
      description: 'USER Descr'
    },
    email: {
      label: 'email',
      description: 'USER Descr'
    }
  }
}

const sidebarComponents = [
  { name: 'users', label: 'Users', icon: 'el-icon-view' },
  { name: 'offers', label: 'Offers', icon: 'el-icon-view' },
  { name: 'cities', label: 'Cities', icon: 'el-icon-view' },
  { name: 'transactions', label: 'Transactions', icon: 'el-icon-view' }
]
export default {
  getFields (key) {
    return fields[key]
  },
  getSidebarComponents () {
    return sidebarComponents
  }
}
