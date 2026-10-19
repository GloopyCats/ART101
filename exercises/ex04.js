
//the clicker button program

//the variable
let counter=0;

//find the needy-button element and tell it what to do when clicked
$("#needy-button").click( function(){
    //when button is clicked, add 1 to saved counter number
    counter = counter + 100;
    //what the new text should be
    $("#needy-button").html("I was clicked " + counter + " times! x.x");
     if(counter<1000) {
        $("#needy-button").css(style.background-color,"green");
     }
});
