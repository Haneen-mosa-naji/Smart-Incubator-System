const form = document.getElementById("loginForm");
const msg = document.getElementById("msg");


// ================= MESSAGE FUNCTION =================

function showMessage(text, type) {

  msg.innerText = text;

  msg.classList.remove("error", "success");

  if (type) {
    msg.classList.add(type);
  }

}


// ================= LOGIN =================

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const identifier =
    document.getElementById("userOrEmail")
      .value
      .trim();

  const password =
    document.getElementById("password")
      .value
      .trim();

  const data = {
    identifier,
    password
  };

  try {

    const response = await fetch(
      "https://smart-incubator-backend.onrender.com/api/users/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

    console.log(result);

    // ================= SUCCESS =================

    if (response.ok) {

      showMessage("Login successful", "success");

      // save token
      localStorage.setItem(
        "token",
        result.data.token
      );

      // save user
      localStorage.setItem(
        "user",
        JSON.stringify(result.data.user)
      );

      const role = result.data.user.role;

      // redirect by role
      setTimeout(() => {

        if (role === "admin") {
          window.location.replace("Admin.html");
        }
        else if (role === "engineer") {
          window.location.replace("Engineer.html");
        }
        else if (role === "doctor") {
          window.location.replace("Doctor.html");
        }
        else if (role === "nurse") {
          window.location.replace("Nurse.html");
        }
        else if (role === "parent") {
          window.location.replace("Parent.html");
        }
        else {
          window.location.replace("index.html");
        }

      }, 1000);

    }

    // ================= ERROR =================

    else {

      showMessage(
        result.message || "Login failed",
        "error"
      );

    }

  }

  // ================= SERVER ERROR =================

  catch (error) {

    console.log(error);

    showMessage(
      "Server Error",
      "error"
    );

  }

});


// ================= SHOW / HIDE PASSWORD =================

const passwordInput =
  document.getElementById("password");

const togglePassword =
  document.getElementById("togglePassword");


// check if button exists
if (togglePassword) {

  const icon =
    togglePassword.querySelector("i");

  togglePassword.addEventListener("click", () => {

    // show password
    if (passwordInput.type === "password") {

      passwordInput.type = "text";

      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");

    }

    // hide password
    else {

      passwordInput.type = "password";

      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");

    }

  });

}

// ================= PREVENT ARABIC INPUT =================

const emailInput = document.getElementById("userOrEmail");

function removeArabic(input) {
  input?.addEventListener("input", () => {
    input.value = input.value.replace(/[\u0600-\u06FF]/g, "");
  });
}

removeArabic(emailInput);
removeArabic(passwordInput);