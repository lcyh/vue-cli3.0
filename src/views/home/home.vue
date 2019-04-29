<template>
  <div class="home">
        <div class='nav-left'>
            <NavComponent />
        </div>
        <div class="content-right">
            <div class="header">
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <span @click="loginOut">退出登录</span>
                        </el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>{{getUserName}}</span>
                </el-header>
            </div>
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
  </div>
</template>

<script>
import NavComponent from '@/components/Nav.vue'
// import { handleLogout } from '@/api/index'
import Util from '../../utils/storage'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    NavComponent
  },
  computed: {
    ...mapGetters(['getToken', 'getUserName', 'getUserId'])
  },
  methods: {
    loginOut () {
      this.$confirm('此操作将退出系统, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          //   const res = await handleLogout()
          this.$store.dispatch('loginOut').then((res) => {
            Util.storage('userId', null)
            Util.storage('userName', null)
            window.location.reload('/login?timestamp=' + new Date().getTime()) // 为了重新实例化vue-router对象 避免bug
          })
        })
        .catch(() => {
          this.$message({
            type: 'error',
            message: '操作失败'
          })
        })
    }
  }
}
</script>
<style lang="scss">
    .home{
        display: flex;
        height: 100%;
        min-height: 100vh;
        .nav-left{
            width: 180px;
            background-color: #252a2f;
            box-shadow: 0 1px 20px 0 #e4e8eb;
        }
        .content-right{
            flex:1;
              .header{
                border-bottom: 1px solid #d8dce5;
                background-color: #fff;
                .el-header {
                    color: #333;
                    line-height: 60px;
                }
                .el-aside {
                    color: #333;
                }
            }
            .move-enter-active,
            .move-leave-active {
                transition: opacity 0.5s;
            }
            .move-enter,
            .move-leave {
                opacity: 0;
            }
        }
    }
</style>
