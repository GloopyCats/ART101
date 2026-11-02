
//A says
let messagesA=["How ya going?", "That sucks, what's wrong?","Oh. What color do you want it to be?", "What about..."];
let counterA=0;

//B says
let messagesB=["Like crap.","The background stinks","Not this one"];
let counterB=0;

$("#character-a").click( function(){

    if(counterB == 3) {
        $("#answers").css("display","flex")
        $("#chat").append("<p>Dotty: "+messagesA[counterA]+"</p>")
        counterA = counterA + 1;
        counterB = 1000;
    }

    else if(counterA == counterB){
        $("#chat").append("<p>Dotty: "+messagesA[counterA]+"</p>")
        counterA = counterA + 1;
     }

});

$("#character-b").click( function(){

    if(counterB < counterA){

        $("#chat").append("<p>Demabob: "+messagesB[counterB]+"</p>")
        counterB = counterB + 1;
    }
});

$("#answer-green").click( function(){
    $("body").css( "background-color", "green" );
    $("#chat").append("<p>Demabob: How did you do that?</p>");
    $("#answers").css("display","none");

});

$("#answer-pink").click( function(){
    $("body").css( "background-color", "pink" );
    $("#chat").append("<p>Demabob: How did you do that?</p>");
    $("#answers").css("display","none");

});

