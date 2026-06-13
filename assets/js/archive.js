let currentArchiveType = "full";
let archiveCurrentPage = 1;
const archivePerPage = 6;

function openArchive(type) {
  currentArchiveType = type;
  archiveCurrentPage = 1;

  showPage("Archive");
  renderArchive();
}

function renderArchive() {
  const title = document.getElementById("archiveTitle");
  const thead = document.getElementById("archiveHead");
  const tbody = document.getElementById("archiveTable");
  const info = document.getElementById("archivePgInfo");
  const pages = document.getElementById("archivePages");
  const table = document.getElementById("archiveMainTable");
    const mobCards =document.getElementById("archiveMobCards");
      if (mobCards) {
    mobCards.innerHTML = "";
  }


  if (!thead || !tbody) return;

  if (table) {
    table.classList.remove("full-table", "hourly-table", "child-table");

    if (currentArchiveType === "full") {
      table.classList.add("full-table");
    }

    if (currentArchiveType === "hourly") {
      table.classList.add("hourly-table");
    }

    if (currentArchiveType === "child") {
      table.classList.add("child-table");
    }
  }

  const items = archivedItems.filter(
    item => item.archive_type === currentArchiveType
  );

  const totalPages = Math.ceil(items.length / archivePerPage) || 1;

  if (archiveCurrentPage > totalPages) {
    archiveCurrentPage = totalPages;
  }

  const start = (archiveCurrentPage - 1) * archivePerPage;
  const end = start + archivePerPage;
  const pageItems = items.slice(start, end);

  tbody.innerHTML = "";

  if (currentArchiveType === "full") {
    title.textContent = "Archived medical Reports";

    thead.innerHTML = `
      <tr>
        <th>Report ID</th>
        <th>Child Name</th>
        <th>Nurse Name</th>
        <th>Report Type</th>
        <th>Date</th>
        <th>Time</th>
        <th>Actions</th>
      </tr>
    `;
             
    pageItems.forEach(item => {
      const r = item.data;

      tbody.innerHTML += `
        <tr>
          <td>${r.report_id}</td>
          <td>${r.child_name}</td>
          <td>${r.nurse_name}</td>
          <td>${r.report_type}</td>
          <td>${r.report_date}</td>
          <td>${r.report_time}</td>
          <td class="actions-cell">
            <button class="act-btn view" onclick="showArchiveFullDetails('${r.report_id}')">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="act-btn pdf" onclick="openReportPDF('${r.report_id}')">
              <i class="fa-solid fa-file-pdf"></i>
            </button>
          </td>
        </tr>
      `;
    });
  }

  if (currentArchiveType === "hourly") {
    title.textContent = "Archived Hourly Reports";

    thead.innerHTML = `
      <tr>
        <th>Report ID</th>
        <th>Child Name</th>
        <th>Nurse Name</th>
        <th>Status</th>
        <th>Date</th>
        <th>Time</th>
        <th>Actions</th>
      </tr>
    `;
 
    pageItems.forEach(item => {
      const r = item.data;

      tbody.innerHTML += `
        <tr>
          <td>${r.hourly_report_id}</td>
          <td>${r.child_name}</td>
          <td>${r.nurse_name}</td>
          <td><span class="vital-badge ${r.status || "normal"}">${r.status || "Archived"}</span></td>
          <td>${r.report_date || r.date}</td>
          <td>${r.report_time || r.time}</td>
          <td class="actions-cell">
            <button class="act-btn view" onclick="showHourlyReportDetails('${r.hourly_report_id}')">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="act-btn pdf" onclick="openHourlyPDF('${r.hourly_report_id}')">
              <i class="fa-solid fa-file-pdf"></i>
            </button>
          </td>
        </tr>
      `;
    });
  }

  if (currentArchiveType === "child") {
    title.textContent = "Archived Child Data";

    thead.innerHTML = `
      <tr>
        <th>Child ID</th>
        <th>Child Name</th>
        <th>Incubator ID</th>
        <th>Birth Week</th>
        <th>Gender</th>
        <th>Blood Type</th>
        <th>Birth Weight</th>
        <th>Actions</th>
      </tr>
    `;

    pageItems.forEach(item => {
      const c = item.data;

      tbody.innerHTML += `
        <tr>
          <td>${c.child_id}</td>
          <td>${c.child_name}</td>
          <td>${c.incubator_id}</td>
          <td>${c.birth_week}</td>
          <td>${c.gender}</td>
          <td>${c.blood_type}</td>
          <td>${c.birth_weight} g</td>
          <td class="actions-cell">
            <button class="act-btn view" onclick="showChildDetails('${c.child_id}')">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="act-btn pdf" onclick="openChildPDF('${c.child_id}')">
              <i class="fa-solid fa-file-pdf"></i>
            </button>
          </td>
        </tr>
      `;
    });
  }
renderArchiveMobileCards(pageItems);
  if (info) {
    info.textContent =
      `Showing ${pageItems.length} of ${items.length} archived records`;
  }

  if (pages) {
    pages.textContent =
      `${archiveCurrentPage} / ${totalPages}`;
  }
}
// ================= ARCHIVE ACTIONS =================

