const express = require('express');
const path = require('path');

// Khởi tạo ứng dụng Express
const app = express();

// Thiết lập EJS làm view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cấu hình để phục vụ các tệp tĩnh (CSS, JS, Hình ảnh) từ thư mục 'public'
app.use(express.static('public'));

// Định tuyến cho trang chủ
// Khi có người truy cập vào trang chủ ('/'), render tệp 'pages/home.ejs'
// Quan trọng: Chúng ta không truyền biến 'msg' nữa.
app.get('/', (req, res) => {
  res.render('pages/home');
});

// Khởi động máy chủ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});