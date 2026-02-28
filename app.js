/************************************
 Rimzetti — Shop + Quote Modal
 CLEAN / STABLE / WORKING
************************************/

/* ==============================
   PRODUCT DATA
============================== */

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
  }
];


/* ==============================
   RENDER SHOP PRODUCTS
============================== */

function renderShop() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = "";

  PRODUCTS.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img class="product-image" src="${product.img}" alt="${product.name}">
      <div class="product-body">
        <h3>${product.name}</h3>
        <p class="muted">Item No. ${product.itemNo}</p>
        <button 
          class="btn-primary product-cta"
          onclick="openQuoteForm({
            itemNo: '${product.itemNo}',
            rimName: '${product.name}',
            size: '${product.sizes[0]}',
            color: '${product.colors[0]}',
            lugs: '${product.lugs[0]}'
          })">
          Request Quote
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}


/* ==============================
   QUOTE MODAL SYSTEM
============================== */

function openQuoteForm(details = {}) {
  const modal = document.getElementById("quote-modal");
  if (!modal) return;

  // Fill hidden fields
  const setVal = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  };

  setVal("q-itemno", details.itemNo);
  setVal("q-rim", details.rimName);
  setVal("q-size", details.size);
  setVal("q-color", details.color);
  setVal("q-lugs", details.lugs);

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeQuoteForm() {
  const modal = document.getElementById("quote-modal");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

// Close modal if clicking overlay
document.addEventListener("click", function (e) {
  const modal = document.getElementById("quote-modal");
  if (!modal) return;

  if (e.target.classList.contains("modal__overlay")) {
    closeQuoteForm();
  }
});

// Close with ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeQuoteForm();
  }
});


/* ==============================
   PAGE INIT
============================== */

document.addEventListener("DOMContentLoaded", function () {

  const page = document.body.getAttribute("data-page");

  if (page === "shop") {
    renderShop();
  }

});
