/*const token = localStorage.getItem("token");

if (!token) {
  window.location.replace("index.html");
}*/

// ================= SPA NAVIGATION =================

function showPage(page) {

  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  const targetPage = document.getElementById(page) ? page : "users";

  document.getElementById(targetPage).classList.add("active");

  if (location.hash !== "#" + targetPage) {
    location.hash = targetPage;
  }

  document.querySelectorAll(".sidenav a").forEach(a => {
    a.classList.remove("active");

    if (a.getAttribute("href") === "#" + targetPage) {
      a.classList.add("active");
    }
  });
}


// ================= FIRST LOAD =================

window.addEventListener("load", () => {
  const page = location.hash.replace("#", "") || "users";
  showPage(page);
});



// ================= FORM =================

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const success = document.getElementById("msgSuccess");
    const error = document.getElementById("msgError");

    if (success) {
      success.style.display = "flex";
      setTimeout(() => success.style.display = "none", 3000);
    }

    if (error) {
      error.style.display = "none";
    }

    this.reset();
  });
}


// ================= CLEAR =================

const clearBtn = document.getElementById("clearBtn");

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    registerForm?.reset();
  });
}


// ================= NAV BUTTONS =================

document.getElementById("create-btn")?.addEventListener("click", () => {
  showPage("create");
});

document.getElementById("View-btn")?.addEventListener("click", () => {
  showPage("users");
});


// ================= USERS DATA =================

