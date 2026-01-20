const statusBar = document.getElementById("status-bar");

const elCountdown1 = document.getElementById("countdown");
const elCountdown2 = document.getElementById("countdown2");

const elViewers1 = document.getElementById("liveViewers");
const elViewers2 = document.getElementById("liveViewers2");

const elHappy1 = document.getElementById("happyCustomers");
const elHappy2 = document.getElementById("happyCustomers2");

let viewers = parseInt(elViewers1?.textContent || "93", 10);
let happy = parseInt(elHappy1?.textContent || "10520", 10);

let countdownSeconds = 5 * 60 + 8;

function formatMMSS(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function setCountdownText(text) {
  if (elCountdown1) elCountdown1.textContent = text;
  if (elCountdown2) elCountdown2.textContent = text;
}

function setViewersText(val) {
  if (elViewers1) elViewers1.textContent = String(val);
  if (elViewers2) elViewers2.textContent = String(val);
}

function setHappyText(val) {
  if (elHappy1) elHappy1.textContent = String(val);
  if (elHappy2) elHappy2.textContent = String(val);
}

function tickCountdown() {
  setCountdownText(formatMMSS(countdownSeconds));
  countdownSeconds--;

  if (countdownSeconds < 0) {
    const nextMin = 3 + Math.floor(Math.random() * 6);
    countdownSeconds = nextMin * 60 + Math.floor(Math.random() * 60);
  }
}

function tickLiveStats() {
  const change = Math.floor(Math.random() * 7) - 3;
  viewers = Math.max(40, Math.min(220, viewers + change));

  if (Math.random() < 0.35) {
    happy += 1 + Math.floor(Math.random() * 3);
  }

  setViewersText(viewers);
  setHappyText(happy);
}

tickCountdown();
setInterval(tickCountdown, 1000);
setInterval(tickLiveStats, 2500);

window.addEventListener("scroll", () => {
  if (!statusBar) return;
  if (window.scrollY > 40) statusBar.classList.add("hide-status-bar");
  else statusBar.classList.remove("hide-status-bar");
});
