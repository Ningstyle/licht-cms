<template>
  <template v-for="(item, index) in MENU">
    <el-sub-menu :index="index" v-if="item.children && item.children.length" :key="index">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <menuItem :itemData="item" :indexKey="index.toString()" tabIndex="0" />
    </el-sub-menu>
    <template v-else>
      <menuItem :itemData="item" :indexKey="index.toString()" tabIndex="0" />
    </template>
  </template>
</template>

<script setup lang="ts">
import { MENU } from '@/data/menu'
import menuItem from './itemmenu.vue'
</script>

<style scoped></style>