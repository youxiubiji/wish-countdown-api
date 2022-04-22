const Router = require("@koa/router");
const { QuoteAdd, QuoteInfo } = require("../controller/quote");

const router = new Router({
  prefix: "/quote",
});

/**
 * @swagger
 * /quote/add:
 *   post:
 *     summary: 名言新增
 *     tags:
 *      - quote
 *     parameters:
 *       - name: content
 *         description: 内容
 *         required: true
 *         in: formData
 *         type: string
 *       - name: author
 *         description: 作者
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
router.post("/add", QuoteAdd);

/**
 * @swagger
 * /quote/info:
 *   get:
 *     summary: 获取名言
 *     tags:
 *      - quote
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
router.get("/info", QuoteInfo);

module.exports = router;
