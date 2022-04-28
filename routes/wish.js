const Router = require("@koa/router");
const {
  WishAdd,
  WishEdit,
  WishDelete,
  WishInfo,
  WishAll,
  WishList,
} = require("../controller/wish");

const router = new Router({
  prefix: "/wish",
});
router.post("/add", WishAdd);
router.post("/edit", WishEdit);
router.post("/delete", WishDelete);
router.get("/info", WishInfo);
router.get("/list", WishAll);

router.post("/alllist", WishList);

module.exports = router;
