const elCountdown1 = document.getElementById("countdown");
const elCountdown2 = document.getElementById("countdown2");

const elViewers1 = document.getElementById("liveViewers");
const elViewers2 = document.getElementById("liveViewers2");

const elHappy1 = document.getElementById("happyCustomers");
const elHappy2 = document.getElementById("happyCustomers2");

const elCheckout1 = document.getElementById("checkingOut");
const elCheckout2 = document.getElementById("checkingOut2");

const elViewers2b = document.getElementById("liveViewers2b");
const elHappy2b = document.getElementById("happyCustomers2b");
const elCountdown2b = document.getElementById("countdown2b");
const elCheckout2b = document.getElementById("checkingOut2b");

const elViewers2c = document.getElementById("liveViewers2c");
const elHappy2c = document.getElementById("happyCustomers2c");
const elCountdown2c = document.getElementById("countdown2c");
const elCheckout2c = document.getElementById("checkingOut2c");

let viewers = parseInt(elViewers1?.textContent || "93", 10);
let happy = parseInt((elHappy1?.textContent || "1762").replace(/,/g, ""), 10);
let checkingOut = parseInt(elCheckout1?.textContent || "9", 10);

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

function setCheckoutText(val) {
  const str = String(val);
  if (elCheckout1) elCheckout1.textContent = str;
  if (elCheckout2) elCheckout2.textContent = str;
  if (elCheckout2b) elCheckout2b.textContent = str;
  if (elCheckout2c) elCheckout2c.textContent = str;
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

  const cChange = Math.floor(Math.random() * 3) - 1;
  checkingOut = Math.max(2, Math.min(18, checkingOut + cChange));

  setViewersText(viewers);
  setHappyText(happy);
  setCheckoutText(checkingOut);
}

tickCountdown();
setInterval(tickCountdown, 1000);
setInterval(tickLiveStats, 2500);

/* ========================= */
/* STRIPE PAYMENT LINKS */
/* ========================= */

const STRIPE_LINKS = {
  bundle: "https://buy.stripe.com/28EfZgcnK76sdSb46V0gw0d",
  clothing: "https://buy.stripe.com/28E00i2Na1M8g0jgTH0gw0c",
  ape: "https://buy.stripe.com/00w4gy3Re3Ug4hB9rf0gw0b",
  ssentials: "https://buy.stripe.com/fZu28q5Zm4YkbK3avj0gw0a",
  cologne_r: "https://buy.stripe.com/7sYcN4fzW76s29t5aZ0gw09",
  cologne_nr: "https://buy.stripe.com/6oU28q4Vi2Qc9BVgTH0gw08",
  electronics_r: "https://buy.stripe.com/28EcN45Zm8awdSb32R0gw07",
  electronics_nr: "https://buy.stripe.com/28E7sKdrO0I4cO76f30gw06",
  golf: "https://buy.stripe.com/7sYfZg5ZmduQ01l0UJ0gw05",
  pickleball: "https://buy.stripe.com/00w8wO73q76s5lF0UJ0gw03",
  glasses: "https://buy.stripe.com/5kQaEW87u76sbK346V0gw02",
  mask: "https://buy.stripe.com/3cIaEW5Zm62o29t8nb0gw01",
  playbook: "https://buy.stripe.com/cNi4gy3Re3Ug7tN46V0gw00"
};

function getStripeLinkForKey(key) {
  return STRIPE_LINKS[key] || "#";
}

/* ========================= */
/* SHOPIFY-STYLE PRODUCT MODAL */
/* ========================= */

const PRODUCT_DATA = {
  bundle: {
    brand: "ymcsells",
    title: "Elite All Supplier Bundle",
    oldPrice: "$99.99 USD",
    newPrice: "$29.99 USD",
    sale: true,
    desc: "Includes multiple supplier plugs in one. Perfect if you want the biggest variety and the best deal.",
    reviews: "291 Five Star Reviews"
  },
  clothing: {
    brand: "ymcsells",
    title: "Elite Clothing Supplier",
    oldPrice: "$29.99 USD",
    newPrice: "$19.99 USD",
    sale: true,
    desc: "Clothing sets and basics supplier plug. Great margins and always in demand.",
    reviews: "217 Five Star Reviews"
  },
  ape: {
    brand: "ymcsells",
    title: "Ape Supplier",
    oldPrice: "$19.99 USD",
    newPrice: "$9.99 USD",
    sale: true,
    desc: "Streetwear tees supplier. Easy flips if you market consistently.",
    reviews: "188 Five Star Reviews"
  },
  ssentials: {
    brand: "ymcsells",
    title: "Ssentials Supplier",
    oldPrice: "$19.99 USD",
    newPrice: "$9.99 USD",
    sale: true,
    desc: "Hoodies & sets supplier plug. High demand, simple to sell.",
    reviews: "201 Five Star Reviews"
  },
  cologne_r: {
    brand: "ymcsells",
    title: "Elite Cologne Supplier",
    oldPrice: "$19.99 USD",
    newPrice: "$14.99 USD",
    sale: true,
    desc: "High demand fragrances. Great margins. Receipts included for better trust with buyers.",
    reviews: "165 Five Star Reviews"
  },
  cologne_nr: {
    brand: "ymcsells",
    title: "Elite Cologne Supplier (without receipts)",
    oldPrice: "$19.99 USD",
    newPrice: "$9.99 USD",
    sale: true,
    desc: "Cologne plug without receipts. Still great margins and easy flips.",
    reviews: "142 Five Star Reviews"
  },
  electronics_r: {
    brand: "ymcsells",
    title: "Electronics Supplier",
    oldPrice: "$19.99 USD",
    newPrice: "$14.99 USD",
    sale: true,
    desc: "Electronics supplier plug. Fast flips if you market it right. Receipts included.",
    reviews: "229 Five Star Reviews"
  },
  electronics_nr: {
    brand: "ymcsells",
    title: "Electronics Supplier (without receipts)",
    oldPrice: "$19.99 USD",
    newPrice: "$9.99 USD",
    sale: true,
    desc: "Electronics plug without receipts. Great for quick flips and volume sales.",
    reviews: "173 Five Star Reviews"
  },
  golf: {
    brand: "ymcsells",
    title: "Golf Clubs Supplier",
    oldPrice: "$19.99 USD",
    newPrice: "$9.99 USD",
    sale: true,
    desc: "Sports products supplier. Less competition than clothing and good profit margins.",
    reviews: "131 Five Star Reviews"
  },
  pickleball: {
    brand: "ymcsells",
    title: "Oola Pickleball Supplier",
    oldPrice: "$19.99 USD",
    newPrice: "$9.99 USD",
    sale: true,
    desc: "Sports gear supplier. Unique niche with loyal buyers.",
    reviews: "119 Five Star Reviews"
  },
  glasses: {
    brand: "ymcsells",
    title: "Elite Glasses Supplier",
    oldPrice: "$19.99 USD",
    newPrice: "$5.99 USD",
    sale: true,
    desc: "Shades and frames supplier. Easy add-on product and low risk.",
    reviews: "204 Five Star Reviews"
  },
  mask: {
    brand: "ymcsells",
    title: "Elite Mask Supplier",
    oldPrice: "$19.99 USD",
    newPrice: "$5.99 USD",
    sale: true,
    desc: "Mask supplier plug. Simple product, easy shipping, easy upsells.",
    reviews: "156 Five Star Reviews"
  },
  playbook: {
    brand: "ymcsells",
    title: "Reselling Playbook",
    oldPrice: "$19.99 USD",
    newPrice: "$5.99 USD",
    sale: true,
    desc: "Step-by-step guide to help you start reselling, find customers, and avoid beginner mistakes.",
    reviews: "312 Five Star Reviews"
  }
};

