<template>
  <template v-if="itemData.children && itemData.children.length">
    <template v-for="(item, index) in itemData.children">
      <el-sub-menu :index="indexKey + '-' + index" v-if="item.children && item.children.length" :key="index">
        <template #title>
          <el-icon v-if="tabIndex !== '0' && !tabIndex">
            <location />
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <menuItem :itemData="item" :indexKey="indexKey + '-' + index" :tabIndex="indexKey + '-' + index" />
      </el-sub-menu>
      <template v-else>
        <menuItem :itemData="item" :indexKey="indexKey + '-' + index" :tabIndex="indexKey + '-' + index" />
      </template>
    </template>
  </template>
  <el-menu-item :index="indexKey" v-else>
    <el-icon v-if="tabIndex == '0' && tabIndex">
      <location />
    </el-icon>
    <template #title>
      {{ itemData.name }}
    </template>
  </el-menu-item>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { MenuItemData } from '@/data/menu';
import menuItem from './itemmenu.vue'
const props = defineProps({
  itemData: {
    type: Object as PropType<MenuItemData>,
    default: () => []
  },
  indexKey: {
    type: String,
    default: 0
  },
  tabIndex: {
    type: String,
    default: '0'
  }
})
console.log(props.tabIndex)
</script>

<style scoped></style>