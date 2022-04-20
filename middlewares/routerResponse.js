/**
 * responseBody.js
 * @description 统一接口返回格式
 */
const reponseBody = () => {
  return async (ctx, next) => {
    ctx.success = (data) => {
      ctx.body = {
        code: 200,
        msg: "success",
        data,
      };
    };
    ctx.fail = (msg) => {
      ctx.body = {
        code: 500,
        msg: msg || "fail",
      };
    };
    await next();
  };
};

module.exports = reponseBody;
