
Nôi việt - nâng niu giấc ngủ trẻ thơ
# Controller
File controller: ten.controller.js
Action:Tương ứng với các hành động c-r-u-d

# Các package thường xuyên sử dụng 

- dotenv
- express-session
- connect-flash
- express-ejs-layouts
- yup (validate)


# Package kết nối database 

- postgres (kết nối với database)

# Cơ sở dữ liêu

- Sắp xếp: ORDER BY 
    + ASC ( mặc định ): tăng dần
    + DESC: giảm dần
- Lọc dữ liệu: SELECT * FROM users WHERE email LIKE LOWER('%user1%')

Giải thích: % ở đây là khớp tức là : 'user1%': user1 phải ở đầu tiên
                                    '%user1': user1 ở bất kỳ
                                    '%user1': user1 phải ở cuối
            LOWER: Chuyển về chữ viết thường ( có thể thay thế bằng ILIKE Là không cần sử dụng LOWER() )
            LIKE: Tìm kiếm 

