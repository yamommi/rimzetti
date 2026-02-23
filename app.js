/* Rimzetti Catalog - Clean Working JS (no weird characters) */
console.log("app.js loaded OK");

const PRODUCTS = [
  { itemNo: "Item No. 001", name: "Forged Rims", img: "/images/image-1.png", sizes: ["18 inch", "19 inch", "20 inch", "22 inch"], colors: ["Silver"], lugs: ["5-lug"] },
  { itemNo: "Item No. 002", name: "Rimzetti Apex Cast", img: "/images/image-2.png", sizes: ["18 inch", "19 inch", "20 inch"], colors: ["Black"], lugs: ["5-lug"] },
  { itemNo: "Item No. 003", name: "Rimzetti Factory Edition", img: "/images/image-3.png", sizes: ["18 inch", "19 inch", "20 inch"], colors: ["Hyper Black"], lugs: ["5-lug"] },
  {
    itemNo: "Item No. 004",
    name: "Rimzetti Multi-Spoke",
    img: "/images/image-4-black.png",
    sizes: ["18 inch", "20 inch", "22 inch"],
    colors: ["Matte Black", "Bronze", "Red"],
    lugs: ["6-lug"],
    imagesByColor: {
      "Matte Black": "/images/image-4-black.png",
      "Bronze": "/images/image-4-bronze.png",
      "Red": "/images/image-4-red.png"
    }
  },
  { itemNo: "Item No. 005", name: "Rimzetti Grey Edition", img: "/images/image-5.png", sizes: ["18 inch", "19 inch", "20 inch", "21 inch"], colors: ["Grey"], lugs: ["5-lug"] },
  { itemNo: "Item No. 006", name: "Rimzetti Best Seller", img: "/images/image-6.png", sizes: ["17 inch", "18 inch", "19 inch", "20 inch"], colors: ["Black"], lugs: ["5-lug"] },
  { itemNo: "Item No. 007", name: "Offroad Beadlock Alloy Wheel", img: "/images/image-7.png", sizes: ["17 inch"], colors: ["Black"], lugs: ["5-lug"] },
  { itemNo: "Item No. 008", name: "Multi-Fit Alloy Wheel", img: "/images/image-8.png", sizes: ["15 inch"], colors: ["Silver"], lugs: ["4-lug", "6-lug"] },
  { itemNo: "Item No. 009", name: "Five-Spoke Performance Rim", img: "/images/image-9.png", sizes: ["15 inch", "16 inch", "17 inch", "18 inch"], colors: ["Silver"], lugs: ["5-lug"] },
  { itemNo: "Item No. 010", name: "Insert Style Rim", img: "/images/image-10.png", sizes: ["15 inch", "16 inch"], colors: ["Black"], lugs: ["4-lug", "5-lug"] },
  { itemNo: "Item No. 011", name: "Street Performance Rim", img: "/images/image-11.png", sizes: ["15 inch", "16 inch", "17 inch", "18 inch"], colors: ["Silver"], lugs: ["4-lug", "5-lug"] }
];

let activeProduct = null;
let selections = { size: "", color: "", lugs: "" };

function $(id) {
  return document.getElementById(id);
}

