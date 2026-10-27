let count = 0;
let countOther = 0;
let buttonOther = {
    name: "Grumpy Boy",
    species: "angry UI element",
    favoriteFood: "rocks",
    moodsOther: ["Okay! I'm satisfied.", "Alright, Thats enough...", "I said ENOUGH!"]
};

let buttonCreature = {
    name: "Clickable Goober",
    species: "very silly critter",
    favoriteFood: "chicken pancakes",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;
    let currentMood = buttonCreature.moods[arrayPosition];
    let message = "<p>You clicked me " + count + " times.</p>";

    if( count >= 7 ) { currentMood = "excited, keep it coming" };

    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);



});

$("#simple-button").click(function () {

    countOther = countOther + 1;

    let otherArray = countOther - 1;
    let otherCurrent = buttonOther.moodsOther[otherArray];
    let messageOther = "<p>You clicked me " + countOther + " times.</p>";

    if( countOther >= 4 ) { 
        otherCurrent = "No more Clicks! >:(";
        document.getElementById("simple-button").disabled = true;
    };

    messageOther = messageOther + "<p>My name is " + buttonOther.name + ".</p>";
    messageOther = messageOther + "<p>I am a " + buttonOther.species + ".</p>";
    messageOther = messageOther + "<p>My favorite food is " + buttonOther.favoriteFood + ".</p>";
    messageOther = messageOther + "<p>" + otherCurrent + "</p>";

    $("#second-op").html(messageOther);

    console.log(countOther);
    console.log(otherArray);
    console.log(otherCurrent);



});