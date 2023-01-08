const arrayKu = [1, 2, 3, 4];
function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  for (let l = 0; l < 2; l++) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
const randomMoves = Math.floor(Math.random() * 4);
var ranNums = shuffle(arrayKu);
console.log(ranNums);
