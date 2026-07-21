"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import "./Roadmap.css";

const TOTAL = 9;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

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

function Sprig({ variant }: { variant: "tr" | "bl" }) {
  return (
    <svg
      className={`sprig ${variant === "tr" ? "sprigTr" : "sprigBl"}`}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M132 8C110 30 96 50 90 76" stroke="#0B5D90" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M90 76C78 66 66 62 54 64" stroke="#0B5D90" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M96 60C86 52 76 50 66 54" stroke="#0B5D90" strokeWidth="1.4" strokeLinecap="round" />
      {variant === "tr" && <path d="M104 42C96 36 88 35 80 39" stroke="#0B5D90" strokeWidth="1.4" strokeLinecap="round" />}
      <ellipse cx="52" cy="65" rx="9" ry="4.5" transform="rotate(-28 52 65)" stroke="#3AAFA6" strokeWidth="1.4" />
      <ellipse cx="64" cy="55" rx="8" ry="4" transform="rotate(-24 64 55)" stroke="#3AAFA6" strokeWidth="1.4" />
      {variant === "tr" && <ellipse cx="78" cy="40" rx="7.5" ry="3.8" transform="rotate(-20 78 40)" stroke="#3AAFA6" strokeWidth="1.4" />}
    </svg>
  );
}

function Rail({ activePhase }: { activePhase: 1 | 2 | 3 | 4 }) {
  const dots = [1, 2, 3, 4] as const;
  return (
    <div className="rail" aria-hidden="true">
      {dots.map((d, i) => (
        <span key={d} style={{ display: "contents" }}>
          <span className={`railDot ${d < activePhase ? "railDotDone" : ""} ${d === activePhase ? "railDotActive" : ""}`} />
          {i < dots.length - 1 && <span className={`railLine ${d < activePhase ? "railLineDone" : ""}`} />}
        </span>
      ))}
    </div>
  );
}

const TIMELINE = [
  { left: "11.7%", day: "Ngày 7", name: "Hoà nhập" },
  { left: "23.3%", day: "Ngày 14", name: "Vào guồng" },
  { left: "50%", day: "Ngày 30", name: "Bám kế hoạch" },
  { left: "91.7%", day: "Ngày 55", name: "Tổng kết" },
];

function HeroTimeline({ withName = true }: { withName?: boolean }) {
  return (
    <div className="heroTimeline" role="img" aria-label="Dòng thời gian 4 giai đoạn: ngày 7, 14, 30, 55 trên tổng 60 ngày">
      <div className="heroTrack" />
      {TIMELINE.map((n) => (
        <div className="heroNode" style={{ left: n.left }} key={n.day}>
          <div className="heroDot" />
          <div className="heroDay">{n.day}</div>
          {withName && <div className="heroName">{n.name}</div>}
        </div>
      ))}
    </div>
  );
}

