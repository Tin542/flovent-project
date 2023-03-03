const createNav = () => {
  let nav = document.querySelector(".nav-bar");
  
  nav.innerHTML = `
  <div class="nav" id="myTopnav">
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
          <a href="#" class="nav-icon"
            ><img style="width: 20px" src="image/user.png" alt=""
          /></a>
          <a href="#" class="nav-icon"
            ><img style="width: 25px" src="image/cart.png" alt=""
          /></a>
          <a href="#" class="nav-icon"
            ><img style="width: 35px" src="image/delivery.png" alt=""
          /></a>
          <div class="btn-login-container">
            <button onclick="loginPage()" class="btn-login">Đăng nhập</button>
          </div>
          <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
       `;
};

createNav();
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

const loginPage = () => {
  window.location.href = 'login.html';
}

const productPage = () => {
  window.location.href = 'product.html';
}