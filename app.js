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
  },
  {
    itemNo: "004",
    name: "Rimzetti Series 4",
    img: "images/image-4-black.png", // This is the main display image
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Black", "Bronze", "Red"], // These will show up in the pop-up
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
    name: "Rimzetti深 Rim Deep",
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
  },
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
