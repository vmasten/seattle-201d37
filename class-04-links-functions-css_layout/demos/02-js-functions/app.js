// Functions
// 1. Set of steps; returns a value
// 2. takes in data
// 3. Like box; takes inputs; does a thing; outputs something

var nums = []
var doubles = []

// Function expression
// Try to avoid this pattern for now.
// var getRandomNums = function() {

// };


// Function definition
function getRandomNums() {
  for(var i = 0; i < 1001; i++) {
    var randNum = Math.floor(Math.random() * 100)
    nums.push(randNum)
  }
}

getRandomNums()


function duplicateNum(number) {
  var output = number * 2
  return output
}


// for(var j = 0; j < nums.length; j++) {
//   var duplicate = duplicateNum(nums[j])
//   doubles.push(duplicate)
// }
