//token加密
const token = {
  secret: "abcdef",
  expiresIn: 60 * 60, //以秒表示或描述时间跨度zeit / ms的字符串。如60，"2 days"，"10h"，"7d"，Expiration time，过期时间
};
//数据库信息
const Databases = {
  host: "1.117.31.97",
  name: "countdown",
  user: "andy",
  password: "123456",
};
//小程序信息
const miniprogram = {
  appid: "wx504aaad6f0ef7a86",
  secret: "732df37cec11020501b50cd3213590aa",
};

module.exports = {
  token,
  Databases,
  miniprogram,
};