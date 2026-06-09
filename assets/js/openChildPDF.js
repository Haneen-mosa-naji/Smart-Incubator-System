function openChildPDF(childId) {
  const archivedItem = archivedItems.find(
    item =>
      item.archive_type === "child" &&
      item.data.child_id === childId
  );

  const child =
    children.find(c => c.child_id === childId) ||
    archivedItem?.data;

  if (!child) return;

  const ico = {
    hospital: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C5E0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    clipboard: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
    baby: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>`,
    heart: `<svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    activity: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
  };

  const secHead = (iconKey, label, accentColor = "#0F4C5C") => `
    <div style="
      display:table;width:100%;
      margin-bottom:10px;
      padding-bottom:7px;
      border-bottom:2px solid ${accentColor};
    ">
      <div style="display:table-cell;vertical-align:middle;width:28px;">
        <div style="
          width:22px;height:22px;border-radius:5px;
          background:${accentColor};
          display:flex;align-items:center;justify-content:center;
          line-height:0;
        ">${ico[iconKey]}</div>
      </div>
      <div style="display:table-cell;vertical-align:middle;">
        <span style="
          font-size:11px;font-weight:800;
          color:${accentColor};
          text-transform:uppercase;
          letter-spacing:1px;
        ">${label}</span>
      </div>
    </div>`;

  const row = (label, value, last = false) => `
    <tr>
      <td style="
        padding:7px 12px;
        font-size:10.5px;
        font-weight:600;
        color:#64748B;
        text-transform:uppercase;
        letter-spacing:0.5px;
        width:40%;
        ${last ? "" : "border-bottom:1px solid #F1F5F9;"}
      ">${label}</td>

      <td style="
        padding:7px 12px;
        font-size:12px;
        color:#1A202C;
        font-weight:500;
        ${last ? "" : "border-bottom:1px solid #F1F5F9;"}
      ">${value || `<span style="color:#94A3B8;">—</span>`}</td>
    </tr>`;

  const statusBadge = (status) => {
    const s = (status || "").toLowerCase();

    let bg = "#E1F5EE";
    let color = "#085041";
    let border = "#9AE6B4";

    if (s.includes("observation")) {
      bg = "#FAEEDA";
      color = "#633806";
      border = "#F6AD55";
    }

    if (s.includes("critical")) {
      bg = "#FFF5F5";
      color = "#9B2C2C";
      border = "#FC8181";
    }

    return `
      <span style="
        display:inline-block;
        background:${bg};
        color:${color};
        border:1px solid ${border};
        border-radius:20px;
        padding:2px 11px;
        font-size:10px;
        font-weight:700;
      ">${status}</span>`;
  };

  const now = new Date();
  const printedAt =
    now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }) +
    " – " +
    now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });

  const childElement = document.createElement("div");

  childElement.innerHTML = `
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

  <div style="
    background:linear-gradient(135deg,#0F4C5C 0%,#0a3544 100%);
    padding:18px 24px;
    position:relative;
    overflow:hidden;
  ">
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td>
          <table>
            <tr>
              <td style="padding-right:12px;">
                <div style="
                  width:40px;height:40px;border-radius:9px;
                  background:rgba(34,197,224,0.22);
                  border:1.5px solid rgba(34,197,224,0.45);
                  text-align:center;
                  line-height:40px;
                ">${ico.hospital}</div>
              </td>

              <td>
                <div style="font-size:16px;font-weight:800;color:#fff;">
                  Smart Incubator System
                </div>
                <div style="
                  font-size:9.5px;
                  color:rgba(255,255,255,0.5);
                  margin-top:3px;
                  letter-spacing:0.8px;
                  text-transform:uppercase;
                ">
                  Child Medical Profile &nbsp;&middot;&nbsp; Doctor Panel
                </div>
              </td>
            </tr>
          </table>
        </td>

        <td style="text-align:right;">
          <div style="
            display:inline-block;
            background:rgba(255,255,255,0.10);
            border:1px solid rgba(255,255,255,0.22);
            border-radius:8px;
            padding:7px 16px;
          ">
            <div style="
              font-size:8.5px;
              color:rgba(255,255,255,0.45);
              text-transform:uppercase;
              letter-spacing:1.2px;
            ">Child ID</div>

            <div style="
              font-size:13px;
              font-weight:800;
              color:#22C5E0;
              margin-top:2px;
            ">${child.child_id}</div>
          </div>
        </td>
      </tr>
    </table>
  </div>

  <div style="height:3px;background:linear-gradient(90deg,#22C5E0 0%,#0F4C5C 50%,#22C5E0 100%);"></div>

  <div style="padding:18px 24px 4px;">

    <div style="margin-bottom:16px;">
      ${secHead("clipboard", "Basic Information")}
      <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;">
        <tbody>
          ${row("Child Name", child.child_name)}
          ${row("Gender", child.gender)}
          ${row("Blood Type", child.blood_type)}
          ${row("Status", statusBadge(child.child_status), true)}
        </tbody>
      </table>
    </div>

    <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
      <tr>
        <td style="width:49%;vertical-align:top;padding-right:7px;">
          ${secHead("baby", "Birth Details")}
          <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;">
            <tbody>
              ${row("Birth Date", child.birth_date)}
              ${row("Birth Week", child.birth_week)}
              ${row("Birth Weight", `${child.birth_weight} g`, true)}
            </tbody>
          </table>
        </td>

        <td style="width:49%;vertical-align:top;padding-left:7px;">
          ${secHead("heart", "Admission Info")}
          <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;">
            <tbody>
              ${row("Admission Date", child.admission_date)}
              ${row("Incubator ID", child.incubator_id)}
              ${row("Child Status", statusBadge(child.child_status), true)}
            </tbody>
          </table>
        </td>
      </tr>
    </table>

    <div style="margin-bottom:16px;">
      ${secHead("baby", "Parents Information")}
      <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;">
        <tbody>
          ${row("Father Name", child.father_name)}
          ${row("Mother Name", child.mother_name, true)}
        </tbody>
      </table>
    </div>

    <div style="margin-bottom:16px;">
      ${secHead("activity", "Medical Condition")}
      <div style="
        background:#F8FAFC;
        border:1px solid #E2E8F0;
        border-left:4px solid #0F4C5C;
        border-radius:0 8px 8px 0;
        padding:11px 14px;
        font-size:12px;
        line-height:1.85;
        color:#2D3748;
      ">
        ${child.medical_condition}
      </div>
    </div>

  </div>

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
        <td>
          <span style="font-size:9px;color:#94A3B8;">
            Smart Incubator System &nbsp;&middot;&nbsp; Doctor Panel
          </span>
        </td>

        <td style="text-align:center;">
          <span style="font-size:9px;color:#94A3B8;">
            Printed: ${printedAt}
          </span>
        </td>

        <td style="text-align:right;">
          <span style="
            background:#0F4C5C;
            color:#fff;
            font-size:8.5px;
            font-weight:700;
            padding:3px 11px;
            border-radius:20px;
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
  filename: `${child.child_name}.pdf`,
  image: { type: "jpeg", quality: 0.98 },
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
};
html2pdf()
  .set(options)
  .from(childElement)
  .toPdf()
  .get("pdf")
  .then(pdf => {

    pdf.setProperties({
      title: child.child_name
    });

  })
  .outputPdf("blob")
  .then(function(pdfBlob) {

    const pdfUrl =
      URL.createObjectURL(pdfBlob);

    window.open(pdfUrl, "_blank");

  });

}


  
