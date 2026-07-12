import type { Metadata } from "next";
import styles from "./van-hoa.module.css";

export const metadata: Metadata = {
  title: "Văn hoá Caumos — Cẩm nang Phòng Marketing",
};

function CheckBadgeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 10.5l3.2 3.2L15.5 6" />
    </svg>
  );
}

function XBadgeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l8 8M14 6l-8 8" />
    </svg>
  );
}

const MISSION_VALUES = [
  {
    n: "01",
    title: "Tinh tế",
    desc: "Mọi chi tiết, từ khoảng trắng thiết kế đến câu chữ phản hồi, đều được trau chuốt để chạm đến cảm xúc sâu lắng nhất của khách hàng.",
  },
  {
    n: "02",
    title: "An toàn",
    desc: "Cam kết thông tin minh bạch, chính xác, bảo vệ quyền lợi và sự bình an của người tiêu dùng.",
  },
  {
    n: "03",
    title: "Đáng tin cậy",
    desc: "Giữ vững chuẩn mực chất lượng sản phẩm thực tế đúng với truyền thông, phản hồi chuyên nghiệp và nhất quán.",
  },
];

type Pillar = {
  id: string;
  num: string;
  title: string;
  concept: string[];
  example?: { label: string; text: string };
  dos: string[];
  donts: string[];
};

