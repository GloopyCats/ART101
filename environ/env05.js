let whatRegion=["Sky Meadows","Sundered Grove"]
let money=0
let isSeen=false;

let scanInfoV=[
    "The meadows are deep violets and blues that match the twilight sky.",
    "A breeze whistles as it weaves between the stones of the cliffs below.",
    "The air around you is filled with the scent of flowers, wet grass, and strawberries.",
    "There is an indescribable, cosmic warmth that embraces you as the winds brings alpine air."
]

let scanInfoD=[
    "Canopies of unfathomably large trees create a night-like darkness, broken only by the ambient glow of lychen.",
    "There are chitters of fauna invisible to you among the trees that creak with their age.",
    "The grove smells of detritus of aquatic flora that have lived longer than anything familiar to you.",
    "Humid, hot air settles at the floor of the jungle which keeps the floor beneath you in a clay-like consistency."
] 

function askRegion() {
    
    let userInput = prompt("What region are you teleporting to? Sky Meadows or Sundered Grove?");

    if(userInput == whatRegion[0]) {
        document.title = "Sky Meadows";

        $("body").css( "background-image","url(skym.jpg)");

        $("body").css( "background-image","url(skym.jpg)");

        $("#scan-output").html("Awaiting user input...")

        $("#look").click( function(){
            $("#scan-output").html(scanInfoV[0]);
        });

        $("#listen").click( function(){
            $("#scan-output").html(scanInfoV[1]);
        });

        $("#smell").click( function(){
            $("#scan-output").html(scanInfoV[2]);
        });

        $("#feel").click( function(){
            $("#scan-output").html(scanInfoV[3]);
        });
    }

    else if (userInput == whatRegion[1]) {
        document.title = "Sundered Grove";

        $("body").css( "background-image","url(groves.jpg)");

        $("#scan-output").html("Awaiting user input...")

        $("#look").click( function(){
            $("#scan-output").html(scanInfoD[0]);
        });

        $("#listen").click( function(){
            $("#scan-output").html(scanInfoD[1]);
        });

        $("#smell").click( function(){
            $("#scan-output").html(scanInfoD[2]);
        });

        $("#feel").click( function(){
            $("#scan-output").html(scanInfoD[3]);
        });
    }
    else {};
}

$("#region").click(function () {
    askRegion(whatRegion);
});

$("#liz-info").click( function(){
    $("#logtext").html(
        "<p>The Lemurian is a human sized, lizard like creature that call the caves of this planet home. They thrive from the geothermal heat that emits from the depths of the planet. They are highly intelligent, hierarchal, and even have a full writing system. Reports indicate a possible written history.</p>"
    );  
});

$("#dude-info").click( function(){
   $("#logtext").html(
        "<p>Callsign: Commando<br>Affiliation: [Redacted]<br>Status: MIA<br>Mission:<br>Retrieve and catalogue lost assets. Locate survivors who sent out distress beacon from prior crash incident. Report any other new lifefroms for research.</p>"
    );  
});

$("#money-button").click( function(){
    money = money + 1

    $("#money").html( "$" + money )
    console.log(money)
});

