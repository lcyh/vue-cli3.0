<template>
  <div class="login-page">
    <el-form :model="user" :rules="rules" @submit="onSubmit" ref="user" label-position="left" label-width="0" class="form">
      <h4 class='title'>客服系统登录</h4>
      <el-form-item prop="userName">
        <el-input type="text" size="large"  suffix-icon="el-icon-user-solid" v-model="user.userName" auto-complete="off"
                  placeholder="请输入您的帐号" @keyup.enter.native="onSubmit" autofocus/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" size="large" suffix-icon="el-icon-edit" v-model="user.password"
                  auto-complete="off" placeholder="请输入您的帐号" @keyup.enter.native="onSubmit"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" class="el-col-24" @click="onSubmit" :loading="logining">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { handleLogin } from '@/api/index'
import Util from '../../utils/storage'

export default {
  data () {
    return {
      logining: false,
      user: {},
      rules: {
        userName: [
          { required: true, message: '登录帐号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '登录密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.logining = true
      this.$refs.user.validate(async (valid) => {
        if (!valid) {
          this.logining = false
          return
        }
        try { /* 备注 ： 接口路径使用新接口  */
          const { userName, password } = Object.assign({}, this.user)
          const data = await handleLogin({ systemName: 'jingxuan', userName, password })
          console.log('登录', data)
          Util.storage('userId', data.userId)
          Util.storage('userName', data.userName)
          this.$store.commit('SAVE_TOKEN', Util.storage('token'))
          this.$store.commit('SAVE_NAME', Util.storage('userName'))
          this.$store.commit('SAVE_USERID', Util.storage('userId'))
          this.$router.replace({ path: '/' })
        } catch (err) {
          this.logining = false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-page{
    height: 100vh;
    background: #4c547d url("../../assets/images/login.png") center no-repeat;
    background-size: cover;
    .form {
      position: absolute;
      left: 50%;
      top: 50%;
      padding: 30px;
      width: 400px;
      border-radius: 10px;
      box-shadow: 0 0 8rem rgba(0, 0, 0, .65);
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 1);
      overflow: hidden;
    }
    .title{
        padding-bottom:10px;
    }
  }

</style>
