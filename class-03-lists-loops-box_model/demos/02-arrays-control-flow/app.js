var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(start, stop, step) {}
for (var i = 0; i < nums.length; i+=3) {
  console.log('index: ', i)
  console.log('value: ', nums[i])
}

var multi = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for (var i = 0; i < multi.length; i++) {
  for (var j = 0; j < multi[i].length; j++) {
    console.log(multi[i][j])
  }
}


var count = 0;

while (count < 10) {
  var x = 5
  console.log('count', count);
  x++;
  console.log(x)
  count++;
}

console.log('done');
console.log(x)


// Don't do this...
// while (true) {
//   var x = 5
//   console.log('count', count);
//   count++;
// }

// do something once, then while true...continue
do {
  // do something
}
while(true)
