const elCountdown1 = document.getElementById("countdown");
const elCountdown2 = document.getElementById("countdown2");

const elViewers1 = document.getElementById("liveViewers");
const elViewers2 = document.getElementById("liveViewers2");

const elHappy1 = document.getElementById("happyCustomers");
const elHappy2 = document.getElementById("happyCustomers2");

/* also update the duplicate copy */
const elViewers2b = document.getElementById("liveViewers2b");
const elHappy2b = document.getElementById("happyCustomers2b");
const elCountdown2b = document.getElementById("countdown2b");

const elViewers2c = document.getElementById("liveViewers2c");
const elHappy2c = document.getElementById("happyCustomers2c");
const elCountdown2c = document.getElementById("countdown2c");

let viewers = parseInt(elViewers1?.textContent || "93", 10);
let happy = parseInt((elHappy1?.textContent || "10520").replace(/,/g, ""), 10);

let countdownSeconds = 5 * 60 + 8;

function formatMMSS(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function setCountdownText(text) {
  if (elCountdown1) elCountdown1.textContent = text;
  if (elCountdown2) elCountdown2.textContent = text;
  if (elCountdown2b) elCountdown2b.textContent = text;
  if (elCountdown2c) elCountdown2c.textContent = text;
}

function setViewersText(val) {
  const str = String(val);
  if (elViewers1) elViewers1.textContent = str;
  if (elViewers2) elViewers2.textContent = str;
  if (elViewers2b) elViewers2b.textContent = str;
  if (elViewers2c) elViewers2c.textContent = str;
}

function setHappyText(val) {
  const str = val.toLocaleString();
  if (elHappy1) elHappy1.textContent = str;
  if (elHappy2) elHappy2.textContent = str;
  if (elHappy2b) elHappy2b.textContent = str;
  if (elHappy2c) elHappy2c.textContent = str;
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
