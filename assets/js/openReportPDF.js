function openReportPDF(reportId) {
  const archivedItem = archivedItems.find(
    item => item.data.report_id === reportId
  );
  const report =
    fullReports.find(r => r.report_id === reportId) ||
    archivedItem?.data;
  if (!report) return;

  /* ── SVG icons (no emoji, renders perfectly in html2pdf) ── */
  const ico = {
    hospital: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C5E0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    clipboard: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
    baby:      `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>`,
    stethoscope:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4"/><path d="M8 15a4 4 0 1 0 8 0"/><path d="M6 2v6a6 6 0 0 0 12 0V2"/></svg>`,
    heart:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    microscope:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14l-1-7 7 1"/><path d="M9 14l4-2"/></svg>`,
    bulb:      `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,
    activity:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  };

  /* ── Section header helper ── */
  const secHead = (iconKey, label, accentColor = "#0F4C5C") => `
    <div style="
      display:table; width:100%;
      margin-bottom:10px;
      padding-bottom:7px;
      border-bottom:2px solid ${accentColor};
    ">
      <div style="display:table-cell; vertical-align:middle; width:28px;">
        <div style="
          width:22px; height:22px; border-radius:5px;
          background:${accentColor};
          display:flex; align-items:center; justify-content:center;
          line-height:0;
        ">${ico[iconKey]}</div>
      </div>
      <div style="display:table-cell; vertical-align:middle;">
        <span style="
          font-size:11px; font-weight:800;
          color:${accentColor};
          text-transform:uppercase;
          letter-spacing:1px;
        ">${label}</span>
      </div>
    </div>`;

  /* ── Badge colors ── */
  const badgeColor = (val) => {
    if (!val) return { bg:"#F1F5F9", color:"#64748B", border:"#CBD5E0" };
    const v = val.toLowerCase();
    if (["normal","stable"].some(k => v.includes(k)))
      return { bg:"#E1F5EE", color:"#085041", border:"#9AE6B4" };
    if (["high","low","tachy","brady","rapid","slow","under","over"].some(k => v.includes(k)))
      return { bg:"#FAEEDA", color:"#633806", border:"#F6AD55" };
    if (v.includes("critical"))
      return { bg:"#FFF5F5", color:"#9B2C2C", border:"#FC8181" };
    return { bg:"#EFF6FF", color:"#1E40AF", border:"#BFDBFE" };
  };

  const badge = (val) => {
    if (!val) return `<span style="color:#94A3B8;">—</span>`;
    const c = badgeColor(val);
    return `<span style="
      display:inline-block;
      background:${c.bg}; color:${c.color};
      border:1px solid ${c.border};
      border-radius:20px;
      padding:2px 11px;
      font-size:10px; font-weight:700;
      letter-spacing:0.3px;
    ">${val}</span>`;
  };

  /* ── Table row helpers ── */
  const row = (label, value, last = false) => `
    <tr>
      <td style="
        padding:7px 12px;
        font-size:10.5px; font-weight:600;
        color:#64748B; text-transform:uppercase; letter-spacing:0.5px;
        width:40%; vertical-align:middle;
        ${last ? "" : "border-bottom:1px solid #F1F5F9;"}
      ">${label}</td>
      <td style="
        padding:7px 12px;
        font-size:12px; color:#1A202C; font-weight:500;
        vertical-align:middle;
        ${last ? "" : "border-bottom:1px solid #F1F5F9;"}
      ">${value || `<span style="color:#94A3B8;">—</span>`}</td>
    </tr>`;

  const vitalRow = (label, value, last = false) => `
    <tr>
      <td style="
        padding:7px 12px;
        font-size:10.5px; font-weight:600;
        color:#64748B; text-transform:uppercase; letter-spacing:0.5px;
        width:40%; vertical-align:middle;
        ${last ? "" : "border-bottom:1px solid #F1F5F9;"}
      ">${label}</td>
      <td style="
        padding:7px 12px; vertical-align:middle;
        ${last ? "" : "border-bottom:1px solid #F1F5F9;"}
      ">${badge(value)}</td>
    </tr>`;

  /* ── Text section (diagnosis / recommendations / actions) ── */
  const textSection = (iconKey, label, text, borderColor, bgColor, textColor) =>
    text ? `
    <div style="margin-bottom:16px;">
      ${secHead(iconKey, label, borderColor)}
      <div style="
        background:${bgColor};
        border:1px solid ${borderColor === "#0F4C5C" ? "#E2E8F0" : "#A5F3FC"};
        border-left:4px solid ${borderColor};
        border-radius:0 8px 8px 0;
        padding:11px 14px;
        font-size:12px; line-height:1.85; color:${textColor};
      ">${text}</div>
    </div>` : "";

  /* ── Timestamp ── */
  const now = new Date();
  const printedAt = now.toLocaleDateString("en-US", {
    year:"numeric", month:"long", day:"numeric"
  }) + "  \u2013  " + now.toLocaleTimeString("en-US", { hour:"2-digit", minute:"2-digit" });

  /* ── Vitals rows (conditional) ── */
  const vitalsRows = [
    ["Temperature",  report.temperature_status],
    ["Oxygen Level", report.oxygen_status],
    ["Heart Rate",   report.heart_status],
    ...(report.respiration_status ? [["Respiration", report.respiration_status]] : []),
    ...(report.weight_status      ? [["Weight",      report.weight_status]]      : []),
  ];

  /* ══════════════ HTML TEMPLATE ══════════════ */
  const reportElement = document.createElement("div");
  reportElement.innerHTML = `
<div style="
  width:210mm;
  height:296mm;
  margin:0;
  overflow:hidden;
  position:relative;
  box-sizing:border-box;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color:#1A202C;
  background:#fff;
  padding:0;
">

  <!-- ═══ HEADER ═══ -->
  <div style="
    background:linear-gradient(135deg,#0F4C5C 0%,#0a3544 100%);
    padding:18px 24px;
    position:relative; overflow:hidden;
  ">
    <!-- bg circles -->
    <div style="position:absolute;top:-40px;right:-40px;width:130px;height:130px;border-radius:50%;background:rgba(34,197,224,0.10);"></div>
    <div style="position:absolute;bottom:-25px;right:80px;width:70px;height:70px;border-radius:50%;background:rgba(34,197,224,0.07);"></div>

    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="vertical-align:middle; padding:0;">
          <table style="border-collapse:collapse;">
            <tr>
              <td style="vertical-align:middle; padding-right:12px;">
                <div style="
                  width:40px; height:40px; border-radius:9px;
                  background:rgba(34,197,224,0.22);
                  border:1.5px solid rgba(34,197,224,0.45);
                  text-align:center; line-height:40px;
                ">${ico.hospital}</div>
              </td>
              <td style="vertical-align:middle; padding:0;">
                <div style="font-size:16px;font-weight:800;color:#fff;letter-spacing:-0.3px;line-height:1.2;">
                  Smart Incubator System
                </div>
                <div style="font-size:9.5px;color:rgba(255,255,255,0.5);margin-top:3px;letter-spacing:0.8px;text-transform:uppercase;">
                  Full Medical Report &nbsp;&middot;&nbsp; Doctor Panel
                </div>
              </td>
            </tr>
          </table>
        </td>
        <td style="vertical-align:middle; padding:0; text-align:right;">
          <div style="
            display:inline-block;
            background:rgba(255,255,255,0.10);
            border:1px solid rgba(255,255,255,0.22);
            border-radius:8px;
            padding:7px 16px;
          ">
            <div style="font-size:8.5px;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:1.2px;">Report ID</div>
            <div style="font-size:15px;font-weight:800;color:#22C5E0;letter-spacing:0.5px;margin-top:2px;">${report.report_id}</div>
          </div>
        </td>
      </tr>
    </table>
  </div>

  <!-- accent stripe -->
  <div style="height:3px;background:linear-gradient(90deg,#22C5E0 0%,#0F4C5C 50%,#22C5E0 100%);"></div>

  <!-- ═══ BODY ═══ -->
  <div style="padding:18px 24px 4px;">

    <!-- Report Info -->
    <div style="margin-bottom:16px;">
      ${secHead("clipboard","Report Information")}
      <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;">
        <tbody>
          ${row("Report Type", report.report_type)}
          ${row("Report Date", report.report_date)}
          ${row("Report Time", report.report_time)}
          <!--  ${row("Next Check",  report.next_check_time)} -->
           <!-- ${row("Interval",    report.report_interval, true)} -->
        </tbody>
      </table>
    </div>

    <!-- Child + Staff 2-col (table-based for PDF safety) -->
    <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
      <tr>
        <td style="width:49%;vertical-align:top;padding-right:7px;">
          ${secHead("baby","Child Info")}
          <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;">
            <tbody>
              ${row("Name",     report.child_name)}
              ${row("Child ID", report.child_id, true)}
            </tbody>
          </table>
        </td>
        <td style="width:49%;vertical-align:top;padding-left:7px;">
          ${secHead("stethoscope","Medical Staff")}
          <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;">
            <tbody>
              ${row("Nurse Name", report.nurse_name)}
              ${row("Nurse ID",   report.nurse_id, true)}
            </tbody>
          </table>
        </td>
      </tr>
    </table>

    <!-- Vital Signs -->
    <div style="margin-bottom:16px;">
      ${secHead("heart","Vital Signs Status")}
      <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;">
        <tbody>
          ${vitalsRows.map((v, i) => vitalRow(v[0], v[1], i === vitalsRows.length - 1)).join("")}
        </tbody>
      </table>
    </div>

    <!-- Diagnosis -->
    ${textSection("microscope","Diagnosis",     report.diagnosis,     "#0F4C5C","#F8FAFC","#2D3748")}

    <!-- Recommendations -->
    ${textSection("bulb","Recommendations",     report.recommendations,"#22C5E0","#F0FDFE","#164E63")}

    <!-- Actions Taken -->
    ${textSection("activity","Actions Taken",   report.actions_taken,  "#0F4C5C","#F8FAFC","#2D3748")}

  </div><!-- /body -->

   <!-- ═══ FOOTER ═══ -->
  <div style="
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    background:#F8FAFC;
    border-top:1px solid #E2E8F0;
    padding:9px 24px;
  ">
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="vertical-align:middle;padding:0;">
          <span style="font-size:9px;color:#94A3B8;letter-spacing:0.3px;">
            Smart Incubator System &nbsp;&middot;&nbsp; Doctor Panel
          </span>
        </td>
        <td style="vertical-align:middle;text-align:center;padding:0;">
          <span style="font-size:9px;color:#94A3B8;">Printed: ${printedAt}</span>
        </td>
        <td style="vertical-align:middle;text-align:right;padding:0;">
          <span style="
            background:#0F4C5C;color:#fff;
            font-size:8.5px;font-weight:700;
            padding:3px 11px;border-radius:20px;
            letter-spacing:0.8px;
            display:inline-block;
          ">CONFIDENTIAL</span>
        </td>
      </tr>
    </table>
  </div>

</div>`;

  const options = {
    margin: 0,
    filename: `${report.child_name}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      letterRendering: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

html2pdf()
  .set(options)
  .from(reportElement)
  .toPdf()
  .get("pdf")
  .then(pdf => {
    pdf.setProperties({
      title: report.child_name
    });
  })
  .outputPdf("blob")
  .then(function(pdfBlob) {
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  });
}
