const backBtn = document.getElementById('backBtn');
const form = document.getElementById('registerform');


// const fullname = document.getElementById('fullname').value
// const username = document.getElementById('username').value;
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;
// const confirmPassword = document.getElementById('confirmpassword').value;
// const radioBtn = document.querySelector('input[name="options"]:checked');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formD = document.forms.registerform;
    const formData = new FormData(formD);

    
    if(checkForm()){
        const radioBtn = document.querySelector('input[name="options"]:checked');
        const myObj = { 
            fullname: formData.get("fullname"),
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            type: radioBtn.value,
            profilepicture: formData.get("profilepicture"),
            bio: formData.get("bio")
        };

        const jString = JSON.stringify(myObj);

        try {
            const response = await fetch("/reg", {
                method: 'POST',
                body: jString,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if(response.status === 200){
                // This should take him in the homepage where they can see the different restaurants
                alert("Success");
                fetch('/registerSuccess', {
                    method: 'POST'
                })
                .then(response => response.json())
                .then(data => {
                    // Redirect to the URL received from the server
                    window.location.href = data.redirectTo;
                });
            } else {
                console.log("Status code received: " + response.status + " | Error creating the user");
            }
        } catch (err) {
            console.error(err);
        }
    }
});

backBtn.addEventListener('click', (e) => {
    const formD = document.forms.registerform;
    const formData = new FormData(formD);
    e.preventDefault();

    console.log(formData.get("profilePicture"));
    // if(formData.get("profilePicture").name === '')
    //     console.log("Empty");
    // else
    //     console.log("Not empty");
    
});


function checkForm(){
    const formD = document.forms.registerform;
    const formData = new FormData(formD);
    
    if(formData.get("fullname").trim() === "" || formData.get("username").trim() === "" || formData.get("password").trim() === "" || formData.get("email").trim() === "" 
        || formData.get("confirmpassword").trim() === "") {
        alert("Please fill in all fields.");
        return false;
    } else {
        if(checkPasswords()){
            return true;
        }
        else{
            alert("Please enter the same password.");
            return false;
        }
    } 
}

function checkPasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    if(password !== confirmPassword) {
        return false;
    }
    else{
        return true;
    }
}
