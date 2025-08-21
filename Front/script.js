function togglCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('open');
}
function addToCart(productName) {
    const cartItems = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = productName;
    cartItems.appendChild(li);
}