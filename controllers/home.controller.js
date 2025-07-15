module.exports = {
  index: (req, res) => {
    const pageTitle = "Trang chủ";
    res.render("home/index", {
      pageTitle,
    });
  },
};
