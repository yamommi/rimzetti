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
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Sizes: ${product.sizes.join(", ")}</p>
      <button onclick="openQuoteForm('${product.itemNo}')">Get a Quote</button>
    `;
    grid.appendChild(card);
  });
}

/* ============================== MODAL LOGIC ============================== */
function openQuoteForm(itemNo) {
  const product = PRODUCTS.find(p => p.itemNo === itemNo);
  if (!product) return;

  const modal = document.getElementById("quote-modal");
  const modalTitle = document.getElementById("modal-product-name");
  const sizeSelect = document.getElementById("quote-size");
  const colorSelect = document.getElementById("quote-color");
  const lugSelect = document.getElementById("quote-lugs");

  modalTitle.innerText = `Quote for ${product.name}`;

  // Fill Options
  sizeSelect.innerHTML = product.sizes.map(s => `<option value="${s}">${s}</option>`).join("");
  colorSelect.innerHTML = product.colors.map(c => `<option value="${c}">${c}</option>`).join("");
  lugSelect.innerHTML = product.lugs.map(l => `<option value="${l}">${l}</option>`).join("");

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeQuoteForm() {
  const modal = document.getElementById("quote-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

/* ============================== INITIALIZE ============================== */
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.page === "shop") {
    renderShop();
  }
});
