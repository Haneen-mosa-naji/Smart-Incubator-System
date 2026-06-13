
// ================= HOURLY REPORTS DATA =================

let hourlyReports = [
  {
    hourly_report_id: "6b2f91d850013a92667d30001",
    child_id: "6a1f1d850013a92667d21890",
    child_name: "Omar Ahmad Khaled Saleh",
    nurse_id: "6a1f826264e43bd627f5bce6",
    nurse_name: "Sara Khaled Mahmoud Ali",
    temperature: 36.8,
    humidity: 55,
    oxygen_level: 98,
    heart_rate: 132,
    weight: 2500,
    status: "normal",
    actions_taken: "Routine monitoring completed.",
    recommendations: "Continue normal observation.",
    date: "2026-06-01",
    time: "08:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30002",
    child_id: "6a1f1d850013a92667d21891",
    child_name: "Lina Hassan Ahmad Naser",
    nurse_id: "6a1f826264e43bd627f5bce7",
    nurse_name: "Mona Ahmad Saleh Naser",
    temperature: 38.2,
    humidity: 60,
    oxygen_level: 91,
    heart_rate: 155,
    weight: 2300,
    status: "warning",
    actions_taken: "Temperature and oxygen level rechecked.",
    recommendations: "Monitor every 30 minutes.",
    date: "2026-06-01",
    time: "09:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30003",
    child_id: "6a1f1d850013a92667d21892",
    child_name: "Sara Ali Mahmoud Hassan",
    nurse_id: "6a1f826264e43bd627f5bce8",
    nurse_name: "Rana Saleh Khaled Ahmad",
    temperature: 36.6,
    humidity: 53,
    oxygen_level: 97,
    heart_rate: 128,
    weight: 2600,
    status: "normal",
    actions_taken: "Vital signs recorded.",
    recommendations: "Continue routine care.",
    date: "2026-06-01",
    time: "10:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30004",
    child_id: "6a1f1d850013a92667d21893",
    child_name: "Yousef Khaled Samer Ali",
    nurse_id: "6a1f826264e43bd627f5bce9",
    nurse_name: "Dina Samer Mahmoud Hassan",
    temperature: 35.9,
    humidity: 57,
    oxygen_level: 96,
    heart_rate: 125,
    weight: 2450,
    status: "warning",
    actions_taken: "Extra thermal support provided.",
    recommendations: "Recheck temperature after one hour.",
    date: "2026-06-02",
    time: "08:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30005",
    child_id: "6a1f1d850013a92667d21894",
    child_name: "Adam Ibrahim Mahmoud Odeh",
    nurse_id: "6a1f826264e43bd627f5bcea",
    nurse_name: "Alaa Naser Mahmoud Khaled",
    temperature: 39.0,
    humidity: 65,
    oxygen_level: 86,
    heart_rate: 168,
    weight: 2200,
    status: "critical",
    actions_taken: "Emergency alert sent to doctor.",
    recommendations: "Immediate medical review required.",
    date: "2026-06-02",
    time: "09:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30006",
    child_id: "6a1f1d850013a92667d21895",
    child_name: "Mariam Odeh Ahmad Saleh",
    nurse_id: "6a1f826264e43bd627f5bceb",
    nurse_name: "Ruba Khaled Samer Odeh",
    temperature: 36.7,
    humidity: 54,
    oxygen_level: 99,
    heart_rate: 130,
    weight: 2550,
    status: "normal",
    actions_taken: "Baby position adjusted.",
    recommendations: "Continue monitoring.",
    date: "2026-06-03",
    time: "08:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30007",
    child_id: "6a1f1d850013a92667d21896",
    child_name: "Noor Ahmad Ibrahim Hasan",
    nurse_id: "6a1f826264e43bd627f5bcec",
    nurse_name: "Aya Ahmad Khaled Hasan",
    temperature: 37.5,
    humidity: 58,
    oxygen_level: 94,
    heart_rate: 145,
    weight: 2400,
    status: "warning",
    actions_taken: "Oxygen level checked again.",
    recommendations: "Keep close observation.",
    date: "2026-06-03",
    time: "09:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30008",
    child_id: "6a1f1d850013a92667d21897",
    child_name: "Kareem Mahmoud Ahmad Naser",
    nurse_id: "6a1f826264e43bd627f5bced",
    nurse_name: "Maysa Naser Mahmoud Ali",
    temperature: 36.9,
    humidity: 52,
    oxygen_level: 98,
    heart_rate: 134,
    weight: 2700,
    status: "normal",
    actions_taken: "Hourly check completed.",
    recommendations: "No additional action needed.",
    date: "2026-06-04",
    time: "08:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30009",
    child_id: "6a1f1d850013a92667d21898",
    child_name: "Jana Ali Mahmoud Saleh",
    nurse_id: "6a1f826264e43bd627f5bcee",
    nurse_name: "Lama Ibrahim Saleh Mahmoud",
    temperature: 38.7,
    humidity: 63,
    oxygen_level: 89,
    heart_rate: 160,
    weight: 2250,
    status: "critical",
    actions_taken: "Doctor notified immediately.",
    recommendations: "Prepare oxygen support.",
    date: "2026-06-04",
    time: "09:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30010",
    child_id: "6a1f1d850013a92667d21899",
    child_name: "Tareq Samer Ahmad Odeh",
    nurse_id: "6a1f826264e43bd627f5bcef",
    nurse_name: "Nour Ali Samer Khaled",
    temperature: 36.5,
    humidity: 50,
    oxygen_level: 97,
    heart_rate: 129,
    weight: 2650,
    status: "normal",
    actions_taken: "Vitals recorded successfully.",
    recommendations: "Continue standard care.",
    date: "2026-06-05",
    time: "08:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30011",
    child_id: "6a1f1d850013a92667d21900",
    child_name: "Farah Khaled Ahmad Hasan",
    nurse_id: "6a1f826264e43bd627f5bcf0",
    nurse_name: "Rahaf Mahmoud Ali Hasan",
    temperature: 36.4,
    humidity: 51,
    oxygen_level: 98,
    heart_rate: 127,
    weight: 2520,
    status: "normal",
    actions_taken: "Routine care provided.",
    recommendations: "Continue observation.",
    date: "2026-06-05",
    time: "09:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30012",
    child_id: "6a1f1d850013a92667d21901",
    child_name: "Zain Ahmad Mahmoud Naser",
    nurse_id: "6a1f826264e43bd627f5bcf1",
    nurse_name: "Tasneem Khaled Mahmoud Ali",
    temperature: 37.9,
    humidity: 59,
    oxygen_level: 92,
    heart_rate: 150,
    weight: 2380,
    status: "warning",
    actions_taken: "Baby monitored closely.",
    recommendations: "Repeat assessment within 30 minutes.",
    date: "2026-06-06",
    time: "08:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30013",
    child_id: "6a1f1d850013a92667d21902",
    child_name: "Leen Ibrahim Ahmad Saleh",
    nurse_id: "6a1f826264e43bd627f5bcf2",
    nurse_name: "Sondos Mahmoud Ali Hasan",
    temperature: 36.8,
    humidity: 56,
    oxygen_level: 99,
    heart_rate: 133,
    weight: 2480,
    status: "normal",
    actions_taken: "Incubator settings checked.",
    recommendations: "Keep same incubator settings.",
    date: "2026-06-06",
    time: "09:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30014",
    child_id: "6a1f1d850013a92667d21903",
    child_name: "Mohammad Hasan Ahmad Odeh",
    nurse_id: "6a1f826264e43bd627f5bcf3",
    nurse_name: "Raneem Saleh Mahmoud Ali",
    temperature: 39.1,
    humidity: 66,
    oxygen_level: 85,
    heart_rate: 170,
    weight: 2180,
    status: "critical",
    actions_taken: "Critical alert activated.",
    recommendations: "Immediate doctor intervention needed.",
    date: "2026-06-07",
    time: "08:00 AM"
  },
  {
    hourly_report_id: "6b2f91d850013a92667d30015",
    child_id: "6a1f1d850013a92667d21904",
    child_name: "Dana Ahmad Samer Saleh",
    nurse_id: "6a1f826264e43bd627f5bcf4",
    nurse_name: "Abeer Mahmoud Khaled Hasan",
    temperature: 36.7,
    humidity: 55,
    oxygen_level: 98,
    heart_rate: 131,
    weight: 2580,
    status: "normal",
    actions_taken: "Hourly report completed.",
    recommendations: "Continue normal monitoring.",
    date: "2026-06-07",
    time: "09:00 AM"
  }
];