export default function Roadmap() {
  const [index, setIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(TOTAL - 1, i)));
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "PageDown") go(index + 1);
      else if (e.key === "ArrowLeft" || e.key === "PageUp") go(index - 1);
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(TOTAL - 1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, go]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? index + 1 : index - 1);
    touchStartX.current = null;
  }

  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

  return (
    <div className="roadmapRoot">
      <div className="deckProgress" style={{ width: `${((index + 1) / TOTAL) * 100}%` }} />
      <div className="deckCounter">
        {pad(index + 1)} / {pad(TOTAL)}
      </div>

      <div className="stagehand">
        <div
          className="slides"
          ref={slidesRef}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* 0 · COVER */}
          <section className="slide slideSky">
            <div className="slideInner">
              <Sprig variant="tr" />
              <Image src="/brand/logo-navy.png" alt="Caumos" width={220} height={40} className="logoMark" priority />
              <p className="eyebrow" style={{ marginTop: "clamp(22px,4vh,34px)" }}>
                Phòng Marketing
              </p>
              <h1 style={{ fontSize: "var(--fs-h1)", fontFamily: "var(--ff-serif)", fontStyle: "italic", fontWeight: 700, color: "var(--navy-ink)", marginTop: ".22em", lineHeight: 1.04 }}>
                Lộ trình thử việc
                <br />2 tháng
              </h1>
              <p className="lede" style={{ fontSize: "clamp(1rem,.92rem + .3vw,1.18rem)", marginTop: ".9em" }}>
                Phương pháp luận đánh giá nhân sự mới trong 60 ngày đầu tiên — áp dụng chung cho toàn Phòng Marketing.
              </p>
              <div className="coverMeta">
                <span className="chip">4 giai đoạn · 60 ngày</span>
              </div>
              <HeroTimeline />
            </div>
          </section>

          {/* 1 · MỤC ĐÍCH & PHẠM VI */}
          <section className="slide">
            <div className="slideInner">
              <p className="eyebrow">00 · Tổng quan</p>
              <h2 className="title">Một chuẩn đánh giá, áp dụng cho mọi vị trí mới</h2>
              <div className="twoCol" style={{ marginTop: "clamp(20px,3vh,30px)" }}>
                <div>
                  <p className="lede">
                    Lộ trình trả lời một câu hỏi rõ ràng theo từng mốc thời gian: nhân sự mới có phù hợp với văn hoá, có tự chủ được công việc, và có tạo ra kết quả đo lường được — trước khi phòng Marketing cam kết một vị trí chính thức.
                  </p>
                </div>
                <div>
                  <p className="contentBlockLabel" style={{ marginBottom: ".4em" }}>Phạm vi áp dụng</p>
                  <p className="lede" style={{ maxWidth: "none" }}>Áp dụng chung cho toàn Phòng Marketing — từ vị trí thực thi đến Team Leader.</p>
                </div>
              </div>
              <div className="phaseGrid">
                <div className="phaseCard"><p className="phaseCardNum">Giai đoạn 1</p><p className="phaseCardDay">Ngày 1–7</p><p className="phaseCardName">Hoà nhập</p><p className="phaseCardQ">Có hợp văn hoá không?</p></div>
                <div className="phaseCard"><p className="phaseCardNum">Giai đoạn 2</p><p className="phaseCardDay">Ngày 14</p><p className="phaseCardName">Vào guồng</p><p className="phaseCardQ">Đã tự chủ được việc chưa?</p></div>
                <div className="phaseCard"><p className="phaseCardNum">Giai đoạn 3</p><p className="phaseCardDay">Ngày 30</p><p className="phaseCardName">Bám kế hoạch</p><p className="phaseCardQ">Có tạo kết quả đo lường được không?</p></div>
                <div className="phaseCard"><p className="phaseCardNum">Giai đoạn 4</p><p className="phaseCardDay">Ngày 55</p><p className="phaseCardName">Tổng kết</p><p className="phaseCardQ">Có xứng đáng lên chính thức không?</p></div>
              </div>
            </div>
          </section>

          {/* 2 · GIAI ĐOẠN 1 — A */}
          <section className="slide slideSky">
            <div className="slideInner">
              <Rail activePhase={1} />
              <p className="eyebrow">Giai đoạn 1 · Ngày 1–7</p>
              <h2 className="title">Hoà nhập</h2>
              <div style={{ marginTop: "clamp(22px,3.4vh,32px)" }}>
                <div className="contentBlock contentBlockFlush">
                  <p className="contentBlockLabel">Mục tiêu</p>
                  <p className="lede" style={{ maxWidth: "none" }}>
                    Trả lời câu hỏi duy nhất: người này có <b style={{ color: "var(--navy-ink)" }}>HỢP với văn hoá và tính chất công việc</b> không? Giai đoạn này chưa đòi hỏi kết quả phục vụ công việc kinh doanh.
                  </p>
                </div>
                <div className="contentBlock">
                  <p className="contentBlockLabel">Yếu tố định tính cần nắm bắt</p>
                  <ul className="checkList">
                    <li><CheckIcon />Hiểu rõ thương hiệu, sản phẩm & những điều nên – không nên nói, làm</li>
                    <li><CheckIcon />Nắm được văn hoá Phòng Marketing — 8 trụ cột văn hoá</li>
                    <li><CheckIcon />Hiểu quy trình, công cụ và luồng phối hợp giữa các bộ phận</li>
                    <li><CheckIcon />Hiểu rõ vai trò của chính mình và chỉ số (KPI) sẽ chịu trách nhiệm</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3 · GIAI ĐOẠN 1 — B (data) */}
          <section className="slide slideMint">
            <div className="slideInner">
              <Rail activePhase={1} />
              <p className="eyebrow">Giai đoạn 1 · Chuẩn đạt</p>
              <h2 className="title">Yếu tố định lượng — hạn cuối ngày 5</h2>
              <div className="contentBlock">
                <table className="dataTable">
                  <thead><tr><th style={{ width: "70%" }}>Sản phẩm</th><th>Chuẩn đạt</th></tr></thead>
                  <tbody>
                    <tr><td className="colProduct">Bài kiểm tra hiểu sản phẩm + văn hoá + quy định claim</td><td className="colBar">≥ 80% đúng</td></tr>
                    <tr><td className="colProduct">&quot;Nhật ký hoà nhập 5 ngày&quot; — đúc kết thành 1 báo cáo</td><td className="colBar">Đủ 7 ngày</td></tr>
                    <tr><td className="colProduct">Checklist công việc được giao</td><td className="colBar">Có kết quả cụ thể</td></tr>
                    <tr><td className="colProduct">Kết quả then chốt của giai đoạn (VD: 5 kịch bản quay + kế hoạch sản xuất)</td><td className="colBar">Thực hiện cụ thể</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="signalRow">
                <div className="signalCard signalGood">
                  <p className="signalHead"><span className="badgeDot"><CheckBadgeIcon /></span>Phù hợp</p>
                  <ul><li>Chủ động hỏi & ghi chép</li><li>Tiếp thu nhanh, đón nhận feedback</li><li>Đúng giờ, giữ cam kết, tỉ mỉ</li><li>Cởi mở, lễ phép, hoà nhập nhanh</li></ul>
                </div>
                <div className="signalCard signalBad">
                  <p className="signalHead"><span className="badgeDot"><XBadgeIcon /></span>Không phù hợp</p>
                  <ul><li>Gian dối, đối phó, thái độ lệch chuẩn</li><li>Có chiều hướng chia rẽ, kết bè phái</li><li>Nghi ngờ môi trường văn hoá</li><li>Chạm là dừng</li></ul>
                </div>
              </div>
            </div>
          </section>

          {/* 4 · GIAI ĐOẠN 2 */}
          <section className="slide slideSky">
            <div className="slideInner">
              <Rail activePhase={2} />
              <p className="eyebrow">Giai đoạn 2 · Ngày 14</p>
              <h2 className="title">Điều chỉnh để vào guồng công việc</h2>
              <div className="twoCol" style={{ marginTop: "clamp(20px,3vh,28px)" }}>
                <div>
                  <div className="contentBlock contentBlockFlush">
                    <p className="contentBlockLabel">Mục tiêu</p>
                    <p className="lede" style={{ maxWidth: "none" }}>Người mới tự đứng trong quy trình cốt lõi của vị trí, bắt đầu tạo ra kết quả và giá trị thật, giảm rõ rệt số lỗi so với tuần đầu.</p>
                  </div>
                  <div className="contentBlock">
                    <p className="contentBlockLabel">Yếu tố định tính</p>
                    <ul className="checkList">
                      <li><CheckIcon />Mức độ tự chủ: còn cầm tay hay đã tự hoàn thành phần lớn việc</li>
                      <li><CheckIcon />Phối hợp với các bộ phận; thái độ khi nhận feedback</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="contentBlockLabel">Yếu tố định lượng</p>
                  <div className="metricList">
                    <div className="metricItem"><span className="metricLabel">Kế hoạch hành động 2–3 tuần được quản lý duyệt</span><span className="metricValue">✓</span></div>
                    <div className="metricItem"><span className="metricLabel">Bám sát kế hoạch tuần đầu</span><span className="metricValue">≥ 80%</span></div>
                    <div className="metricItem"><span className="metricLabel">Báo cáo công việc nộp đủ, đúng hạn</span><span className="metricValue">✓</span></div>
                    <div className="metricItem"><span className="metricLabel">Đáp ứng khối lượng công việc theo KPI giao</span><span className="metricValue">80%</span></div>
                  </div>
                </div>
              </div>
              <div className="branchRow">
                <div className="branchCard branchGood">
                  <span className="branchTag"><span className="badgeDot" style={{ width: 20, height: 20, background: "var(--good)" }}><span style={{ color: "#fff", display: "flex" }}><CheckBadgeIcon /></span></span>Đạt</span>
                  <p>Tự lên kế hoạch 2–3 tuần tiếp theo và đưa vào thực hiện để đánh giá cho quá trình thử việc 30 ngày.</p>
                </div>
                <div className="branchCard branchBad">
                  <span className="branchTag"><span className="badgeDot" style={{ width: 20, height: 20, background: "var(--bad)" }}><span style={{ color: "#fff", display: "flex" }}><XBadgeIcon /></span></span>Không đạt</span>
                  <p>Thông báo ngừng hợp tác, có 3 ngày để xử lý bàn giao công việc.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 5 · GIAI ĐOẠN 3 */}
          <section className="slide">
            <div className="slideInner">
              <Rail activePhase={3} />
              <p className="eyebrow">Giai đoạn 3 · Ngày 30</p>
              <h2 className="title">Bám sát kế hoạch cá nhân & khối lượng công việc phòng ban</h2>
              <div className="twoCol" style={{ marginTop: "clamp(22px,3.4vh,32px)" }}>
                <div>
                  <div className="contentBlock contentBlockFlush">
                    <p className="contentBlockLabel">Mục tiêu</p>
                    <p className="lede" style={{ maxWidth: "none" }}>Tự vận hành mảng được giao và bắt đầu tạo ra kết quả đo lường rõ ràng.</p>
                  </div>
                  <div className="contentBlock">
                    <p className="contentBlockLabel">Yếu tố định tính cần đảm bảo</p>
                    <ul className="checkList">
                      <li><CheckIcon />Đọc, phân tích số liệu & hiệu suất cá nhân để tự cải thiện</li>
                      <li><CheckIcon />Phát hiện vấn đề → tự nhận diện nguyên nhân → chủ động đề xuất giải pháp</li>
                      <li><CheckIcon />Xử lý được tình huống phát sinh trong vận hành</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="contentBlockLabel">Yếu tố định lượng cần thể hiện</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: ".9em" }}>
                    <div className="phaseCard" style={{ padding: "16px 18px" }}><p className="phaseCardName" style={{ fontSize: "var(--fs-body)" }}>% hoàn thành KPI 30 ngày</p><p className="phaseCardQ" style={{ marginTop: ".4em" }}>So với mục tiêu đã đặt ra cho vị trí</p></div>
                    <div className="phaseCard" style={{ padding: "16px 18px" }}><p className="phaseCardName" style={{ fontSize: "var(--fs-body)" }}>Báo cáo & tự đánh giá 30 ngày</p><p className="phaseCardQ" style={{ marginTop: ".4em" }}>Xây dựng báo cáo quá trình làm việc</p></div>
                    <div className="phaseCard" style={{ padding: "16px 18px" }}><p className="phaseCardName" style={{ fontSize: "var(--fs-body)" }}>1 kế hoạch cho tháng tiếp theo</p></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6 · GIAI ĐOẠN 4 — A */}
          <section className="slide slideMint">
            <div className="slideInner">
              <Rail activePhase={4} />
              <p className="eyebrow">Giai đoạn 4 · Ngày 55</p>
              <h2 className="title">Đánh giá tổng kết quá trình thử việc 2 tháng</h2>
              <p className="lede" style={{ marginTop: ".8em" }}>Chốt sớm 5 ngày trước khi hết hạn để còn kịp làm thủ tục, thông báo, bàn giao. Đánh giá khách quan dựa trên 4 trụ cột:</p>
              <div className="pillarGrid">
                <div className="pillarCard"><span className="pillarNum">1</span><p className="pillarTitle">Phù hợp văn hoá</p><p className="pillarDesc">Hành vi & thái độ, khả năng làm việc nhóm, giao tiếp và ứng xử trong doanh nghiệp.</p></div>
                <div className="pillarCard"><span className="pillarNum">2</span><p className="pillarTitle">Khả năng chuyên môn</p><p className="pillarDesc">Đánh giá bằng kết quả tạo ra và khả năng hoàn thành mục tiêu — đạt số lượng và chất lượng.</p></div>
                <div className="pillarCard"><span className="pillarNum">3</span><p className="pillarTitle">Khả năng học hỏi</p><p className="pillarDesc">Nghiên cứu, tìm hiểu, tiếp thu và áp dụng kiến thức mới vào công việc và cách sống.</p></div>
                <div className="pillarCard"><span className="pillarNum">4</span><p className="pillarTitle">Khả năng chịu áp lực</p><p className="pillarDesc">Làm việc trong điều kiện thiếu, cường độ cao mà không mất kiểm soát.</p></div>
              </div>
              <p className="pillarNote"><b>Riêng Team Leader trở lên</b> — bổ sung tiêu chí Khả năng lãnh đạo và dẫn dắt.</p>
            </div>
          </section>

          {/* 7 · GIAI ĐOẠN 4 — B (decision) */}
          <section className="slide slideSky">
            <div className="slideInner">
              <Rail activePhase={4} />
              <p className="eyebrow">Giai đoạn 4 · Đầu ra & Kết luận</p>
              <h2 className="title">Thang điểm quyết định</h2>
              <div className="scale">
                <div className="scaleBar" role="img" aria-label="Thang điểm đánh giá từ 0 đến 100%">
                  <span className="scaleSeg scaleSeg1" /><span className="scaleSeg scaleSeg2" /><span className="scaleSeg scaleSeg3" /><span className="scaleSeg scaleSeg4" />
                </div>
                <div className="scaleRows">
                  <div className="scaleRow scaleRow1"><span className="scaleValue">≤60%</span><span className="scaleDesc"><b>Không vượt qua thử việc.</b></span></div>
                  <div className="scaleRow scaleRow2"><span className="scaleValue">60–75%</span><span className="scaleDesc">Offer <b>gia hạn thêm 2 tháng thử việc</b> để hoàn thiện khung năng lực.</span></div>
                  <div className="scaleRow scaleRow3"><span className="scaleValue">75–85%</span><span className="scaleDesc"><b>Lên chính thức</b> — 2 tháng chứng minh chuẩn năng lực, nhận 85% lương offer.</span></div>
                  <div className="scaleRow scaleRow4"><span className="scaleValue">≥85%</span><span className="scaleDesc"><b>Lên chính thức</b> — nhận full lương offer ngay khi bắt đầu thử việc.</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* 8 · TỔNG KẾT */}
          <section className="slide slideMint">
            <div className="slideInner">
              <Sprig variant="bl" />
              <Image src="/brand/logo-navy.png" alt="Caumos" width={220} height={40} className="logoMark" />
              <p className="eyebrow" style={{ marginTop: "clamp(20px,3.6vh,30px)" }}>Tổng kết</p>
              <h2 style={{ fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: "var(--fs-h1)", fontWeight: 700, color: "var(--navy-ink)", marginTop: ".28em", lineHeight: 1.08, maxWidth: "15ch" }}>
                Một chuẩn đánh giá — 60 ngày minh bạch
              </h2>
              <p className="closingLine">Đúng người, đúng chỗ, đúng thời điểm — quyết định dựa trên bằng chứng, không dựa trên cảm tính.</p>
              <HeroTimeline withName={false} />
              <div className="closingFooter">
                <span>Phòng Marketing · Caumos</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <nav className="deckNav">
        <button className="navBtn" aria-label="Slide trước" disabled={index === 0} onClick={() => go(index - 1)}>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4l-6 6 6 6" /></svg>
        </button>
        <div className="dots">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button key={i} className={`dot ${i === index ? "dotActive" : ""}`} aria-label={`Đến slide ${i + 1}`} onClick={() => go(i)} />
          ))}
        </div>
        <button className="navBtn" aria-label="Slide sau" disabled={index === TOTAL - 1} onClick={() => go(index + 1)}>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4l6 6-6 6" /></svg>
        </button>
      </nav>
    </div>
  );
}
