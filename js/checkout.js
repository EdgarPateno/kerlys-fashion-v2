
// Retrieve cart items from local storage
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const productDetailsContainer = document.querySelector(".product-details");

// Add function to calculate subtotal
const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    return subtotal;
};

// Add function to calculate total amount
const calculateTotalAmount = () => {
    const taxRate = 0.1; // Assuming tax rate of 10%
    const subtotal = calculateSubtotal();
    const totalAmount = subtotal + (subtotal * taxRate);
    return totalAmount;
};

// Loop through cart items and display details
cartItems.forEach(item => {
    const productDiv = document.createElement("div");
    productDiv.className = "product-item";

    // Add product title, image, and price
    productDiv.innerHTML = `    
        <div class="d-flex align-items-center">
        <img src="${item.image}" alt="${item.title}">
        <h6 style="font-size:14px;">${item.title}</h6>
        </div>
        <p style="font-size:14px;"> $${item.price * item.quantity.toFixed(2)}</p>
    `;

    productDetailsContainer.appendChild(productDiv);
});

// Display subtotal and total amount
const subtotalElement = document.createElement("p");
subtotalElement.style.textAlign = "right";
subtotalElement.style.fontSize = "14px";
subtotalElement.style.fontWeight = "700";
subtotalElement.textContent = `Subtotal: $${calculateSubtotal().toFixed()}`;

const totalAmountElement = document.createElement("p");
totalAmountElement.style.textAlign = "right";
totalAmountElement.style.fontSize = "14px";
totalAmountElement.style.fontWeight = "700";
totalAmountElement.textContent = `Total Amount: $${calculateTotalAmount().toFixed()}`;

productDetailsContainer.appendChild(subtotalElement);
productDetailsContainer.appendChild(totalAmountElement);
