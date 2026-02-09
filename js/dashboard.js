let market = 890000000;
let earnings = 0;

setInterval(() => {
  market += (Math.random() - 0.5) * 10000000;
  document.getElementById("market").innerText = "$" + market.toLocaleString();
}, 1200);

setInterval(() => {
  earnings += Math.random() * 0.9;
  document.getElementById("earnings").innerText = "$" + earnings.toFixed(2);
}, 1000);
