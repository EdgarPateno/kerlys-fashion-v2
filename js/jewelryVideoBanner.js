// Fetch the contents of jewelry-video-banner.html
fetch('/sections/jewelry-video-banner.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the jewelry video banner element
        document.getElementById('jewelry-video-banner').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching jewelry-video-banner.html:', error);
    });
