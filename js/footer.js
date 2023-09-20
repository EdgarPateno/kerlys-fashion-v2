
// Fetch the contents of footer.html
fetch('/sections/footer.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the footer element
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching main-nav.html:', error);
    });
