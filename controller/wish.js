const Wish = require("../model/wish");
const userUtil = require("../utils/user");

const WishAdd = async (ctx) => {
  try {
    const { title, date } = ctx.request.body;
    const { authorization } = ctx.header;
    const res = await userUtil.verifyToken(
      authorization.replace("Bearer ", "")
    );
    const [wish, created] = await Wish.findOrCreate({
      where: {
        title,
        userId: res.id,
      },
      defaults: {
        date,
      },
    });
    if (created) {
      ctx.success(wish);
    } else {
      ctx.fail("心愿已存在");
    }
  } catch (error) {
    console.log(error);
    ctx.fail();
  }
};

module.exports = {
  WishAdd,
};
