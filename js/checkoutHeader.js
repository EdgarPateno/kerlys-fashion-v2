
// Fetch the contents of checkout-header.html
fetch('/sections/checkout-header.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the checkout header element
        document.getElementById('checkout-header').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching checkout-header.html:', error);
    });
