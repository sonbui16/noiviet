module.exports = {
  index: async (req, res, next) => {
    res.render("page/index", {});
  },

  refundPolicy: async (req, res, next) => {
    const pageTitle = "Chính sách đổi trả";
    res.render("page/refundPolicy", {
      pageTitle,
    });
  },

  privacy: async (req, res, next) => {
    const pageTitle = "Chính sách bảo mât";
    res.render("page/privacy", {
      pageTitle,
    });
  },
  termsOfUse: (req, res, next) => {
    const pageTitle = "Điều khoản dịch vụ";
    res.render("page/termsOfUse", {
      pageTitle,
    });
  },
};
