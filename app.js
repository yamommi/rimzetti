/* ============================== PRODUCT DATA ============================== */
const PRODUCTS = [
  {
    itemNo: "001",
    name: "Rimzetti Forged Mesh",
    img: "images/image-1.png",
    sizes: ["18 inch", "19 inch", "20 inch", "22 inch"],
    colors: ["Silver", "Gunmetal"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/forged-mesh-wheels.html"
  },
  {
    itemNo: "002",
    name: "Rimzetti Apex Cast",
    img: "images/image-2.png",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Black", "Matte Black"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/apex-rims.html"
  },
  {
    itemNo: "003",
    name: "Rimzetti Factory Edition",
    img: "images/image-3.png",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Hyper Black", "Silver"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/luxury-alloy-wheels.html"
  },
  {
    itemNo: "004",
    name: "Rimzetti Stealth Sport",
    img: "images/image-4-black.png",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Satin Black", "Bronze"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/custom-forged-wheels.html"
  },
  {
    itemNo: "005",
    name: "Rimzetti Monoblock V1",
    img: "images/image-5.png",
    sizes: ["19 inch", "20 inch", "21 inch"],
    colors: ["Brushed Steel", "Gold"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/monoblock-forged-wheels.html"
  },
  {
    itemNo: "006",
    name: "Rimzetti Deep Dish",
    img: "images/image-6.png",
    sizes: ["20 inch", "22 inch", "24 inch"],
    colors: ["Chrome", "Black/Machined"],
    lugs: ["5-lug", "6-lug"],
    supplier: "https://www.alibaba.com/showroom/deep-dish-forged-wheels.html"
  },
  {
    itemNo: "007",
    name: "Rimzetti Circuit GTR",
    img: "images/image-7.png",
    sizes: ["18 inch", "19 inch"],
    colors: ["Gloss White", "Magnesium Blue"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/racing-forged-wheels.html"
  },
  {
    itemNo: "008",
    name: "Rimzetti Luxury Multi",
    img: "images/image-8.png",
    sizes: ["20 inch", "21 inch", "22 inch"],
    colors: ["Silver", "Black/Red Lip"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/luxury-alloy-wheels.html"
  },
  {
    itemNo: "009",
    name: "Rimzetti GT Performance",
    img: "images/image-9.png",
    sizes: ["19 inch", "20 inch"],
    colors: ["Matte Bronze", "Gloss Black"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/performance-forged-wheels.html"
  },
  {
    itemNo: "010",
    name: "Rimzetti Forged Star",
    img: "images/image-10.png",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Brushed Gold", "Silver"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/star-forged-wheels.html"
  },
  {
    itemNo: "011",
    name: "Rimzetti Aero Flow",
    img: "images/image-11.png",
    sizes: ["19 inch", "20 inch", "21 inch"],
    colors: ["Satin Grey", "Diamond Cut"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/showroom/flow-formed-wheels.html"
  },
  {
    itemNo: "012",
    name: "Rimzetti Titan Forged",
    img: "images/image-12.png",
    sizes: ["20 inch", "22 inch"],
    colors: ["Polished Titan", "Black"],
    lugs: ["5-lug", "6-lug"],
    supplier: "https://www.alibaba.com/showroom/heavy-duty-forged-wheels.html"
  },
  {
    itemNo: "013",
    name: "Rimzetti Flow King",
            img: "https://s.alicdn.com/@sc04/kf/H8fd6ff5a421e4821a42f7ce700a40a6fY.png_300x300.jpg",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Silver", "Gunmetal"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/product-detail/18-20-Inch-Wheel-Rim-Passenger_1601239747607.html"
  },
  {
    itemNo: "014",
    name: "Rimzetti Black Machine",
            img: "https://s.alicdn.com/@sc04/kf/Hc13804fa141745a6b741c88206f38313f.png_300x300.jpg",
    sizes: ["16 inch", "17 inch", "18 inch", "19 inch"],
    colors: ["Black Machine", "Silver Face"],
    lugs: ["4-lug", "5-lug"],
    supplier: "https://www.alibaba.com/product-detail/JPwheels-Black-Machine-Silver-Face-Wheels_1601198702088.html"
  },
  {
    itemNo: "015",
    name: "Rimzetti OEM Series",
            img: "https://s.alicdn.com/@sc04/kf/H17dc405a0736486690989d5229e26e460.png_300x300.jpg",
    sizes: ["17 inch", "18 inch", "19 inch", "20 inch"],
    colors: ["Silver", "Gunmetal"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/product-detail/Oem-17-18-19-20-Inch_1600950243144.html"
  },
  {
    itemNo: "016",
    name: "Rimzetti GVICHN Forged",
            img: "https://s.alicdn.com/@sc04/kf/H75cdd2ab5e774ce7815643227d444d17L.jpg_300x300.jpg",
    sizes: ["18 inch", "19 inch", "20 inch", "22 inch"],
    colors: ["Gloss Black", "Matte Black"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/product-detail/GVICHN-Brand-6061-T6-Aluminum-Black_1601044842605.html"
  },
  {
    itemNo: "017",
    name: "Rimzetti Multi-Spoke Concave",
            img: "https://s.alicdn.com/@sc04/kf/H2fe2b93c7816479fa48dc9ed9b95c3f9A.jpg_300x300.jpg",
    sizes: ["18 inch", "19 inch", "20 inch", "21 inch", "22 inch"],
    colors: ["Black", "Silver", "Bronze"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/product-detail/722Auto-Custom-Multi-Spoke-Forged-Wheels_1601527533669.html"
  },
  {
    itemNo: "018",
    name: "Rimzetti Flow FI-R",
            img: "https://s.alicdn.com/@sc04/kf/H5b67ebf6c16242b39fd48ad9352ef285a.jpg_300x300.jpg",
    sizes: ["19 inch", "20 inch"],
    colors: ["Silver", "Gunmetal"],
    lugs: ["5-lug"],
    supplier: "https://www.alibaba.com/product-detail/In-Stock-Alloy-Wheels-Rims-Flow_1601116900872.html"
  },
  {
    itemNo: "019",
    name: "Rimzetti Black Multi-Spoke",
            img: "https://s.alicdn.com/@sc04/kf/H2f8b49c1b0c64a69ac5b2cb3113d119eC.jpg_300x300.jpg",
    sizes: ["15 inch", "16 inch", "17 inch", "18 inch", "19 inch"],
    colors: ["Gloss Black", "Matte Black"],
    lugs: ["4-lug", "5-lug"],
    supplier: "https://www.alibaba.com/product-detail/Wholesale-Passenger-Car-Wheels_1601116900873.html"
  },
  {
    itemNo: "020",
    name: "Rimzetti Chrome Blade",
              img: "https://s.alicdn.com/@sc04/kf/H6c715958a47c498f8679a6fe5108ace4e.jpg_300x300.jpg",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Chrome", "Hyper Silver"],
    lugs: ["5-lug"],
        supplier: "https://www.alibaba.com/product-detail/Chrome-Polish-18-19-20-21_1601686067643.html"
  },
  {
    itemNo: "021",
    name: "Rimzetti Spoke Sport",
              img: "https://s.alicdn.com/@sc04/kf/H6406b5be91434e0aa79dc07a29b627f7u.png_300x300.jpg",
    sizes: ["17 inch", "18 inch", "19 inch"],
    colors: ["Silver", "Matte Grey"],
    lugs: ["5-lug"],
        supplier: "https://www.alibaba.com/product-detail/Racing-Wheels-1-piece-17-18_1601445063368.html"
  },
  {
    itemNo: "022",
    name: "Rimzetti Gloss White GTR",
              img: "https://s.alicdn.com/@sc04/kf/H5e45d1b6ce274724b1b363df8db0ddd1o.png_300x300.jpg",
    sizes: ["18 inch", "19 inch", "20 inch"],
    colors: ["Gloss White", "Pearl White"],
    lugs: ["5-lug"],
        supplier: "https://www.alibaba.com/product-detail/18-19-20-Inch-Customize-Multi_1601681270737.html"
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
    card.innerHTML =
      '<img class="product-image" src="' + product.img + '" alt="' + product.name + '" loading="lazy">' +
      '<div class="product-body">' +
        '<p class="product-itemno">Item #' + product.itemNo + '</p>' + '<p class="product-itemno">Item #' + product.itemNo + '</p>' + '<h3 class="product-title">' + product.name + '</h3>' +
        '<div class="product-row">' +
          '<span class="product-label">Sizes:</span>' +
          '<span class="product-value">' + product.sizes.join(", ") + '</span>' +
        '</div>' +
        '<div class="product-row">' +
          '<span class="product-label">Colors:</span>' +
          '<span class="product-value">' + product.colors.join(", ") + '</span>' +
        '</div>' +
        '<div class="product-row">' +
          '<span class="product-label">Lug Pattern:</span>' +
          '<span class="product-value">' + product.lugs.join(", ") + '</span>' +
        '</div>' +
      '</div>' +
      '<button class="btn-primary product-cta" type="button" onclick="openModal(\'' + product.itemNo + '\')">' +
        'VIEW & QUOTE' +
      '</button>';
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


  renderChips("m-sizes", product.sizes);
  renderChips("m-colors", product.colors);
  renderChips("m-lugs", product.lugs);

  const modal = document.getElementById("modal");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function renderChips(rowId, items) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.innerHTML = items.map(function(item, i) {
    return '<button type="button" class="chip' + (i === 0 ? ' is-active' : '') + '" onclick="selectChip(this, \'' + rowId + '\')">' + item + '</button>';
  }).join("");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function selectChip(btn, rowId) {
  const row = document.getElementById(rowId);
  row.querySelectorAll(".chip").forEach(function(c) { c.classList.remove("is-active"); });
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
  banner.innerHTML =
    '<span>' + msg + '</span>' +
    '<button onclick="this.parentElement.remove()" aria-label="Close">x</button>';
  document.body.prepend(banner);
  setTimeout(function() { if (banner.parentElement) banner.remove(); }, 8000);
}

/* ============================== INITIALIZE ============================== */
document.addEventListener("DOMContentLoaded", function() {
  if (document.body.dataset.page === "shop") {
    renderShop();
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