// ================= HOURLY REPORTS RENDER =================

function getHrBadge(status) {
  return `<span class="vital-badge ${status}">${status}</span>`;
}

function renderHourlyReports(reports) {
  const tbody = document.getElementById("hourlyReportsTable");

  if (!tbody) return;

  tbody.innerHTML = "";

  reports.forEach(report => {
    tbody.innerHTML += `
      
<tr>
  <td>${report.hourly_report_id}</td>

  <td>${report.child_name}</td>


  <td>${report.nurse_name}</td>

 

  <td>
    <span class="vital-badge ${report.status}">
      ${report.status}
    </span>
  </td>

  <td>${report.date}</td>

  <td>${report.time}</td>

  <td class="actions-cell">

    <button
      class="act-btn view"
      onclick="showHourlyReportDetails('${report.hourly_report_id}')"
      title="View">
      <i class="fa-solid fa-eye"></i>
    </button>

    <button
      class="act-btn pdf"
      onclick="openHourlyPDF('${report.hourly_report_id}')"
      title="Open PDF">
      <i class="fa-solid fa-file-pdf"></i>
    </button>

    <button
      class="act-btn archive"
      onclick="archiveHourlyReport('${report.hourly_report_id}')"
      title="Archive">
      <i class="fa-solid fa-box-archive"></i>
    </button>

  </td>
</tr>

    `;
  });

  renderHourlyReportsMobileCards(reports);
}


