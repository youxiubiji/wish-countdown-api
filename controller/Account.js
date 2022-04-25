const Account = require("../model/account");
const bcrypt = require("bcryptjs"); //加密解密
const userUtil = require("../utils/user");

/**
 * 用户注册
 * @param {*} ctx
 */
const AccountRegister = async (ctx) => {
  try {
    const { username = "", password = "" } = ctx.request.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const res = await Account.create({ username, password: hashPassword });
    ctx.success(res);
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 用户登录
 * @param {*} ctx
 */
const AccountLogin = async (ctx) => {
  try {
    ctx.verifyParams({
      username: {
        type: "string",
        required: true,
      },
      password: {
        type: "string",
        required: true,
      },
    });
    const { username = "", password = "" } = ctx.request.body;
    let res = await Account.findOne({ username });
    const confirmRes = bcrypt.compareSync(password, res.password);
    if (confirmRes) {
      const token = userUtil.getToken({ username: res.username, id: res.id });
      ctx.success({token});
    } else {
      ctx.fail("账号或者密码错误");
    }
  } catch (error) {
    ctx.fail();
  }
};

/**
 * 用户个人信息
 * @param {*} ctx
 */
const AccountInfo = async (ctx) => {
  try {
    let token = ctx.header.authorization;
    let res = await userUtil.verifyToken(token.replace("Bearer ", ""));
    ctx.success(res);
  } catch (error) {
    ctx.fail();
  }
};
module.exports = {
  AccountRegister,
  AccountLogin,
  AccountInfo,
};
