const Quote = require("../model/wish");

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

const QuoteInfo = async (ctx) => {
  try {
    const list = await Quote.findAll();
    const item = list[Math.floor(Math.random()*items.length)];
    ctx.success(item)
  } catch (error) {
    ctx.fail();
  }
};

module.exports = {
  QuoteAdd,
  QuoteInfo,
};
