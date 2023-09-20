// Fetch the contents of main-nav.html
fetch('/sections/main-nav.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the main nav element
        document.getElementById('main-nav').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching main-nav.html:', error);
    });