const roles = ["Admin", "Doctor", "Nurse", "Engineer"/*, "Parent"*/];
const statuses = ["active", "inactive"];
const colors = ["blue", "teal", "purple", "coral", "amber", "pink"];

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function generateObjectId() {
  const chars = "0123456789abcdef";
  let id = "";

  for (let i = 0; i < 24; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
}
function generateUsers(count = 100) {
  return Array.from({ length: count }, (_, i) => ({
    user_id: generateObjectId(),
    full_name: `User ${i + 1} Test Example`,
    username: `user.${i + 1}`,
    password: "123456",
    role: randomFrom(roles),
    status: randomFrom(statuses),
    phone: `+97059${Math.floor(1000000 + Math.random() * 8999999)}`,
    email: `user${i + 1}@smart-incubator.com`,
    av: `U${i + 1}`,
    color: randomFrom(colors)
  }));
}

const users = generateUsers(100);


// ================= TABLE =================

const tbody = document.getElementById("userTable");
const searchInp = document.getElementById("searchInp");
const roleFilter = document.getElementById("roleFilter");

let currentPage = 1;
const perPage = 10;
let totalPagesGlobal = 1;
  renderTable();


// ================= LIVE SEARCH =================

searchInp?.addEventListener("input", () => {
  currentPage = 1;
  renderTable();
});

roleFilter?.addEventListener("change", () => {
  currentPage = 1;
  renderTable();
});


// ================= RENDER TABLE =================

function renderTable() {

  let filteredUsers = [...users];

  const searchValue =
    searchInp?.value?.toLowerCase().trim() || "";

  const filterValue =
    roleFilter?.value || "all";

  if (searchValue) {
    filteredUsers = filteredUsers.filter(u =>
      (u.full_name || "").toLowerCase().includes(searchValue) ||
      (u.username || "").toLowerCase().includes(searchValue) ||
      (u.email || "").toLowerCase().includes(searchValue) ||
      (u.user_id || "").toLowerCase().includes(searchValue) ||
      (u.phone || "").toLowerCase().includes(searchValue)
    );
  }

  if (filterValue !== "all") {
    filteredUsers = filteredUsers.filter(u =>
      u.role.toLowerCase() === filterValue.toLowerCase()
    );
  }

  const total = filteredUsers.length;
  const totalPages = Math.ceil(total / perPage) || 1;
totalPagesGlobal = totalPages;
  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  const pageData = filteredUsers.slice(start, end);

  tbody.innerHTML = pageData.map(u => `
    <tr>
      <td>${u.user_id}</td>

      <td>
        <div class="user-cell">
          <div class="av ${u.color}">${u.av}</div>
          <div class="u-name">${u.full_name}</div>
        </div>
      </td>

      <td>${u.username}</td>
      <td>${u.password}</td>

      <td>
        <span class="role-badge ${u.role.toLowerCase()}">${u.role}</span>
      </td>

      <td>
        <span class="status-dot">
          <span class="dot ${u.status}"></span>
          ${u.status.charAt(0).toUpperCase() + u.status.slice(1)}
        </span>
      </td>

      <td>${u.phone}</td>
      <td><div class="u-email">${u.email}</div></td>

      <td>
        <div class="action-btns">
          <button class="act-btn edit">
            <i class="fa-solid fa-user-pen"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");

  renderMobileCards(pageData);

  document.getElementById("pgInfo").textContent =
    `Showing ${pageData.length} of ${total} users`;

  document.getElementById("pages").innerHTML =
    `${currentPage} / ${totalPages}`;
}


// ================= function renderMobileCards =================
function renderMobileCards(users) {

  const el = document.getElementById("mobCards");

  if (!el) return;

  el.innerHTML = users.map(u => `
    <div class="mob-card">

      <div class="av ${u.color}"
           style="width:38px;height:38px;font-size:12px;flex-shrink:0;">
        ${u.av}
      </div>

      <div class="mob-info">

  <div class="mob-name">
    Name : ${u.full_name}
  </div>

  <div class="mob-email">
    ID : ${u.user_id}
  </div>

  <div class="mob-email">
    Username : ${u.username}
  </div>

  <div class="mob-email">
    Password : ${u.password}
  </div>

  <div class="mob-email">
    Phone : ${u.phone}
  </div>

  <div class="mob-email">
    Email : ${u.email}
  </div>

  <div class="mob-email">
    Role :
    <span class="role-badge ${u.role.toLowerCase()}">
      ${u.role}
    </span>
  </div>

  <div class="mob-email">
    Status :
    <span class="status-dot">
      <span class="dot ${u.status}"></span>
      ${u.status}
    </span>
  </div>

</div>
      

      <div class="action-btns">
      <button class="act-btn edit">
        <i class="fa-solid fa-user-pen"></i>
      </button>
     </div>

    </div>
  `).join("");

}
// ================= PAGINATION BUTTONS =================

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

/* ── SIDEBAR ── */
const sidebar   = document.getElementById('sidebar');
const sbOverlay = document.getElementById('sbOverlay');

function openSidebar()  { 
  sidebar.classList.add('open');  
    sbOverlay.classList.add('visible'); 
       document.body.classList.add('sb-open');  
         document.body.style.overflow = 'hidden'; }

function closeSidebar() { 
  sidebar.classList.remove('open'); 
  sbOverlay.classList.remove('visible');
   document.body.classList.remove('sb-open'); 
   document.body.style.overflow = ''; }

document.querySelectorAll('.topbar-menu-btn').forEach(b => b.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
}));


/*---------------------------*/
sbOverlay.addEventListener('click', closeSidebar);

/*-----------------------------*/
const closeBtn =
  document.getElementById("close-sidebar-btn");


closeBtn?.addEventListener(
  "click",
  closeSidebar
  
);
/*-----------------------------*/

document.querySelectorAll(".sidenav a").forEach(link => {
  link.addEventListener("click", () => {

    if (window.innerWidth <= 570) {
      closeSidebar();
    }

  });
});
/*---------------------------*/
const user = {
  name: "A.O.M.Al-Hussemy",
  namefull:"Ali Omar Mohammed Al-Hussemy",
  role: "Admin"
};

document.getElementById("userName").textContent = user.name;
document.getElementById("usernamefull").textContent = user.namefull;

document.getElementById("userRole").textContent = user.role;

// أول حرف للأفاتار
document.getElementById("userAv").textContent =
  user.name.charAt(0).toUpperCase();


document.getElementById("logoutBtn").addEventListener("click", () => {
 // localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.replace("index.html");
});
// ================= HASH CHANGE =================

window.addEventListener("hashchange", () => {
  const page = location.hash.replace("#", "");
  showPage(page);
});


// ================= INIT =================

document.addEventListener('DOMContentLoaded', () => {
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const phoneInput = document.getElementById("phoneNumber");

  // Email & Password: no Arabic
  function removeArabic(input) {
    input?.addEventListener("input", () => {
      input.value = input.value.replace(/[\u0600-\u06FF]/g, "");
    });
  }
  removeArabic(fullNameInput);
  removeArabic(emailInput);
  removeArabic(passwordInput);

  // Phone: numbers and + only
  phoneInput?.addEventListener("input", () => {
    phoneInput.value =
      phoneInput.value.replace(/[^0-9+]/g, "");
  });

  renderTable();

  const page =
    location.hash.replace("#", "");

  showPage(page);

});