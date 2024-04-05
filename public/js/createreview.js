const reviewForm = document.forms.reviewForm;
const postBtn = document.getElementById("submit");

postBtn?.addEventListener("click", async (e) =>{
    e.preventDefault();
    console.log("clicked");

    const data = new FormData(reviewForm);

    if(checkForm()){
        const radioBtn = document.querySelector('input[name="rating_radio"]:checked');
        const myObj = { 
            title: data.get("title"),
            rating: radioBtn.value,
            review: data.get("review")
        };
    
    const jString = JSON.stringify(myObj);
    console.log(jString);

    try{
        const response = await fetch('/createreview', {
            method: 'POST',
            body: jString,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            alert("done");
        } else {
            const message = `An error has occured. Status code: ${response.status}`;
            alert(message);
            console.log(message);
        }
    } catch (err) {
        console.log(err);
    }

    }

    function checkForm(){
        const formD = document.forms.reviewForm;
        const formData = new FormData(formD);
        
        if(formData.get("user") === "" || formData.get("title") === "" || formData.get("name") === "" ||
             formData.get("review") === "") {
            alert("Please fill in all fields.");
            return false;
        } else {
            return true;
        }
    }
});