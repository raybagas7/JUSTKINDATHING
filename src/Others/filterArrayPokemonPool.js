const pokemonIdChoosen = [
  {
    id: 'ZlQxJmLCF_nw9Zas',
  },
  {
    id: 'hNoxp46eruCAfzSt',
  },
];
const pokemonIdChoosenArrayPlain = [];
pokemonIdChoosen.map((pokemon) => {
  pokemonIdChoosenArrayPlain.push(pokemon.id);
});
// const pokemonIdChoosenArrayPlain = ['ZlQxJmLCF_nw9Zas', 'hNoxp46eruCAfzSt'];

const pokemonPool = [
  {
    id: 'hNoxp46eruCAfzSt',
    pokeid: 206,
    name: 'dunsparce',
  },
  {
    id: 'HezzAlsXn21dPcQS',
    pokeid: 102,
    name: 'exeggcute',
  },
  {
    id: 'Az7S2xIcwUz3lipl',
    pokeid: 460,
    name: 'abomasnow',
  },
  {
    id: 'KInhnUPYwCCkggKv',
    pokeid: 662,
    name: 'fletchinder',
  },
  {
    id: 'B_Wu7F-MJM51G-EP',
    pokeid: 58,
    name: 'growlithe',
  },
  {
    id: 'ZlQxJmLCF_nw9Zas',
    pokeid: 561,
    name: 'sigilyph',
  },
];

const result = [];

// pokemonIdChoosen.map((pokemonId) => {
//   result.push(
//     pokemonPool.filter(
//       (pokemonPoolPerId) => pokemonPoolPerId.id !== pokemonId.id
//     )
//   );
// });

// const result2 = pokemonPool.filter(
//   (e) => pokemonIdChoosenArrayPlain.indexOf(e.id) == -1
// );

const result2 = pokemonPool.map((pool) => ({
  id: pokemonIdChoosenArrayPlain.indexOf(pool.id) == -1 ? pool.id : 'Undefined',
}));
console.log(result2);
