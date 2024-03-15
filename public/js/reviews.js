$(document).ready(function(){

    $("#submit").click(function() {
        let title = $("#title").val();
        let rat= $("input[name='rating_radio']:checked").val();
        let text = $("#review").val();


        display(title,rat,text);

        console.log("test");

        
    });

    function checkColor(rat){
        if (rat >= 4){
            return "green";
        }
        else if (rat >= 2){
            return "yellow";
        }
        else{
            return "red";
        }
    }

    function display(title,rat,text){

        let newreview = "<div class='review' id='review1'>"+
                        "<div class='restaurant-info'>"+
                        "<h2>" + title + "</h2>"+
                        "</div>"+
                        "<h3><span class='by'>by </span><span class='username'>@restolover69</span></h3>"+
                        "<div class='rating-container'>"+
                        "<div class='rating' style='width: " + ( (5/rat) * 100) + "%;  background-color:"+checkColor(rat)+";'></div>"+
                        "<span class='rating-value'>" + rat + "★ </span>"+
                        "</div>"+
                        "<p class='preview'>"+text+"</p><br><br>"+
                        "<br><br>"+
                        "From the moment you step through the doors, you're greeted by an ambiance that seamlessly blends elegance with warmth. The soft glow of ambient lighting sets the stage for an evening filled with gastronomic delights. The decor, with its modern yet cozy aesthetic, immediately puts you at ease, making you feel like a welcomed guest in someone's home.<br><br>";
        
        console.log(newreview);

        $(".reviews-container").append(newreview);
    }

});