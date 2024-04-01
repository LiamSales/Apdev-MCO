const user = function(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
}

let users = [{
        "ID": 1,
        "email": "roimarc_bilbao@dlsu.edu.ph",
        "username": "roboboboi",
        "password":"adudu",
    },{
        "ID": 2,
        "email": "rein_delacruz@dlsu.edu.ph",
        "username": "rainraingoaway",
        "password":"combackanotherday",
    },{
        "ID": 3,
        "email": "kyle@gmail.com",
        "username": "kryo",
        "password": "fireelement",
    }, {
        "ID": 4,
        "email": "arjay@gmail.com",
        "username": "Arcane",
        "password":"tftlover",
    },{
        "ID": 5,
        "email": "angel@hotmail.com",
        "username": "DoctorWhoLover",
        "password":"weepingangels",
    }];




document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    function loginValidation() {
        var username = document.forms["login-form"]["username"].value;
        var password = document.forms["login-form"]["password"].value;
    
        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields.");
            return false;
        } else if (password.trim() != confirmPassword.trim()) {
            alert("Passwords do not match.");
            return false;
        }
        
        return true; 
    }
    
    form.addEventListener("submit", (e) => {
        

    });

    document.getElementById("regisBtn").onclick = function() {
        location.href = "register.html";
    };



});