// const { User } = require("../models/index");

// module.exports = {
//   index: (req, res) => {
//     const pageTitle = "Trang chủ";
//     res.render("home/index", {
//       pageTitle,
//     });
//   },
// };

const userModel = require("../models/user");
const { User } = require("../models/index");
const { Op, where } = require("sequelize");
const { name } = require("ejs");

module.exports = {
  index: async (req, res, next) => {
    const pageTitle = "Nôi Việt";
    try {
      const { keyword, status } = req.query;
      const where = {};

      if (status === "active" || status === "inactive") {
        where.status = status === "active"; // Chuyển đổi chuỗi thành boolean
      }
      if (keyword) {
        where[Op.or] = [
          {
            name: {
              [Op.iLike]: `%${keyword}%`, // Tìm kiếm không phân biệt chữ hoa chữ thường
            },
          },
          {
            email: {
              [Op.iLike]: `%${keyword}%`,
            },
          },
        ];
      }

      const limit = 4; // Giới hạn số lượng người dùng trên mỗi trang
      const { page = 1 } = req.query;
      const offset = (page - 1) * limit;
      const { count, rows: users } = await User.findAndCountAll({
        attributes: [
          "id",
          "name",
          "email",
          "status",
          "created_at",
          "updated_at",
        ],
        where,
        order: [["id", "DESC"]],
        limit,
        offset,
      });

      const totalPages = Math.ceil(count / limit);
      res.render("home/index", {
        users,
        page,
        totalPages,
        pageTitle,
      });
    } catch (error) {
      return next(error);
    }
  },
  aboutUs: async (req, res, next) => {
    const pageTitle = "Về chúng tôi";
    res.render("home/about-us", {
      pageTitle,
    });
  },
};
