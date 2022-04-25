const Router = require('@koa/router')
const { AccountRegister, AccountLogin, AccountInfo } = require('../controller/account')

const router = new Router({
    prefix: '/account',
})

/**
 * @swagger
 * /account/register:
 *   post:
 *     summary: 用户注册
 *     tags:
 *      - account
 *     parameters:
 *       - name: username
 *         description: 用户账户
 *         required: true
 *         in: formData
 *         type: string
 *       - name: password
 *         description: 用户密码
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       "200":
 *         description: "success"
 *       "400":
 *         description: "fial"
 *       "401":
 *         description: "use Authorization header to get access"
 *       "500":
 *         description: "error"
 */
router.post('/register', AccountRegister)

/**
 * @swagger
 * /account/login:
 *   post:
 *     summary: 用户登录
 *     tags:
 *      - account
 *     parameters:
 *       - name: username
 *         description: 用户账户
 *         required: true
 *         in: formData
 *         type: string
 *       - name: password
 *         description: 用户密码
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       "200":
 *         description: "success"
 *       "400":
 *         description: "fial"
 *       "401":
 *         description: "use Authorization header to get access"
 *       "500":
 *         description: "error"
 */
router.post('/login', AccountLogin)
/**
 * @swagger
 * /account/info:
 *   get:
 *     summary: 用户信息
 *     tags:
 *      - account
 *     responses:
 *       "200":
 *         description: "success"
 *       "400":
 *         description: "fial"
 *       "401":
 *         description: "use Authorization header to get access"
 *       "500":
 *         description: "error"
 */
router.get('/info', AccountInfo)

module.exports = router
