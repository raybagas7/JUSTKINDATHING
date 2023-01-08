const b = 5;
const c = 6;
function addOrRemove(value) {
  let a = [0, 1, 2, 3, 4, 6, 7, 8, 9];
  if (value === undefined) {
    return a;
  }
  var index = a.indexOf(value);

  if (index === -1) {
    a.push(value);
  } else {
    a.splice(index, 1);
  }

  return a;
}

console.log(addOrRemove());

console.log(addOrRemove(b));

console.log(addOrRemove(c));
