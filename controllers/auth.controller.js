module.exports = {
  index: (req, res) => {
    res.render("auth/login", {
        layout : "auth-layout", // Sử dụng layout auth.ejs cho trang đăng nhập admin
    });
  },
};
