<template>
  <div style="display: block;">
    <el-row>
      <div class="content-header">
        <h3 class="content-header-title">Offers overview</h3>
      </div>
    </el-row>
    <el-row>
      <el-button plain class="add-new" style="font-family: 'Roboto', sans-serif; margin-left: 10px;" @click="handleAddNewOffer()">Add new offer</el-button>
      <el-input style="width: 150px; float: right; margin-right: 10px;"
        placeholder="Type something"
        v-model="q">
      </el-input>
    </el-row>
    <el-row style="text-align: center;">
      <div style="display: inline-block">
        <el-table
          :data="tableData"
          style="width: 100%; font-family: 'Roboto', sans-serif; margin-left: 10px;">
          <el-table-column :prop="col.prop" :label="col.label" header-align="center" width="180" style="font-family: 'Roboto', sans-serif; display: block;" v-for="col in columns" :key="col.prop"></el-table-column>
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
  name: 'offers',
  mounted: function () {
    this.getOffers()
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
          prop: 'title',
          label: 'Title'
        },
        {
          prop: 'name',
          label: 'Name'
        },
        {
          prop: 'offerUser.username',
          label: 'Author'
        }
      ],
      q: '',
      timeout: null
    }
  },
  computed: {
    ...mapGetters(({
      authToken: 'getAuthToken'
    }))
  },
  methods: {
    getOffers () {
      let vm = this
      api.fetchOffers(this.authToken).then(function (response) {
        for (let i in response.data) {
          vm.tableData.push(response.data[i])
        }
      })
    },
    handleEdit (index, row) {
      this.$router.push('/dashboard/offers/' + row.id + '/edit')
    },
    handleDelete (index, row) {
      let vm = this
      this.tableData = []
      api.deleteOffer(this.authToken, row.id).then(function () {
        api.fetchOffers().then(function (response) {
          for (let i in response.data) {
            vm.tableData.push(response.data[i])
          }
        })
      })
    },
    handleAddNewOffer () {
      this.$router.push('/dashboard/offers/create')
    },
    handleFilter () {
      let vm = this
      clearTimeout(this.timeout)
      this.timeout = setTimeout(function () {
        vm.tableData = []
        if (vm.q !== '' && vm.q !== null) {
          api.searchOffers(this.authToken, vm.q).then(function (response) {
            for (let i in response.data) {
              vm.tableData.push(response.data[i])
            }
            console.log(vm.tableData)
          })
        } else {
          api.fetchOffers().then(function (response) {
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
    color: #23282E;
  }
</style>
