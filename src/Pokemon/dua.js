function* shuffle(array) {
  var i = array.length;

  while (i--) {
    yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  }
}

var ranNums = shuffle([1, 2, 3]);
const newarray = [];

for (let l = 0; l < 2; l++) {
  newarray.push(ranNums.next().value);
}
// ranNums.next().value; // etc.
console.log(newarray);
