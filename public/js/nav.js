const createNav = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `
    <div class="nav">
    <img src="image/logo.png" class="brand-logo" alt="" />
    <div class="nav-items">
      <div class="search">
        <ul class="link-container">
          <li class="link-items">
            <a href="#" class="link">Trang chủ</a>
          </li>
          <li class="link-items"><a href="#" class="link">Sản phẩm</a></li>
          <li class="link-items"><a href="#" class="link">Dịch vụ</a></li>
          <li class="link-items"><a href="#" class="link">Blog</a></li>
        </ul>
      </div>
      <a href="#"
        ><img style="width: 20px" src="image/user.png" alt=""
      /></a>
      <a href="#"
        ><img style="width: 25px" src="image/cart.png" alt=""
      /></a>
      <a href="#"
        ><img style="width: 35px" src="image/delivery.png" alt=""
      /></a>
      <div class="btn-login-container">
        <button class="btn-login">Đăng nhập</button>
      </div>
    </div>
  </div>
       `;
};


createNav();
