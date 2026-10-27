
//the clicker button program

//the variable: one string, one number, one value
let count=0;
let colorsCount=0;
//let myMood=""

//array:multiple values
let colors=["green", "orange", "brown", "yellow", "gold",
"purple", "red", "pink"];

//empty variable
let buttonText="";

//object: named lists of data elements, each with their own property name and a value 

//find the needy-button element and tell it what to do when clicked
$("#needy-button").click( function(){

   //when button is clicked, add 1 to saved counter number
   count = count + 1;

   if( count > 15 ) { $("#needy-button").after("<p>Oughhhh... I'm angy >:(</p>"); }
   else if( count > 12 ) { $("#needy-button").after("<p>Seriously, I'm getting too clicked...</p>") }
   else if( count > 5 ) { $("#needy-button").after("<p>Oww... Ayoo cut that out!</p>") }

   console.log(count);
   console.log(colors[colorsCount]);
   //console.log(myMood);

   //By putting count variable in the square brackets, it connects the count
   //number with the array number. 
   buttonText="I was clicked " + count + " times! The color is " + colors[colorsCount];

   //what the new text should be
   $("#needy-button").html( buttonText );
   
   $("body").css( "background-color", colors[colorsCount] );

   colorsCount = colorsCount + 1;

   if( colorsCount >= 8 ) { colorsCount = 0; };

});

//Unused
 //$("body").append( "<img width='60' src='"+colors[colorsCount] +".jpg'>");
   //if( count < 5 ) { myMood="I feel like a superstar!"};
   //if( count >= 5 && count < 10 ) { myMood="Owie, cut it out!"};
   //if( count >= 10 ) { myMood="Ouuugh... I'm all clicked out.."};