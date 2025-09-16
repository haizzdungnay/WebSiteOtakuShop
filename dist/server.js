// src/server.js
const express = require('express');
const path = require('path');
const app = express();
const ROOT = path.join(__dirname, '..'); // gốc project (thư mục chứa public, images)
// 1) STATIC — để TRƯỚC routes
app.use('/css', express.static(path.join(ROOT, 'public', 'css')));
app.use('/js', express.static(path.join(ROOT, 'public', 'js')));
app.use('/images', express.static(path.join(ROOT, 'images')));
// (tuỳ chọn) app.use(express.static(path.join(ROOT, 'public'))); // dùng nếu muốn phục vụ mọi thứ trong public
// 2) VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'pages')); // vì home.ejs đang ở src/views/pages
// 3) ROUTES
app.get('/', (req, res) => {
    res.render('home'); // trỏ tới src/views/pages/home.ejs
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('ROOT =', ROOT);
    console.log(`http://localhost:${PORT}`);
});
