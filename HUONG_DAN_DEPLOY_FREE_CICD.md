# HƯỚNG DẪN TRIỂN KHAI HỆ THỐNG QUẢN LÝ BẢN QUYỀN MERN STACK & CI/CD GITHUB (100% MIỄN PHÍ)

Hệ thống **KTS License Portal & Landing Page** được xây dựng hoàn chỉnh bằng công nghệ **MERN Stack** (MongoDB, Express.js, React, Node.js) kết hợp cổng thanh toán VietQR Napas 24/7 và bộ sinh mã License Key HMAC-SHA256 tương thích 100% với phần mềm chấm công Desktop `kts-cham-cong`.

---

## 🌟 TÍNH NĂNG CHÍNH CỦA HỆ THỐNG

1. **Trang Giới Thiệu & Landing Page Thương Mại:**
   - Thiết kế giao diện hiện đại phong cách Dark Mode chuyên nghiệp.
   - Trưng bày tính năng: Kết nối máy chấm công IP (Ronald Jack, Gigata T9, ZKTeco, Hikvision), Nhận diện ca thông minh, Báo cáo Excel 31 ngày.
   - Nút tải trực tiếp bộ cài đặt phần mềm [Setup .exe] và bản [Portable .zip].

2. **Bảng Giá 3 Gói Bản Quyền Linh Hoạt:**
   - **Gói 1 Tháng (Monthly):** 99.000đ / tháng
   - **Gói 1 Năm (Yearly):** 899.000đ / năm (Tiết kiệm 25%)
   - **Gói Vĩnh Viễn (Lifetime):** 2.490.000đ (Dùng trọn đời theo máy tính)

3. **Thanh Toán Tự Động VietQR Napas 24/7:**
   - Tự động sinh mã QR chuyển khoản ngân hàng chuẩn Napas (VietQR) có sẵn số tiền và nội dung chuyển khoản mã đơn.
   - Khách hàng chỉ cần mở bất kỳ app ngân hàng nào (Vietcombank, MB Bank, Techcombank, ACB, MoMo,...) quét mã là xong.

4. **Công Cụ Tra Cứu Bản Quyền Cho Khách Hàng (License Lookup):**
   - Khách hàng chỉ cần nhập **Số điện thoại** hoặc **Mã máy tính (Machine ID)** là tra cứu được trạng thái đơn và sao chép mã Key `KTS-LIC...` với 1-Click.
   - Có sẵn hướng dẫn từng bước kích hoạt trực tiếp vào phần mềm Desktop.

5. **Trang Quản Trị Dành Cho Chủ Phần Mềm (Admin Dashboard):**
   - Thống kê doanh thu, số lượng bản quyền đang hoạt động, đơn chờ duyệt.
   - Nút **1-Click "Duyệt & Cấp Key"**: Hệ thống tự động tính ngày hết hạn và tạo chuỗi `KTS-LIC...` chuẩn xác.
   - Tự tay tạo Key cho khách hàng mới, gia hạn bản quyền hoặc thu hồi key khi cần.

6. **Tương Thích Tuyệt Đối 100% Với App Desktop:**
   - Thuật toán ký HMAC-SHA256 mức nén zlib 9 trong Node.js khớp hoàn toàn với Python `LicenseService.verify_license_string`.

---

## 🚀 HƯỚNG DẪN DEPLOY LÊN HOSTING MIỄN PHÍ 100% VỚI CI/CD GITHUB

Bạn có thể triển khai hệ thống này chạy online 24/7 hoàn toàn **MIỄN PHÍ (0 ĐỒNG)** bằng sự kết hợp giữa **MongoDB Atlas (Free M0)** và **Render.com (Free Web Service)**.

---

### BƯỚC 1: TẠO DATABASE MONGODB ATLAS MIỄN PHÍ (MẤT 2 PHÚT)

1. Truy cập [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register) và đăng ký tài khoản miễn phí (bằng Google hoặc Email).
2. Chọn gói **M0 Free Cluster** (Shared, 512MB RAM - miễn phí trọn đời).
   - Chọn Provider: **AWS**, Region: **Singapore (ap-southeast-1)**.
3. Tạo Database User:
   - Nhập **Username** (ví dụ: `ktsadmin`) và **Password** (ví dụ: `MatKhauKts2026`). Bấm **Create User**.
4. Cấu hình IP Network Access:
   - Chọn **Add IP Address** -> Chọn **Allow Access from Anywhere (`0.0.0.0/0`)** để server Render có thể kết nối được.
5. Lấy chuỗi kết nối (Connection String):
   - Bấm **Connect** -> Chọn **Drivers (Node.js)**.
   - Sao chép chuỗi URI dạng:
     ```
     mongodb+srv://ktsadmin:MatKhauKts2026@cluster0.abcde.mongodb.net/kts_license?retryWrites=true&w=majority
     ```

---

### BƯỚC 2: ĐẨY CODE LÊN GITHUB CỦA BẠN

1. Mở cửa sổ dòng lệnh tại thư mục `license-server`:
   ```bash
   cd "C:\Users\Huynh Anh\Desktop\kts-cham-cong\license-server"
   git init
   git add .
   git commit -m "feat: Khoi tao KTS License Portal MERN Stack"
   ```
2. Tạo 1 Repository mới trên tài khoản GitHub của bạn (ví dụ đặt tên là `kts-license-portal`).
3. Đẩy code lên GitHub:
   ```bash
   git remote add origin https://github.com/TENTAIKHOAN/kts-license-portal.git
   git branch -M main
   git push -u origin main
   ```

---

### BƯỚC 3: DEPLOY MIỄN PHÍ TRÊN RENDER.COM (1-CLICK WEB SERVICE)

