// Fetch the contents of shoes-homepage-video-banner.html
fetch('/sections/shoes-homepage-video-banner.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the shoes video banner element
        document.getElementById('shoes-homepage-video-banner').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching shoes-homepage-video-banner.html:', error);
    });
