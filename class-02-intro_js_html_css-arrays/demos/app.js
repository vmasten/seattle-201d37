var userName = prompt('What is your name?');
var userAge = prompt('Welcome, ' + userName + '. How old are you?');

// if (condition evaluates to Truthy) {
// Do something
//  }

if (userAge >= 30) {
  alert('You are older than dirt!');
} else if (userAge >= 20) {
  // Do something else
} else {
  alert('Are you still in diapers?');
}

alert('Answer the following with Y or N');
var answerOne = prompt('Was I born in WA?');

if (answerOne.toUpperCase() === 'Y') {
  alert('Yes, correct, right.');
} else if (answerOne.toUpperCase() === 'N') {
  alert('No, incorrect, wrong.');
} else {
  alert('That was not the answer I wanted... Try Y or N next time.');
}
