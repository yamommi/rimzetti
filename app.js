/************************************
 Rimzetti — Quote Catalog System
 STABLE FINAL VERSION
************************************/

/* =========================
   PRODUCT DATA
   ========================= */
const PRODUCTS = [
  { itemNo: 'Item No. 001', name: 'Forged Rims', img: 'images/image-1.png', sizes: ['18"','19"','20"'], colors: ['Silver'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 002', name: 'Rimzetti Apex Cast', img: 'images/image-2.png', sizes: ['18"','19"','20"'], colors: ['Black'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 003', name: 'Rimzetti Factory Edition', img: 'images/image-3.png', sizes: ['18"','19"','20"'], colors: ['Hyper Black'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 004', name: 'Rimzetti Elite V1', img: 'images/image-4-black.png', sizes: ['18"','19"','20"'], colors: ['Black'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 005', name: 'Rimzetti Elite Bronze', img: 'images/image-4-bronze.png', sizes: ['18"','19"','20"'], colors: ['Bronze'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 006', name: 'Rimzetti Elite Red', img: 'images/image-4-red.png', sizes: ['18"','19"','20"'], colors: ['Red'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 007', name: 'Rimzetti Classic 5-Spoke', img: 'images/image-5.png', sizes: ['17"','18"'], colors: ['Silver'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 008', name: 'Rimzetti Vortex', img: 'images/image-6.png', sizes: ['18"','19"'], colors: ['Black'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 009', name: 'Rimzetti Racer X', img: 'images/image-7.png', sizes: ['18"','20"'], colors: ['Gunmetal'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 010', name: 'Rimzetti Sport Edition', img: 'images/image-8.png', sizes: ['19"','20"'], colors: ['Silver'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 011', name: 'Rimzetti Street Ready', img: 'images/image-9.png', sizes: ['17"','18"'], colors: ['Black'], lugs: ['5-lug'] },
  { itemNo: 'Item No. 012', name: 'Rimzetti Ultra Sport', img: 'images/image-10.png', sizes: ['19"','20"'], colors: ['Chrome'], lugs: ['5-lug'] }
];


/* =========================
   RENDER SHOP GRID
   ========================= */
function renderShop() {

  const grid = document.querySelector(".product-grid");

  // 🚨 STOP if not on shop page
  if (!grid) return;

  grid.innerHTML = "";

  PRODUCTS.forEach((p, i) => {

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img class="product-image" src="${p.img}" alt="${p.name}">

      <div class="product-body">
        <h3 class="product-title">${p.name}</h3>

        <div class="product-row">
          <span class="product-label">Item:</span>
          <span class="product-value">${p.itemNo}</span>
        </div>

        <div class="product-row">
          <span class="product-label">Sizes:</span>
          <span class="product-value">${p.sizes.join(", ")}</span>
        </div>

        <div class="product-row">
          <span class="product-label">Finish:</span>
          <span class="product-value">${p.colors.join(", ")}</span>
        </div>

        <div class="product-row">
          <span class="product-label">Bolt:</span>
          <span class="product-value">${p.lugs.join(", ")}</span>
        </div>
      </div>

      <button class="btn-primary product-cta" onclick="sendQuote('${p.name}')">
        Request Quote
      </button>
    `;

    grid.appendChild(card);
  });
}


/* =========================
   EMAIL QUOTE BUTTON
   ========================= */
function sendQuote(productName){

  const subject = `Rim Quote Request — ${productName}`;
  const body = `
Hello Rimzetti,

I would like a quote for:
${productName}

Vehicle Year:
Vehicle Make:
Vehicle Model:
Wheel Size Wanted:
Finish Color:

Thank you.
`;

  window.location.href =
  `mailto:support@rimzetti.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}


/* =========================
   START SCRIPT SAFELY
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  renderShop(); // only runs if product-grid exists
});
