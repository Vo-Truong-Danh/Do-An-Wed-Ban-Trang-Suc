// cart.js

// Khởi tạo giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm lấy giỏ hàng từ localStorage
function getCart() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

// Hàm lưu giỏ hàng vào localStorage
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
  const product = products.find(p => p.id === productId); 
  if (!product) {
    console.error('Product not found!');
    return;
  }

  let cart = getCart(); 

  // Thêm sản phẩm vào giỏ hoặc tăng số lượng nếu sản phẩm đã có trong giỏ
  if (cart[productId]) {
    cart[productId]++;
  } else {
    cart[productId] = 1;
  }

  saveCart(cart);
  updateCartBadge(); 
  alert('Đã thêm sản phẩm vào giỏ hàng!');
}

// Hàm cập nhật số lượng sản phẩm trong badge
function updateCartBadge() {
  let cart = getCart();
  let cartSize = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  document.getElementById('cartBadge').textContent = cartSize;
}

// Hàm render sản phẩm
function renderProducts(products) {
  const productContainer = document.querySelector('.chitietnhieusanpham .row.row-cols-2');
  productContainer.innerHTML = '';

  products.forEach((product, index) => {
    const productHTML = `
      <div class="col" id="product-${product.id}"> 
        <div class="p-3">
          <div class="card" style="width: 19.5rem;">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.price.toLocaleString()}đ</p>
              <div class="d-flex justify-content-between align-items-center">
                <a href="${product.detailLink}" class="btn btn-danger flex-grow-1">Chi tiết</a>
                <button onclick="addToCart(${product.id})" class="btn btn-outline-dark flex-grow-1" data-id="${product.id}">Thêm giỏ</button>
              </div>                        
            </div>
          </div>
        </div>
      </div>
    `;
    productContainer.innerHTML += productHTML;
  });
}

// Xử lý sự kiện click cho các nút sắp xếp
window.addEventListener('load', () => {
  const sortButtons = document.querySelectorAll('.chitietnhieusanpham-loc button');
  sortButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sortBy = button.dataset.sort;
      switch (sortBy) {
        case 'low-to-high':
          products.sort((a, b) => a.price - b.price);
          break;
        case 'high-to-low':
          products.sort((a, b) => b.price - a.price);
          break;
        case 'popular':
          products.sort((a, b) => {
            if (a.category === 'popular' && b.category !== 'popular') {
              return -1;
            } else if (a.category !== 'popular' && b.category === 'popular') {
              return 1;
            } else {
              return 0;
            }
          });
          break;
        default:
          break;
      }
      renderProducts(products);
    });
  });

  // Hiển thị sản phẩm mặc định khi trang được tải
  renderProducts(products);
  updateCartBadge(); // Cập nhật badge khi tải trang
});