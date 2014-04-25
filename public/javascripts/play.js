// Variables

// Set the variable of the target
var targetWord = $('.target').text();
console.log(targetWord);

// Set the variable of the answer
var answerWord = $('.answer').val();
console.log(answerWord);

// The score
var score = 0;

// When a key in the answer box is pressed, run function.
$('.answer').keyup(updateVals);

function updateVals() {
  answerWord = $('.answer').val();
  targetWord = $('.target').text();

  console.log(targetWord);
  console.log(answerWord);
  
  // If the answer matches the target, run the code within
  if (answerWord === targetWord) {
    // Increase the score by 1
    score++;
    // Clear the answer box
    $('.answer').val("");

  }
  console.log(score);
  
  // Write the score into the scoreboard
  $('.score-number').text(score);
}


