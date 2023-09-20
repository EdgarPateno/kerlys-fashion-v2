// Fetch the contents of selevate-fashion-image-banner.html
fetch('/sections/elevate-fashion-image-banner.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the shop by brands element
        document.getElementById('elevate-fashion').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching elevate-fashion-image-banner.html:', error);
    });
