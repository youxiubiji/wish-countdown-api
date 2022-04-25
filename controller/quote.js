const Quote = require("../model/quote");

/**
 * 新增名言
 * @param {*} ctx
 */
const QuoteAdd = async (ctx) => {
  try {
    const { content, author } = ctx.request.body;
    const [res, created] = await Quote.findOrCreate({
      where: {
        content,
      },
      defaults: {
        content,
        author,
      },
    });
    if (created) {
      ctx.success(res);
    } else {
      ctx.fail("名言已存在");
    }
  } catch (error) {
    ctx.fail();
  }
};
/**
 * 编辑名言
 * @param {*} ctx
 */
const QuoteEdit = async (ctx) => {
  try {
    const { id, content, author } = ctx.request.body;
    await Quote.update(
      { content, author },
      {
        where: {
          id,
        },
      }
    );
    ctx.success();
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 获取单个名言
 * @param {*} ctx
 */
const QuoteInfo = async (ctx) => {
  try {
    const list = await Quote.findAll();
    const item = list[Math.floor(Math.random() * list.length)];
    ctx.success(item);
  } catch (error) {
    ctx.fail();
  }
};
/**
 * 名言列表
 */

const QuoteList = async (ctx) => {
  try {
    const { offset, limit } = ctx.request.body;
    const { count, rows } = await Quote.findAndCountAll({
      offset,
      limit,
    });
    ctx.success({
      rows,
      count,
      offset,
      limit,
    });
  } catch (error) {
    ctx.fail();
  }
};

module.exports = {
  QuoteAdd,
  QuoteEdit,
  QuoteInfo,
  QuoteList,
};
