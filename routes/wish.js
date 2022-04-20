const Router = require("@koa/router");
const { WishAdd } = require("../controller/wish");

const router = new Router({
  prefix: "/wish",
});
router.post("/add", WishAdd);

module.exports = router;
