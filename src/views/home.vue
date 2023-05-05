<template>
  <div class="content_inner_box">
    <div class="menu_box">
      <div class="logo_box">
        <img src="../assets/logo.png" alt="">
        <span :class="titleClass">licht CMS</span>
      </div>
      <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" active-text-color="var(--default-text-active-color)"
        background-color="var(--default-bg-color)" text-color="#fff">
        <menuTree />
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
        <div class="downmenu">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar :size="24" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
              管理员
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <el-icon>
                    <Unlock />
                  </el-icon>
                  修改密码
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-icon>
                    <UserFilled />
                  </el-icon>
                  个人信息
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <el-icon>
                    <MagicStick />
                  </el-icon>
                  主题切换
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <el-icon>
                    <SwitchButton />
                  </el-icon>
                  退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import menuTree from '@/components/common/menu.vue'
const isCollapse = ref(false)
const menuWidth = computed(() => {
  return isCollapse.value ? '64px' : '240px'
})
const titleClass = computed(() => {
  return isCollapse.value ? 'hideClass' : 'showClass'
})
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
        margin-left: 10px;
      }

      span.showClass {
        width: 100px;
        height: 30px;
        font-size: 20px;
        font-weight: bold;
        color: var(--default-text-color);
        transition: all .7s ease;
        display: inline-block;
        overflow: hidden;
        opacity: 1;
      }

      span.hideClass {
        width: 0px;
        height: 30px;
        font-size: 20px;
        font-weight: bold;
        color: var(--default-text-color);
        transition: all .7s ease;
        display: inline-block;
        overflow: hidden;
        opacity: 0;
      }
    }

    ul {
      height: 100%;
      border-right: 0 !important;

      :deep(.el-sub-menu__title) {
        padding-right: 0 !important;
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

      .downmenu {
        cursor: pointer;
        display: flex;
        align-items: center;

        .el-dropdown-link {
          display: flex;
          align-items: center;
          gap: 0 6px;
        }
      }
    }
  }
}
</style>