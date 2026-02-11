/************************************
 Rimzetti — Quote-Only Catalog System
 STABLE / WORKING / FINAL
************************************/

// -------------------------------
// PRODUCT DATA
// -------------------------------
const PRODUCTS = [
  { 
    itemNo: 'Item No. 001', 
    name: 'Forged Rims', 
    img: 'images/image-1.png', 
    sizes: ['18 inch', '19 inch', '20 inch', '22 inch'], 
    colors: ['Silver'], 
    lugs: ['5-lug'] 
  },
  { 
    itemNo: 'Item No. 002', 
    name: 'Rimzetti Apex Cast', 
    img: 'images/image-2.png', 
    sizes: ['18 inch', '19 inch', '20 inch'], 
    colors: ['Black'], 
    lugs: ['5-lug'] 
  },
  { 
    itemNo: 'Item No. 003', 
    name: 'Rimzetti Factory Edition', 
    img: 'images/image-3.png', 
    sizes: ['18 inch', '19 inch', '20 inch'], 
    colors: ['Hyper Black'], 
    lugs: ['5-lug'] 
  },
  {
    itemNo: 'Item No. 004',
    name: 'Rimzetti Multi-Spoke',
    img: 'images/image-4-black.png',
    sizes: ['18 inch', '20 inch', '22 inch'],
    colors: ['Matte Black', 'Bronze', 'Red'],
    lugs: ['6-lug'],
    imagesByColor: {
      'Matte Black': 'images/image-4-black.png',
      'Bronze': 'images/image-4-bronze.png',
      'Red': 'images/image-4-red.png'
    }
  },
  { 
    itemNo: 'Item No. 005', 
    name: 'Rimzetti Grey Edition', 
    img: 'images/image-5.png', 
    sizes: ['18 inch', '19 inch', '20 inch', '21 inch'], 
    colors: ['Grey'], 
    lugs: ['5-lug'] 
  },
  { 
    itemNo: 'Item No. 006', 
    name: 'Rimzetti Best Seller', 
    img: 'images/image-6.png', 
    sizes: ['17 inch', '18 inch', '19 inch', '20 inch'], 
    colors: ['Black'], 
    lugs: ['5-lug'] 
  },
  { 
    itemNo: 'Item No. 007', 
    name: 'Offroad Beadlock Alloy Wheel', 
    img: 'images/image-7.png', 
    sizes: ['17 inch'], 
    colors: ['Black'], 
    lugs: ['5-lug'] 
  },
  { 
    itemNo: 'Item No. 008', 
    name: 'Multi-Fit Alloy Wheel', 
    img: 'images/image-8.png', 
    sizes: ['15 inch'], 
    colors: ['Silver'], 
    lugs: ['4-lug', '6-lug'] 
  },
  { 
    itemNo: 'Item No. 009', 
    name: 'Five-Spoke Performance Rim', 
    img: 'images/image-9.png', 
    sizes: ['15 inch', '16 inch', '17 inch', '18 inch'], 
    colors: ['Silver'], 
    lugs: ['5-lug'] 
  },
  { 
    itemNo: 'Item No. 010', 
    name: 'Insert Style Rim', 
    img: 'images/image-10.png', 
    sizes: ['15 inch', '16 inch'], 
    colors: ['Black'], 
    lugs: ['4-lug', '5-lug'] 
  },
  { 
    itemNo: 'Item No. 011', 
    name: 'Street Performance Rim', 
    img: 'images/image-11.png', 
    sizes: ['15 inch', '16 inch', '17 inch', '18 inch'], 
    colors: ['Silver'], 
    lugs: ['4-lug', '5-lug'] 
  }
];

// -------------------------------
// STATE
// -------------------------------
let activeProduct = null;
let selections = { size: '', color: '', lugs: '' };

// -------------------------------
// HELPERS
// -------------------------------
const $ = (id) => document.getElementById(id);

// -------------------------------
// RENDER SHOP
// -------------------------------

