/************************************
 Rimzetti — Quote-Only Catalog System
 WORKING / SIMPLE / CLEAN
************************************/

const PRODUCTS = [
  {
    itemNo: "Item No. 001",
    name: "Forged Rims",
    img: "images/image-1.png",
    sizes: ["18 inch", "19 inch", "20 inch", "22 inch"],
    colors: ["Silver"],
    lugs: ["5-lug"],
  },
  {
    itemNo: "Item No. 002",
    name: "Rimzetti Apex Cast",
    img: "images/image-2.png",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Black"],
    lugs: ["5-lug"],
  },
  {
    itemNo: "Item No. 003",
    name: "Rimzetti Factory Edition",
    img: "images/image-3.png",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Hyper Black"],
    lugs: ["5-lug"],
  },
  {
    itemNo: "Item No. 004",
    name: "Rimzetti Multi-Spoke",
    img: "images/image-4-black.png",
    sizes: ["18 inch", "20 inch", "22 inch"],
    colors: ["Matte Black", "Bronze", "Red"],
    lugs: ["6-lug"],
    imagesByColor: {
      "Matte Black": "images/image-4-black.png",
      Bronze: "images/image-4-bronze.png",
      Red: "images/image-4-red.png",
    },
  },
  {
    itemNo: "Item No. 005",
    name: "Rimzetti Grey Edition",
    img: "images/image-5.png",
    sizes: ["18 inch", "19 inch", "20 inch", "21 inch"],
    colors: ["Grey"],
    lugs: ["5-lug"],
  },
  {
    itemNo: "Item No. 006",
    name: "Rimzetti Best Seller",
    img: "images/image-6.png",
    sizes: ["17 inch", "18 inch", "19 inch", "20 inch"],
    colors: ["Black"],
    lugs: ["5-lug"],
  },
  {
    itemNo: "Item No. 007",
    name: "Offroad Beadlock Alloy Wheel",
    img: "images/image-7.png",
    sizes: ["17 inch"],
    colors: ["Black"],
    lugs: ["5-lug"],
  },
  {
    itemNo: "Item No. 008",
    name: "Multi-Fit Alloy Wheel",
    img: "images/image-8.png",
    sizes: ["15 inch"],
    colors: ["Silver"],
    lugs: ["4-lug", "6-lug"],
  },
  {
    itemNo: "Item No. 009",
    name: "Five-Spoke Performance Rim",
    img: "images/image-9.png",
    sizes: ["15 inch", "16 inch", "17 inch", "18 inch"],
    colors: ["Silver"],
    lugs: ["5-lug"],
  },
  {
    itemNo: "Item No. 010",
    name: "Insert Style Rim",
    img: "images/image-10.png",
    sizes: ["15 inch", "16 inch"],
    colors: ["Black"],
    lugs: ["4-lug", "5-lug"],
  },
  {
    itemNo: "Item No. 011",
    name: "Street Performance Rim",
    img: "images/image-11.png",
    sizes: ["15 inch", "16 inch", "17 inch", "18 inch"],
    colors: ["Silver"],
    lugs: ["4-lug", "5-lug"],
  },
];

let activeProduct = null;
let selections = { size: "", color: "", lugs: "" };

const $ = (id) => document.getElementById(id);

function renderShop() {
  const grid = $("product-grid");
  if (!grid) return;

  grid.innerHTML = "";

  PRODUCTS.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p class="muted">${product.itemNo}</p>
      <button class="btn-primary" type="button">Request Quote</button>
    `;

    // Clicking the button opens product modal
    card.querySelector("button").addEventListener("click", () => openModal(product.itemNo));

    grid.appendChild(card);
  });
}

// ----- Product modal -----
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
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("modal").classList.remove("is-open");
  document.body.style.overflow = "";
}

// ----- Options -----
function renderOptions(product) {
  // Sizes
  renderGroup("m-sizes", product.sizes || [], selections.size, (v) => (selections.size = v));

  // Colors (also swap image if mapping exists)
  renderGroup("m-colors", product.colors || [], selections.color, (v) => {
    selections.color = v;
    if (product.imagesByColor?.[v]) $("m-img").src = product.imagesByColor[v];
  });

  // Lugs
  renderGroup("m-lugs", product.lugs || [], selections.lugs, (v) => (selections.lugs = v));
}

function renderGroup(containerId, values, selected, onPick) {
  const container = $(containerId);
  if (!container) return;

  if (!Array.isArray(values) || values.length === 0) {
    container.innerHTML = `<span class="muted">N/A</span>`;
    return;
  }

  container.innerHTML = "";
  values.forEach((v) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (v === selected ? " is-active" : "");
    btn.textContent = v;

    btn.addEventListener("click", () => {
      onPick(v);
      renderOptions(activeProduct);
    });

    container.appendChild(btn);
  });
}

// ----- Quote modal -----
function openQuoteForm() {
  // If they click Request Quote in header without selecting a rim, still open form
  if (!activeProduct) {
    $("quote-modal").classList.add("is-open");
    document.body.style.overflow = "hidden";
    return;
  }

  // Close product modal if open
  $("modal").classList.remove("is-open");

  $("q-itemno").value = activeProduct.itemNo || "";
  $("q-rim").value = activeProduct.name || "";
  $("q-size").value = selections.size || "";
  $("q-color").value = selections.color || "";
  $("q-lugs").value = selections.lugs || "";

  $("quote-modal").classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeQuoteForm() {
  $("quote-modal").classList.remove("is-open");
  document.body.style.overflow = "";
}

// ----- Contact modal -----
function openContactForm() {
  $("contact-modal").classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeContactForm() {
  $("contact-modal").classList.remove("is-open");
  document.body.style.overflow = "";
}

// ----- ESC closes everything -----
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  ["modal", "quote-modal", "contact-modal"].forEach((id) => $(id)?.classList.remove("is-open"));
  document.body.style.overflow = "";
});

// ----- Init -----
document.addEventListener("DOMContentLoaded", renderShop);
