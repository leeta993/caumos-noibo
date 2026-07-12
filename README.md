# Caumos Internal

Kho lưu trữ tài liệu nội bộ của Caumos — Phòng Marketing. Đây là một dự án Next.js dùng để triển khai bản slide trình bày như một website nội bộ (deploy trên Hostinger).

## Nội dung

- **`public/slides.html`** — Bản slide "Phương pháp luận Lộ trình thử việc 2 tháng", bản trình Ban Giám đốc (CEO). Điều hướng bằng phím mũi tên / vuốt / click. Được phục vụ tại URL gốc `/` thông qua rewrite trong `next.config.ts`.
- **`public/Caumos_Lo_trinh_thu_viec_2_thang.pdf`** — Bản PDF xuất từ slide trên, tải trực tiếp tại `/Caumos_Lo_trinh_thu_viec_2_thang.pdf`.

> ⚠️ Tài liệu này chứa thông tin đánh giá nhân sự và chính sách lương thử việc — cân nhắc quyền truy cập phù hợp trước khi chia sẻ (repo hiện đang ở chế độ Public).

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

Khi hoạt động đúng, truy cập domain gốc sẽ hiển thị thẳng bản slide (nhờ rewrite `/` → `/slides.html` trong `next.config.ts`), không cần gõ thêm đường dẫn.
