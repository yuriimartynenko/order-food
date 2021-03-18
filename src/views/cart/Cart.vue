<template>
  <div class="max-w-980 mx-auto mb-6">
    <el-table
      :data="selectedFoods"
      style="width: 100%; height: 100%"
      max-height="250"
    >
      <el-table-column
        fixed
        label="Product"
        width="500"
      >
        <template #default="scope">
          <div class="flex">
            <img :src="scope.row.image" class="max-w-image-cart object-contain p-2">
            <div>
              <p class="font-bold">{{ scope.row.name }}</p>
              <p>{{ scope.row.description }}</p>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price"
        width="100"
      />
      <el-table-column
        label="Quantity"
        width="120"
      >
        <template #default="scope">
          <el-input-number
            v-model="scope.row.quantity" controls-position="right" size="mini" :min="0" :max="99"
          />
        </template>
      </el-table-column>
      <el-table-column label="Subtotal" width="120">
        <template #default="scope">
          ${{ scope.row.price * scope.row.quantity }}
        </template>
      </el-table-column>
      <el-table-column
        label="Action"
        width="120"
      >
        <template #default="scope">
          <el-button
            type="text"
            size="small"
            @click.prevent="deleteRow(scope.row.id)"
          >
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    Total ${{ total }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { vuex } from '@/store'
import { router } from '@/router'

export default defineComponent({
  name: 'Cart',

  setup () {
    const selectedFoods = computed(() => vuex.homeStore.selectedFoods)
    const total = computed(() => vuex.homeStore.cartValue)

    const login = () => {
      router.push('/')
    }

    const deleteRow = (id: number) => {
      vuex.homeStore.REMOVE_PRODUCT_FROM_CART(id)
    }

    return {
      login,
      selectedFoods,
      deleteRow,
      total
    }
  }
})
</script>

<style>
  .el-table {
    max-height: 700px!important;
  }
  .el-table__body-wrapper, .el-table__fixed-body-wrapper {
    max-height: 650px!important;
  }
  .el-input-number--mini {
    width: 90px;
  }
</style>
