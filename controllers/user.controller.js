module.exports= {
    index: (req, res) => {
        res.render("user/index", {});
    },

    add: (req, res) => {
        res.render("user/add", {
            // layout: false // Không sử dụng layout (header/footer) cho trang thêm người dùng
        });
    }
}