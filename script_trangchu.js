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
                    ctx.fillText('JDT', canvas.width * 0.400, canvas.height * 0.74); // Vị trí chữ
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

    document.addEventListener('DOMContentLoaded', function() {
      var video = document.getElementById('myVideo');
  
      // Ẩn thanh điều khiển của video
      video.removeAttribute('controls');
  });
  
    document.addEventListener('DOMContentLoaded', function() {
        var header = document.getElementById('head_link');
        var video = document.getElementById('myVideo');
        var lastScrollPosition = window.scrollY;

        
        header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        header.style.accentColor.color= 'white';

        window.addEventListener('scroll', function() {
            var scrollPosition = window.scrollY;
            var videoTop = video.offsetTop;
            var videoBottom = video.offsetTop + video.offsetHeight;

            if (scrollPosition > lastScrollPosition) {
                // Khi cuộn xuống
                if (scrollPosition > videoTop && scrollPosition < videoBottom) {
                    // Nếu đang cuộn qua video
                    header.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'; // Màu trắng trong suốt
                } else {
                    // Nếu không cuộn qua video
                    header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Trở lại màu trong suốt
                }
            } else {
                // Khi cuộn lên
                if (scrollPosition === 0) {
                    // Nếu ở đầu trang
                    header.style.backgroundColor = 'transparent'; // Trở lại màu trong suốt
                } else {
                    // Nếu đang cuộn lên và không cuộn qua video
                    if (scrollPosition > videoTop && scrollPosition < videoBottom) {
                        header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Màu trắng trong suốt
                    } 
                }
            }

            lastScrollPosition = scrollPosition;
        });
    });
    $(document).ready(function() {
        $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
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