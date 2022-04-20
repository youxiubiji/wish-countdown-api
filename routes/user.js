const Router = require("@koa/router");
const { UserWeiXin, UserInfo } = require("../controller/user");

const router = new Router({
  prefix: "/user",
});

/**
 * @swagger
 * /user/wxlogin:
 *   post:
 *     summary: 微信登录
 *     tags:
 *      - user
 *     parameters:
 *       - name: code
 *         description: code码
 *         required: true
 *         in: formData
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
router.post("/wxlogin", UserWeiXin);

/**
 * @swagger
 * /user/info:
 *   get:
 *     summary: 用户信息
 *     tags:
 *      - user
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
router.get("/info", UserInfo);

module.exports = router;
