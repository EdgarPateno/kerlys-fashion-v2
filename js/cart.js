function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTable = document.getElementById("cart-items-container");
    const emptyCartMessage = document.getElementById("empty-cart-message");

    if (cart && cart.length > 0) {
        cartTable.style.display = "table";
        cartTable.style.margin = "0 auto";

        cart.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td><img src="${item.image}" alt="${item.title}" style="width: 100px;"></td>
              <td style="text-align: left;">
                <p style="margin-bottom: 0;">${item.title}</p>
                <p>$${item.price.toFixed(2)}</p>
              </td>
              
              <td>
                <button class="minus-button">-</button>
                <span>${item.quantity}</span>
                <button class="plus-button">+</button>              
              </td>
              <td>$${(item.price * item.quantity).toFixed(2)}</td>
              <td style="text-align: left;"><button class="trash-icon"><i class="fa fa-trash" style="color: #329BD1;"></i></button></td>
            `;
            cartItemsContainer.appendChild(row);

            const quantitySpan = row.querySelector("span");
            const minusButton = row.querySelector(".minus-button");
            const plusButton = row.querySelector(".plus-button");
            const trashIcon = row.querySelector(".trash-icon");

            minusButton.addEventListener("click", function () {
                updateQuantity(quantitySpan, item, -1);
            });

            plusButton.addEventListener("click", function () {
                updateQuantity(quantitySpan, item, 1);
            });

            trashIcon.addEventListener("click", function () {
                deleteCartItem(row, item);
            });
        });
    } else { // Add this block
        cartTable.style.display = "none";
        emptyCartMessage.style.display = "block";
    }
}

function updateQuantity(quantitySpan, item, change) {
    item.quantity += change;

    if (item.quantity < 1) {
        item.quantity = 1;
    }

    quantitySpan.textContent = item.quantity;
    const priceCell = quantitySpan.parentNode.nextElementSibling;
    const price = item.price * item.quantity;
    priceCell.textContent = `$${price.toFixed(2)}`;
}

function deleteCartItem(row, item) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        row.remove();

        if (cart.length === 0) {
            const cartTable = document.getElementById("cart-items-container");
            const emptyCartMessage = document.getElementById("empty-cart-message");
            cartTable.style.display = "none";
            emptyCartMessage.style.display = "block";
        }
    }
}

displayCartItems();
