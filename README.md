# Otaku Shop

Chào mừng bạn đến với **Otaku Shop** 🎉  
Đây là một dự án thương mại điện tử được xây dựng bằng **Node.js**, **Express**, **MySQL** và **Prisma**.

---

## 📖 Giới thiệu

Otaku Shop là một trang web thương mại điện tử dành cho những người yêu thích văn hóa otaku.  
Mục tiêu chính là **học tập và áp dụng công nghệ web hiện đại** để tạo ra một ứng dụng đầy đủ chức năng.

---

## ✨ Tính năng

- **Giao diện người dùng**: Render bằng EJS.  
- **Quản lý CSDL**: Prisma ORM kết nối MySQL an toàn và hiệu quả.  
- **Bảo mật**:  
  - `helmet` để chống các lỗ hổng phổ biến.  
  - `csurf` để ngăn chặn tấn công CSRF.  
- **Xác thực**:  
  - `bcryptjs` để băm mật khẩu.  
  - `jsonwebtoken` để quản lý session/đăng nhập an toàn.  
- **Môi trường phát triển**:  
  - TypeScript cho chất lượng mã cao.  
  - Docker & Docker Compose để dễ dàng triển khai.

---

## 🛠️ Công nghệ sử dụng

- **Backend**: Node.js, Express.js  
- **Database**: MySQL  
- **ORM**: Prisma  
- **Ngôn ngữ**: TypeScript  
- **View Engine**: EJS  
- **Containerization**: Docker, Docker Compose  

---

## 🚀 Bắt đầu

### Yêu cầu cài đặt

- Node.js (>= 20.0.0)  
- npm (có sẵn khi cài Node.js)  
- MySQL  
- Docker & Docker Compose (tùy chọn)

### Cài đặt

Clone repo:

```bash
git clone <https://github.com/haizzdungnay/WebSiteOtakuShop>
cd WebSiteOtakuShop
```

Cài gói phụ thuộc:

```bash
npm install
```

Tạo biến môi trường:

```bash
cp .env.example.docker .env
```

Cập nhật file `.env` (đặc biệt là `DATABASE_URL`):

```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

Đồng bộ cơ sở dữ liệu:

```bash
npx prisma db push
```

Biên dịch TypeScript:

```bash
npm run build
```

---

## ▶️ Chạy ứng dụng

### Development

```bash
npm run dev
```

Tự động reload khi thay đổi code.

### Production

```bash
npm start
```

> Đảm bảo đã build trước bằng `npm run build`.  
> Trong `package.json`, lệnh start nên là:
> ```json
> "start": "node dist/server.js"
> ```

---

## 🐳 Chạy bằng Docker

1. Tạo `.env` từ `.env.example.docker`.  
2. Chạy:

```bash
docker-compose up -d
```

---

## 📜 Scripts có sẵn

- `npm run build` → Biên dịch TypeScript.  
- `npm run dev` → Chạy dev (nodemon).  
- `npm start` → Chạy production.  
- `npm run prisma:generate` → Tạo lại Prisma Client.  
- `npm run prisma:push` → Sync schema với DB.  
- `npm run prisma:migrate` → Tạo & apply migration.  
- `npm run prisma:studio` → Mở Prisma Studio (giao diện quản lý DB).  
- `npm run prisma:seed` → Seed dữ liệu mẫu.

---

## ✅ CI/CD Status

![CI](https://github.com/haizzdungnay/WebSiteOtakuShop/actions/workflows/ci.yml/badge.svg)

---