const PILLARS: Pillar[] = [
  {
    id: "thau-hieu",
    num: "01",
    title: "Thấu hiểu đúng đắn – Thấu cảm có kỷ luật",
    concept: [
      "Nhìn nhận mọi sự vật, hiện tượng — từ biến động thị trường, dữ liệu khách hàng đến thông tin nội bộ doanh nghiệp — một cách khách quan, đa chiều, dựa trên thực tế mà không bị chi phối bởi định kiến hay lăng kính cá nhân ích kỷ.",
      "Nguyên tắc tiếp nhận thông tin: khi tiếp nhận bất kỳ thông tin nào, luôn phải tìm hiểu sự thật một cách chính xác. Thông tin đáng tin cậy là thông tin được cung cấp từ nguồn gốc rõ ràng (từ Quản lý trực tiếp, Ban lãnh đạo, hoặc có văn bản/email xác nhận). Tuyệt đối không sử dụng những thông tin đồn đoán, lời truyền miệng vô căn cứ nơi công sở để tự áp đặt suy nghĩ, suy diễn tiêu cực và coi đó là sự thật.",
    ],
    example: {
      label: "Ví dụ thực tế",
      text: "Thấy một trào lưu (trend) TikTok đang rất viral, vội vã bắt team Content \"đập đi làm lại\" kế hoạch tuần chỉ vì \"cảm thấy\" nó hay. Thay vào đó hãy ngồi lại phân tích dữ liệu tệp khách hàng lõi của Caumos xem họ có thực sự quan tâm không, và trend đó có phù hợp với định vị tinh tế của thương hiệu hay không rồi mới ra quyết định.",
    },
    dos: [
      "Luôn xác thực (double-check) thông tin với quản lý có thẩm quyền trước khi hành động.",
      "Phân tích kỹ số liệu Ads, chỉ số chuyển đổi Ecom trước khi tối ưu.",
      "Lắng nghe phản hồi thực tế từ bộ phận CSKH để cải tiến chương trình bán hàng, chiến dịch truyền thông.",
      "Lựa chọn KOL/KOC dựa trên dữ liệu lịch sử hiệu quả, DNA thương hiệu không theo cảm tính.",
    ],
    donts: [
      "Tham gia vào các hội nhóm \"buôn chuyện\", lan truyền tin đồn thất thiệt trong nội bộ.",
      "Triển khai chiến dịch chỉ dựa trên cảm giác chủ quan \"nghe có vẻ hay\", \"thấy đẹp\".",
      "Bỏ qua số liệu báo cáo khi lập luận, đánh giá hiệu quả công việc.",
    ],
  },
  {
    id: "tu-duy",
    num: "02",
    title: "Tư duy đúng đắn – Giải quyết đề bài khó bằng Phương pháp luận 4H",
    concept: [
      "Là tư duy tiếp thị tỉnh thức. Tuyệt đối từ chối các thủ thuật thao túng tâm lý độc hại (gieo rắc nỗi sợ hãi, tạo sự khan hiếm giả tạo, mồi nhử mập mờ). Luôn trăn trở mang đến trải nghiệm chân thực, tinh tế, an toàn cho khách hàng; thông tin sản phẩm không phóng đại, không dùng claim chưa kiểm chứng.",
      "Mọi chiến dịch của phòng Marketing Caumos đều bắt đầu bằng bản 4H Canvas, giúp mọi người nhìn chung một bức tranh và tránh đi sai hướng:",
    ],
    example: {
      label: "4H Canvas",
      text: "Harvest (Outcome — quả ngọt dài hạn): kết quả dài hạn, ý nghĩa của chiến dịch đối với doanh thu, thương hiệu, khách hàng và sự phát triển cá nhân.  •  Head (Input — đầu vào lý trí): nguồn lực, dữ liệu, công cụ, nhân sự — \"cái đầu lạnh\" thu thập insight từ số liệu cũ, phản hồi CSKH, báo cáo thị trường.  •  Hand (Processing — thực thi): quy trình nghiệp vụ chi tiết, kế hoạch sản xuất, phân công minh bạch, các chốt QC khắt khe.  •  Heart (Output — đầu ra tâm huyết): kết quả cụ thể chứa đựng \"trái tim\" người làm nghề — visual sạch, bài viết súc tích, kịch bản CSKH tận tâm.",
    },
    dos: [
      "Cần hoàn thiện bản 4H Canvas trước khi bấm nút khởi động dự án.",
      "Tư duy phân rã mục tiêu chiến dịch rõ ràng theo hành trình khách hàng (Nhận diện, Chuyển đổi, Upsell...).",
      "Luôn đặt câu hỏi: \"Nội dung này đã đem lại giá trị thực chất cho người đọc chưa?\".",
    ],
    donts: [
      "Nhảy vào làm thực thi (Hand) ngay lập tức khi chưa làm rõ mục tiêu (Harvest) và dữ liệu đầu vào (Head).",
      "Sử dụng các chiêu trò giật gân, lừa dối khách hàng để lấy chuyển đổi ngắn hạn.",
    ],
  },
  {
    id: "giao-tiep",
    num: "03",
    title: "Giao tiếp hoà ái & Truyền thông chân thật",
    concept: [
      "Lời nói, nội dung văn bản, hình ảnh truyền tải — dù ra bên ngoài với khách hàng hay giao tiếp nội bộ phòng ban — đều phải chân thực, hữu ích, hoà ái, lịch sự và hướng đến mục tiêu chung. Truyền thông nội bộ tốt sẽ loại bỏ được rất nhiều hiểu lầm và xích mích không đáng có.",
      "Chuẩn Đúng – Đủ – Đẹp khi truyền thông bên ngoài: Đúng thông điệp thương hiệu, đúng sự thật, đúng đối tượng mục tiêu. Đủ thông tin để khách hàng ra quyết định (công dụng, thành phần, giá, chính sách đổi trả) và có CTA rõ ràng. Đẹp — ngôn từ lịch sự tối giản, visual sạch tinh tế, đồng bộ hệ màu và font theo Brand Guidelines.",
    ],
    dos: [
      "Đóng góp ý kiến (feedback) mang tính xây dựng, tập trung vào sản phẩm công việc dựa trên 4H Canvas thay vì chỉ trích cá nhân.",
      "Chủ động tóm tắt hoặc lặp lại ý kiến đồng nghiệp để xác nhận mình đã hiểu đúng bản chất.",
      "Cung cấp đầy đủ bối cảnh công việc khi bàn giao task.",
      "Viết nội dung, kịch bản CSKH chân thành, lịch sự, chuẩn Brand Voice.",
    ],
    donts: [
      "Sử dụng ngôn từ mỉa mai, công kích, đổ lỗi khi xảy ra sự cố chiến dịch.",
      "Nói xấu sau lưng đồng nghiệp, tạo chia rẽ phe phái giữa các nhóm nhỏ.",
      "Viết content phóng đại công năng sản phẩm, gây hiểu lầm cho người tiêu dùng.",
      "Phản hồi khách hàng bằng các câu lệnh tự động thô lỗ, thiếu cảm xúc.",
    ],
  },
  {
    id: "thuc-thi",
    num: "04",
    title: "Thực thi chuẩn mực – Chất lượng khắt khe",
    concept: [
      "\"Thực thi chuẩn mực\" là tuyệt đối không thoả hiệp với tiêu chuẩn trung bình, cẩu thả ở bất kỳ khâu nào. Làm việc cần có quy trình phối hợp chặt chẽ và cơ chế kiểm soát chất lượng (QC) nghiêm ngặt nhằm đảm bảo đầu ra luôn đáp ứng được DNA của thương hiệu.",
    ],
    example: {
      label: "Bài học đắt giá về việc đi tắt, bỏ bước",
      text: "Khi lượng khách hàng bỗng nhiên tăng trưởng đột biến, để giải phóng đơn hàng nhanh, đội ngũ Sales/CSKH tự ý cắt bỏ bước gọi điện xác nhận khách hàng mà trực tiếp lên đơn giao luôn. Hậu quả: tỉ lệ hoàn hàng tăng vọt do thông tin sai lệch, gây lãng phí nghiêm trọng chi phí vận hành. Nguy hiểm hơn, hành động này gieo vào nhân sự một thói quen độc hại: hễ thấy khó, thấy áp lực là nghĩ cách đi tắt, bỏ bước. Một khi tư duy thoả hiệp này cắm rễ, toàn bộ hệ thống tiêu chuẩn chất lượng sẽ sụp đổ dây chuyền.",
    },
    dos: [
      "Tuân thủ nghiêm ngặt quy trình QC đa tầng (bản thân tự QC và đồng nghiệp/leader QC chéo).",
      "Kiểm tra kỹ lưỡng mọi đường link, thông tin giá bán, thể lệ chương trình trước khi setup Ads.",
      "Loại bỏ triệt để lỗi chính tả, sai font, sai tone màu thiết kế trước khi bàn giao ấn phẩm.",
    ],
    donts: [
      "Tự ý cắt bớt quy trình vận hành, quy trình duyệt bài với lý do \"gấp quá\", \"áp lực deadline\".",
      "Giữ tư duy \"nhắm mắt cho qua\", chấp nhận các lỗi nhỏ xuất hiện trên các điểm chạm công khai với khách hàng.",
    ],
  },
  {
    id: "gia-tri-ben-vung",
    num: "05",
    title: "Tạo giá trị bền vững – Marketing bằng sự tử tế",
    concept: [
      "Là kiên định lựa chọn con đường làm Marketing tử tế. Tập trung xây dựng tài sản thương hiệu và lòng trung thành của khách hàng thay vì vắt kiệt nguồn lực chạy theo các con số ảo ngắn hạn.",
    ],
    example: {
      label: "Các chiến thuật cần tuyệt đối tránh",
      text: "Không theo đuổi kinh doanh lướt sóng, đu trend độc hại, giật gân, bóc phốt câu view để chốt đơn nhanh — điều này giết chết định vị của Caumos. Không theo đuổi chiến thuật thời vụ, chắp vá, thiếu chuẩn bị — liên tục tung siêu sale phá giá để ép số cuối tháng khi vận hành/kho bãi/CSKH chưa sẵn sàng chịu tải. Không làm kiểu \"treo đầu dê bán thịt chó\" — thổi phồng công năng trên banner Ads để dụ khách xuống tiền mua sản phẩm không tương xứng.",
    },
    dos: [
      "Đồng nhất thông điệp truyền thông giữa nội dung quảng cáo và trải nghiệm thực tế trên Landing Page.",
      "Minh bạch 100% các thông tin về chương trình khuyến mãi, điều kiện Freeship, chính sách bảo hành.",
    ],
    donts: [
      "Phê duyệt hoặc triển khai các chiến dịch mang tính chắp vá, ăn xổi làm tổn hại hình ảnh thương hiệu dài hạn.",
      "Chạy theo các xu hướng ngắn hạn không phù hợp với hệ giá trị cốt lõi của Caumos chỉ vì áp lực doanh số tạm thời.",
    ],
  },
  {
    id: "no-luc",
    num: "06",
    title: "Nỗ lực đúng đắn – Học nhanh – Thử nhanh – Đo nhanh",
    concept: [
      "Nỗ lực không đo bằng thời gian làm việc OT (bận rộn mù quáng), mà đo bằng tư duy thử nghiệm có kiểm soát: Learn → Ship → Measure. Siêng năng thử nghiệm cái mới, tối ưu hoá liên tục cái cũ và dũng cảm cắt bỏ chiến dịch kém hiệu quả.",
    ],
    example: {
      label: "Phân tích ví dụ trực quan",
      text: "Khi triển khai một góc tiếp cận nội dung (angle) Ads mới, sau 2 ngày số liệu trả về rất tệ (CTR thấp, không chuyển đổi). Người nỗ lực mù quáng sẽ ép team Design thức đêm làm thêm 10 cái banner theo concept cũ và đổ thêm tiền chạy tiếp vì nghĩ \"cố thêm chút nữa sẽ có kết quả\". Người nỗ lực đúng đắn sẽ nhận diện ngay hướng đi này sai, dừng lại, thực hiện Test A/B các phương án nhỏ khác — khi phát hiện phương án C có tín hiệu tốt, họ mới dồn 200% nỗ lực quyết liệt tối ưu biến thể C thành chiến dịch bùng nổ.",
    },
    dos: [
      "Luôn áp dụng tư duy Test A/B đối với quảng cáo, hình ảnh, kịch bản, Landing page.",
      "Chủ động lập báo cáo tổng kết ngắn gọn sau mỗi thử nghiệm để rút ra bài học cải tiến.",
      "Dũng cảm đề xuất dừng hoặc chuyển hướng các dự án không hiệu quả để bảo toàn tài nguyên doanh nghiệp.",
    ],
    donts: [
      "Thử nghiệm vô tội vạ mà không thiết lập chỉ số đo lường rõ ràng từ trước.",
      "Cố chấp bảo vệ một ý tưởng tồi, lặp lại lỗi sai cũ chỉ vì tiếc công sức đã bỏ ra ban đầu.",
      "Làm việc cật lực nhưng không có kế hoạch hành động khả thi, dẫn đến kiệt sức mà không ra kết quả.",
    ],
  },
  {
    id: "cam-nhan",
    num: "07",
    title: "Cảm nhận đúng đắn – Tinh tế từng điểm chạm",
    concept: [
      "Là trạng thái hoàn toàn có mặt ở hiện tại, quan sát và nhận biết trọn vẹn những gì đang diễn ra ở đây và bây giờ — chính là cội nguồn của sự tinh tế. Nhân sự MKT Caumos từ chối việc sản xuất nội dung như một cái máy: mỗi dấu phẩy, một mã màu, một khoảng trắng (white space) trên thiết kế hay một câu chữ phản hồi đều mang một tần số năng lượng tác động mạnh mẽ đến tâm lý khách hàng. Để tạo ra sự \"tinh tế thầm lặng\", người làm nghề phải hiện diện trọn vẹn trong việc mình làm.",
    ],
    dos: [
      "Tuân thủ khắt khe hệ thống màu, font chữ, quy định khoảng cách theo Brand Guideline.",
      "Rèn luyện khả năng tập trung sâu (Deep Work) vào phần việc đang làm, không phân tán tư tưởng.",
      "Thực hiện quy trình \"Publish & Monitor\": bám sát thời gian thực diễn biến traffic website, tốc độ phản hồi CSKH để tinh chỉnh ngay khi có bất thường.",
    ],
    donts: [
      "Lạm dụng hiệu ứng đồ hoạ phức tạp, nhồi nhét quá nhiều chữ hoặc dùng màu sắc gây rối mắt khách hàng.",
      "Bấm nút xuất bản (publish) bài viết hoặc phê duyệt thiết kế khi chưa dành ra 1 phút tĩnh tâm rà soát lại tổng thể lần cuối cùng.",
    ],
  },
  {
    id: "tap-trung",
    num: "08",
    title: "Tập trung đúng đắn – Tự chủ & trách nhiệm",
    concept: [
      "Là khả năng thu nhiếp tâm trí, đóng băng mọi tiếng ồn và sự xao nhãng xung quanh để hướng toàn bộ năng lượng vào một mục tiêu duy nhất. Người có khả năng này sở hữu sự tự chủ mạnh mẽ: làm chủ cảm xúc, làm chủ hành động và chịu trách nhiệm hoàn toàn về kết quả của mình mà không đổ lỗi cho hoàn cảnh.",
      "Môi trường Marketing luôn tràn ngập sự xao nhãng của xu hướng mới và sự thay đổi thuật toán. Để đạt được sự tập trung đúng đắn cần tinh thần \"Tự do trong bối cảnh và chịu trách nhiệm đến cùng\": khi Team Lead cung cấp đầy đủ bối cảnh (mục tiêu lớn, vai trò, tiêu chí thành công), nhân sự sẽ dồn 100% sự tập trung để tự ra quyết định chi tiết triển khai và tự chịu trách nhiệm về kết quả, triệt tiêu tư duy chờ đợi quản lý vi mô.",
    ],
    dos: [
      "Chủ động 100% việc lập kế hoạch chi tiết, tự theo dõi hiệu suất và tự giải quyết các phát sinh trong phạm vi trách nhiệm.",
      "Luôn đào sâu tìm hiểu bối cảnh cốt lõi (mục tiêu lớn của công ty là gì) trước khi đưa ra các quyết định hành động chi tiết.",
      "Đi theo đến cùng dự án do mình đề xuất từ khâu ý tưởng cho đến khi nghiệm thu kết quả thực tế.",
    ],
    donts: [
      "Đưa ra ý tưởng rất hay nhưng bỏ lửng không triển khai, không đo lường hiệu quả (\"đem con bỏ chợ\").",
      "Đùn đẩy trách nhiệm sang bộ phận khác hoặc đổ lỗi cho hoàn cảnh khách quan khi công việc không đạt KPI.",
    ],
  },
];

