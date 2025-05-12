function register() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;

  if (username && password) {
    localStorage.setItem(username, password);
    document.getElementById("message").textContent = "Registration successful!";
  } else {
    document.getElementById("message").textContent = "Please enter username and password.";
  }
}

function login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  if (localStorage.getItem(username) === password) {
    localStorage.setItem("loggedIn", true);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").textContent = "Invalid credentials.";
  }
}
