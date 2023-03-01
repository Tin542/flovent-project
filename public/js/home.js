const productContainer = [...document.querySelectorAll('.new-product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item, i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const detailPage = () => {
    window.location.href = 'detail.html';
}