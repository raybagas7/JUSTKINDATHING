function* shuffleMoveGenerator(array) {
  var i = array.length;

  while (i--) {
    yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  }
}

const tempMoves = [];
const moves = [
  {
    move: {
      name: 'stomp',
      url: 'https://pokeapi.co/api/v2/move/23/',
    },
  },
  {
    move: {
      name: 'double-kick',
      url: 'https://pokeapi.co/api/v2/move/24/',
    },
  },
];

const shuffleMoves = shuffleMoveGenerator(moves);

for (let i = 0; i < 2; i++) {
  tempMoves.push(shuffleMoves.next().value);
}

const takenMoves = [];
for (let i = 0; i < 2; i++) {
  takenMoves.push({ name: tempMoves[i].move.name, url: tempMoves[i].move.url });
}

console.log(tempMoves);
console.log(takenMoves);
