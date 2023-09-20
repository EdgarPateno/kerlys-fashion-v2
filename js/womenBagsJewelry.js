// Fetch the contents of women-bags-jewelry.html
fetch('/sections/women-bags-jewelry.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the shop by brands element
        document.getElementById('women-bags-jewelry').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching women-bags-jewelry.html:', error);
    });
