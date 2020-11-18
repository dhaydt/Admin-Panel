import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { setToken, getToken, canTurnTo, setTitle } from '@/libs/util'
import config from '@/config'
const { homeName } = config

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next() // memiliki izin akses
  else next({ replace: true, name: 'error_401' }) // jika tidak punya, diteruskan ke hal 401
}

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // Belum login dan halaman yang akan diarahkan bukan halaman login
    next({
      name: LOGIN_PAGE_NAME // Lompat ke halaman login
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // Halaman yang belum Anda masuki dan ingin Anda lompat adalah halaman masuk
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // Halaman tempat Anda masuk dan ingin melompat adalah halaman masuk
    next({
      name: homeName // Langsung ke halaman homeName
    })
  } else {
    if (store.state.user.hasGetInfo) {
      turnTo(to, store.state.user.access, next)
    } else {
      store.dispatch('getUserInfo').then(user => {
        // Tarik informasi pengguna, dan nilai apakah ada izin untuk mengakses oleh otoritas
        // pengguna dan nama halaman yang dilompati; akses harus berupa array, seperti: ['super_admin'] ['super_admin', 'admin']
        turnTo(to, user.access, next)
      }).catch(() => {
        setToken('')
        next({
          name: 'login'
        })
      })
    }
  }
})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
