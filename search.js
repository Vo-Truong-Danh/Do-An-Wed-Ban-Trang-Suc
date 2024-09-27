const products = [
  // { name: "LOVE BRACELET BRUSHED FINISH", image: "khuyen_mai_list/1.avif", link: "SanPham/love_bracelet.html" },
  // { name: "CARTIER D'AMOUR WEDDING BAND", image: "khuyen_mai_list/2.avif", link: "SanPham/cartier_damour.html" },
  // { name: "BRACELET, SMALL MODEL", image: "khuyen_mai_list/3.avif", link: "SanPham/bracelet_small_model.html" },
  // { name: "JUSTE UN CLOU BRACELET", image: "khuyen_mai_list/4.avif", link: "SanPham/juste_un_clou_bracelet.html" },
  // { name: "LOVE BRACELET", image: "khuyen_mai_list/5.avif", link: "SanPham/love_bracelet.html" },
  // { name: "LOVE RING, 3 DIAMONDS", image: "khuyen_mai_list/6.avif", link: "SanPham/love_ring_3_diamonds.html" },
  // { name: "TRINITY BARCELET", image: "khuyen_mai_list/7.avif", link: "SanPham/trinity_barcelet.html" },
  // { name: "TRINITY RING LARGE MODEL", image: "khuyen_mai_list/8.avif", link: "SanPham/trinity_ring_large_model.html" },
  // { name: "LOVE NECKLACE", image: "images_favor_list/1.avif", link: "SanPham/love_necklace.html" },
  // { name: "LOVE BRACELET", image: "images_favor_list/2.avif", link: "SanPham/love_bracelet.html" },
  // { name: "1895 WEDDING BAND", image: "images_favor_list/3.avif", link: "SanPham/1895_wedding_band.html" },
  // { name: "1895 WEDDING BAND", image: "images_favor_list/4.avif", link: "SanPham/1895_wedding_band.html" },
  // { name: "PANTHER DE CARTIER RING", image: "images_favor_list/5.avif", link: "SanPham/panther_de_cartier_ring.html" },
  // { name: "LOVE RING, 3 DIAMONDS", image: "images_favor_list/6.avif", link: "SanPham/love_ring_3_diamonds.html" },
  // { name: "CARTIER D'AMOUR BRACELET", image: "images_favor_list/7.avif", link: "SanPham/cartier_damour_bracelet.html" },
  // { name: "TRINITY RING LARGE MODEL", image: "images_favor_list/8.avif", link: "SanPham/trinity_ring_large_model.html" },
  { name: "LOVE NECKLACE", image: "SanPham/images/SPDC1/1.avif", link: "SanPham/13.html?id=13" },
  { name: "CARTIER D'AMOUR", image: "SanPham/images/SPDC2/1.avif", link: "SanPham/14.html?id=14" },
  { name: "Leve RING", image: "SanPham/images/SPDC3/1.avif", link: "SanPham/15.html?id=15" },
  { name: "TRINITY NECKLACE", image: "SanPham/images/SPDC4/1.avif", link: "SanPham/16.html?id=16" },
  { name: "AMULETTE DE", image: "SanPham/images/SPDC5/1.avif", link: "SanPham/17.html?id=17" },
  { name: "CLASH DE CARTIER", image: "SanPham/images/SPDC6/1.avif", link: "SanPham/18.html?id=18" },
  { name: "Stella Bracelet", image: "SanPham/images/SPDC1/1.avif", link: "SanPham/19.html?id=19" },
  { name: "Luna Necklace", image: "SanPham/images/SPDC2/1.avif", link: "SanPham/20.html?id=20" },
  { name: "Aurora Ring", image: "SanPham/images/SPDC3/1.avif", link: "SanPham/21.html?id=21" },
  { name: "Nova Earrings", image: "SanPham/images/SPDC4/1.avif", link: "SanPham/22.html?id=22" },
  { name: "Galaxy Brooch", image: "SanPham/images/SPDC5/1.avif", link: "SanPham/23.html?id=23" },
  { name: "Celestia Cuff", image: "SanPham/images/SPDC6/1.avif", link: "SanPham/24.html?id=24" },
  { name: "LOVE BRACELET", image: "SanPham/images/SPN1/2.avif", link: "SanPham/1.html?id=1" },
  { name: "CLASH DE CARTIER", image: "SanPham/images/SPN2/1.avif", link: "SanPham/2.html?id=2" },
  { name: "LEEVE RING", image: "SanPham/images/SPN3/1.avif", link: "SanPham/3.html?id=3" },
  { name: "CLASSIC TRINITY", image: "SanPham/images/SPN4/1.avif", link: "SanPham/4.html?id=4" },
  { name: "JUSTE UN CLOU", image: "SanPham/images/SPN5/1.avif", link: "SanPham/5.html?id=5" },
  { name: "CLASH DE CARTIER", image: "SanPham/images/SPN6/1.avif", link: "SanPham/6.html?id=6" },
  { name: "CDE CARTIER", image: "SanPham/images/SPN1/1.avif", link: "SanPham/7.html?id=7" },
  { name: "JUSTE UN CLOU", image: "SanPham/images/SPN2/1.avif", link: "SanPham/8.html?id=8" },
  { name: "JUSTE IN YOU", image: "SanPham/images/SPN3/1.avif", link: "SanPham/9.html?id=9" },
  { name: "CLASH DE CARTIER", image: "SanPham/images/SPN4/1.avif", link: "SanPham/10.html?id=10" },
  { name: "PANTHERE DE CARTIER", image: "SanPham/images/SPN5/1.avif", link: "SanPham/11.html?id=11" },
  { name: "LOVE BRACELETYOU", image: "SanPham/images/SPN6/1.avif", link: "SanPham/12.html?id=12" },
  { name: "Sapphire Bracelet", image: "SanPham/images/SPV1/1.avif", link: "SanPham/25.html?id=25" },
  { name: "Emerald Ring", image: "SanPham/images/SPV2/1.avif", link: "SanPham/26.html?id=26" },
  { name: "Diamond Necklace", image: "SanPham/images/SPV3/1.avif", link: "SanPham/27.html?id=27" },
  { name: "Pearl Bracelet", image: "SanPham/images/SPV4/1.avif", link: "SanPham/28.html?id=28" },
  { name: "Ruby Pendant", image: "SanPham/images/SPV5/1.avif", link: "SanPham/29.html?id=29" },
  { name: "Gold Earrings", image: "SanPham/images/SPV6/1.avif", link: "SanPham/30.html?id=30" },
  { name: "Sapphire Bracelet", image: "SanPham/images/SPV3/1.avif", link: "SanPham/31.html?id=31" },
  { name: "Emerald Necklace", image: "SanPham/images/SPV4/1.avif", link: "SanPham/32.html?id=32" },
  { name: "Ruby Ring", image: "SanPham/images/SPV5/1.avif", link: "SanPham/33.html?id=33" },
  { name: "Diamond Earrings", image: "SanPham/images/SPV6/1.avif", link: "SanPham/34.html?id=34" },
  { name: "Topaz Brooch", image: "SanPham/images/SPV1/1.avif", link: "SanPham/35.html?id=35" },
  { name: "Opal Cuff", image: "SanPham/images/SPV3/2.avif", link: "SanPham/36.html?id=36" }
];

  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');

  searchButton.addEventListener('click', searchProducts);
  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      searchProducts();
    }
  });

 
  searchInput.addEventListener('input', searchProducts); 

  // Gắn sự kiện click ra ngoài kết quả tìm kiếm
  document.addEventListener('click', function(event) {
    if (event.target !== searchInput && event.target !== searchButton && !searchResults.contains(event.target)) {
      searchResults.style.display = 'none'; // Ẩn kết quả tìm kiếm
    }
  });

  // Hàm tìm kiếm sản phẩm
  function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    searchResults.innerHTML = ''; // Xóa kết quả tìm kiếm cũ

    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm);
    });

    // Kiểm tra xem có sản phẩm nào được tìm thấy hay không
    if (filteredProducts.length > 0) {
      // Hiển thị kết quả tìm kiếm
      filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('search-result'); // Sử dụng class mới
        productElement.addEventListener('click', () => {
          window.location.href = product.link; // Chuyển hướng đến trang sản phẩm
        });

        const imageElement = document.createElement('div');
        imageElement.classList.add('search-result-image'); 
        imageElement.style.backgroundImage = `url(${product.image})`;

        const contentElement = document.createElement('div');
        contentElement.classList.add('search-result-content'); // Sử dụng class mới
        contentElement.innerHTML = `<h5>${product.name}</h5>`;

        productElement.appendChild(imageElement);
        productElement.appendChild(contentElement);
        searchResults.appendChild(productElement);
      });
      searchResults.style.display = 'flex'; // Hiển thị kết quả tìm kiếm
    } else {
      // Hiển thị thông báo không tìm thấy sản phẩm
      searchResults.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p>';
      searchResults.style.display = 'flex'; // Hiển thị thông báo
    }
  }