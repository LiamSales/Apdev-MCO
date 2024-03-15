const user = function(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const errorElement = document.getElementById("error");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    
    form.addEventListener("submit", (e) => {
        let messages = [];

        if(username.value === '' || username.value === null) {
            messages.push("Username must be provided!")
        }

        else if(password.value != 'correct') {
            messages.push("Wrong Password!")
        }

        if(messages.length > 0) {            
            document.getElementById("error").classList.add("show"); // Shows the e
            errorElement.innerText = messages.join(", ");
            e.preventDefault();
        }

    });

    document.getElementById("regisBtn").onclick = function() {
        location.href = "register.html";
    };

});