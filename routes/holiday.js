const Router = require("@koa/router");
const {
  HolidayAdd,
  HolidayEdit,
  HolidayDisable,
  HolidayList,
  HolidayAll,
} = require("../controller/holiday");

const router = new Router({
  prefix: "/holiday",
});

router.post("/add", HolidayAdd);
router.post("/edit", HolidayEdit);
router.post("/disable", HolidayDisable);
router.get("/list", HolidayList);
router.get("/all", HolidayAll);


module.exports = router;
