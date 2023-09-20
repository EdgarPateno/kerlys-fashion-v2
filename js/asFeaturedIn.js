// Fetch the contents of as-featured-in.html
fetch('/sections/as-featured-in.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the as featured in element
        document.getElementById('as-featured-in').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching as-featured-in.html:', error);
    });