function showHourlyReportDetails(reportId) {
  const report =
    hourlyReports.find(r => r.hourly_report_id === reportId) ||
    archivedItems.find(
      item =>
        item.archive_type === "hourly" &&
        item.data.hourly_report_id === reportId
    )?.data;

  if (!report) return;

  showHourlyReportDetailsByObject(report);
}

// ================= HOURLY MOBILE CARDS =================

function renderHourlyReportsMobileCards(reports) {
  const el = document.getElementById("hourlyReportsMobCards");

  if (!el) return;

  el.innerHTML = reports.map(report => `
    <div class="mob-card">

      <div class="mob-info">
        <div class="mob-name">Report ID : ${report.hourly_report_id}</div>
        <div class="mob-email">Child : ${report.child_name}</div>
        <div class="mob-email">Child ID : ${report.child_id}</div>
        <div class="mob-email">Nurse : ${report.nurse_name}</div>
        <div class="mob-email">Temp : ${report.temperature} °C</div>
        <div class="mob-email">Humidity : ${report.humidity}%</div>
        <div class="mob-email">O₂ : ${report.oxygen_level}%</div>
        <div class="mob-email">Heart Rate : ${report.heart_rate}</div>
        <div class="mob-email">Weight : ${report.weight} g</div>
        <div class="mob-email">Status : ${getHrBadge(report.status)}</div>
        <div class="mob-email">Date : ${report.date}</div>
        <div class="mob-email">Time : ${report.time}</div>
      </div>

      <div class="action-btns">
        <button class="act-btn view"
          onclick="showHourlyReportDetails('${report.hourly_report_id}')">
          <i class="fa-solid fa-eye"></i>
        </button>
 <button class="act-btn pdf"
    onclick="openHourlyPDF('${report.hourly_report_id}')">
    <i class="fa-solid fa-file-pdf"></i>
  </button>
        <button class="act-btn archive"
          onclick="archiveHourlyReport('${report.hourly_report_id}')">
          <i class="fa-solid fa-box-archive"></i>
        </button>
      </div>

    </div>
  `).join("");
}




// ================= HOURLY PAGINATION =================

let hrCurrentPage = 1;
const hrPerPage = 6;
let hrTotalPagesGlobal = 1;

