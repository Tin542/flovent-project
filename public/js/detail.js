const productImage = document.querySelectorAll(".product-images img"); //select all image thumbs
const productImageSlide = document.querySelector(".image-slider"); //select image slider element

let activeImageSlide = 0; // default slider image position

productImage.forEach((item, i) => {
  item.addEventListener("click", () => {
    // add click event to each image thumb
    productImage[activeImageSlide].classList.remove("active"); //removing active classfrom current image
    item.classList.add("active"); //add active class to current image or click image thumb

    // console.log(item.src);
    // console.log(i);

    productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image

    activeImageSlide = i; // updating the image slider variable to track current thumb
  });
});

let amount = 0;
const addAmount = () => {
  amount = amount + 1;
  document.getElementById("thongbao").innerHTML = amount;
};
const minusAmount = () => {
  if (amount <= 0) {
    amount = 0;
  } else {
    amount = amount - 1;
  }
  document.getElementById("thongbao").innerHTML = amount;
};
