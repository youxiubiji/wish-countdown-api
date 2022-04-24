const { Sequelize } = require("sequelize");
const { Databases } = require("../utils/config");
const sequelize = new Sequelize(
  Databases.name,
  Databases.user,
  Databases.password,
  {
    host: Databases.host,
    dialect: "mysql", // 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一
    // logging: (...msg) => console.log(msg), //记录日志 设为false就不会显示
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
      // freezeTableName 是否冻结表名
      // 默认情况下，表名会转换为复数形式
      freezeTableName: true, //不修改表名,强制表名称等于模型名称
      // timestamps 是否为表添加 createdAt 和 updatedAt 字段
      // createdAt 记录表的创建时间
      // updatedAt 记录字段更新时间
      timestamps: true, //时间戳
      // paranoid 是否为表添加 deletedAt 字段
      // 默认情况下, destroy() 方法会删除数据，
      // 设置 paranoid 为 true 时，将会更新 deletedAt 字段，并不会真实删除数据。
      paranoid: true, //软删除 必须启用时间戳
      // underscored: true, //驼峰转下划线
      scopes: {
        bh: {
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
        },
      },
    },
    timezone: "+08:00", //东八时区 时区同步
  }
);

// 创建模型
sequelize.sync()  //- 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
// sequelize.sync({ force: true }); //- 将创建表,如果表已经存在,则将其首先删除
// sequelize.sync({ alter: true }); //这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.

module.exports = sequelize;

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }
