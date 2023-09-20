// Fetch the contents of newsletter.html
fetch('/sections/newsletter.html')
  .then(response => response.text())
  .then(data => {
    // Insert the contents into the newsletter element
    document.getElementById('newsletter').innerHTML = data;
  })
  .catch(error => {
    console.error('Error fetching newsletter.html:', error);
  });