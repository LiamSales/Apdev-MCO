const registerBtn = document.getElementById('registerBtn');
const form = document.getElementById('loginform');

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


form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formD = document.forms.loginform;
    const formData = new FormData(formD);
    if(checkForm()){
        const myObj = { 
            username: formData.get("username"),
            password: document.getElementById('password').value
        };

        const jString = JSON.stringify(myObj);

        try {
            const response = await fetch("/log", {
                method: 'POST',
                body: jString,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.status === 200) {
                // This should take him in the homepage where they can see the different restaurants
                alert("Success");

                fetch('/loginSuccess', {
                    method: 'POST'
                })
                .then(response => response.json())
                .then(data => {
                    // Redirect to the URL received from the server
                    window.location.href = data.redirectTo;
                });
            } 

            else if (response.status === 999) {
                alert("Wrong password");
            }

            else if (response.status === 404){
                alert("Account not found");
            }
            
            else {
                console.log("Status code received: " + response.status);
            }
        } catch (err) {
            console.error(err);
        }
    }
});

function checkForm() {
    const formD = document.forms.loginform;
    const formData = new FormData(formD);

    if (formData.get("username").trim() === "" || formData.get("password").trim() === ""){
        alert("Please fill in all fields.");
        return false;
    }
    else{
        return true;
    }
}



