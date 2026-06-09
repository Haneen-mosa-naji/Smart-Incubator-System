let currentArchiveType = "full";
let archiveCurrentPage = 1;
const archivePerPage = 10;

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


  if (!thead || !tbody) return;

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
    title.textContent = "Archived Full Reports";

    thead.innerHTML = `
      <tr>
        <th>Report ID</th>
        <th>Child Name</th>
        <th>Child ID</th>
        <th>Nurse Name</th>
        <th>Nurse ID</th>
        <th>Date</th>
        <th>Time</th>
        <th>Actions</th>
      </tr>
    `;

    pageItems.forEach(item => {
      const r = item.data;

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
      tbody.innerHTML += `
        <tr>
          <td>${r.report_id}</td>
          <td>${r.child_name}</td>
          <td>${r.child_id}</td>
          <td>${r.nurse_name}</td>
          <td>${r.nurse_id}</td>
          <td>${r.report_date}</td>
          <td>${r.report_time}</td>
          <td class="actions-cell">
            <button class="act-btn view" onclick="showReportDetails('${r.report_id}')">
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
        <th>Child ID</th>
        <th>Nurse Name</th>
        <th>Nurse ID</th>
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
          <td>${r.child_id}</td>
          <td>${r.nurse_name}</td>
          <td>${r.nurse_id}</td>
          <td><span class="vital-badge ${r.status}">${r.status}</span></td>
          <td>${r.date}</td>
          <td>${r.time}</td>
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

  renderFullReports(fullReports);
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