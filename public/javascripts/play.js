// Variables

// Set the variable of the target
var targetWord = $('.target').text();
console.log("the targetWord is " + targetWord);

// Set the variable of the answer
var answerWord = $('.answer').val();
console.log("the value in the answer box is " + answerWord);

// The score
var score = 0;

// The array of random words
var dictionary = [];

// Random words
var wordCollection = "sadly lacey hurst colin finca janey trade lomax louie vhf verny nopal hexyl nasby jane urea donor elam enrol clea epha riel softa epoch focus abut jabir reid aisha foe sulla ava brill food motey wispy jurat gills som drab koppa aoli ainu knies podes cns chiru jowly grace grove ural wirer birse patd ran feme down exult biisk maud rock dan dobby lowl style cliff pipit tiv label crept sinal musca arak bowie ocie ceb aries oater boko grey hover inlay hemin douse ida dmso roca larva typo occur mmhg atty phew luzon ferd right sine dbe pis gal";

dictionary = wordCollection.split(" ");

console.log("the array of random words is " + dictionary);

//Random integer between 0 and 100
var randNum = Math.floor(Math.random()*100);

var randWord = dictionary[randNum];

// When a key in the answer box is pressed, run function.
$('.answer').keyup(updateVals);

$('.answer').keydown(function(e) {
  if(e.which == 13) {
    $('.answer').val("");
  }
});

function updateVals() {
  answerWord = $('.answer').val();
  targetWord = $('.target').text();

  console.log("the value in the answer input is: " + answerWord);
  
  // If the answer matches the target, run the code within
  if (answerWord === targetWord) {
    // Increase the score by 1
    score++;

    // Generate a new random number
    randNum = Math.floor(Math.random()*100);
    console.log("The random number is " + randNum);
    // Generate a new randomword
    randWord = dictionary[randNum];
    console.log("The random word is " + randWord);  

    // Clear the answer box
    $('.answer').val("");
    //Insert the new word into the target box
    $('.target').text(randWord);

  }
  
  // Write the score into the scoreboard
  $('.score-number').text(score);
}



