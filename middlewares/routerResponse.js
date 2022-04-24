/**
 * responseBody.js
 * @description 统一接口返回格式
 */
const reponseBody = () => {
  return async (ctx, next) => {
    ctx.success = (data) => {
      ctx.body = {
        code: 200,
        msg: "获取成功",
        data,
      };
    };
    ctx.fail = (msg) => {
      ctx.body = {
        code: 500,
        msg: msg || "程序异常，请稍后再试吧~",
      };
    };
    await next();
  };
};

module.exports = reponseBody;
