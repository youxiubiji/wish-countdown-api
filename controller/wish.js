const Wish = require("../model/wish");
const userUtil = require("../utils/user");

/**
 * 手动增加心愿
 * @param {*} ctx
 */
const WishAdd = async (ctx) => {
  try {
    const { title, date } = ctx.request.body;
    const { authorization } = ctx.header;
    const user = await userUtil.verifyToken(
      authorization.replace("Bearer ", "")
    );
    const [wish, created] = await Wish.findOrCreate({
      where: {
        title,
        userId: user.id,
      },
      defaults: {
        date,
      },
    });
    if (created) {
      ctx.success(wish);
    } else {
      ctx.fail("亲，您已有相同的心愿了哦~");
    }
  } catch (error) {
    ctx.fail();
  }
};


/**
 * 编辑心愿
 * @param {*} ctx
 */
const WishEdit = async (ctx) => {
  try {
    const { id, title, date } = ctx.request.body;
    const { authorization } = ctx.header;
    const user = await userUtil.verifyToken(
      authorization.replace("Bearer ", "")
    );
    await Wish.update(
      { title, date },
      {
        where: {
          id,
          userId: user.id,
        },
      }
    );
    ctx.success();
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 删除心愿
 * @param {*} ctx
 */
const WishDelete = async (ctx) => {
  try {
    const { id } = ctx.request.body;
    const { authorization } = ctx.header;
    const user = await userUtil.verifyToken(
      authorization.replace("Bearer ", "")
    );
    await Wish.destroy({
      where: {
        id,
        userId: user.id,
      },
    });
    ctx.success();
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 获取心愿详情
 * @param {*} ctx
 */
const WishInfo = async (ctx) => {
  try {
    const { id } = ctx.request.query;
    const info = await Wish.findOne({
      where: {
        id,
      },
    });
    ctx.success(info);
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 获取我的所有心愿
 * @param {*} ctx
 */
const WishAll = async (ctx) => {
  try {
    const { authorization } = ctx.header;
    const user = await userUtil.verifyToken(
      authorization.replace("Bearer ", "")
    );
    const list = await Wish.findAll({
      where: {
        userId: user.id,
      },
    });
    ctx.success(list);
  } catch (error) {
    ctx.fail();
  }
};

module.exports = {
  WishAdd,
  WishEdit,
  WishDelete,
  WishInfo,
  WishAll,
};