function renderShop() {
  const grid = document.getElementById('product-grid');

  if (!grid) {
    console.error("❌ product-grid not found.");
    return;
  }

  console.log("🛒 Rendering shop...");
  console.log("Total products:", PRODUCTS.length);

  grid.innerHTML = '';

  PRODUCTS.forEach((product, index) => {
    console.log(`🔍 Product ${index + 1}:`, product);

    // Safety check
    if (!product.itemNo || !product.name || !product.img) {
      console.warn("⚠️ Missing required fields:", product);
      return;
    }

    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p class="muted">${product.itemNo}</p>
      <button class="btn-primary" onclick="openModal('${product.itemNo}')">
        Request Quote
      </button>
    `;

    grid.appendChild(card);
  });

  console.log("✅ Shop render complete.");
}

// -------------------------------
// PRODUCT MODAL
// -------------------------------
function openModal(itemNo) {
  const product = PRODUCTS.find(p => p.itemNo === itemNo);

  if (!product) {
    console.error("❌ Product not found:", itemNo);
    return;
  }

  activeProduct = product;

  selections.size = product.sizes?.[0] || '';
  selections.color = product.colors?.[0] || '';
  selections.lugs = product.lugs?.[0] || '';

  $('m-title').textContent = product.name;
  $('m-itemno').textContent = product.itemNo;
  $('m-img').src = product.img;

  renderOptions(product);
  $('modal').classList.add('is-open');
}

function closeModal() {
  $('modal').classList.remove('is-open');
}

// -------------------------------
// OPTIONS
// -------------------------------

function renderOptions(product) {
  // Sizes
  if (Array.isArray(product.sizes) && product.sizes.length) {
    renderGroup('m-sizes', product.sizes, selections.size, v => selections.size = v);
  } else {
    $('m-sizes').innerHTML = '<span class="muted">N/A</span>';
  }

  // Colors
  if (Array.isArray(product.colors) && product.colors.length) {
    renderGroup('m-colors', product.colors, selections.color, v => {
      selections.color = v;
      if (product.imagesByColor?.[v]) {
        $('m-img').src = product.imagesByColor[v];
      }
    });
  } else {
    $('m-colors').innerHTML = '<span class="muted">N/A</span>';
  }

  // Lugs
  if (Array.isArray(product.lugs) && product.lugs.length) {
    renderGroup('m-lugs', product.lugs, selections.lugs, v => selections.lugs = v);
  } else {
    $('m-lugs').innerHTML = '<span class="muted">N/A</span>';
  }
}

// -------------------------------
// RENDER OPTION BUTTON GROUPS
// -------------------------------
function renderGroup(containerId, values, selected, onClick) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  values.forEach(v => {
    const btn = document.createElement('button');
    btn.className = 'chip' + (v === selected ? ' is-active' : '');
    btn.textContent = v;

    btn.onclick = () => {
      onClick(v);
      renderOptions(activeProduct);
    };

    container.appendChild(btn);
  });
}

// -------------------------------
// QUOTE MODAL
// -------------------------------
function openQuoteForm() {
  // hide product modal
  $('modal').classList.remove('is-open');

  $('q-itemno').value = activeProduct?.itemNo || '';
  $('q-rim').value = activeProduct?.name || '';
  $('q-size').value = selections.size || '';
  $('q-color').value = selections.color || '';
  $('q-lugs').value = selections.lugs || '';

  // show quote modal – use same class as product modal
  $('quote-modal').classList.add('is-open');
}

function closeQuoteForm() {
  $('quote-modal').classList.remove('is-open');
}

// -------------------------------
// CONTACT MODAL
// -------------------------------
function openContactForm() {
  $('contact-modal').classList.add('is-open');
}

function closeContactForm() {
  $('contact-modal').classList.remove('is-open');
}

// -------------------------------
// INIT
// -------------------------------
document.addEventListener('DOMContentLoaded', renderShop);

