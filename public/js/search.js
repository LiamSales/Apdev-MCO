const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
   
    fetch('/profile', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        // Redirect to the URL received from the server
        window.location.href = data.redirectTo;
    });
});