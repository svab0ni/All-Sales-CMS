<template>
  <div>
    <el-row>
      <div class="content-header">
        <h3 class="content-header-title">Cities overview</h3>
      </div>
    </el-row>
    <el-row>
      <el-button plain class="add-new" style="font-family: 'Roboto', sans-serif; margin-left: 10px;" @click="handleAddNewCity()">Add new city</el-button>
      <el-input style="width: 150px; float: right; margin-right: 10px"
             placeholder="Type something"
             v-model="q">
      </el-input>
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
  name: 'cities',
  mounted: function () {
    this.getCities()
  },
  watch: {
    q: function () {
      this.handleFilter()
    }
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
          prop: 'name',
          label: 'Name'
        },
        {
          prop: 'acronym',
          label: 'Acronym'
        },
        {
          prop: 'zipcode',
          label: 'Zipcode'
        }
      ],
      q: ''
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
    getCities () {
      let vm = this
      this.tableData = []
      api.fetchCities().then(function (response) {
        console.log(response)
        for (let i in response.data) {
          vm.tableData.push(response.data[i])
        }
      })
    },
    handleEdit (index, row) {
      this.$router.push('/dashboard/cities/' + row.id + '/edit')
    },
    handleDelete (index, row) {
      let vm = this
      this.tableData = []
      api.deleteCity(this.authToken, row.id).then(function () {
        api.fetchCities().then(function (response) {
          for (let i in response.data) {
            vm.tableData.push(response.data[i])
          }
        })
      })
    },
    handleAddNewCity () {
      this.$router.push('/dashboard/cities/create')
    },
    handleFilter () {
      let vm = this
      clearTimeout(this.timeout)
      this.timeout = setTimeout(function () {
        vm.tableData = []
        if (vm.q !== '' && vm.q !== null) {
          api.searchCities(this.authToken, vm.q).then(function (response) {
            for (let i in response.data) {
              vm.tableData.push(response.data[i])
            }
            console.log(vm.tableData)
          })
        } else {
          api.fetchCities().then(function (response) {
            for (let i in response.data) {
              vm.tableData.push(response.data[i])
            }
          })
        }
      }, 1000)
    }
  }
}
</script>

<style>
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
