<template>
  <div class="app-container">
    <h2>标签模版</h2>
    <!--<h2>{{ code }}</h2> -->

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="content" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
  </div>
</template>
<script>

import { fetchStockInfo } from '@/api/stock'
export default {
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchStockInfo().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>>
