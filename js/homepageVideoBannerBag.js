// Fetch the contents of homepage-video-banner-bag.html
fetch('/sections/homepage-video-banner-bag.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the homepage video banner bag element
        document.getElementById('homepage-video-banner-bag').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching homepage-video-banner-bag.html:', error);
    });
