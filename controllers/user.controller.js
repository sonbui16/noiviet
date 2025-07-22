const userModel = require("../models/user");
const { User } = require("../models/index");
const { Op, where } = require("sequelize");
const { name } = require("ejs");

module.exports = {
  index: async (req, res, next) => {
    try {
      //   const users = await userModel.all();
      // const users = await User.findAll({
      //   attributes: [
      //     "id",
      //     "name",
      //     "email",
      //     "status",
      //     "created_at",
      //     "updated_at",
      //   ], // Lấy các trường cụ thể
      //   where: {
      //     //Điều kiện
      //     // status: true, // Lọc người dùng có trạng thái là true
      //     // id: 1,
      //     // Lm việc với toán tử: operators
      //     // id: {
      //     //   // [Op.gt]: 6,
      //     // },
      //     // [Op.or]: [
      //     //   {
      //     //     id: {
      //     //       [Op.gt]: 6,
      //     //     },
      //     //   },
      //     //   {
      //     //     status: false,
      //     //   },
      //     // ],
      //     // Tìm kiếm (iLike)
      //     // status : true,
      //     // [Op.or]:[
      //     //   {
      //     //     name : {
      //     //       [Op.iLike]:`%user1%`
      //     //     }
      //     //   },
      //     //    {
      //     //     email : {
      //     //       [Op.iLike]:`%user1%`
      //     //     }
      //     //   },
      //     // ]
      //   },
      //   // Sắp xếp (order)
      //   order: [["id", "DESC"]], // Sắp xếp theo id giảm dần
      // });
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
      //Lấy trang hiện tại (Panigation - Phân trang Bootrap)
      const { page = 1 } = req.query;
      // Tính offset
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

      // Tính tổng số trang = Math.ceil(Tổng số bản ghi/limit) làm tròn lên
      const totalPages = Math.ceil(count / limit);
      res.render("user/index", {
        users,
        page,
        totalPages,
      });
      // res.json(users);
    } catch (error) {
      return next(error);
    }
  },

  add: async (req, res) => {
    res.render("user/add", {
      // layout: false // Không sử dụng layout (header/footer) cho trang thêm người dùng
    });
  },
  handleAdd: (req, res) => {
    const body = req.body;
    const user = User.create({
      name: body.name,
      email: body.email,
      status: body.status === "1",
    });
    console.log("userCreate", user);
    return res.redirect("/users");
  },
  edit: async (req, res, next) => {
    const { id } = req.params;
    try {
      // lấy thông tin người dùng theo id
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User không tồn tại");
      }
      res.render("user/edit", {
        user,
      });
    } catch (error) {
      return next(error);
    }
  },
  handleEdit: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const status = await User.update(
      {
        name: body.name,
        email: body.email,
        status: body.status === "1",
      },
      {
        where: {
          id,
        },
      }
    );
    res.redirect("/users/edit/" + id);
  },
};

// User.destroy({ Xoá người dùng
//   where: {
//     id: 1,
//     force :true // Xoá vĩnh viễn không đưa vào thùng rác
//   },
// })