const overlay = document.getElementById("productOverlay");
const closeBtn = document.getElementById("productClose");
const closeBtn2 = document.getElementById("productClose2");

const pImg = document.getElementById("pImg");
const pBrand = document.getElementById("pBrand");
const pTitle = document.getElementById("pTitle");
const pOld = document.getElementById("pOld");
const pNew = document.getElementById("pNew");
const pSale = document.getElementById("pSale");
const pDesc = document.getElementById("pDesc");
const pReviews = document.getElementById("pReviews");

const qtyMinus = document.getElementById("qtyMinus");
const qtyPlus = document.getElementById("qtyPlus");
const qtyVal = document.getElementById("qtyVal");

const addToCartBtn = document.getElementById("addToCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");

let qty = 1;
let currentProductKey = null;

function setQty(n) {
  qty = Math.max(1, Math.min(99, n));
  if (qtyVal) qtyVal.textContent = String(qty);
}

if (qtyMinus) qtyMinus.addEventListener("click", () => setQty(qty - 1));
if (qtyPlus) qtyPlus.addEventListener("click", () => setQty(qty + 1));

function goToStripeForCurrentProduct() {
  if (!currentProductKey) return;
  const link = getStripeLinkForKey(currentProductKey);
  if (link && link !== "#") window.location.href = link;
}

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    // Option 1: Add to cart = Buy now
    goToStripeForCurrentProduct();
  });
}

function openProductModalFromCard(card) {
  if (!overlay || !card) return;

  const key = card.getAttribute("data-product") || "";
  currentProductKey = key;

  const data = PRODUCT_DATA[key] || null;

  const img = card.querySelector(".image-wrap img");
  const imgSrc = img?.getAttribute("src") || "";
  const imgAlt = img?.getAttribute("alt") || "Product";

  if (pImg) {
    pImg.src = imgSrc;
    pImg.alt = imgAlt;
  }

  if (data) {
    if (pBrand) pBrand.textContent = data.brand || "ymcsells";
    if (pTitle) pTitle.textContent = data.title || "";
    if (pOld) pOld.textContent = data.oldPrice || "";
    if (pNew) pNew.textContent = data.newPrice || "";
    if (pDesc) pDesc.textContent = data.desc || "";
    if (pReviews) pReviews.textContent = data.reviews || "291 Five Star Reviews";

    if (pSale) {
      pSale.style.display = data.sale ? "inline-flex" : "none";
    }
  }

  // Modal "Buy now" uses Stripe link for the selected product
  if (buyNowBtn) {
    buyNowBtn.href = getStripeLinkForKey(key);
    buyNowBtn.setAttribute("data-no-modal", "true");
  }

  setQty(1);

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  if (!overlay) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* Click card opens modal (but allow Buy Now link to not open) */
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.closest('[data-no-modal="true"]')) return;
    openProductModalFromCard(card);
  });
});

/* Details button also opens modal */
document.querySelectorAll(".product-card .details-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = e.currentTarget.closest(".product-card");
    openProductModalFromCard(card);
  });
});

/* Close controls */
if (closeBtn) closeBtn.addEventListener("click", closeProductModal);
if (closeBtn2) closeBtn2.addEventListener("click", closeProductModal);

if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeProductModal();
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProductModal();
});

/* ========================= */
/* MAKE ALL CARD "BUY NOW" BUTTONS GO TO STRIPE */
/* ========================= */
document.querySelectorAll(".product-card .buy-btn").forEach((btn) => {
  const card = btn.closest(".product-card");
  const key = card?.getAttribute("data-product");
  const link = getStripeLinkForKey(key);

  btn.href = link;
  btn.setAttribute("data-no-modal", "true");
});
