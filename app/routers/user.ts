import Router from 'koa-router'
import * as controller from '@/controllers/user'

const router = new Router({ prefix: '/api' })

router.post('/register', controller.createUser)
router.post('/login', controller.login)

export default router
