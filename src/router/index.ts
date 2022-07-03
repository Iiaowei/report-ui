import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length

  if (to.path === '/login') {
    to.meta.transitionName = 'down'
    from.meta.transitionName = 'opt'
  } else if (from.path === '/login') {
    from.meta.transitionName = 'down'
    to.meta.tranitionName = 'up'
  } else {
    to.meta.transitionName = toDepth <= fromDepth ? 'slide_left' : 'slide_right'
  }
})

export default router
