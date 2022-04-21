const Router = require("@koa/router");
const {
  WishAdd,
  WishEdit,
  WishDelete,
  WishInfo,
  WishAll,
} = require("../controller/wish");

const router = new Router({
  prefix: "/wish",
});
router.post("/add", WishAdd);
router.post("/edit", WishEdit);
router.post("/delete", WishDelete);
router.get("/info", WishInfo);
router.get("/list", WishAll);

module.exports = router;
