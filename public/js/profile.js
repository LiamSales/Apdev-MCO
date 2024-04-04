const pfpBtn = document.getElementById('pfpchange');

pfpBtn.addEventListener('click', (e) => {
    fetch('/profile/edit', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        // Redirect to the URL received from the server
        window.location.href = data.redirectTo;
    });
});