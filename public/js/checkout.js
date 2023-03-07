const checkoutsuccess = () => {
    let btn = document.getElementById('checkout-btn').classList.toggle('hidden');
    let text = document.getElementById('checkout-completed').classList.toggle('show');

    console.log(text);
}