function lockBody(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

function renderShop() {
  const grid = document.getElementById("product-grid");
  if (!grid) {
    console.error("product-grid not found");
    return;
  }

  grid.innerHTML = "";

  PRODUCTS.forEach((p) => {
    const sizesText = (p.sizes || []).map(s => s.replace(" inch", '"')).join(", ");
    const colorsText = (p.colors || []).join(", ");
    const lugsText = (p.lugs || []).join(", ");

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img class="product-image" src="${p.img}" alt="${p.name}">
      <div class="product-body">
        <h3 class="product-title">${p.name}</h3>

        <div class="product-row muted">
          <div class="product-label">Item No.</div>
          <div class="product-value">${p.itemNo.replace("Item No. ", "")}</div>
        </div>

        <div class="product-row">
          <div class="product-label">Sizes:</div>
          <div class="product-value">${sizesText}</div>
        </div>

        <div class="product-row">
          <div class="product-label">Colors:</div>
          <div class="product-value">${colorsText}</div>
        </div>

        <div class="product-row">
          <div class="product-label">Lug Options:</div>
          <div class="product-value">${lugsText}</div>
        </div>
      </div>

      <button class="btn-primary product-cta" type="button">Request Quote</button>
    `;

    card.querySelector(".product-cta").addEventListener("click", () => openModal(p.itemNo));

    grid.appendChild(card);
  });
}

/* ---------- Product Modal ---------- */
function openModal(itemNo) {
  const product = PRODUCTS.find(function (x) {
    return x.itemNo === itemNo;
  });

  if (!product) {
    console.error("Product not found:", itemNo);
    return;
  }

  activeProduct = product;

  selections.size = (product.sizes && product.sizes[0]) || "";
  selections.color = (product.colors && product.colors[0]) || "";
  selections.lugs = (product.lugs && product.lugs[0]) || "";

  $("m-title").textContent = product.name;
  $("m-itemno").textContent = product.itemNo;
  $("m-img").src = product.img;

  renderOptions(product);

  $("modal").classList.add("is-open");
  lockBody(true);
}

function closeModal() {
  $("modal").classList.remove("is-open");
  lockBody(false);
}

/* ---------- Options ---------- */
function renderOptions(product) {
  renderGroup("m-sizes", product.sizes || [], selections.size, function (v) {
    selections.size = v;
  });

  renderGroup("m-colors", product.colors || [], selections.color, function (v) {
    selections.color = v;
    if (product.imagesByColor && product.imagesByColor[v]) {
      $("m-img").src = product.imagesByColor[v];
    }
  });

  renderGroup("m-lugs", product.lugs || [], selections.lugs, function (v) {
    selections.lugs = v;
  });
}

function renderGroup(containerId, values, selected, onPick) {
  const container = $(containerId);
  if (!container) return;

  if (!values.length) {
    container.innerHTML = '<span class="muted">N/A</span>';
    return;
  }

  container.innerHTML = "";

  values.forEach(function (v) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (v === selected ? " is-active" : "");
    btn.textContent = v;

    btn.addEventListener("click", function () {
      onPick(v);
      renderOptions(activeProduct);
    });

    container.appendChild(btn);
  });
}

/* ---------- Quote Modal ---------- */
function openQuoteForm() {
  // Close product modal if open
  const productModal = $("modal");
  if (productModal) productModal.classList.remove("is-open");

  // If no product selected, open blank quote form
  if (!activeProduct) {
    $("q-itemno").value = "";
    $("q-rim").value = "";
    $("q-size").value = "";
    $("q-color").value = "";
    $("q-lugs").value = "";

    $("quote-modal").classList.add("is-open");
    lockBody(true);
    return;
  }

  $("q-itemno").value = activeProduct.itemNo || "";
  $("q-rim").value = activeProduct.name || "";
  $("q-size").value = selections.size || "";
  $("q-color").value = selections.color || "";
  $("q-lugs").value = selections.lugs || "";

  $("quote-modal").classList.add("is-open");
  lockBody(true);
}

function closeQuoteForm() {
  $("quote-modal").classList.remove("is-open");
  lockBody(false);
}

/* ---------- Contact Modal ---------- */
function openContactForm() {
  $("contact-modal").classList.add("is-open");
  lockBody(true);
}

function closeContactForm() {
  $("contact-modal").classList.remove("is-open");
  lockBody(false);
}

/* ---------- ESC closes modals ---------- */
document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;

  const m1 = $("modal");
  const m2 = $("quote-modal");
  const m3 = $("contact-modal");

  if (m1) m1.classList.remove("is-open");
  if (m2) m2.classList.remove("is-open");
  if (m3) m3.classList.remove("is-open");

  lockBody(false);
});

/* ---------- IMPORTANT: expose for inline onclick ---------- */
window.openModal = openModal;
window.closeModal = closeModal;
window.openQuoteForm = openQuoteForm;
window.closeQuoteForm = closeQuoteForm;
window.openContactForm = openContactForm;
window.closeContactForm = closeContactForm;

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", renderShop);