function renderHourlyTable() {
  let filteredReports = [...hourlyReports];

  const searchValue =
    document.getElementById("hrSearchInp")
      ?.value
      .toLowerCase()
      .trim() || "";

  const filterValue =
    document.getElementById("hrFilter")
      ?.value || "all";

  if (searchValue) {
    filteredReports = filteredReports.filter(report =>
      report.hourly_report_id.toLowerCase().includes(searchValue) ||
      report.child_name.toLowerCase().includes(searchValue) ||
      report.child_id.toLowerCase().includes(searchValue) ||
      report.nurse_name.toLowerCase().includes(searchValue) ||
      report.nurse_id.toLowerCase().includes(searchValue)
      ||
      report.report_date.toLowerCase().includes(searchValue) ||
report.report_time.toLowerCase().includes(searchValue)
    );
  }

  if (filterValue !== "all") {
    filteredReports = filteredReports.filter(report =>
      report.status === filterValue
    );
  }

  hrTotalPagesGlobal =
    Math.ceil(filteredReports.length / hrPerPage) || 1;

  if (hrCurrentPage > hrTotalPagesGlobal) {
    hrCurrentPage = hrTotalPagesGlobal;
  }

  const start = (hrCurrentPage - 1) * hrPerPage;
  const end = start + hrPerPage;

  const pageReports = filteredReports.slice(start, end);

  renderHourlyReports(pageReports);

  document.getElementById("hrPgInfo").textContent =
    `Showing ${pageReports.length} of ${filteredReports.length} hourly reports`;

  document.getElementById("hrPages").innerHTML =
    `${hrCurrentPage} / ${hrTotalPagesGlobal}`;
}


// ================= HOURLY PAGINATION BUTTONS =================

document.getElementById("hrPgFirst")?.addEventListener("click", () => {
  hrCurrentPage = 1;
  renderHourlyTable();
});

document.getElementById("hrPgPrev")?.addEventListener("click", () => {
  if (hrCurrentPage > 1) {
    hrCurrentPage--;
    renderHourlyTable();
  }
});

document.getElementById("hrPgNext")?.addEventListener("click", () => {
  if (hrCurrentPage < hrTotalPagesGlobal) {
    hrCurrentPage++;
    renderHourlyTable();
  }
});

document.getElementById("hrPgLast")?.addEventListener("click", () => {
  
  hrCurrentPage = hrTotalPagesGlobal;
  renderHourlyTable();
});

document.getElementById("hrSearchInp")?.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[\u0600-\u06FF]/g, "");

  hrCurrentPage = 1;
  renderHourlyTable();
});



document.getElementById("hrFilter")?.addEventListener("change", () => {
  hrCurrentPage = 1;
  renderHourlyTable();
});

renderHourlyTable();

// ================= HOURLY DETAILS BY OBJECT =================

function showHourlyReportDetailsByObject(report) {
  const body = document.getElementById("reportDetailsBody");
document.getElementById("reportDetailsTitle").textContent =
  "Hourly Report Details";
  body.innerHTML = `
    <div class="report-details-grid">

      <div><span class="label">Hourly Report ID : </span><span class="value">${report.hourly_report_id}</span></div>
      <div><span class="label">Status : </span><span class="value">${getHrBadge(report.status)}</span></div>

      <div><span class="label">Child Name : </span><span class="value">${report.child_name}</span></div>
      <div><span class="label">Child ID : </span><span class="value">${report.child_id}</span></div>

      <div><span class="label">Nurse Name : </span><span class="value">${report.nurse_name}</span></div>
      <div><span class="label">Nurse ID : </span><span class="value">${report.nurse_id}</span></div>

      <div><span class="label">Temperature : </span><span class="value">${report.temperature} °C</span></div>
      <div><span class="label">Humidity : </span><span class="value">${report.humidity}%</span></div>

      <div><span class="label">Oxygen Level : </span><span class="value">${report.oxygen_level}%</span></div>
      <div><span class="label">Heart Rate : </span><span class="value">${report.heart_rate}</span></div>

      <div><span class="label">Weight : </span><span class="value">${report.weight} g</span></div>
      <div><span class="label">Date : </span><span class="value">${report.date}</span></div>

      <div><span class="label">Time : </span><span class="value">${report.time}</span></div>

      <div class="full-row report-section">
        <h6>Actions Taken</h6>
        <p>${report.actions_taken}</p>
      </div>

      <div class="full-row report-section">
        <h6>Recommendations</h6>
        <p>${report.recommendations}</p>
      </div>

    </div>
  `;

  new bootstrap.Modal(
    document.getElementById("reportDetailsModal")
  ).show();
}


