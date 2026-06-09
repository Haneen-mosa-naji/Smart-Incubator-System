
/*
const token = localStorage.getItem("token");

if (!token) {
  window.location.replace("index.html");
}*/

// ================= PAGINATION =================

function updatePagination(totalPages) {
  const pagesContainer = document.getElementById("pages");

  const firstBtn = document.getElementById("pgFirst");
  const prevBtn  = document.getElementById("pgPrev");
  const nextBtn  = document.getElementById("pgNext");
  const lastBtn  = document.getElementById("pgLast");

  if (!pagesContainer) return;

  pagesContainer.innerHTML = "";
  totalPagesGlobal = totalPages;

  if (firstBtn) firstBtn.disabled = currentPage === 1;
if (prevBtn) prevBtn.disabled = currentPage === 1;
if (nextBtn) nextBtn.disabled = currentPage === totalPages;
if (lastBtn) lastBtn.disabled = currentPage === totalPages;

  const pages = [];

  const addPage = (p) => pages.push(p);

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) addPage(i);
  } else {
    addPage(1);

    if (currentPage > 3) addPage("...");

    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      addPage(i);
    }

    if (currentPage < totalPages - 2) addPage("...");

    addPage(totalPages);
  }

  pages.forEach(p => {
    const el = document.createElement("button");

    if (p === "...") {
      el.className = "pg-dots";
      el.textContent = "...";
      el.disabled = true;
    } else {
      el.className = "pg-btn" + (p === currentPage ? " active" : "");
      el.textContent = p;

      el.addEventListener("click", () => {
        currentPage = p;
        renderTable();
      });
    }

    pagesContainer.appendChild(el);
  });

  const pgInfo = document.getElementById("pgInfo");
  if (pgInfo) {
    pgInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  }
}



