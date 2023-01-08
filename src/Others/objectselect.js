var a = [0, 1, 2, 3, 4, 6, 7, 8, 9],
  b = 5,
  c = 6;

function addOrRemove(array, value) {
  var index = array.indexOf(value);

  if (index === -1) {
    array.push(value);
  } else {
    array.splice(index, 1);
  }
}

console.log(a);

addOrRemove(a, b);
console.log(a);

addOrRemove(a, c);
console.log(a);
