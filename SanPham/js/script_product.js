document.addEventListener("DOMContentLoaded", function () {
    const showCubeBtn = document.getElementById("showCubeBtn");
    const cubeContainer = document.querySelector(".cube-container");
    const cube = document.querySelector('.cube');
    const buttons = document.querySelectorAll('.buttoncube3d, .buttoncube');
    const images = document.querySelectorAll('.product-content-right-color img');
    const modal = document.querySelector(".huong-dan-modal");
    const trigger = document.querySelector(".huong-dan-link p");
    const closeBtn = document.querySelector(".close");
    const select = document.getElementById("mySelect");

    if (showCubeBtn && cubeContainer) {
        showCubeBtn.addEventListener("click", function () {
            cubeContainer.classList.toggle("show-cube");
        });
    }

    let isMouseDown = false;
    let startX, startY;
    let cubeRotateX = 0;
    let cubeRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;

    if (cube) {
        document.addEventListener('mousedown', function (e) {
            isMouseDown = true;
            startX = e.clientX;
            startY = e.clientY;
        });

        document.addEventListener('mouseup', function () {
            isMouseDown = true;
            currentRotateX = cubeRotateX;
            currentRotateY = cubeRotateY;
        });

        document.addEventListener('mousemove', function (e) {
            if (isMouseDown) {
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;
                cubeRotateY = currentRotateY + deltaX * 0.5;
                cubeRotateX = currentRotateX - deltaY * 0.5;
                cube.style.transform = `rotateY(${cubeRotateY}deg) rotateX(${cubeRotateX}deg)`;
            }
        });

        document.addEventListener('mouseleave', function () {
            isMouseDown = false;
        });
    }

    let activeButton = null;
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            buttons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.add('dimmed');
                }
            });
        });

        button.addEventListener('mouseout', () => {
            buttons.forEach(btn => {
                btn.classList.remove('dimmed');
            });
        });

        button.addEventListener('click', (event) => {
            if (activeButton && activeButton.classList.contains('buttoncube3d') && button !== activeButton) {
                event.stopPropagation();
                event.preventDefault();
                return;
            }

            if (activeButton === button) {
                activeButton = null;
            } else {
                activeButton = button;
            }
        });
    });

    let activeImage = null;
    if (images.length > 0) {
        const firstImage = images[0];
        firstImage.classList.add('selected');
        images.forEach(image => {
            image.addEventListener('click', (event) => {
                images.forEach(img => {
                    img.classList.add('dimmed');
                });

                image.classList.remove('dimmed');

                if (activeImage === image) {
                    activeImage = null;
                    image.classList.remove('selected');
                } else {
                    if (activeImage) {
                        activeImage.classList.remove('selected');
                    }
                    activeImage = image;
                    image.classList.add('selected');

                    if (activeImage !== firstImage) {
                        firstImage.classList.remove('selected');
                    }
                }
            });
        });
    }

    if (trigger && modal && closeBtn) {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    if (select) {
        select.addEventListener("mouseover", function () {
            const options = this.getElementsByTagName("option");
            for (let i = 0; i < options.length; i++) {
                options[i].addEventListener("mouseover", function () {
                    this.classList.add("option-hover");
                });
                options[i].addEventListener("mouseout", function () {
                    this.classList.remove("option-hover");
                });
            }
        });
    }

    const bigImgCarousel = document.querySelector("#carouselExampleIndicators");
    const smallImgs = document.querySelectorAll(".product-content-left-small-img button img");

    smallImgs.forEach(function (imgItem, index) {
        imgItem.addEventListener("click", function () {
            const activeItem = bigImgCarousel.querySelector(".carousel-item.active img");
            activeItem.src = imgItem.src;
        });
    });

    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');

    if (toastTrigger && toastLiveExample) {
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        toastTrigger.addEventListener('click', function () {
            toastBootstrap.show();
        });
    }

    // Thanh Truot
    $(document).ready(function() {
        $('.regularSide').slick({
            dots: true, // Hiển thị chấm tròn
            infinite: true, // Vô hạn vòng lặp
            slidesToShow: 3, // Số lượng slide hiển thị
            slidesToScroll: 1, // Số lượng slide trượt mỗi lần
        });

        $('.centerSide').slick({
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>'
        });
    });
});

