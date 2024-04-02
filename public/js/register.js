const backBtn = document.getElementById('backBtn');
const form = document.getElementById('registerform');
const formD = document.forms.registerform;
const formData = new FormData(formD);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(checkForm()){
    const radioBtn = document.querySelector('input[name="options"]:checked');
    const myObj = { 
        fullname: formData.get("fullname"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: document.getElementById('password').value,
        type: radioBtn.value
    };

    const jString = JSON.stringify(myObj);
    const password = document.getElementById('password');
    const confirmpassword = document.getElementById('confirmpassword');
        // fetch('/registerSubmit' + selectedValue, {
        //     method: 'POST'
        // })
        // .then(response => response.json())
        // .then(data => {
        //     window.location.href = data.redirectTo;
        // });
        console.log(jString);
        console.log("Submitted");
    }
});

backBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log("Hi"); 
});


function checkForm(){
    const radioBtn = document.querySelector('input[name="options"]:checked');
    password = document.getElementById('password').value;
    confirmPassword = document.getElementById('confirmpassword').value;
    
    if(formData.get("fullname").trim() === "" || formData.get("username").trim() === "" || password.trim() === "" || formData.get("email").trim() === "" || radioBtn.value === null || confirmPassword.trim() === "") {
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
    password = document.getElementById('password').value;
    confirmPassword = document.getElementById('confirmpassword').value;

    if(password !== confirmPassword) {
        return false;
    }
    else{
        return true;
    }
}