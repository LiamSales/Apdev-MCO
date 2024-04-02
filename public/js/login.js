const registerBtn = document.getElementById('registerBtn');
const loginform = document.forms.loginform;

registerBtn.addEventListener('click', (e) => {
   
    fetch('/register', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        // Redirect to the URL received from the server
        window.location.href = data.redirectTo;
    });
});

