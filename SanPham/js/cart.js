// cart.js

// Khởi tạo giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm lấy thông tin sản phẩm từ DOM (sử dụng trong cả addToCart và buyNow)
function getProductInfo(productId) {
  const productElement = document.querySelector(`[data-product-id="${productId}"]`);
  if (!productElement) {
    console.error("Không tìm thấy sản phẩm có ID:", productId);
    return null;
  }

  return {
    name: productElement.querySelector('[data-product-name]').textContent,
    image: productElement.querySelector('[data-product-image]').getAttribute('src'),
    price: productElement.querySelector('[data-product-price]').textContent,
  };
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(buttonElement) {
  const productId = parseInt(buttonElement.dataset.id);
  const productInfo = getProductInfo(productId);
  const quantityInput = document.getElementById('quantityInput');
  const quantity = parseInt(quantityInput.value) || 1;

  if (productInfo) {
    // Tìm sản phẩm đã tồn tại trong giỏ hàng
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex !== -1) {
      // Tăng số lượng cho sản phẩm đã tồn tại
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Thêm sản phẩm mới vào giỏ hàng
      cart.push({
        id: productId,
        name: productInfo.name,
        image: productInfo.image,
        price: productInfo.price,
        quantity: quantity,
      });
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện
    updateCartCount();

    // Hiển thị thông báo
    console.log(`Đã thêm ${quantity} sản phẩm ${productInfo.name} vào giỏ hàng.`);
  }
}

// Hàm xử lý mua ngay
function buyNow(buttonElement) {
  const productId = parseInt(buttonElement.dataset.id);
  const productInfo = getProductInfo(productId);
  const quantityInput = document.getElementById('quantityInput');
  const quantity = parseInt(quantityInput.value) || 1;

  if (productInfo) {
    // Tạo giỏ hàng tạm thời
    const tempCart = [
      {
        id: productId,
        name: productInfo.name,
        image: productInfo.image,
        price: productInfo.price,
        quantity: quantity,
      },
    ];

    // Lưu giỏ hàng tạm thời vào localStorage
    localStorage.setItem('tempCart', JSON.stringify(tempCart));

    // Chuyển hướng đến trang thanh toán
    window.location.href = "cart.html";
  }
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng (trên giao diện)
function updateCartCount() {
  const cartCountElement = document.getElementById('cartBadge');
  if (cartCountElement) {
    cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }
}

// Hàm hiển thị sản phẩm trong giỏ hàng
function renderCart() {
  const cartItemsElement = document.getElementById('products-cart');
  let cartItemsHTML = '';
  let totalPrice = 0;

  // Lấy giỏ hàng từ localStorage
  let cartToDisplay = cart;

  // Kiểm tra giỏ hàng tạm thời 
  const tempCart = JSON.parse(localStorage.getItem('tempCart'));
  if (tempCart) {
    cartToDisplay = tempCart;
    localStorage.removeItem('tempCart');
  }

  if (cartToDisplay.length === 0) {
    cartItemsHTML = '<tr><td colspan="6" class="text-center">Giỏ hàng trống</td></tr>';
  } else {
    cartToDisplay.forEach(item => {
      const itemTotal = item.quantity * parseFloat(item.price.replace(/,/g, ''));
      totalPrice += itemTotal;
      cartItemsHTML += `
      <tr>
      <td><img src="${item.image}" alt="${item.name}" width="70%"></td>
      <td>${item.name}</td>
      <td>${item.price}<sup>đ</sup></td>
      <td>
        <div class="quantity-control">
          <button onclick="changeQuantity(${item.id}, -1)" class="minus nuttru">-</button>
          <input type="number" step="1" min="1" max="10" 
                 value="${item.quantity}" 
                 title="Qty" class="qty" 
                 data-product-id="${item.id}"
                 onchange="updateQuantityFromInput(this)">
          <button onclick="changeQuantity(${item.id}, 1)" class="plus nutcong">+</button>
        </div>
      </td>
      <td>${itemTotal.toLocaleString()}<sup>đ</sup></td>
      <td><button onclick="removeItem(${item.id})">Xóa</button></td>
    </tr>
    
      `;
    });
  }

  cartItemsElement.innerHTML = cartItemsHTML;
  document.getElementById('total-money').textContent = totalPrice.toLocaleString();
}

// Hàm thay đổi số lượng sản phẩm
function changeQuantity(productId, amount) {
  // Tìm sản phẩm trong giỏ hàng
  const productIndex = cart.findIndex(item => item.id === productId);
  if (productIndex !== -1) {
    // Thay đổi số lượng sản phẩm
    cart[productIndex].quantity += amount;

    // Kiểm tra nếu số lượng nhỏ hơn 1, đặt về 1
    if (cart[productIndex].quantity < 1) {
      cart[productIndex].quantity = 1;
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Cập nhật số lượng sản phẩm trên giao diện
    updateCartCount();

    // Cập nhật lại hiển thị giỏ hàng
    renderCart();
  }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeItem(productId) {
  // Lọc sản phẩm cần xóa khỏi giỏ hàng
  cart = cart.filter(item => item.id !== productId);

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Cập nhật số lượng sản phẩm trên giao diện
  updateCartCount();

  // Cập nhật lại hiển thị giỏ hàng
  renderCart();
}

// Gọi hàm cập nhật số lượng khi trang được tải
updateCartCount();

// Gọi hàm renderCart khi trang cart.html được tải
if (window.location.pathname.endsWith('cart.html')) {
  renderCart();
}

// Hàm cập nhật số lượng từ input
function updateQuantityFromInput(inputElement) {
  const productId = parseInt(inputElement.dataset.productId);
  const quantity = parseInt(inputElement.value);

  // Tìm sản phẩm trong giỏ hàng
  const productIndex = cart.findIndex(item => item.id === productId);
  if (productIndex !== -1) {
    // Cập nhật số lượng sản phẩm
    cart[productIndex].quantity = quantity;

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Cập nhật số lượng sản phẩm trên giao diện
    updateCartCount();

    // Cập nhật lại hiển thị giỏ hàng
    renderCart();
  }
}