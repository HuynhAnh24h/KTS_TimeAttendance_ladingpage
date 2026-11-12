import React, { useState } from 'react';
import {
  Wrench,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Zap,
  Truck,
  Sparkles,
  Wifi,
  Globe,
  Clock,
  ArrowRight,
  Monitor
} from 'lucide-react';

export default function HardwareProducts({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 'zk-v5l',
      name: 'ZKTeco SpeedFace-V5L [Face ID & AI]',
      brand: 'ZKTeco Chính Hãng',
      category: 'face',
      badge: 'Cao Cấp Nhất',
      badgeColor: 'bg-purple-600',
      price: '5.890.000đ',
      oldPrice: '6.500.000đ',
      promo: 'Tặng kèm bản quyền phần mềm KTS v2.0 + Miễn phí thi công lắp đặt',
      specs: [
        'Dung lượng: 6.000 khuôn mặt, 10.000 vân tay, 10.000 thẻ từ',
        'Bộ nhớ: 200.000 lượt chấm công',
        'Tốc độ nhận diện khuôn mặt siêu tốc 0.3 giây không cần dừng lại',
        'Camera kép AI góc rộng, chống giả mạo bằng ảnh chụp hoặc video',
        'Tích hợp sẵn Cloud Push ADMS kết nối đa chi nhánh toàn quốc',
        'Màn hình cảm ứng LCD 5 inch sắc nét'
      ],
      suitable: 'Văn phòng hiện đại, chuỗi bệnh viện, tòa nhà, nhà máy quy mô lớn.'
    },
    {
      id: 'rj-8000t',
      name: 'Ronald Jack 8000T [Vân Tay & Thẻ Cảm Ứng]',
      brand: 'Ronald Jack Malaysia',
      category: 'fingerprint',
      badge: 'Bền Bỉ Số 1',
      badgeColor: 'bg-blue-600',
      price: '2.690.000đ',
      oldPrice: '3.200.000đ',
      promo: 'Bao trọn gói công kéo dây và cài đặt phần mềm tận nơi',
      specs: [
        'Dung lượng: 3.000 dấu vân tay, 3.000 thẻ cảm ứng Proximity',
        'Bộ nhớ: 100.000 lần quẹt thẻ',
        'Mắt đọc quang học thế hệ mới chống trầy xước, nhận diện cả vân tay ướt',
        'Cổng kết nối: TCP/IP (LAN) cổng 4370 + Cổng USB lấy dữ liệu offline',
        'Pin lưu điện dự phòng: Hoạt động liên tục 4-6 giờ khi mất điện lưới',
        'Bàn phím nổi bền bỉ, chuông báo giờ vào ca, tan ca tự động'
      ],
      suitable: 'Văn phòng công ty, nhà máy sản xuất, nhà kho, xưởng may, công trình.'
    },
    {
      id: 'gigata-t9',
      name: 'Gigata T9 / T8 [Đa Chi Nhánh Cloud ADMS]',
      brand: 'Gigata Singapore',
      category: 'cloud',
      badge: 'Khuyên Dùng Cho Chuỗi',
      badgeColor: 'bg-emerald-600',
      price: '3.290.000đ',
      oldPrice: '3.800.000đ',
      promo: 'Tích hợp sẵn giao thức ADMS Cloud Push tự động đồng bộ qua Internet',
      specs: [
        'Dung lượng: 3.000 vân tay, 3.000 thẻ cảm ứng',
        'Bộ nhớ: 100.000 lượt quẹt',
        'ZKTeco Native ADMS: Tự động bắn dữ liệu Real-time về KTS Server',
        'Hoạt động qua 4G / WiFi / Modem bất kỳ, không cần mở port modem',
        'Không cần thuê IP tĩnh, tiết kiệm hàng chục triệu đồng mỗi năm',
        'Âm thanh thông báo Tiếng Việt rõ ràng khi quẹt thẻ'
      ],
      suitable: 'Chuỗi cửa hàng bán lẻ, chuỗi nhà thuốc, showroom, quán cafe, chuỗi F&B.'
    },
    {
      id: 'zk-mb20',
      name: 'ZKTeco MB20 [Face ID + Vân Tay Nhỏ Gọn]',
      brand: 'ZKTeco Chính Hãng',
      category: 'face',
      badge: 'Giá Tốt Nhất',
      badgeColor: 'bg-amber-600',
      price: '2.390.000đ',
      oldPrice: '2.900.000đ',
      promo: 'Tặng kèm giá treo tường + Bộ nguồn chính hãng 12V',
      specs: [
        'Dung lượng: 500 khuôn mặt, 1.000 vân tay, 1.000 thẻ',
        'Bộ nhớ: 50.000 lần giao dịch',
        'Nhận diện khuôn mặt dưới 1 giây trong mọi điều kiện ánh sáng',
        'Cổng kết nối: TCP/IP mạng LAN nội bộ + USB Host',
        'Kích thước nhỏ gọn, thiết kế tinh tế phù hợp không gian hẹp',
        'Phần mềm KTS tự động quét Radar LAN nhận diện trong 0.7s'
      ],
      suitable: 'Văn phòng nhỏ, công ty startup, spa, phòng khám dưới 50 nhân viên.'
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const installationSteps = [
    {
      step: '01',
      title: 'Khảo Sát & Tư Vấn Vị Trí',
      desc: 'Kỹ sư KTS đến tận nơi khảo sát vị trí cửa ra vào, tư vấn góc đặt máy tránh ánh nắng gắt và tối ưu luồng di chuyển của nhân viên.'
    },
    {
      step: '02',
      title: 'Kéo Dây Mạng & Luồn Ống Gen',
      desc: 'Thi công kéo dây mạng CAT6 lõi đồng chống nhiễu, luồn ống gen cứng/mềm thẩm mỹ, đảm bảo an toàn điện và mỹ quan văn phòng.'
    },
    {
      step: '03',
      title: 'Lắp Máy & Hộp Bảo Vệ',
      desc: 'Khoan bắt giá treo máy chắc chắn, đấu nối nguồn điện ổn định, gắn hộp mica/inox bảo vệ chống bụi và chống nước mưa (nếu cần).'
    },
    {
      step: '04',
      title: 'Cài Đặt Phần Mềm & Cấu Hình Ca',
      desc: 'Cài đặt KTS TimeAttendance trên máy tính, kết nối mạng LAN / Cloud ADMS, khai báo danh mục phòng ban, chức vụ và cấu hình ca kíp.'
    },
    {
      step: '05',
      title: 'Lấy Mẫu Vân Tay & Bàn Giao',
      desc: 'Trực tiếp hỗ trợ nhân sự đăng ký dấu vân tay, khuôn mặt và đào tạo kế toán xuất bảng công ma trận 31 ngày, bàn giao nghiệm thu.'
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-50/70 border-b border-slate-200/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            Phân Phối Thiết Bị & Thi Công Lắp Đặt Tận Nơi
          </span>
          <h2 className="mt-2.5 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Máy Chấm Công Chính Hãng & Dịch Vụ Trọn Gói
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            KTS cung cấp đầy đủ các dòng máy Ronald Jack, Gigata, ZKTeco Face ID mới 100% nguyên hộp. Đội ngũ kỹ sư trực tiếp khảo sát, kéo dây mạng, gắn máy và hướng dẫn tận nơi tại Hà Nội, TP.HCM, Bình Dương và toàn quốc.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'Tất Cả Thiết Bị' },
              { id: 'face', label: 'Nhận Diện Khuôn Mặt (Face ID)' },
              { id: 'fingerprint', label: 'Vân Tay & Thẻ Cảm Ứng' },
              { id: 'cloud', label: 'Đa Chi Nhánh Cloud ADMS' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {p.brand}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-white shadow-xs ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {p.name}
                </h3>

                {/* Price block */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight">
                    {p.price}
                  </span>
                  {p.oldPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {p.oldPrice}
                    </span>
                  )}
                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    Bao công lắp đặt
                  </span>
                </div>

                {/* Promo note */}
                <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-blue-900 font-medium mb-5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{p.promo}</span>
                </div>

                {/* Specs list */}
                <ul className="space-y-2 mb-6">
                  {p.specs.map((sp, spi) => (
                    <li key={spi} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{sp}</span>
                    </li>
                  ))}
                </ul>

                {/* Suitable */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 mb-6">
                  <strong>Phù hợp cho:</strong> {p.suitable}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://zalo.me/0776980269"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-1.5 text-center cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Nhắn Zalo Khảo Sát & Báo Giá
                </a>

                <a
                  href="tel:0776980269"
                  className="py-3 px-4 rounded-xl font-bold text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center justify-center gap-1.5 text-center cursor-pointer"
                >
                  Hotline: 0776.980.269
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Turnkey Installation Workflow (Quy Trình Thi Công Trọn Gói 5 Bước) */}
        <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center justify-center gap-1.5 mb-2">
              <Wrench className="w-4 h-4" /> Dịch Vụ Chuyên Nghiệp
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Quy Trình Thi Công Lắp Đặt Trọn Gói 5 Bước
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Khách hàng chỉ cần chọn máy, toàn bộ khâu kéo dây, cấu hình và đào tạo nhân sự sẽ được kỹ sư KTS đảm nhiệm từ A đến Z.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {installationSteps.map((st, si) => (
              <div
                key={si}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-3 relative group hover:bg-blue-50/50 hover:border-blue-200 transition-all"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3 shadow-xs">
                    {st.step}
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mb-1.5 leading-snug">
                    {st.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Commitments Banner */}
          <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <strong className="block text-slate-900">Bảo Hành 12 - 24 Tháng</strong>
                <span className="text-slate-500 text-[11px]">1 đổi 1 trong 30 ngày nếu lỗi kỹ thuật</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <Truck className="w-6 h-6 text-blue-600 shrink-0" />
              <div>
                <strong className="block text-slate-900">Lắp Đặt Nhanh Trong Ngày</strong>
                <span className="text-slate-500 text-[11px]">Có mặt khảo sát và thi công trong 2-4h</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
              <Monitor className="w-6 h-6 text-indigo-600 shrink-0" />
              <div>
                <strong className="block text-slate-900">Chuyển Giao Trọn Gói</strong>
                <span className="text-slate-500 text-[11px]">Hướng dẫn lấy vân tay & xuất bảng lương</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
