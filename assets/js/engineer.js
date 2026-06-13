/*const token = localStorage.getItem("token");

if (!token) {
  window.location.replace("index.html");
}*/

// ================= SPA NAVIGATION =================

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  const targetPage = document.getElementById(page)
    ? page
    : "AllMaintenance";

  document.getElementById(targetPage).classList.add("active");

  if (location.hash !== "#" + targetPage) {
    history.replaceState(null, "", "#" + targetPage);
  }

  document.querySelectorAll(".sidenav a").forEach(a => {
    a.classList.remove("active");

    if (a.getAttribute("href") === "#" + targetPage) {
      a.classList.add("active");
    }
  });
}
const page =
  location.hash.replace("#", "") ||
  "FullReports";

showPage(page);

window.addEventListener("hashchange", () => {

  const page =
    location.hash.replace("#", "") ||
    "FullReports";

  showPage(page);

});


// ================= TABS BUTTONS =================

document.querySelectorAll(".tab-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    const page = btn.dataset.page;

    showPage(page);

  });

});


// ================= SIDEBAR =================

const sidebar =
  document.getElementById("sidebar");

const sbOverlay =
  document.getElementById("sbOverlay");


function openSidebar() {

  sidebar.classList.add("open");
  sbOverlay.classList.add("visible");

  document.body.classList.add("sb-open");
  document.body.style.overflow = "hidden";

}

function closeSidebar() {

  sidebar.classList.remove("open");
  sbOverlay.classList.remove("visible");

  document.body.classList.remove("sb-open");
  document.body.style.overflow = "";

}


document
  .querySelectorAll(".topbar-menu-btn")
  .forEach(btn => {

    btn.addEventListener("click", () => {

      sidebar.classList.contains("open")
        ? closeSidebar()
        : openSidebar();

    });

  });


sbOverlay?.addEventListener(
  "click",
  closeSidebar
);


const closeBtn =
  document.getElementById("close-sidebar-btn");

closeBtn?.addEventListener(
  "click",
  closeSidebar
);


document.querySelectorAll(".sidenav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      if (window.innerWidth <= 570) {
        closeSidebar();
      }

    });

  });


// ================= USER INFO =================

const user = {

  name: "O.H.M.Omary",

  namefull:
    "Omar Hsssn Mohammed Omary",

  role: "Engineer"

};

document.getElementById("userName").textContent =
  user.name;

document.getElementById("usernamefull").textContent =
  user.namefull;

document.getElementById("userRole").textContent =
  user.role;


// Avatar Initial

document.getElementById("userAv").textContent =
  user.name.charAt(0).toUpperCase();


// ================= LOGOUT =================

document
  .getElementById("logoutBtn")
  ?.addEventListener("click", () => {

    localStorage.removeItem("user");

    window.location.replace("index.html");

  });

// =================  =================

// ================= ENGINEER — MAINTENANCE =================

let maintenanceRecords = [
  {
    maintenance_id: "MNT001",
    incubator_id:   "INC001",
    user_id:        "ENG001",
    user_name:      "Khalid Naser",
    issue_description: "Temperature sensor malfunction — readings inconsistent above 38°C.",
    action_taken:      "Replaced faulty temperature sensor module. Calibrated unit.",
    maintenance_date:      "2026-05-20",
    next_maintenance_date: "2026-06-20",
    status: "Completed"
  },
  {
    maintenance_id: "MNT002",
    incubator_id:   "INC002",
    user_id:        "ENG002",
    user_name:      "Samer Odeh",
    issue_description: "Oxygen flow regulator blocked — O₂ levels dropping below threshold.",
    action_taken:      "Cleaned and unblocked regulator valve. Tested flow at full capacity.",
    maintenance_date:      "2026-05-22",
    next_maintenance_date: "2026-06-22",
    status: "Completed"
  },
  {
    maintenance_id: "MNT003",
    incubator_id:   "INC005",
    user_id:        "ENG001",
    user_name:      "Khalid Naser",
    issue_description: "Humidity control unit not responding — humidity stuck at 40%.",
    action_taken:      "Pending diagnosis.",
    maintenance_date:      "2026-06-01",
    next_maintenance_date: "",
    status: "In Progress"
  },
  {
    maintenance_id: "MNT004",
    incubator_id:   "INC007",
    user_id:        "ENG003",
    user_name:      "Rami Mahmoud",
    issue_description: "Power supply unit intermittent shutdown under load.",
    action_taken:      "",
    maintenance_date:      "2026-06-03",
    next_maintenance_date: "",
    status: "Pending"
  },
  {
    maintenance_id: "MNT005",
    incubator_id:   "INC003",
    user_id:        "ENG002",
    user_name:      "Samer Odeh",
    issue_description: "Scheduled quarterly full inspection and recalibration.",
    action_taken:      "",
    maintenance_date:      "2026-06-15",
    next_maintenance_date: "2026-09-15",
    status: "Scheduled"
  },
  {
    maintenance_id: "MNT006",
    incubator_id:   "INC009",
    user_id:        "ENG001",
    user_name:      "Khalid Naser",
    issue_description: "Heart rate monitor display flickering — possible loose connection.",
    action_taken:      "Re-soldered display ribbon cable. Tested for 2 hours, stable.",
    maintenance_date:      "2026-05-28",
    next_maintenance_date: "2026-07-28",
    status: "Completed"
  },
  {
    maintenance_id: "MNT007",
    incubator_id:   "INC004",
    user_id:        "ENG003",
    user_name:      "Rami Mahmoud",
    issue_description: "Alarm system not triggering on critical oxygen threshold.",
    action_taken:      "Updating firmware and alarm logic.",
    maintenance_date:      "2026-06-05",
    next_maintenance_date: "",
    status: "In Progress"
  },
  {
    maintenance_id: "MNT008",
    incubator_id:   "INC006",
    user_id:        "ENG002",
    user_name:      "Samer Odeh",
    issue_description: "Scheduled semi-annual deep cleaning and parts inspection.",
    action_taken:      "",
    maintenance_date:      "2026-06-20",
    next_maintenance_date: "2026-12-20",
    status: "Scheduled"
  },
  {
    maintenance_id: "MNT009",
    incubator_id:   "INC010",
    user_id:        "ENG001",
    user_name:      "Khalid Naser",
    issue_description: "Weight scale sensor drift — readings off by ±50g.",
    action_taken:      "Recalibrated scale sensor using reference weights.",
    maintenance_date:      "2026-05-30",
    next_maintenance_date: "2026-08-30",
    status: "Completed"
  },
  {
    maintenance_id: "MNT010",
    incubator_id:   "INC008",
    user_id:        "ENG003",
    user_name:      "Rami Mahmoud",
    issue_description: "Fan motor noise — possible bearing wear.",
    action_taken:      "",
    maintenance_date:      "2026-06-08",
    next_maintenance_date: "",
    status: "Pending"
  },
  {
    maintenance_id: "MNT011",
    incubator_id:   "INC011",
    user_id:        "ENG002",
    user_name:      "Samer Odeh",
    issue_description: "Network module offline — incubator not syncing data to system.",
    action_taken:      "Reset network module. Reconfigured IP settings.",
    maintenance_date:      "2026-06-02",
    next_maintenance_date: "2026-07-02",
    status: "Completed"
  },
  {
    maintenance_id: "MNT012",
    incubator_id:   "INC012",
    user_id:        "ENG001",
    user_name:      "Khalid Naser",
    issue_description: "Scheduled quarterly full inspection.",
    action_taken:      "",
    maintenance_date:      "2026-06-25",
    next_maintenance_date: "2026-09-25",
    status: "Scheduled"
  }
];

// ================= STATUS BADGE =================

function mntStatusBadge(status) {
  const map = {
    "Completed":   { bg: "#E1F5EE", color: "#085041", border: "#9AE6B4" },
    "In Progress": { bg: "#EFF6FF", color: "#1E40AF", border: "#BFDBFE" },
    "Pending":     { bg: "#FAEEDA", color: "#633806", border: "#F6AD55" },
    "Scheduled":   { bg: "#F5F3FF", color: "#5B21B6", border: "#DDD6FE" }
  };
  const c = map[status] || { bg: "#F1F5F9", color: "#64748B", border: "#CBD5E0" };
  return `<span style="display:inline-block;background:${c.bg};color:${c.color};border:1px solid ${c.border};border-radius:20px;padding:2px 10px;font-size:10.5px;font-weight:700;">${status}</span>`;
}

function colorMntSel(sel) {
  const map = {
    "Completed":   "status-ok",
    "In Progress": "status-info",
    "Pending":     "status-warn",
    "Scheduled":   "status-scheduled"
  };
  sel.className = "fsel " + (map[sel.value] || "");
}

// ================= RENDER TABLE =================

function renderMaintenance(records) {
  const tbody = document.getElementById("mntTable");
  if (!tbody) return;

  tbody.innerHTML = records.map(r => `
    <tr>
      <td>${r.maintenance_id}</td>
      <td>${r.incubator_id}</td>
      <td>${r.user_name}</td>
      <td style="max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"
          title="${r.issue_description}">${r.issue_description}</td>
      <td>${r.maintenance_date}</td>
      <td>${r.next_maintenance_date || "—"}</td>
      <td>${mntStatusBadge(r.status)}</td>
     <td class="actions-cell">

  <button class="act-btn view"
    onclick="showMntDetails('${r.maintenance_id}')"
    title="View">
    <i class="fa-solid fa-eye"></i>
  </button>

  <button class="act-btn pdf"
    onclick="openMntPDF('${r.maintenance_id}')"
    title="Open PDF">
    <i class="fa-solid fa-file-pdf"></i>
  </button>

  <button class="act-btn archive"
    onclick="archiveMnt('${r.maintenance_id}')"
    title="Archive">
    <i class="fa-solid fa-box-archive"></i>
  </button>

</td>
    </tr>
  `).join("");

  renderMntMobCards(records);
}

// ================= MOBILE CARDS =================

function renderMntMobCards(records) {
  const el = document.getElementById("mntMobCards");
  if (!el) return;

  el.innerHTML = records.map(r => `
    <div class="mob-card">
      <div class="mob-info">
        <div class="mob-name">${r.maintenance_id} &nbsp;·&nbsp; ${r.incubator_id}</div>
        <div class="mob-email">Engineer : ${r.user_name} (${r.user_id})</div>
        <div class="mob-email">Issue : ${r.issue_description}</div>
        <div class="mob-email">Date : ${r.maintenance_date}</div>
        <div class="mob-email">Next : ${r.next_maintenance_date || "—"}</div>
        <div class="mob-email" style="margin-top:4px;">${mntStatusBadge(r.status)}</div>
      </div>
      <<div class="action-btns">

  <button class="act-btn view"
    onclick="showMntDetails('${r.maintenance_id}')">
    <i class="fa-solid fa-eye"></i>
  </button>

  <button class="act-btn pdf"
    onclick="openMntPDF('${r.maintenance_id}')">
    <i class="fa-solid fa-file-pdf"></i>
  </button>

  <button class="act-btn archive"
    onclick="archiveMnt('${r.maintenance_id}')">
    <i class="fa-solid fa-box-archive"></i>
  </button>

</div>
    </div>
  `).join("");
}

// ================= DETAILS MODAL =================

function showMntDetails(id) {
  const r = maintenanceRecords.find(x => x.maintenance_id === id);
  if (!r) return;

  document.getElementById("mntDetailsBody").innerHTML = `
    <div class="report-details-grid">
      <div><span class="label">Maintenance ID : </span><span class="value">${r.maintenance_id}</span></div>
      <div><span class="label">Status : </span><span class="value">${mntStatusBadge(r.status)}</span></div>

      <div><span class="label">Incubator ID : </span><span class="value">${r.incubator_id}</span></div>
      <div><span class="label">Engineer ID : </span><span class="value">${r.user_id}</span></div>

      <div><span class="label">Engineer Name : </span><span class="value">${r.user_name}</span></div>
      <div><span class="label">Maintenance Date : </span><span class="value">${r.maintenance_date}</span></div>

      <div><span class="label">Next Date : </span><span class="value">${r.next_maintenance_date || "—"}</span></div>

      <div class="full-row report-section">
        <h6>Issue Description</h6>
        <p>${r.issue_description}</p>
      </div>
      <div class="full-row report-section">
        <h6>Action Taken</h6>
        <p>${r.action_taken || "Not yet recorded."}</p>
      </div>
    </div>`;

  new bootstrap.Modal(document.getElementById("mntDetailsModal")).show();
}

// ================= DELETE =================

function deleteMnt(id) {
  maintenanceRecords = maintenanceRecords.filter(r => r.maintenance_id !== id);
  renderMntTable();
}

// ================= PAGINATION =================

let mntCurrentPage = 1;
const mntPerPage   = 6;
let mntTotalPages  = 1;

function renderMntTable() {
  let filtered = [...maintenanceRecords];

  const search = document.getElementById("mntSearchInp")?.value.toLowerCase().trim() || "";
  const status = document.getElementById("mntStatusFilter")?.value || "all";

  if (search) {
    filtered = filtered.filter(r =>
      r.maintenance_id.toLowerCase().includes(search)  ||
      r.incubator_id.toLowerCase().includes(search)    ||
      r.user_name.toLowerCase().includes(search)       ||
      r.user_id.toLowerCase().includes(search)         ||
      r.issue_description.toLowerCase().includes(search)
    );
  }

  if (status !== "all") {
    filtered = filtered.filter(r => r.status === status);
  }

  mntTotalPages = Math.ceil(filtered.length / mntPerPage) || 1;
  if (mntCurrentPage > mntTotalPages) mntCurrentPage = mntTotalPages;

  const start = (mntCurrentPage - 1) * mntPerPage;
  const page  = filtered.slice(start, start + mntPerPage);

  renderMaintenance(page);

  document.getElementById("mntPgInfo").textContent =
    `Showing ${page.length} of ${filtered.length} records`;
  document.getElementById("mntPages").innerHTML =
    `${mntCurrentPage} / ${mntTotalPages}`;
}

document.getElementById("mntPgFirst")?.addEventListener("click", () => { mntCurrentPage = 1;           renderMntTable(); });
document.getElementById("mntPgPrev") ?.addEventListener("click", () => { if (mntCurrentPage > 1) { mntCurrentPage--; renderMntTable(); } });
document.getElementById("mntPgNext") ?.addEventListener("click", () => { if (mntCurrentPage < mntTotalPages) { mntCurrentPage++; renderMntTable(); } });
document.getElementById("mntPgLast") ?.addEventListener("click", () => { mntCurrentPage = mntTotalPages; renderMntTable(); });

document.getElementById("mntSearchInp")    ?.addEventListener("input",  () => { mntCurrentPage = 1; renderMntTable(); });
document.getElementById("mntStatusFilter") ?.addEventListener("change", () => { mntCurrentPage = 1; renderMntTable(); });

// ================= FORM SUBMIT =================

document.getElementById("mntForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const newRecord = {
    maintenance_id:        "MNT" + String(maintenanceRecords.length + 1).padStart(3, "0"),
    incubator_id:          document.getElementById("mntIncubatorId").value.trim(),
    user_id:               document.getElementById("mntUserId").value.trim(),
    user_name:             "Current Engineer",
    issue_description:     document.getElementById("mntIssue").value.trim(),
    action_taken:          document.getElementById("mntAction").value.trim(),
    maintenance_date:      document.getElementById("mntDate").value,
    next_maintenance_date: document.getElementById("mntNextDate").value,
    status:                document.getElementById("mntStatus").value
  };

  maintenanceRecords.push(newRecord);

  const msg = document.getElementById("mntMsg");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 3500);

  e.target.reset();
  document.querySelectorAll("#mntForm .fsel").forEach(s => s.className = "fsel");

  renderMntTable();
});

// ================= INIT =================
renderMntTable();
function openMntPDF(id) {
  const r = maintenanceRecords.find(x => x.maintenance_id === id);
  if (!r) return;

  const w = window.open("", "_blank");

  w.document.write(`
    <html>
    <head>
      <title>Maintenance Report</title>
      <style>
        body { font-family: Arial; padding: 30px; }
        h2 { text-align: center; color: #0F4C5C; }
        p { font-size: 14px; line-height: 1.7; }
      </style>
    </head>
    <body>
      <h2>Maintenance Report</h2>
      <p><b>Maintenance ID:</b> ${r.maintenance_id}</p>
      <p><b>Incubator ID:</b> ${r.incubator_id}</p>
      <p><b>Engineer:</b> ${r.user_name}</p>
      <p><b>Engineer ID:</b> ${r.user_id}</p>
      <p><b>Status:</b> ${r.status}</p>
      <p><b>Maintenance Date:</b> ${r.maintenance_date}</p>
      <p><b>Next Maintenance Date:</b> ${r.next_maintenance_date || "—"}</p>

      <h4>Issue Description</h4>
      <p>${r.issue_description}</p>

      <h4>Action Taken</h4>
      <p>${r.action_taken || "Not yet recorded."}</p>
    </body>
    </html>
  `);

  w.document.close();
  w.print();
}

function archiveMnt(id) {
  maintenanceRecords = maintenanceRecords.filter(r => r.maintenance_id !== id);
  renderMntTable();
}