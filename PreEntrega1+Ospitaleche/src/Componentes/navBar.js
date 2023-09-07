let cartItemCount = 0;

function updateCartItemCount(count) {
    cartItemCount = count;
    const cartItemCountElement = document.getElementById("cartItemCount");
    cartItemCountElement.textContent = cartItemCount.toString();
}