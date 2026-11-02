
let scanInfo=[
    "The meadows are deep violets and blues that match the twilight sky.",
    "A breeze whistles as it weaves between the stones of the cliffs below.",
    "The air around you is filled with the scent of flowers, wet grass, and strawberries.",
    "There is an indescribable, cosmic warmth that embraces you as the winds brings alpine air."
    ]

$("#look").click( function(){
    $("#scan-output").html(scanInfo[0]);
});

$("#listen").click( function(){
    $("#scan-output").html(scanInfo[1]);
});

$("#smell").click( function(){
    $("#scan-output").html(scanInfo[2]);
});

$("#feel").click( function(){
    $("#scan-output").html(scanInfo[3]);
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

