// Fetch the contents of announcement-banner.html
fetch('/sections/announcement-banner.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the announcement banner element
        document.getElementById('announcement-banner').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching announcement-banner.html:', error);
    });