const createFooter = () => {
    let footer = document.querySelector("footer");
    footer.innerHTML = `<div class="footer-container">
    <div class="container-fluid">
      <img src="image/logo.png" alt="logo" />
      <div class="row">
        <div class="col-sm-3">
          <div class="footer-category">
            <p>Chăm sóc khách hàng</p>
            <p class="footer-info">(+84) 123 456 789</p>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="footer-category">
            <p>Liên hệ với chúng tôi</p>
            <p class="footer-info">Mail: support@gmail.com</p>
            <p>Hoặc</p>
            <p class="footer-info">
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-facebook-square"></i></a>
              <a href="#"><i class="fab fa-twitter-square"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </p>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="footer-category">
            <p>Dịch vụ</p>
            <ul class="footer-info">
              <li><a href="#">Chính sách và điều khoản</a></li>
              <li><a href="#">Hướng dẫn thanh toán</a></li>
              <li><a href="#">Đổi trả và hoàn tiền</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="footer-category">
            <p>Ảnh khác</p>
            <div class="footer-items">
              <img src="image/product2.png" />
              <img src="image/product2.png" />
              <img src="image/product2.png" />
              <img src="image/product2.png" />
              <img src="image/product2.png" />
              <img src="image/product2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  };
  createFooter();
  