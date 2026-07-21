# Caumos Internal

Website nội bộ của Caumos — Phòng Marketing. Dự án Next.js, đang chạy tại [internal.caumosjapan.com](https://internal.caumosjapan.com/), triển khai qua Hostinger.

## Cấu trúc trang

- **`/`** — Trang chủ: Lộ trình thử việc 2 tháng (bản slide điều hướng bằng phím mũi tên / vuốt / click). Component: `src/components/Roadmap.tsx`.
- **`/van-hoa`** — Văn hoá Caumos: cẩm nang 8 trụ cột văn hoá Phòng Marketing. Component: `src/app/van-hoa/page.tsx`.
- **`/danh-gia-nang-luc`** — Phiếu đánh giá năng lực nhân sự (phương pháp AKS). File tĩnh `public/danh-gia-nang-luc.html`, phục vụ qua rewrite trong `next.config.ts` để có URL sạch. Chấm điểm, biểu đồ radar và **lưu kết quả về máy (.json) / xuất PDF** chạy hoàn toàn phía client (không có backend, không gửi dữ liệu lên server) — xem nút "Lưu kết quả" và "In / Xuất PDF" ở thanh sticky cuối trang.
- Menu điều hướng chính nằm ở `src/components/SiteNav.tsx`, hiển thị trên mọi trang qua `src/app/layout.tsx`. Thêm trang mới → thêm route trong `src/app/` và thêm link vào mảng `LINKS` trong `SiteNav.tsx`. Nếu trang mới là file tĩnh (như `/danh-gia-nang-luc`), nhớ thêm cả rewrite trong `next.config.ts` và mục vào `src/app/sitemap.ts`.

## Design system dùng chung

- `src/app/globals.css` — token màu/font thương hiệu Caumos (navy, sky, mint...) và khai báo `@font-face` cho Playfair Display + Be Vietnam Pro (file thật trong `public/fonts/`, không nhúng base64) — mọi trang mới nên tái sử dụng các biến này thay vì tự định nghĩa màu/font riêng.
- Logo: `public/brand/logo-navy.png`.
- `public/slides.html` + `public/Caumos_Lo_trinh_thu_viec_2_thang.pdf` — bản xuất tĩnh, không phụ thuộc React, dùng để tái tạo file PDF khi cần (không còn được serve tại `/`, chỉ truy cập trực tiếp qua đường dẫn của nó).
- `src/app/sitemap.ts` — sinh `/sitemap.xml` tự động, liệt kê các trang chính.

> ⚠️ Trang Văn hoá, Lộ trình thử việc, và Đánh giá năng lực chứa thông tin nội bộ (đánh giá nhân sự, chính sách lương) — cân nhắc quyền truy cập phù hợp (repo hiện đang ở chế độ Public). Cả 3 trang đều gắn `noindex, nofollow`.

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
