# Xác thực người dùng 
Kiểm tra email và password
- Hợp lệ : Lưu thông tin user vào session hoặc token
Chú ý: Mã hoá mật khẩu 
- Mã hoá 1 chiều: md5, SHA1 --> Không được an toàn (Cùng 1 password --> Chuỗi mã hoá không thay đổi)
- Mã hoá bằng hàm băm (hash): bcrypt -> An toàn (Cùng 1 password --> Chuỗi mã hoá khác nhau)
B1: Truy vấn lấy ra mật khẩu mã hoá trên database bằng email
B2: So sánh password từ request với lại mkhau mã hoá bằng thuật toán so sánh