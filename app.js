/* ============================== PRODUCT DATA ============================== */
const PRODUCTS = [
  {
    itemNo: "001",
    name: "Forged Rims",
    img: "images/image-1.png",
    sizes: ["18 inch", "19 inch", "20 inch", "22 inch"],
    colors: ["Silver"],
    lugs: ["5-lug"]
  },
  {
    itemNo: "002",
    name: "Rimzetti Apex Cast",
    img: "images/image-2.png",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Black"],
    lugs: ["5-lug"]
  },
  {
    itemNo: "003",
    name: "Rimzetti Factory Edition",
    img: "images/image-3.png",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Hyper Black"],
    lugs: ["5-lug"]
  },
  {
    itemNo: "004",
    name: "Rimzetti Series 4",
    img: "images/image-4-black.png",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Black", "Bronze", "Red"],
    lugs: ["5-lug"]
  },
  {
    itemNo: "005",
    name: "Rimzetti Sport Series",
    img: "images/image-5.png",
    sizes: ["18 inch", "19 inch"],
    colors: ["Silver", "Gunmetal"],
    lugs: ["5-lug"]
  },
  {
    itemNo: "006",
    name: "Rimzetti Rim Deep",
    img: "images/image-6.png",
    sizes: ["20 inch", "22 inch"],
    colors: ["Chrome", "Black"],
    lugs: ["5-lug", "6-lug"]
  },
  {
    itemNo: "007",
    name: "Rimzetti Velocity",
    img: "images/image-7.png",
    sizes: ["19 inch", "20 inch"],
    colors: ["Gloss Black"],
    lugs: ["5-lug"]
  },
  {
    itemNo: "008",
    name: "Rimzetti Circuit",
    img: "images/image-8.png",
    sizes: ["18 inch", "19 inch"],
    colors: ["Bronze", "Silver"],
    lugs: ["5-lug"]
  },
  {
    itemNo: "009",
    name: "Rimzetti Heritage",
    img: "images/image-9.png",
    sizes: ["17 inch", "18 inch", "19 inch"],
    colors: ["Gold", "Silver"],
    lugs: ["4-lug", "5-lug"]
  },
  {
    itemNo: "010",
    name: "Rimzetti Executive",
    img: "images/image-10.png",
    sizes: ["20 inch", "21 inch"],
    colors: ["Brushed Steel"],
    lugs: ["5-lug"]
  },
  {
    itemNo: "011",
    name: "Rimzetti Monoblock",
    img: "images/image-11.png",
    sizes: ["19 inch", "20 inch"],
    colors: ["Matte Black"],
    lugs: ["5-lug"]
  },
  {
    itemNo: "012",
    name: "Rimzetti Track Edition",
    img: "images/image-12.png",
    sizes: ["18 inch", "19 inch"],
    colors: ["Hyper Silver"],
    lugs: ["5-lug"]
  }
];

/* ============================== RENDER SHOP PRODUCTS ============================== */
function renderShop() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = "";
  PRODUCTS.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img class="product-image" src="${product.img}" alt="${product.name}" loading="lazy">
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-row">
          <span class="product-label">Sizes:</span>
          <span class="product-value">${product.sizes.join(", ")}</span>
        </div>
        <div class="product-row">
          <span class="product-label">Colors:</span>
          <span class="product-value">${product.colors.join(", ")}</span>
        </div>
        <div class="product-row">
          <span class="product-label">Lug Pattern:</span>
          <span class="product-value">${product.lugs.join(", ")}</span>
        </div>
      </div>
      <button class="btn-primary product-cta" type="button" onclick="openModal('${product.itemNo}')">
        VIEW &amp; QUOTE
      </button>
    `;
    grid.appendChild(card);
  });
}

/* ============================== PRODUCT MODAL ============================== */
let _activeProduct = null;

function openModal(itemNo) {
  const product = PRODUCTS.find(p => p.itemNo === itemNo);
  if (!product) return;
  _activeProduct = product;

  document.getElementById("m-title").textContent = product.name;
  document.getElementById("m-itemno").textContent = "Item #" + product.itemNo;
  document.getElementById("m-img").src = product.img;
  document.getElementById("m-img").alt = product.name;

  // Render size chips
  const sizesEl = document.getElementById("m-sizes");
  sizesEl.innerHTML = product.sizes.map((s, i) =>
    `<button type="button" class="chip${i === 0 ? ' is-active' : ''}" onclick="selectChip(this, 'm-sizes')">${s}</button>`
  ).join("");

  // Render color chips
  const colorsEl = document.getElementById("m-colors");
  colorsEl.innerHTML = product.colors.map((c, i) =>
    `<button type="button" class="chip${i === 0 ? ' is-active' : ''}" onclick="selectChip(this, 'm-colors')">${c}</button>`
  ).join("");

  // Render lug chips
  const lugsEl = document.getElementById("m-lugs");
  lugsEl.innerHTML = product.lugs.map((l, i) =>
    `<button type="button" class="chip${i === 0 ? ' is-active' : ''}" onclick="selectChip(this, 'm-lugs')">${l}</button>`
  ).join("");

  const modal = document.getElementById("modal");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function selectChip(btn, rowId) {
  const row = document.getElementById(rowId);
  row.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
  btn.classList.add("is-active");
}

/* ============================== QUOTE MODAL ============================== */
function openQuoteForm() {
  if (_activeProduct) {
    document.getElementById("q-itemno").value = _activeProduct.itemNo;
    document.getElementById("q-rim").value = _activeProduct.name;
    const activeSize = document.querySelector("#m-sizes .chip.is-active");
    const activeColor = document.querySelector("#m-colors .chip.is-active");
    const activeLug = document.querySelector("#m-lugs .chip.is-active");
    document.getElementById("q-size").value = activeSize ? activeSize.textContent : "";
    document.getElementById("q-color").value = activeColor ? activeColor.textContent : "";
    document.getElementById("q-lugs").value = activeLug ? activeLug.textContent : "";
  }
  closeModal();
  const qModal = document.getElementById("quote-modal");
  qModal.classList.add("is-open");
  qModal.setAttribute("aria-hidden", "false");
}

function closeQuoteForm() {
  const qModal = document.getElementById("quote-modal");
  qModal.classList.remove("is-open");
  qModal.setAttribute("aria-hidden", "true");
}

/* ============================== CONTACT MODAL ============================== */
function openContactForm() {
  const cModal = document.getElementById("contact-modal");
  if (!cModal) return;
  cModal.classList.add("is-open");
  cModal.setAttribute("aria-hidden", "false");
}

function closeContactForm() {
  const cModal = document.getElementById("contact-modal");
  if (!cModal) return;
  cModal.classList.remove("is-open");
  cModal.setAttribute("aria-hidden", "true");
}

/* ============================== SUCCESS BANNER ============================== */
function showBanner(msg) {
  const banner = document.createElement('div');
  banner.className = 'success-banner';
  banner.innerHTML = `
    <span>${msg}</span>
    <button onclick="this.parentElement.remove()" aria-label="Close">&times;</button>
  `;
  document.body.prepend(banner);
  setTimeout(() => { if (banner.parentElement) banner.remove(); }, 8000);
}

/* ============================== INITIALIZE ============================== */
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.page === "shop") {
    renderShop();
        // Show success banner if redirected back after form submit
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === 'true') {
      showBanner('Quote request received! We will verify fitment and email you a price within 1 business day.');
      window.history.replaceState({}, '', '/shop.html');
    }
    if (params.get('contacted') === 'true') {
      showBanner('Message sent! We will get back to you within 1 business day.');
      window.history.replaceState({}, '', '/shop.html');
    }
  }
});
