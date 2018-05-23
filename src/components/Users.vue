<template>
  <div>
    <el-row>
      <div class="content-header">
        <h3 class="content-header-title">Users overview</h3>
      </div>
    </el-row>
    <el-row>
      <el-button plain class="add-new" style="font-family: 'Roboto', sans-serif; margin-left: 10px;" @click="handleAddNewUser()">Add new user</el-button>
    </el-row>
    <el-row style="text-align: center;">
      <div style="display: inline-block">
        <el-table
          :data="tableData"
          style="width: 100%; font-family: 'Roboto', sans-serif; margin-left: 10px; display: inline-block;">
            <el-table-column :prop="col.prop" :label="col.label" header-align="center" width="180" style="font-family: 'Roboto', sans-serif;" v-for="col in columns" :key="col.prop"></el-table-column>
          <el-table-column width="180"
            label="Operations" header-align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/api'
import { mapGetters } from 'vuex'

export default {
  name: 'users',
  mounted: function () {
    this.getUsers()
  },
  data () {
    return {
      tableData: [],
      columns: [
        {
          prop: 'id',
          label: 'ID'
        },
        {
          prop: 'firstname',
          label: 'Name'
        },
        {
          prop: 'lastname',
          label: 'Surname'
        },
        {
          prop: 'email',
          label: 'Email'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
    getUsers () {
      let vm = this
      api.fetchUsers(this.authToken).then(function (response) {
        for (let i in response.data) {
          vm.tableData.push(response.data[i])
        }
      })
    },
    handleEdit (index, row) {
      this.$router.push('/dashboard/users/' + row.id + '/edit')
    },
    handleDelete () {
      console.log('delete')
    },
    handleAddNewUser () {
      this.$router.push('/dashboard/users/create')
    }
  }
}
</script>

<style>
  @import url("//unpkg.com/element-ui@2.3.7/lib/theme-chalk/index.css");
  .add-new {
    float: left;
    margin-bottom: 20px;
  }
  .content-header {
    height: 200px;
    margin-left: 10px;
  }
  .content-header-title {
    float: left;
  }
</style>
