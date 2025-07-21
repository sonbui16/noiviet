const userModel = require("../models/user");
const {User} = require('../models/index');

module.exports = {
  index: async (req, res, next) => {
    try {
    //   const users = await userModel.all();
      const users = await User.findAll();

      console.log(users);
    //   res.render("user/index", {});
      res.json(users);
    } catch (error) {
      return next(error);
    }
  },

  add: async (req, res) => {
    res.render("user/add", {
      // layout: false // Không sử dụng layout (header/footer) cho trang thêm người dùng
    });
  },
};
