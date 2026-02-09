function sendCode() {
  const code = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("authCode", code);
  window.location.href = "verify.html";
}

if (document.getElementById("code")) {
  document.getElementById("code").innerText = localStorage.getItem("authCode");
}

function verify() {
  const input = document.getElementById("codeInput").value;
  if (input === localStorage.getItem("authCode")) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid code");
  }
}
