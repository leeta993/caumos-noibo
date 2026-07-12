# Caumos Internal

Website nội bộ của Caumos — Phòng Marketing. Dự án Next.js, đang chạy tại [internal.caumosjapan.com](https://internal.caumosjapan.com/), triển khai qua Hostinger.

## Cấu trúc trang

- **`/`** — Trang chủ: Lộ trình thử việc 2 tháng (bản slide điều hướng bằng phím mũi tên / vuốt / click). Component: `src/components/Roadmap.tsx`.
- **`/van-hoa`** — Văn hoá Caumos: cẩm nang 8 trụ cột văn hoá Phòng Marketing. Component: `src/app/van-hoa/page.tsx`.
- Menu điều hướng chính nằm ở `src/components/SiteNav.tsx`, hiển thị trên mọi trang qua `src/app/layout.tsx`. Thêm trang mới → thêm route trong `src/app/` và thêm link vào mảng `LINKS` trong `SiteNav.tsx`.

## Design system dùng chung

- `src/app/globals.css` — token màu/font thương hiệu Caumos (navy, sky, mint...) và khai báo `@font-face` cho Playfair Display + Be Vietnam Pro (file thật trong `public/fonts/`, không nhúng base64) — mọi trang mới nên tái sử dụng các biến này thay vì tự định nghĩa màu/font riêng.
- Logo: `public/brand/logo-navy.png`.
- `public/slides.html` + `public/Caumos_Lo_trinh_thu_viec_2_thang.pdf` — bản xuất tĩnh, không phụ thuộc React, dùng để tái tạo file PDF khi cần (không còn được serve tại `/`, chỉ truy cập trực tiếp qua đường dẫn của nó).

> ⚠️ Trang Văn hoá và Lộ trình thử việc chứa thông tin nội bộ (đánh giá nhân sự, chính sách lương) — cân nhắc quyền truy cập phù hợp (repo hiện đang ở chế độ Public).

## Chạy thử ở máy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build & chạy bản production

```bash
npm install
npm run build
npm run start:hostinger
```

## Triển khai trên Hostinger (Business/Cloud Hosting → hPanel → Node.js)

1. Upload toàn bộ thư mục này lên server (trừ `node_modules` và `.next`, hPanel sẽ tự cài/build).
2. Trong hPanel → **Advanced → Node.js**, tạo/sửa ứng dụng:
   - **Application root**: thư mục chứa `package.json`
   - **Application startup file**: `server.js` (không phải `app.js` mặc định)
   - **Node.js version**: bản mới nhất có sẵn (Next.js 16 cần Node 20+)
   - **Application URL**: domain/subdomain muốn gán
3. Bấm **NPM Install**.
4. Mở Terminal trong hPanel (hoặc SSH), chạy `npm run build` trong thư mục ứng dụng.
5. **Restart** ứng dụng trong hPanel.
