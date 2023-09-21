function addToCart() {
    const productInfo = JSON.parse(localStorage.getItem("productInfo")) || {};
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const quantityInput = document.getElementById("productQuantity");
    const quantity = parseInt(quantityInput.value) || 0;

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(
        (item) =>
            item.title === productInfo.title &&
            item.price === productInfo.price &&
            item.image === productInfo.image
    );

    if (existingItemIndex !== -1) {
        // If the item exists, increment the quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // If the item doesn't exist, create a new cart item
        const cartItem = {
            title: productInfo.title,
            price: productInfo.price,
            image: productInfo.image,
            quantity: quantity,
        };

        cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "/sections/cart-page.html";
}

const addToCartButton = document.getElementById("addToCartButton");
if (addToCartButton) {
    addToCartButton.addEventListener("click", addToCart);
}
