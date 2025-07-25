module.exports = {
  index: async (req, res, next) => {
    const { id } = req.params;
    console.log("sonbh421", req.params);
    
    res.render("product/index", {});
  },
};