export default function VanHoaPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Cẩm nang văn hoá · Phòng Marketing</p>
          <h1 className={styles.heroTitle}>Văn hoá Caumos</h1>
          <p className={styles.heroLede}>
            Sứ mệnh của Phòng Marketing Caumos: giúp khách hàng có trải nghiệm sản phẩm & dịch vụ tinh tế, an toàn, đáng tin cậy — và 8 trụ cột văn hoá cốt lõi định hình cách chúng ta nghĩ, nói và làm mỗi ngày.
          </p>
          <p className={styles.missionQuote}>
            &ldquo;Giúp khách hàng có trải nghiệm sản phẩm & dịch vụ tinh tế, an toàn, đáng tin cậy.&rdquo;
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>Phần I</p>
        <h2 className={styles.sectionTitle}>Sứ mệnh Phòng Marketing Caumos</h2>
        <div className={styles.triad}>
          {MISSION_VALUES.map((v) => (
            <div className={styles.triadCard} key={v.n}>
              <p className={styles.triadNum}>{v.n}</p>
              <p className={styles.triadTitle}>{v.title}</p>
              <p className={styles.triadDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>Phần II</p>
        <h2 className={styles.sectionTitle}>8 trụ cột văn hoá cốt lõi</h2>
        <div className={styles.toc}>
          {PILLARS.map((p) => (
            <a className={styles.tocLink} href={`#${p.id}`} key={p.id}>
              <span className={styles.tocNum}>{p.num}</span>
              <span className={styles.tocText}>{p.title.split(" – ")[0]}</span>
            </a>
          ))}
        </div>
      </section>

      {PILLARS.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`${styles.pillar} ${i % 2 === 1 ? styles.pillarTint : ""}`}
        >
          <div className={styles.pillarInner}>
            <div className={styles.pillarHead}>
              <span className={styles.pillarNum}>{p.num}</span>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
            </div>
            <div className={styles.pillarBody}>
              <div>
                {p.concept.map((c, idx) => (
                  <p className={styles.concept} key={idx}>{c}</p>
                ))}
              </div>
              {p.example && (
                <div className={styles.example}>
                  <p className={styles.exampleLabel}>{p.example.label}</p>
                  <p className={styles.exampleText}>{p.example.text}</p>
                </div>
              )}
              <div className={styles.rules}>
                <div className={`${styles.ruleCard} ${styles.ruleGood}`}>
                  <p className={styles.ruleHead}>
                    <span className={styles.badgeDot}><CheckBadgeIcon /></span>
                    Hành vi nên làm
                  </p>
                  <ul>
                    {p.dos.map((d, idx) => <li key={idx}>{d}</li>)}
                  </ul>
                </div>
                <div className={`${styles.ruleCard} ${styles.ruleBad}`}>
                  <p className={styles.ruleHead}>
                    <span className={styles.badgeDot}><XBadgeIcon /></span>
                    Hành vi không được làm
                  </p>
                  <ul>
                    {p.donts.map((d, idx) => <li key={idx}>{d}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <p className={styles.closingLine}>
            8 trụ cột — một tinh thần: làm Marketing tử tế, tinh tế và đáng tin cậy, trong từng điểm chạm với khách hàng.
          </p>
          <div className={styles.closingFooter}>
            <span>Phòng Marketing · Caumos</span>
            <span>Cẩm nang văn hoá — bản cập nhật</span>
          </div>
        </div>
      </section>
    </div>
  );
}