const canvas = document.getElementById('logoCanvas');
                    const ctx = canvas.getContext('2d');
            
                    // Đặt kích thước canvas theo phần tử chứa
                    function resizeCanvas() {
                        canvas.width = canvas.parentElement.clientWidth;
                        canvas.height = canvas.parentElement.clientHeight;
                    }
            
                    function drawDiamondRing() {
                        const ringCenterX = canvas.width / 2;
                        const ringCenterY = canvas.height / 2;
                        const ringRadius = canvas.width * 0.1; // Bán kính nhẫn khoảng 10% chiều rộng canvas
                        const diamondTopY = ringCenterY - ringRadius - canvas.height * 0.0375; // Đỉnh viên kim cương cách đỉnh nhẫn 3.75% chiều cao canvas
            
                        // Vẽ nhẫn
                        ctx.beginPath();
                        ctx.arc(ringCenterX, ringCenterY, ringRadius, 0, 2 * Math.PI);
                        ctx.strokeStyle = 'gold';
                        ctx.lineWidth = canvas.width * 0.025; // Độ rộng đường vẽ nhẫn 2.5% chiều rộng canvas
                        ctx.stroke();
                        ctx.closePath();
            
                        // Lưu trạng thái hiện tại của canvas
                        ctx.save();
                        // Di chuyển điểm gốc về tâm viên kim cương
                        ctx.translate(ringCenterX, diamondTopY + canvas.height * 0.0375);
                        // Xoay canvas 180 độ (PI radian)
                        ctx.rotate(Math.PI);
                        // Di chuyển điểm gốc về vị trí ban đầu
                        ctx.translate(-ringCenterX, -(diamondTopY + canvas.height * 0.0375));
            
                        // Vẽ viên kim cương
                        ctx.beginPath();
                        ctx.moveTo(ringCenterX, diamondTopY);  // Đỉnh trên
                        ctx.lineTo(ringCenterX - ringRadius * 0.375, diamondTopY + ringRadius * 0.625); // Trái trên
                        ctx.lineTo(ringCenterX - ringRadius * 0.175, diamondTopY + ringRadius * 0.875); // Trái dưới
                        ctx.lineTo(ringCenterX + ringRadius * 0.175, diamondTopY + ringRadius * 0.875); // Phải dưới
                        ctx.lineTo(ringCenterX + ringRadius * 0.375, diamondTopY + ringRadius * 0.625); // Phải trên
                        ctx.closePath();
                        ctx.strokeStyle = 'cyan';
                        ctx.lineWidth = canvas.width * 0.0075; // Độ rộng đường vẽ kim cương 0.75% chiều rộng canvas
                        ctx.stroke();
                        ctx.fillStyle = 'lightblue'; // Màu tô cho viên kim cương
                        ctx.fill();
            
                        // Vẽ các đường bên trong viên kim cương
                        ctx.beginPath();
                        ctx.moveTo(ringCenterX, diamondTopY);
                        ctx.lineTo(ringCenterX - ringRadius * 0.175, diamondTopY + ringRadius * 0.875);
                        ctx.moveTo(ringCenterX, diamondTopY);
                        ctx.lineTo(ringCenterX + ringRadius * 0.175, diamondTopY + ringRadius * 0.875);
                        ctx.moveTo(ringCenterX - ringRadius * 0.375, diamondTopY + ringRadius * 0.625);
                        ctx.lineTo(ringCenterX + ringRadius * 0.375, diamondTopY + ringRadius * 0.625);
                        ctx.strokeStyle = 'cyan';
                        ctx.stroke();
            
                        // Khôi phục trạng thái canvas về ban đầu
                        ctx.restore();
                    }
            
                    function drawText() {
                        ctx.font = `${canvas.width * 0.12}px serif`; // Kích thước font khoảng 12% chiều rộng canvas
                        ctx.fillStyle = 'black';
                        ctx.fillText('JDT', canvas.width * 0.395, canvas.height * 0.760); // Vị trí chữ
                    }
            
                    resizeCanvas();
                    drawDiamondRing();
                    drawText();
            
                    // Cập nhật lại khi thay đổi kích thước cửa sổ
                    window.addEventListener('resize', () => {
                        resizeCanvas();
                        ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas
                        drawDiamondRing();
                        drawText();
                    });

                                        // Đặt giá trị ban đầu cho data-bs-theme nếu chưa có
    document.addEventListener('DOMContentLoaded', function () {
        var body = document.body;
        if (!body.hasAttribute('data-bs-theme')) {
          body.setAttribute('data-bs-theme', 'light');
        }
      });
  
      document.getElementById('darkModeToggle').addEventListener('click', function () {
        var body = document.body;
        var currentTheme = body.getAttribute('data-bs-theme');
        var newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-bs-theme', newTheme);
      });