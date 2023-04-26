<template>
  <div class="content_inner_box">
    <div class="menu_box">
      <div class="logo_box">
        <img src="../assets/logo.png" alt="">
        <span v-if="!isCollapse">licht CMS</span>
      </div>
      <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        active-text-color="var(--default-text-active-color)" background-color="var(--default-bg-color)" text-color="#fff"
        @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="view_box">
      <div class="head_inner_box">
        <div class="breadcrumb">
          <span class="icons" @click="isCollapse = !isCollapse">
            <el-icon>
              <Fold />
            </el-icon>
          </span>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>内容</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="downmenu"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const menuWidth = computed(() => {
  return isCollapse.value ? '64px' : '240px'
})
// if (isCollapse.value) {
//   menuWidth.value = '64px'
// } else {
//   menuWidth.value = '240px'
// }
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.content_inner_box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  .menu_box {
    width: v-bind(menuWidth);
    height: 100%;
    transition: all .7s ease;
    background: var(--default-bg-color);

    .logo_box {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 15px;
      background: var(--default-bg-color);

      img {
        width: 26px;
        height: 26px;
      }

      span {
        font-size: 20px;
        font-weight: bold;
        color: var(--default-text-color);
      }
    }

    ul {
      height: 100%;
      border-right: 0 !important;

      :deep(.el-sub-menu__title) {
        padding-right: 0 !important;
      }

      :deep(.el-menu-item) {
        &:hover {
          background-color: var(--default-menu-hover-color);
        }
      }

      .el-icon {
        color: var(--default-icon-color);
      }
    }
  }

  .view_box {
    width: calc(100vw - v-bind(menuWidth));
    height: 100%;
    overflow-y: auto;

    .head_inner_box {
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px 0 0;
      box-sizing: border-box;

      .breadcrumb {
        display: flex;
        align-items: center;

        .icons {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 22px;
          // transition: all .2s ease;
          color: #585858;

          &:hover {
            background-color: #f1f1f1;
          }
        }
      }
    }
  }
}
</style>