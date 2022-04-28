const User = require("../model/user");
const userUtil = require("../utils/user");
const { miniprogram } = require("../utils/config");
const axios = require("axios");

/**
 * 微信静默登录
 * @param {*} ctx
 */

const UserWeiXin = async (ctx) => {
  try {
    const { code } = ctx.request.body;
    //获取openid,appID和appSecret为申请小程序后的信息
    const { appid, secret } = miniprogram;
    const { data } = await axios.get(
      `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`,
      {}
    );
    // openid: "o5jLb4kcrjNHpNNLUmUP9vXdFYZM"
    // session_key: "gZYsoOmY91xNEGjAUMh2iQ=="
    const [res] = await User.findOrCreate({
      where: { openid: data.openid },
      defaults: { platform: 1 },
    });
    const token = userUtil.getToken({ id: res.id });
    ctx.success({ token });
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 用户个人信息
 * @param {*} ctx
 */
const UserInfo = async (ctx) => {
  try {
    let { authorization } = ctx.header;
    let res = await userUtil.verifyToken(authorization.replace("Bearer ", ""));
    ctx.success(res);
  } catch (error) {
    ctx.fail();
  }
};
/**
 * 用户列表
 */

const UserList = async (ctx) => {
  try {
    const { offset, limit } = ctx.request.body;
    const { count, rows } = await User.findAndCountAll({
      offset,
      limit,
      order: [["createdAt", "DESC"]],
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
  UserWeiXin,
  UserInfo,
  UserList
};
