const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("countdown", "andy", "123456", {
  host: "1.117.31.97",
  dialect: "mysql", // 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一
  logging: (...msg) => console.log(msg), //记录日志 设为false就不会显示
  dialectOptions: {
    // 字符集
    charset: "utf8mb4",
    supportBigNumbers: true,
    bigNumberStrings: true,
  },
  // 连接池
  pool: {
    max: 5, //连接池最大连接数量
    min: 0, //连接池最小连接数量
    acquire: 30000,
    idle: 10000, //如果一个线程 10 秒内没有使用则释放该线程
  },
  // 数据表相关的全局配置
  define: {
    // 是否冻结表名
    // 默认情况下，表名会转换为复数形式
    freezeTableName: true,
    // 是否为表添加 createdAt 和 updatedAt 字段
    // createdAt 记录表的创建时间
    // updatedAt 记录字段更新时间
    timestamps: true,
    // 是否为表添加 deletedAt 字段
    // 默认情况下, destroy() 方法会删除数据，
    // 设置 paranoid 为 true 时，将会更新 deletedAt 字段，并不会真实删除数据。
    paranoid: false,
  },
  timezone: "+08:00", //东八时区
});

// 创建模型
sequelize.sync({ force: false });

module.exports = sequelize;

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }
