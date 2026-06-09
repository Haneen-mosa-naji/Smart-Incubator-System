/*const token = localStorage.getItem("token");

if (!token) {
  window.location.replace("index.html");
}*/

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
    : "FullReports";

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

  name: "H.O.M.Al-Hussemy",

  namefull:
    "Hossam Omar Mohammed Al-Hussemy",

  role: "Doctor"

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


let fullReports = [
{
  report_id: "6a1f91d850013a92667d21890",
  child_id: "6a1f1d850013a92667d21890",
  child_name: "Omar Ahmad Khaled Saleh",
  nurse_id: "6a1f826264e43bd627f5bce6",
  nurse_name: "Sara Khaled Mahmoud Ali",
  report_type: "Daily",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Baby is stable.",
  recommendations: "Continue monitoring.",
  report_date: "2026-06-01",
  report_time: "10:30 AM"
},

{
  report_id: "6a1f91d850013a92667d21891",
  child_id: "6a1f1d850013a92667d21891",
  child_name: "Lina Hassan Ahmad Naser",
  nurse_id: "6a1f826264e43bd627f5bce7",
  nurse_name: "Mona Ahmad Saleh Naser",
  report_type: "Emergency",
  temperature_status: "High",
  oxygen_status: "Low",
  heart_status: "Warning",
  diagnosis: "Elevated temperature and reduced oxygen saturation detected.",
  recommendations: "Monitor every 30 minutes and notify physician.",
  report_date: "2026-06-01",
  report_time: "03:45 PM"
},

{
  report_id: "6a1f91d850013a92667d21892",
  child_id: "6a1f1d850013a92667d21892",
  child_name: "Sara Ali Mahmoud Hassan",
  nurse_id: "6a1f826264e43bd627f5bce8",
  nurse_name: "Rana Saleh Khaled Ahmad",
  report_type: "Weekly",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Weekly assessment shows stable growth and development.",
  recommendations: "Continue current care plan.",
  report_date: "2026-06-02",
  report_time: "09:00 AM"
},

{
  report_id: "6a1f91d850013a92667d21893",
  child_id: "6a1f1d850013a92667d21893",
  child_name: "Yousef Khaled Samer Ali",
  nurse_id: "6a1f826264e43bd627f5bce9",
  nurse_name: "Dina Samer Mahmoud Hassan",
  report_type: "Daily",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Infant remains in stable condition.",
  recommendations: "Continue routine monitoring.",
  report_date: "2026-06-03",
  report_time: "08:15 AM"
},

{
  report_id: "6a1f91d850013a92667d21894",
  child_id: "6a1f1d850013a92667d21894",
  child_name: "Adam Ibrahim Mahmoud Odeh",
  nurse_id: "6a1f826264e43bd627f5bcea",
  nurse_name: "Alaa Naser Mahmoud Khaled",
  report_type: "Emergency",
  temperature_status: "High",
  oxygen_status: "Low",
  heart_status: "Warning",
  diagnosis: "Respiratory discomfort observed during monitoring.",
  recommendations: "Increase observation frequency.",
  report_date: "2026-06-03",
  report_time: "02:40 PM"
},

{
  report_id: "6a1f91d850013a92667d21895",
  child_id: "6a1f1d850013a92667d21895",
  child_name: "Mariam Odeh Ahmad Saleh",
  nurse_id: "6a1f826264e43bd627f5bceb",
  nurse_name: "Ruba Khaled Samer Odeh",
  report_type: "Follow-up",
  temperature_status: "Low",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Slightly reduced body temperature noted.",
  recommendations: "Provide thermal support.",
  report_date: "2026-06-04",
  report_time: "04:10 PM"
},

{
  report_id: "6a1f91d850013a92667d21896",
  child_id: "6a1f1d850013a92667d21896",
  child_name: "Noor Ahmad Ibrahim Hasan",
  nurse_id: "6a1f826264e43bd627f5bcec",
  nurse_name: "Aya Ahmad Khaled Hasan",
  report_type: "Daily",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Clinical progress remains stable.",
  recommendations: "Maintain monitoring schedule.",
  report_date: "2026-06-05",
  report_time: "09:25 AM"
},

{
  report_id: "6a1f91d850013a92667d21897",
  child_id: "6a1f1d850013a92667d21897",
  child_name: "Kareem Mahmoud Ahmad Naser",
  nurse_id: "6a1f826264e43bd627f5bced",
  nurse_name: "Maysa Naser Mahmoud Ali",
  report_type: "Emergency",
  temperature_status: "High",
  oxygen_status: "Critical",
  heart_status: "Warning",
  diagnosis: "Respiratory distress accompanied by low oxygen levels.",
  recommendations: "Immediate physician review required.",
  report_date: "2026-06-06",
  report_time: "01:55 PM"
},

{
  report_id: "6a1f91d850013a92667d21898",
  child_id: "6a1f1d850013a92667d21898",
  child_name: "Jana Ali Mahmoud Saleh",
  nurse_id: "6a1f826264e43bd627f5bcee",
  nurse_name: "Lama Ibrahim Saleh Mahmoud",
  report_type: "Monthly",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Monthly review indicates healthy development.",
  recommendations: "Continue routine follow-up.",
  report_date: "2026-06-07",
  report_time: "10:00 AM"
},

{
  report_id: "6a1f91d850013a92667d21899",
  child_id: "6a1f1d850013a92667d21899",
  child_name: "Tareq Samer Ahmad Odeh",
  nurse_id: "6a1f826264e43bd627f5bcef",
  nurse_name: "Nour Ali Samer Khaled",
  report_type: "Daily",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Vital signs remain within normal limits.",
  recommendations: "Continue standard care.",
  report_date: "2026-06-07",
  report_time: "11:20 AM"
},

{
  report_id: "6a1f91d850013a92667d21900",
  child_id: "6a1f1d850013a92667d21900",
  child_name: "Farah Khaled Ahmad Hasan",
  nurse_id: "6a1f826264e43bd627f5bcf0",
  nurse_name: "Rahaf Mahmoud Ali Hasan",
  report_type: "Weekly",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Healthy weekly progress observed.",
  recommendations: "Maintain nutritional support.",
  report_date: "2026-06-08",
  report_time: "09:00 AM"
},

{
  report_id: "6a1f91d850013a92667d21901",
  child_id: "6a1f1d850013a92667d21901",
  child_name: "Zain Ahmad Mahmoud Naser",
  nurse_id: "6a1f826264e43bd627f5bcf1",
  nurse_name: "Tasneem Khaled Mahmoud Ali",
  report_type: "Emergency",
  temperature_status: "High",
  oxygen_status: "Low",
  heart_status: "Warning",
  diagnosis: "Fever and oxygen reduction detected.",
  recommendations: "Notify physician immediately.",
  report_date: "2026-06-08",
  report_time: "01:35 PM"
},

{
  report_id: "6a1f91d850013a92667d21902",
  child_id: "6a1f1d850013a92667d21902",
  child_name: "Leen Ibrahim Ahmad Saleh",
  nurse_id: "6a1f826264e43bd627f5bcf2",
  nurse_name: "Sondos Mahmoud Ali Hasan",
  report_type: "Follow-up",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Condition improved compared to previous assessment.",
  recommendations: "Continue observation.",
  report_date: "2026-06-09",
  report_time: "08:10 AM"
},

{
  report_id: "6a1f91d850013a92667d21903",
  child_id: "6a1f1d850013a92667d21903",
  child_name: "Mohammad Hasan Ahmad Odeh",
  nurse_id: "6a1f826264e43bd627f5bcf3",
  nurse_name: "Raneem Saleh Mahmoud Ali",
  report_type: "Monthly",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Monthly review confirms stable growth.",
  recommendations: "Continue monthly evaluations.",
  report_date: "2026-06-09",
  report_time: "10:45 AM"
},

{
  report_id: "6a1f91d850013a92667d21904",
  child_id: "6a1f1d850013a92667d21904",
  child_name: "Dana Ahmad Samer Saleh",
  nurse_id: "6a1f826264e43bd627f5bcf4",
  nurse_name: "Abeer Mahmoud Khaled Hasan",
  report_type: "Daily",
  temperature_status: "Normal",
  oxygen_status: "Normal",
  heart_status: "Stable",
  diagnosis: "Infant remains clinically stable.",
  recommendations: "Maintain routine monitoring.",
  report_date: "2026-06-10",
  report_time: "09:15 AM"
}
];


// =================  =================

function renderFullReports(reports) {
  const tbody = document.getElementById("fullReportsTable");

  tbody.innerHTML = "";

  reports.forEach(report => {
    tbody.innerHTML += `
      <tr>
        <td>${report.report_id}</td>
        <td>${report.child_name}</td>
      
        <td>${report.nurse_name}</td>
      
       <td>${report.report_type}</td>
        <td>${report.report_date}</td>
        <td>${report.report_time}</td>
       <td class="actions-cell">

  <button class="act-btn view" onclick="showReportDetails('${report.report_id}')" title="View">
    <i class="fa-solid fa-eye"></i>
  </button>

 <button class="act-btn pdf" onclick="openReportPDF('${report.report_id}')" title="Open PDF">
  <i class="fa-solid fa-file-pdf"></i>
</button>

  <button class="act-btn archive" onclick="archiveReport('${report.report_id}')" title="Archive">
    <i class="fa-solid fa-box-archive"></i>
  </button>

</td>
      </tr>
    `;
  });
  renderFullReportsMobileCards(reports);
}

renderFullReports(fullReports);
// =================  =================

function showReportDetails(reportId) {
  const report = fullReports.find(
    r => r.report_id === reportId
  );

  if (!report) return;

  showReportDetailsByObject(report);
}



function showReportDetailsByObject(report) {
  const body = document.getElementById("reportDetailsBody");

  body.innerHTML = `
    <div class="report-details-grid">

      <div><span class="label">Report ID : </span><span class="value">${report.report_id}</span></div>
      <div><span class="label">Report Type : </span><span class="value">${report.report_type}</span></div>

      <div><span class="label">Child Name : </span><span class="value">${report.child_name}</span></div>
      <div><span class="label">Child ID : </span><span class="value">${report.child_id}</span></div>

      <div><span class="label">Nurse Name : </span><span class="value">${report.nurse_name}</span></div>
      <div><span class="label">Nurse ID : </span><span class="value">${report.nurse_id}</span></div>

      <div><span class="label">Temperature Status : </span><span class="value">${report.temperature_status}</span></div>
      <div><span class="label">Oxygen Status : </span><span class="value">${report.oxygen_status}</span></div>

      <div><span class="label">Heart Status : </span><span class="value">${report.heart_status}</span></div>
      <div><span class="label">Date : </span><span class="value">${report.report_date}</span></div>

      <div><span class="label">Time : </span><span class="value">${report.report_time}</span></div>

      <div class="full-row report-section">
        <h6>Diagnosis</h6>
        <p>${report.diagnosis}</p>
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
// =================  =================



let archivedItems = [];



// ================= renderFullReportsMobileCards=================

function renderFullReportsMobileCards(reports) {

  const el =
    document.getElementById("fullReportsMobCards");

  if (!el) return;

  el.innerHTML = reports.map(report => `

    <div class="mob-card">

      <div class="mob-info">

        <div class="mob-name">
          Report ID : ${report.report_id}
        </div>

        <div class="mob-email">
          Child : ${report.child_name}
        </div>

        <div class="mob-email">
          Child ID : ${report.child_id}
        </div>

        <div class="mob-email">
          Nurse : ${report.nurse_name}
        </div>

        <div class="mob-email">
          Nurse ID : ${report.nurse_id}
        </div>

        <div class="mob-email">
          Type : ${report.report_type}
        </div>

        <div class="mob-email">
          Date : ${report.report_date}
        </div>

        <div class="mob-email">
          Time : ${report.report_time}
        </div>

      </div>

      <div class="action-btns">

        <button
          class="act-btn view"
          onclick="showReportDetails('${report.report_id}')">
          <i class="fa-solid fa-eye"></i>
        </button>

        <button
          class="act-btn pdf"
          onclick="openReportPDF('${report.report_id}')">
          <i class="fa-solid fa-file-pdf"></i>
        </button>

        <button
          class="act-btn archive"
          onclick="archiveReport('${report.report_id}')">
          <i class="fa-solid fa-box-archive"></i>
        </button>

      </div>

    </div>

  `).join("");
}

// ================= PAGINATION BUTTONS =================
let currentPage = 1;
const perPage = 10;
let totalPagesGlobal = 1;
renderTable();

function renderTable() {
  let filteredReports = [...fullReports];

  const searchValue = document
    .getElementById("searchInp")
    ?.value
    .toLowerCase()
    .trim() || "";

  const filterValue = document
    .getElementById("reportsFilter")
    ?.value || "all";

  if (searchValue) {
    filteredReports = filteredReports.filter(report =>
      report.report_id.toLowerCase().includes(searchValue) ||
      report.child_name.toLowerCase().includes(searchValue) ||
      report.child_id.toLowerCase().includes(searchValue) ||
      report.nurse_name.toLowerCase().includes(searchValue) ||
      report.nurse_id.toLowerCase().includes(searchValue) ||
      report.report_type.toLowerCase().includes(searchValue)
    );
  }

  if (filterValue !== "all") {
    filteredReports = filteredReports.filter(report =>
      report.report_type.toLowerCase() === filterValue
    );
  }

  totalPagesGlobal =
    Math.ceil(filteredReports.length / perPage) || 1;

  if (currentPage > totalPagesGlobal) {
    currentPage = totalPagesGlobal;
  }

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  const pageReports = filteredReports.slice(start, end);

  renderFullReports(pageReports);

  document.getElementById("pgInfo").textContent =
    `Showing ${pageReports.length} of ${filteredReports.length} reports`;

  document.getElementById("pages").innerHTML =
    `${currentPage} / ${totalPagesGlobal}`;
}

document.getElementById("pgFirst")?.addEventListener("click", () => {
  currentPage = 1;
  renderTable();
});

document.getElementById("pgPrev")?.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

document.getElementById("pgNext")?.addEventListener("click", () => {
  if (currentPage < totalPagesGlobal) {
    currentPage++;
    renderTable();
  }
});

document.getElementById("pgLast")?.addEventListener("click", () => {
  currentPage = totalPagesGlobal;
  renderTable();
});


// ================= LIVE SEARCH =================

document.getElementById("searchInp")?.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[\u0600-\u06FF]/g, "");

  currentPage = 1;
  renderTable();
});

document.getElementById("reportsFilter")?.addEventListener("change", () => {
  currentPage = 1;
  renderTable();
});

// ================= ===================== =================




// ================= MESSAGES DATA =================

const CURRENT_USER_ID = "DR001"; // logged-in doctor

let messages = [
  {
    message_id: "MSG001",
    sender_id:  "N001",
    sender_name:"Sara Khaled Mahmoud Ali",
    sender_role:"Nurse",
    receiver_id: CURRENT_USER_ID,
    receiver_name:"Dr. H.O.M.Al-Hussemy",
    content: "Doctor, Omar Ahmad's temperature just reached 38.2°C. Should I increase the monitoring frequency?",
    sent_time: "2026-06-09T08:15:00",
    message_status: "read"
  },
  {
    message_id: "MSG002",
    sender_id:  CURRENT_USER_ID,
    sender_name:"Dr. H.O.M.Al-Hussemy",
    sender_role:"Doctor",
    receiver_id: "N001",
    receiver_name:"Sara Khaled Mahmoud Ali",
    content: "Yes, please monitor every 30 minutes and notify me immediately if it exceeds 38.5°C.",
    sent_time: "2026-06-09T08:22:00",
    message_status: "delivered"
  },
  {
    message_id: "MSG003",
    sender_id:  "N001",
    sender_name:"Sara Khaled Mahmoud Ali",
    sender_role:"Nurse",
    receiver_id: CURRENT_USER_ID,
    receiver_name:"Dr. H.O.M.Al-Hussemy",
    content: "Understood. I will keep a close watch. Temperature is now 37.9°C after cooling measures.",
    sent_time: "2026-06-09T09:05:00",
    message_status: "read"
  },
  {
    message_id: "MSG004",
    sender_id:  "N002",
    sender_name:"Mona Ahmad Saleh Naser",
    sender_role:"Nurse",
    receiver_id: CURRENT_USER_ID,
    receiver_name:"Dr. H.O.M.Al-Hussemy",
    content: "Good morning Doctor. Lina Hassan's oxygen dropped to 91% this morning. Hourly report submitted.",
    sent_time: "2026-06-09T09:30:00",
    message_status: "unread"
  },
  {
    message_id: "MSG005",
    sender_id:  "N003",
    sender_name:"Rana Saleh Khaled Ahmad",
    sender_role:"Nurse",
    receiver_id: CURRENT_USER_ID,
    receiver_name:"Dr. H.O.M.Al-Hussemy",
    content: "Doctor, Yousef Khaled's weight has increased by 80g since last week. Condition looks stable.",
    sent_time: "2026-06-08T14:10:00",
    message_status: "read"
  },
  {
    message_id: "MSG006",
    sender_id:  CURRENT_USER_ID,
    sender_name:"Dr. H.O.M.Al-Hussemy",
    sender_role:"Doctor",
    receiver_id: "N003",
    receiver_name:"Rana Saleh Khaled Ahmad",
    content: "Great news! Please continue the current feeding schedule and log daily weight.",
    sent_time: "2026-06-08T14:45:00",
    message_status: "delivered"
  },
  {
    message_id: "MSG007",
    sender_id:  "N004",
    sender_name:"Alaa Naser Mahmoud Khaled",
    sender_role:"Nurse",
    receiver_id: CURRENT_USER_ID,
    receiver_name:"Dr. H.O.M.Al-Hussemy",
    content: "URGENT: Adam Ibrahim oxygen level at 86%, heart rate 168 bpm. Emergency alert sent.",
    sent_time: "2026-06-09T10:02:00",
    message_status: "unread"
  },
  {
    message_id: "MSG008",
    sender_id:  "N005",
    sender_name:"Ruba Khaled Samer Odeh",
    sender_role:"Nurse",
    receiver_id: CURRENT_USER_ID,
    receiver_name:"Dr. H.O.M.Al-Hussemy",
    content: "Mariam Odeh's temperature has been consistently normal for the past 6 hours. Thermal blanket still in use.",
    sent_time: "2026-06-08T11:20:00",
    message_status: "read"
  },
  {
    message_id: "MSG009",
    sender_id:  CURRENT_USER_ID,
    sender_name:"Dr. H.O.M.Al-Hussemy",
    sender_role:"Doctor",
    receiver_id: "N005",
    receiver_name:"Ruba Khaled Samer Odeh",
    content: "Thank you for the update. You may reduce to one check every 2 hours if temperature stays above 36.5°C.",
    sent_time: "2026-06-08T11:55:00",
    message_status: "delivered"
  },
  {
    message_id: "MSG010",
    sender_id:  "N002",
    sender_name:"Mona Ahmad Saleh Naser",
    sender_role:"Nurse",
    receiver_id: CURRENT_USER_ID,
    receiver_name:"Dr. H.O.M.Al-Hussemy",
    content: "Doctor, should I prepare the weekly report for Lina Hassan today or wait for tomorrow's assessment?",
    sent_time: "2026-06-07T16:00:00",
    message_status: "read"
  }
];

// ================= HELPERS =================

function getOtherParty(msg) {
  // returns the "other person" in the conversation relative to current user
  if (msg.sender_id === CURRENT_USER_ID) {
    return { id: msg.receiver_id, name: msg.receiver_name };
  }
  return { id: msg.sender_id, name: msg.sender_name, role: msg.sender_role };
}

function formatMsgTime(iso) {
  const d = new Date(iso);
  const now = new Date();
  const isToday =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();
  if (isToday) {
    return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  }
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatMsgTimeFull(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    + "  " + d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
}

function statusIcon(status) {
  if (status === "sent")      return `<i class="fa-solid fa-check msg-status-icon sent" title="Sent"></i>`;
  if (status === "delivered") return `<i class="fa-solid fa-check-double msg-status-icon delivered" title="Delivered"></i>`;
  if (status === "read")      return `<i class="fa-solid fa-check-double msg-status-icon read-status" title="Read"></i>`;
  return "";
}

// Build a map: otherPartyId → latest message + unread count
function buildConversations(msgList) {
  const convMap = {};

  msgList.forEach(msg => {
    const other = getOtherParty(msg);
    if (!convMap[other.id]) {
      convMap[other.id] = {
        otherId:   other.id,
        otherName: other.name,
        otherRole: other.role || (msg.sender_id === CURRENT_USER_ID ? msg.receiver_name : msg.sender_role),
        messages:  [],
        unread:    0
      };
    }
    convMap[other.id].messages.push(msg);
    if (msg.message_status === "unread" && msg.receiver_id === CURRENT_USER_ID) {
      convMap[other.id].unread++;
    }
  });

  // sort each conversation's messages by time
  Object.values(convMap).forEach(conv => {
    conv.messages.sort((a, b) => new Date(a.sent_time) - new Date(b.sent_time));
    conv.latest = conv.messages[conv.messages.length - 1];
  });

  // sort conversations by latest message
  return Object.values(convMap).sort(
    (a, b) => new Date(b.latest.sent_time) - new Date(a.latest.sent_time)
  );
}

// ================= ACTIVE CONVERSATION =================

let activeConvId = null;

function renderConvList(filterType = "all", search = "") {
  const el = document.getElementById("msgConvList");
  if (!el) return;

  let convs = buildConversations(messages);

  if (search) {
    convs = convs.filter(c =>
      c.otherName.toLowerCase().includes(search.toLowerCase()) ||
      c.latest.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filterType === "unread") {
    convs = convs.filter(c => c.unread > 0);
  } else if (filterType === "sent") {
    convs = convs.filter(c => c.latest.sender_id === CURRENT_USER_ID);
  }

  if (!convs.length) {
    el.innerHTML = `<div class="msg-conv-empty"><i class="fa-solid fa-envelope-open"></i><p>No conversations</p></div>`;
    return;
  }

  el.innerHTML = convs.map(conv => {
    const isActive = conv.otherId === activeConvId;
    const preview = conv.latest.content.length > 55
      ? conv.latest.content.slice(0, 55) + "…"
      : conv.latest.content;
    const isMine = conv.latest.sender_id === CURRENT_USER_ID;
    const initial = conv.otherName.charAt(0).toUpperCase();

    return `
    <div class="msg-conv-item ${isActive ? "active" : ""} ${conv.unread > 0 ? "has-unread" : ""}"
         onclick="openConversation('${conv.otherId}')">
      <div class="msg-conv-av">${initial}</div>
      <div class="msg-conv-info">
        <div class="msg-conv-top">
          <span class="msg-conv-name">${conv.otherName}</span>
          <span class="msg-conv-time">${formatMsgTime(conv.latest.sent_time)}</span>
        </div>
        <div class="msg-conv-preview">
          ${isMine ? '<span class="msg-you">You: </span>' : ""}
          ${preview}
        </div>
      </div>
      ${conv.unread > 0 ? `<div class="msg-unread-dot">${conv.unread}</div>` : ""}
    </div>`;
  }).join("");
}

function openConversation(otherId) {
  activeConvId = otherId;

  // mark messages from this person as read
  messages.forEach(msg => {
    if (msg.sender_id === otherId && msg.receiver_id === CURRENT_USER_ID) {
      msg.message_status = "read";
    }
  });

  const conv = buildConversations(messages).find(c => c.otherId === otherId);
  if (!conv) return;

  // update conv list UI
  const filterType = document.querySelector(".msg-filter-btn.active")?.dataset.filter || "all";
  const search = document.getElementById("msgSearchInp")?.value || "";
  renderConvList(filterType, search);

  // show thread
  document.getElementById("msgEmpty").style.display = "none";
  document.getElementById("msgThread").style.display = "flex";

  // thread header
  document.getElementById("msgThreadHead").innerHTML = `
    <div class="msg-thread-av">${conv.otherName.charAt(0).toUpperCase()}</div>
    <div>
      <div class="msg-thread-name">${conv.otherName}</div>
      <div class="msg-thread-role">${conv.otherRole || "Nurse"}</div>
    </div>
    <div class="msg-thread-meta">
      <span class="msg-count-badge">${conv.messages.length} messages</span>
    </div>
  `;

  // bubbles
  const bubblesEl = document.getElementById("msgBubbles");
  bubblesEl.innerHTML = conv.messages.map(msg => {
    const isMine = msg.sender_id === CURRENT_USER_ID;
    return `
    <div class="msg-bubble-wrap ${isMine ? "mine" : "theirs"}">
      <div class="msg-bubble ${isMine ? "mine" : "theirs"}">
        <div class="msg-bubble-content">${msg.content}</div>
        <div class="msg-bubble-foot">
          <span class="msg-bubble-time">${formatMsgTimeFull(msg.sent_time)}</span>
          ${isMine ? statusIcon(msg.message_status) : ""}
        </div>
      </div>
    </div>`;
  }).join("");

  // scroll to bottom
  bubblesEl.scrollTop = bubblesEl.scrollHeight;

  // store receiver for compose
  document.getElementById("msgSendBtn").dataset.receiverId   = otherId;
  document.getElementById("msgSendBtn").dataset.receiverName = conv.otherName;
}

// ================= SEND MESSAGE =================

function sendMessage() {
  const inp        = document.getElementById("msgComposeInp");
  const sendBtn    = document.getElementById("msgSendBtn");
  const content    = inp.value.trim();
  const receiverId = sendBtn.dataset.receiverId;
  const receiverName = sendBtn.dataset.receiverName;

  if (!content || !receiverId) return;

  const newMsg = {
    message_id:     "MSG" + String(messages.length + 1).padStart(3, "0"),
    sender_id:       CURRENT_USER_ID,
    sender_name:    "Dr. H.O.M.Al-Hussemy",
    sender_role:    "Doctor",
    receiver_id:     receiverId,
    receiver_name:   receiverName,
    content:         content,
    sent_time:       new Date().toISOString(),
    message_status: "sent"
  };

  messages.push(newMsg);
  inp.value = "";
  inp.style.height = "auto";

  openConversation(receiverId);
}

document.getElementById("msgSendBtn")?.addEventListener("click", sendMessage);

document.getElementById("msgComposeInp")?.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// auto-resize textarea
document.getElementById("msgComposeInp")?.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = Math.min(this.scrollHeight, 120) + "px";
});

// ================= FILTER BUTTONS =================

document.querySelectorAll(".msg-filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".msg-filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const search = document.getElementById("msgSearchInp")?.value || "";
    renderConvList(btn.dataset.filter, search);
  });
});

// ================= SEARCH =================

document.getElementById("msgSearchInp")?.addEventListener("input", e => {
  e.target.value = e.target.value.replace(/[\u0600-\u06FF]/g, "");
  const filterType = document.querySelector(".msg-filter-btn.active")?.dataset.filter || "all";
  renderConvList(filterType, e.target.value);
});

// ================= INIT =================

renderConvList();
