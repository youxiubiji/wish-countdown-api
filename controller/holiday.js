const Holiday = require("../model/holiday");

/**
 * 新增节气
 * @param {*} ctx
 */
const HolidayAdd = async (ctx) => {
  try {
    const { cover, title, dateType, date, note } = ctx.request.body;
    const [res, created] = await Holiday.findOrCreate({
      where: {
        title,
        date
      },
      defaults: {
        cover,
        dateType,
        note,
      },
    });
    if (created) {
      ctx.success(res);
    } else {
      ctx.fail("节气已存在");
    }
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 编辑节气
 * @param {*} ctx
 */
const HolidayEdit = async (ctx) => {
  try {
    const { id, cover, title, dateType, date, note } = ctx.request.body;
    await Holiday.update(
      { cover, title, dateType, date, note },
      { where: { id } }
    );
    ctx.success();
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 禁用显示
 * @param {*} ctx
 */

const HolidayDisable = async (ctx) => {
  try {
    const { id, disable } = ctx.request.body;
    await Holiday.update({ disable }, { where: { id } });
    ctx.success();
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 节气列表
 * @param {*} ctx
 */
const HolidayList = async (ctx) => {
  try {
    const { offset, limit } = ctx.request.body;
    const { count, rows } = await Holiday.findAndCountAll({
      offset: (offset - 1) * limit,
      limit,
      order: [["date", "DESC"]],
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

/**
 * 小程序端展示节日列表
 * @param {*} ctx 
 */
const HolidayAll = async (ctx) => {
  try {
    const list = await Holiday.findAll({
      order: [["date", "DESC"]],
      where: { disable: 1 },
    });
    ctx.success(list);
  } catch (error) {
    ctx.fail();
  }
};

module.exports = {
  HolidayAdd,
  HolidayEdit,
  HolidayDisable,
  HolidayList,
  HolidayAll
};
