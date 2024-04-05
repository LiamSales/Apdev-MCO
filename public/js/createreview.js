const reviewForm = document.forms.reviewForm;
const postBtn = document.getElementById("submit");

postBtn?.addEventListener("click", async (e) =>{
    e.preventDefault();
    console.log("clicked");

    const data = new FormData(reviewForm);

    if(checkForm()){
        const radioBtn = document.querySelector('input[name="rating_radio"]:checked');
        const myObj = { 
            user: 'roi',
            title: data.get("title"),
            name: 'establishment',
            rating: radioBtn.value,
            review: data.get("review")
        };
    
    const jString = JSON.stringify(Object.fromEntries(myObj));
    console.log(jString);

    try{
        const respo = await fetch("/reviews", {
            method: 'POST',
            body: jString,
            headers: {
                'Content-Type': 'application/json'
            }
    });

         if (response.status == 200) {
            location.reload(); // refresh the page
        } else {
            const message = `An error has occured. Status code: ${response.status}`;
            alert(message);
            console.log(message);
        }
    } catch (err) {
        console.error(err);
    }

    }
});