const Router = require("@koa/router");
const { QuoteAdd, QuoteInfo } = require("../controller/quote");

const router = new Router({
  prefix: "/quote",
});
router.post("/add", QuoteAdd);
router.get("/info", QuoteInfo);

module.exports = router;
