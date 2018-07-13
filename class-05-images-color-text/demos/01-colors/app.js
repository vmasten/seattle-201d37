'use strict';

var questions = ['one?', 'two?', 'three?'];
var answers = ['y', 'n', 'y'];

for (var i = 0; i < questions.length; i++) {
  game(questions[i], answers[i]);
}

function game(question, answer) {  // game('one?', 'y')
  // var userInput = prompt(question); // 'N'
  // userInput.toLowerCase(); // => 'n'  (this will not save state)
  // userInput = userInput.toLowerCase(); // => 'n'  (this will save state)
  // console.log(userInput); // => 'N'

  var userInput = prompt(question).toLowerCase(); // 'n'
  console.log(userInput); // => 'n'

  if (userInput === answer) {
    console.log('congrats!');
  } else {
    console.error('danger will robinson');
  }
}

