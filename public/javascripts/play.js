var targetWord = $('.target').text();
console.log(targetWord);

var answerWord = $('.answer').val();
console.log(answerWord);

var score = 0;

// When a key in the answer box is pressed, run function.
$('.answer').keyup(updateVals);

function updateVals() {
  answerWord = $('.answer').val();
  targetWord = $('.target').text();

  console.log(targetWord);
  console.log(answerWord);
  
  if (answerWord === targetWord) {
    score++;

    $('.answer').val("");

  }
  console.log(score);
  
  $('.score-number').text(score);
}