1. Truy cập [https://render.com](https://render.com) và đăng nhập bằng tài khoản GitHub.
2. Bấm nút **New +** ở góc trên cùng bên phải -> Chọn **Web Service**.
3. Chọn Repository `kts-license-portal` bạn vừa đẩy lên GitHub.
4. Cấu hình các thông số cơ bản:
   - **Name:** `kts-license-portal` (hoặc tên tùy thích)
   - **Region:** `Singapore`
   - **Branch:** `main`
   - **Root Directory:** Để trống (hoặc `.`)
   - **Runtime:** `Node`
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Instance Type:** Chọn **Free** (0$/tháng)
5. Nhập các biến môi trường (**Environment Variables**):
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: Dán chuỗi kết nối MongoDB Atlas đã lấy ở Bước 1.
   - `MASTER_SECRET`: `KTS-ENTERPRISE-FACTORY-SECURE-KEY-2026-HUYNHANH-KORNBEST-AI`
   - `JWT_SECRET`: `KTS-LICENSE-PORTAL-SUPER-SECRET-JWT-KEY-2026`
   - `ADMIN_USERNAME`: `admin`
   - `ADMIN_PASSWORD`: Mật khẩu đăng nhập Admin tùy chọn (ví dụ: `KtsAdmin@2026`)
   - `BANK_ID`: Mã ngân hàng của bạn (ví dụ: `MB`, `VCB`, `TCB`, `ACB`)
   - `BANK_ACCOUNT_NO`: Số tài khoản ngân hàng nhận tiền chuyển khoản
   - `BANK_ACCOUNT_NAME`: Họ và tên chủ tài khoản (viết hoa không dấu)
6. Bấm **Create Web Service**.
   - Render sẽ tự động kéo code từ GitHub, cài đặt packages, build React frontend và khởi động server.
   - Sau ~2 phút, bạn sẽ nhận được đường link website chính thức dạng: `https://kts-license-portal.onrender.com`.

---

### BƯỚC 4: THIẾT LẬP CI/CD TỰ ĐỘNG BẰNG GITHUB ACTIONS (PUSH LÀ TỰ DEPLOY)

Hệ thống đã có sẵn 2 file CI/CD workflow trong `.github/workflows/`:
- `ci.yml`: Tự động kiểm thử tính hợp lệ của thuật toán License Key và build React mỗi khi có thay đổi code.
- `deploy.yml`: Tự động gửi tín hiệu kích hoạt Render build bản mới mỗi khi push lên nhánh `main`.

**Cách kích hoạt:**
1. Trên giao diện Render.com, vào mục **Settings** của web service vừa tạo.
2. Tìm đến phần **Deploy Hook** và bấm **Create Deploy Hook**.
3. Sao chép đường link webhook (dạng `https://api.render.com/deploy/srv-xxxx?key=yyyy`).
4. Trên GitHub, vào repository `kts-license-portal` -> Chọn tab **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**:
   - **Name:** `RENDER_DEPLOY_HOOK_URL`
   - **Value:** Dán đường link Webhook vừa sao chép từ Render.
   - Bấm **Add secret**.

🎉 **XONG!** Kể từ bây giờ, mỗi khi bạn chỉnh sửa bất kỳ dòng code nào và thực hiện `git push`, GitHub Actions sẽ tự động kiểm tra và ra lệnh cho Render deploy phiên bản mới nhất hoàn toàn tự động!

---

## 💻 HƯỚNG DẪN CHẠY THỬ NGHIỆM TẠI MÁY CỦA BẠN (LOCAL)

Nếu muốn chạy test thử ngay trên máy tính của bạn trước khi đưa lên mạng:

1. Mở PowerShell tại thư mục `license-server`:
   ```powershell
   cd "C:\Users\Huynh Anh\Desktop\kts-cham-cong\license-server"
   ```
2. Cài đặt các gói phụ thuộc:
   ```powershell
   npm run install:all
   ```
3. Chạy kiểm thử thuật toán License:
   ```powershell
   npm test
   ```
4. Build giao diện React:
   ```powershell
   npm run build:client
   ```
5. Khởi động máy chủ:
   ```powershell
   npm start
   ```
6. Mở trình duyệt web truy cập: [http://localhost:5000](http://localhost:5000)
   - Xem Landing Page & Form đặt mua gói bản quyền.
   - Quét mã VietQR kiểm tra giao diện thanh toán.
   - Tra cứu bản quyền bằng SĐT hoặc Machine ID.
   - Đăng nhập Quản Trị Viên bằng biểu tượng Khiên bảo vệ ở góc trên bên phải:
     * Tài khoản: `admin`
     * Mật khẩu: `KtsAdmin@2026`

---

## 🔗 KẾT NỐI TỰ ĐỘNG VỚI PHẦN MỀM DESKTOP KTS

Khách hàng mua bản quyền có 2 cách kích hoạt cực kỳ tiện lợi:

1. **Cách 1 - Kích hoạt bằng mã Key Offline (Truyền thống):**
   - Khách đăng ký gói trên website -> Quét VietQR chuyển khoản.
   - Admin duyệt đơn trên Dashboard.
   - Khách vào mục **Tra cứu bản quyền** trên website, bấm nút **Sao chép** chuỗi `KTS-LIC...` rồi dán vào phần mềm Desktop để kích hoạt. Không cần internet khi kích hoạt.

2. **Cách 2 - Kích hoạt Online 1-Click (Tự động):**
   - Server cung cấp sẵn API: `GET /api/license/online-check?machine_id=KTS-XXXX-XXXX`
   - Phần mềm Desktop khi có mạng có thể tự động gọi kiểm tra định kỳ để đồng bộ trạng thái bản quyền mới nhất từ server về máy khách hàng.
