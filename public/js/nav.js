const createNav = () => {
  let nav = document.querySelector(".nav-bar");

  nav.innerHTML = `
  <div class="nav">
        <div class="nav-responsive">
          <div class="dropdown">
            <button type="button" data-toggle="dropdown">
              <i
                class="fa fa-align-justify"
                style="font-size: 50px; color: black"
              ></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="index.html" class="link"
                >Trang chủ</a
              >
              <a class="dropdown-item" href="product.html" class="link"
                >Sản phẩm</a
              >
              <a class="dropdown-item" href="#" class="link">Dịch vụ</a>
              <a class="dropdown-item" href="#" class="link">Blog</a>
              <div class="dropdown-divider"></div>
              <a href="account.html" class="nav-icon"
                ><img style="width: 20px" src="image/user.png" alt=""
              /></a>
              <a href="cart.html" class="nav-icon"
                ><img style="width: 25px" src="image/cart.png" alt=""
              /></a>
              <a href="#" class="nav-icon"
                ><img style="width: 35px" src="image/delivery.png" alt=""
              /></a>
              <div class="dropdown-divider"></div>
              <div class="dropdown-item">
                <button onclick="loginPage()" class="btn-login">
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src="image/logo.png" class="brand-logo" alt="" />
        <div class="nav-items">
          <div class="search">
            <ul class="link-container">
              <li class="link-items">
                <a href="index.html" class="link">Trang chủ</a>
              </li>
              <li class="link-items">
                <a href="product.html" class="link">Sản phẩm</a>
              </li>
              <li class="link-items"><a href="#" class="link">Dịch vụ</a></li>
              <li class="link-items"><a href="#" class="link">Blog</a></li>
            </ul>
          </div>
          <a href="account.html" class="nav-icon"
            ><img style="width: 20px" src="image/user.png" alt=""
          /></a>
          <a href="cart.html" class="nav-icon"
            ><img style="width: 25px" src="image/cart.png" alt=""
          /></a>
          <a href="#" class="nav-icon"
            ><img style="width: 35px" src="image/delivery.png" alt=""
          /></a>
          <div class="btn-login-container">
            <button onclick="loginPage()" class="btn-login">Đăng nhập</button>
          </div>
        </div>
      </div>
       `;
};

createNav();

const loginPage = () => {
  window.location.href = "login.html";
};

const productPage = () => {
  window.location.href = "product.html";
};