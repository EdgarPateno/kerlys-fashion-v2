// Fetch the contents of shop-by-brands.html
fetch('/sections/shop-by-brands.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the shop by brands element
        document.getElementById('shop-by-brands').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching shop-by-brands.html:', error);
    });
