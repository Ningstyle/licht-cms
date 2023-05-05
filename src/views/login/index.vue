<template>
  <div class="login_box">
    <div class=login_inner_box>
      <p>欢迎登录</p>
      <el-form :model="form" :rules="rules" ref="ruleFormRef">
        <el-form-item label="" prop="account">
          <el-input v-model="form.account" placeholder="请输入登录账号" />
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="form.password" type="password" placeholder="请输入登录密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
      <span>忘记密码？</span>
    </div>
    <!-- <button @click="changeTheme">点击</button> -->
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'


const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const form = reactive({
  account: '',
  password: '',
})
const rules = reactive<FormRules>({
  account: [
    { required: true, message: '账号不能为空', trigger: 'change' },
  ],
  password: [{ required: true, message: '密码不能为空', trigger: 'change', },
  ],
})
// const changeTheme = () => {
//   document.documentElement.style.setProperty('--default-bg-color', '#f0f0f0')
// }
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      router.push('/home')
    }
  })
}
</script>

<style scoped lang="scss">
.login_box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #34495e;

  .login_inner_box {
    width: 260px;
    height: auto;
    padding: 5px 50px 20px 50px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 4px 2px #242424;

    button {
      width: 100%;
    }

    p {
      text-align: center;
      font-size: 22px;
      font-weight: 700;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: #26A69A;
    }

    span {
      display: block;
      text-align: right;
      font-size: 14px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: #26A69A;
      cursor: pointer;
    }
  }
}
</style>