function archiveReport(reportId) {
  const report = fullReports.find(
    r => r.report_id === reportId
  );

  if (!report) return;

  archivedItems.push({
    archive_type: "full",
    data: report
  });

  fullReports = fullReports.filter(
    r => r.report_id !== reportId
  );
  renderTable();
renderArchive();
}

function archiveHourlyReport(reportId) {
  const report = hourlyReports.find(
    r => r.hourly_report_id === reportId
  );

  if (!report) return;

  archivedItems.push({
    archive_type: "hourly",
    data: report
  });


  hourlyReports = hourlyReports.filter(
    r => r.hourly_report_id !== reportId
  );

  renderHourlyTable();
}

function archiveChild(childId) {
  const child = children.find(
    c => c.child_id === childId
  );

  if (!child) return;

  archivedItems.push({
    archive_type: "child",
    data: child
  });

  children = children.filter(
    c => c.child_id !== childId
  );

  renderChildTable();
}
// ================= ARCHIVE PAGE BUTTONS =================

document.getElementById("archiveBtn")?.addEventListener("click", () => {
  openArchive("full");
});

document.getElementById("hrArchiveBtn")?.addEventListener("click", () => {
  openArchive("hourly");
});

document.getElementById("archivePgFirst")?.addEventListener("click", () => {
  archiveCurrentPage = 1;
  renderArchive();
});

document.getElementById("archivePgPrev")?.addEventListener("click", () => {
  if (archiveCurrentPage > 1) {
    archiveCurrentPage--;
    renderArchive();
  }
});

document.getElementById("archivePgNext")?.addEventListener("click", () => {
  archiveCurrentPage++;
  renderArchive();
});

document.getElementById("archivePgLast")?.addEventListener("click", () => {
  const items = archivedItems.filter(
    item => item.archive_type === currentArchiveType
  );

  archiveCurrentPage =
    Math.ceil(items.length / archivePerPage) || 1;

  renderArchive();
});

document.getElementById("childArchiveBtn")?.addEventListener("click", () => {
  openArchive("child");
});


function renderArchiveMobileCards(items) {
  const el = document.getElementById("archiveMobCards");
  if (!el) return;

  if (currentArchiveType === "full") {
    el.innerHTML = items.map(item => {
      const r = item.data;

      return `
        <div class="mob-card">
          <div class="mob-info">
            <div class="mob-name">Report ID : ${r.report_id}</div>
            <div class="mob-email">Child : ${r.child_name}</div>
            <div class="mob-email">Nurse : ${r.nurse_name}</div>
            <div class="mob-email">Type : ${r.report_type}</div>
            <div class="mob-email">Date : ${r.report_date}</div>
            <div class="mob-email">Time : ${r.report_time}</div>
          </div>

          <div class="action-btns">
            <button class="act-btn view"
              onclick="showArchiveFullDetails('${r.report_id}')">
              <i class="fa-solid fa-eye"></i>
            </button>

            <button class="act-btn pdf"
              onclick="openReportPDF('${r.report_id}')">
              <i class="fa-solid fa-file-pdf"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  if (currentArchiveType === "hourly") {
    el.innerHTML = items.map(item => {
      const r = item.data;

      return `
        <div class="mob-card">
          <div class="mob-info">
            <div class="mob-name">Report ID : ${r.hourly_report_id}</div>
            <div class="mob-email">Child : ${r.child_name}</div>
            <div class="mob-email">Nurse : ${r.nurse_name}</div>
            <div class="mob-email">Status : ${r.status}</div>
            <div class="mob-email">Date : ${r.date}</div>
            <div class="mob-email">Time : ${r.time}</div>
          </div>

          <div class="action-btns">
            <button class="act-btn view"
              onclick="showHourlyReportDetails('${r.hourly_report_id}')">
              <i class="fa-solid fa-eye"></i>
            </button>

            <button class="act-btn pdf"
              onclick="openHourlyPDF('${r.hourly_report_id}')">
              <i class="fa-solid fa-file-pdf"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  if (currentArchiveType === "child") {
    el.innerHTML = items.map(item => {
      const c = item.data;

      return `
        <div class="mob-card">
          <div class="mob-info">
            <div class="mob-name">Child ID : ${c.child_id}</div>
            <div class="mob-email">Child : ${c.child_name}</div>
            <div class="mob-email">Incubator : ${c.incubator_id}</div>
            <div class="mob-email">Birth Week : ${c.birth_week}</div>
            <div class="mob-email">Gender : ${c.gender}</div>
            <div class="mob-email">Blood Type : ${c.blood_type}</div>
            <div class="mob-email">Birth Weight : ${c.birth_weight} g</div>
          </div>

          <div class="action-btns">
            <button class="act-btn view"
              onclick="showChildDetails('${c.child_id}')">
              <i class="fa-solid fa-eye"></i>
            </button>

            <button class="act-btn pdf"
              onclick="openChildPDF('${c.child_id}')">
              <i class="fa-solid fa-file-pdf"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }
}

function showArchiveFullDetails(reportId) {
  const item = archivedItems.find(
    item =>
      item.archive_type === "full" &&
      item.data.report_id === reportId
  );

  if (!item) return;

  showReportDetailsByObject(item.data);
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


