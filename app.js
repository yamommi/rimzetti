console.log("✅ app.js loaded on", location.pathname);

const PRODUCTS = [
  { itemNo: "Item No. 001", name: "Forged Rims", img: "/images/image-1.png", sizes: ["18 inch","19 inch","20 inch","22 inch"], colors: ["Silver"], lugs: ["5-lug"] },
  { itemNo: "Item No. 002", name: "Rimzetti Apex Cast", img: "/images/image-2.png", sizes: ["18 inch","19 inch","20 inch"], colors: ["Black"], lugs: ["5-lug"] },
  { itemNo: "Item No. 003", name: "Rimzetti Factory Edition", img: "/images/image-3.png", sizes: ["18 inch","19 inch","20 inch"], colors: ["Hyper Black"], lugs: ["5-lug"] },
  {
    itemNo: "Item No. 004",
    name: "Rimzetti Multi-Spoke",
    img: "/images/image-4-black.png",
    sizes: ["18 inch","20 inch","22 inch"],
    colors: ["Matte Black","Bronze","Red"],
    lugs: ["6-lug"],
    imagesByColor: {
      "Matte Black": "/images/image-4-black.png",
      "Bronze": "/images/image-4-bronze.png",
      "Red": "/images/image-4-red.png"
    }
  },
  { itemNo: "Item No. 005", name: "Rimzetti Grey Edition", img: "/images/image-5.png", sizes: ["18 inch","19 inch","20 inch","21 inch"], colors: ["Grey"], lugs: ["5-lug"] },
  { itemNo: "Item No. 006", name: "Rimzetti Best Seller", img: "/images/image-6.png", sizes: ["17 inch","18 inch","19 inch","20 inch"], colors: ["Black"], lugs: ["5-lug"] },
  { itemNo: "Item No. 007", name: "Offroad Beadlock Alloy Wheel", img: "/images/image-7.png", sizes: ["17 inch"], colors: ["Black"], lugs: ["5-lug"] },
  { itemNo: "Item No. 008", name: "Multi-Fit Alloy Wheel", img: "/images/image-8.png", sizes: ["15 inch"], colors: ["Silver"], lugs: ["4-lug","6-lug"] },
  { itemNo: "Item No. 009", name: "Five-Spoke Performance Rim", img: "/images/image-9.png", sizes: ["15 inch","16 inch","17 inch","18 inch"], colors: ["Silver"], lugs: ["5-lug"] },
  { itemNo: "Item No. 010", name: "Insert Style Rim", img: "/images/image-10.png", sizes: ["15 inch","16 inch"], colors: ["Black"], lugs: ["4-lug","5-lug"] },
  { itemNo: "Item No. 011", name: "Street Performance Rim", img: "/images/image-11.png", sizes: ["15 inch","16 inch","17 inch","18 inch"], colors: ["Silver"], lugs: ["4-lug","5-lug"] },
];

let activeProduct = null;
let selections = { size: "", color: "", lugs: "" };

const $ = (id) => document.getElementById(id);

function lockBody(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
}

function renderShop() {
  const grid = $("product-grid");
  if (!grid) {
    console.error("❌ product-grid not found.");
    return;
  }

  grid.innerHTML = "";

  PRODUCTS.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="product-image" />
      <h3>${product.name}</h3>
      <p class="muted">${product.itemNo}</p>
      <button class="btn-primary" type="button">Request Quote</button>
    `;

    card.querySelector("button").addEventListener("click", () => openModal(product.itemNo));
    grid.appendChild(card);
  });

  console.log("✅ Rendered", PRODUCTS.length, "products");
}

function openModal(itemNo) {
  const product = PRODUCTS.find((p) => p.itemNo === itemNo);
  if (!product) return;

  activeProduct = product;
  selections.size = product.sizes?.[0] || "";
  selections.color = product.colors?.[0] || "";
  selections.lugs = product.lugs?.[0] || "";

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

function renderOptions(product) {
  renderGroup("m-sizes", product.sizes || [], selections.size, (v) => (selections.size = v));
  renderGroup("m-colors", product.colors || [], selections.color, (v) => {
    selections.color = v;
    if (product.imagesByColor?.[v]) $("m-img").src = product.imagesByColor[v];
  });
  renderGroup("m-lugs", product.lugs || [], selections.lugs, (v) => (selections.lugs = v));
}

function renderGroup(containerId, values, selectedValue, onPick) {
  const container = $(containerId);
  if (!container) return;

  if (!values.length) {
    container.innerHTML = `<span class="muted">N/A</span>`;
    return;
  }

  container.innerHTML = "";
  values.forEach((v) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (v === selectedValue ? " is-active" : "");
    btn.textContent = v;

    btn.addEventListener("click", () => {
      onPick(v);
      renderOptions(activeProduct);
    });

    container.appendChild(btn);
  });
}

function openQuoteForm() {
  $("modal").classList.remove("is-open");

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

function openContactForm() {
  $("contact-modal").classList.add("is-open");
  lockBody(true);
}

function closeContactForm() {
  $("contact-modal").classList.remove("is-open");
  lockBody(false);
}

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  $("modal")?.classList.remove("is-open");
  $("quote-modal")?.classList.remove("is-open");
  $("contact-modal")?.classList.remove("is-open");
  lockBody(false);
});

/* IMPORTANT: inline onclick needs globals */
window.openModal = openModal;
window.closeModal = closeModal;
window.openQuoteForm = openQuoteForm;
window.closeQuoteForm = closeQuoteForm;
window.openContactForm = openContactForm;
window.closeContactForm = closeContactForm;

document.addEventListener("DOMContentLoaded", renderShop);
