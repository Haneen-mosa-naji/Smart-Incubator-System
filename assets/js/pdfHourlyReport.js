function openHourlyPDF(id) {
  const r = hourlyReports.find(x => x.hourly_report_id === id) ||
            archivedItems.find(i => i.data.hourly_report_id === id)?.data;
  if (!r) return;

  const ico = {
    hospital:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C5E0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    clipboard:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
    baby:       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>`,
    stethoscope:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4"/><path d="M8 15a4 4 0 1 0 8 0"/><path d="M6 2v6a6 6 0 0 0 12 0V2"/></svg>`,
    heart:      `<svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    bulb:       `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,
    activity:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  };

  const secHead = (iconKey, label, accent = "#0F4C5C") => `
    <div style="display:table;width:100%;margin-bottom:10px;padding-bottom:7px;border-bottom:2px solid ${accent};">
      <div style="display:table-cell;vertical-align:middle;width:28px;">
        <div style="width:22px;height:22px;border-radius:5px;background:${accent};display:flex;align-items:center;justify-content:center;line-height:0;">${ico[iconKey]}</div>
      </div>
      <div style="display:table-cell;vertical-align:middle;">
        <span style="font-size:11px;font-weight:800;color:${accent};text-transform:uppercase;letter-spacing:1px;">${label}</span>
      </div>
    </div>`;

  const vColor = (val, low, okLow, okHigh, high) => {
    if (val < low || val > high) return { bg:"#FFF5F5", color:"#9B2C2C", border:"#FC8181" };
    if (val < okLow || val > okHigh) return { bg:"#FAEEDA", color:"#633806", border:"#F6AD55" };
    return { bg:"#E1F5EE", color:"#085041", border:"#9AE6B4" };
  };

  const numBadge = (val, low, okLow, okHigh, high, unit) => {
    const c = vColor(val, low, okLow, okHigh, high);
    return `<span style="display:inline-block;background:${c.bg};color:${c.color};border:1px solid ${c.border};border-radius:20px;padding:2px 11px;font-size:10px;font-weight:700;">${val} ${unit}</span>`;
  };

  const row = (label, valueHtml, last = false) => `
    <tr>
      <td style="padding:7px 12px;font-size:10.5px;font-weight:600;color:#64748B;text-transform:uppercase;letter-spacing:.5px;width:40%;vertical-align:middle;${last?"":"border-bottom:1px solid #F1F5F9;"}">${label}</td>
      <td style="padding:7px 12px;font-size:12px;color:#1A202C;font-weight:500;vertical-align:middle;${last?"":"border-bottom:1px solid #F1F5F9;"}">${valueHtml}</td>
    </tr>`;

  const tbl = (rows) =>
    `<table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;"><tbody>${rows}</tbody></table>`;

  const now = new Date();
  const printedAt = now.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})
    + "  \u2013  " + now.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});

  const el = document.createElement("div");
  el.innerHTML = `
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

  <!-- HEADER -->
  <div style="background:linear-gradient(135deg,#0F4C5C 0%,#0a3544 100%);padding:18px 24px;position:relative;overflow:hidden;">
    <div style="position:absolute;top:-40px;right:-40px;width:130px;height:130px;border-radius:50%;background:rgba(34,197,224,0.10);"></div>
    <div style="position:absolute;bottom:-25px;right:80px;width:70px;height:70px;border-radius:50%;background:rgba(34,197,224,0.07);"></div>
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="vertical-align:middle;padding:0;">
          <table style="border-collapse:collapse;">
            <tr>
              <td style="vertical-align:middle;padding-right:12px;">
                <div style="width:40px;height:40px;border-radius:9px;background:rgba(34,197,224,0.22);border:1.5px solid rgba(34,197,224,0.45);text-align:center;line-height:40px;">${ico.hospital}</div>
              </td>
              <td style="vertical-align:middle;padding:0;">
                <div style="font-size:16px;font-weight:800;color:#fff;letter-spacing:-0.3px;line-height:1.2;">Smart Incubator System</div>
                <div style="font-size:9.5px;color:rgba(255,255,255,0.5);margin-top:3px;letter-spacing:0.8px;text-transform:uppercase;">Hourly Report &nbsp;&middot;&nbsp; Doctor Panel</div>
              </td>
            </tr>
          </table>
        </td>
        <td style="vertical-align:middle;padding:0;text-align:right;">
          <div style="display:inline-block;background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.22);border-radius:8px;padding:7px 16px;">
            <div style="font-size:8.5px;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:1.2px;">Report ID</div>
            <div style="font-size:15px;font-weight:800;color:#22C5E0;letter-spacing:0.5px;margin-top:2px;">${r.hourly_report_id}</div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div style="height:3px;background:linear-gradient(90deg,#22C5E0 0%,#0F4C5C 50%,#22C5E0 100%);"></div>

  <!-- BODY -->
  <div style="padding:18px 24px 4px;">

    <!-- Report Info -->
    <div style="margin-bottom:16px;">
      ${secHead("clipboard","Report Information")}
      ${tbl(
        row("Report Date", r.date) +
        row("Report Time", r.time, true)
      )}
    </div>

    <!-- Child + Staff 2-col -->
    <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
      <tr>
        <td style="width:49%;vertical-align:top;padding-right:7px;">
          ${secHead("baby","Child Info")}
          ${tbl(row("Name", r.child_name) + row("Child ID", r.child_id, true))}
        </td>
        <td style="width:49%;vertical-align:top;padding-left:7px;">
          ${secHead("stethoscope","Medical Staff")}
          ${tbl(row("Nurse Name", r.nurse_name) + row("Nurse ID", r.nurse_id, true))}
        </td>
      </tr>
    </table>

    <!-- Vital Readings -->
    <div style="margin-bottom:16px;">
      ${secHead("heart","Vital Readings")}
      ${tbl(
        row("Temperature",  numBadge(r.temperature,  35,   36.5, 37.5, 39,  "°C")) +
        row("Humidity",     numBadge(r.humidity,      40,   55,   70,   85,  "%")) +
        row("Oxygen Level", numBadge(r.oxygen_level,  88,   95,   100,  100, "%")) +
        row("Heart Rate",   numBadge(r.heart_rate,    100,  120,  160,  180, "bpm")) +
        row("Weight",       `<span style="font-size:12px;font-weight:600;color:#1A202C;">${r.weight} g</span>`, true)
      )}
    </div>

    <!-- Actions Taken -->
    ${r.actions_taken ? `
    <div style="margin-bottom:14px;">
      ${secHead("activity","Actions Taken")}
      <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-left:4px solid #0F4C5C;border-radius:0 8px 8px 0;padding:11px 14px;font-size:12px;line-height:1.85;color:#2D3748;">${r.actions_taken}</div>
    </div>` : ""}

    <!-- Recommendations -->
    ${r.recommendations ? `
    <div style="margin-bottom:14px;">
      ${secHead("bulb","Recommendations","#22C5E0")}
      <div style="background:#F0FDFE;border:1px solid #A5F3FC;border-left:4px solid #22C5E0;border-radius:0 8px 8px 0;padding:11px 14px;font-size:12px;line-height:1.85;color:#164E63;">${r.recommendations}</div>
    </div>` : ""}

  </div>

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

html2pdf()
  .set({
    margin: 0,
    filename: `${r.child_name}.pdf`,
    image: {
      type: "jpeg",
      quality: 0.98
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      letterRendering: true
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  })
  .from(el)
  .toPdf()
  .get("pdf")
  .then(pdf => {
    pdf.setProperties({
      title: r.child_name
    });
  })
  .outputPdf("blob")
  .then(blob => {
    window.open(URL.createObjectURL(blob), "_blank");
  });
}
