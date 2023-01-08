const { nanoid } = require('nanoid');
const id = `card-${nanoid(16)}`;
const array = [
  {
    idservicio: 1,
    precio: 20.5,
    comentario: 'hello',
    descuento: 0,
    total: 20.5,
    estado: 1,
  },
  {
    idservicio: 2,
    precio: 20.5,
    comentario: 'World',
    descuento: 0,
    total: 20.5,
    estado: 1,
  },
  {
    idservicio: 3,
    precio: 20.5,
    comentario: '..........',
    descuento: 0,
    total: 20.5,
    estado: 1,
  },
];
//In the string comentario item, manually add the apostrophes.

let sql = array.map(
  (item) =>
    `(${item.idservicio}, ${item.precio}, ${"'"}${item.comentario}${"'"}, ${
      item.descuento
    }, ${item.total}, ${item.estado})`
);

//array with items.
console.log(sql);

const finalQuery =
  'INSERT INTO pos.detalle_orden (idservicio, precio, comentario, descuento,total,estado) VALUES ' +
  sql;
console.log(finalQuery);
console.log('query(' + finalQuery + ')');

const cards = [
  {
    poke_id: 1,
    attribute: 'normal',
    legendary: false,
    types: [
      {
        name: 'poison',
      },
      {
        name: 'dragon',
      },
    ],
    stats: [
      {
        base_stat: 65,
        effort: 0,
        name: 'hp',
      },
      {
        base_stat: 75,
        effort: 0,
        name: 'attack',
      },
      {
        base_stat: 90,
        effort: 0,
        name: 'defense',
      },
      {
        base_stat: 97,
        effort: 0,
        name: 'special-attack',
      },
      {
        base_stat: 123,
        effort: 2,
        name: 'special-defense',
      },
      {
        base_stat: 44,
        effort: 0,
        name: 'speed',
      },
    ],
  },
  {
    poke_id: 2,
    attribute: 'shiny',
    legendary: false,
    types: [
      {
        name: 'fire',
      },
    ],
    stats: [
      {
        base_stat: 40,
        effort: 0,
        name: 'hp',
      },
      {
        base_stat: 40,
        effort: 0,
        name: 'attack',
      },
      {
        base_stat: 40,
        effort: 0,
        name: 'defense',
      },
      {
        base_stat: 70,
        effort: 1,
        name: 'special-attack',
      },
      {
        base_stat: 40,
        effort: 0,
        name: 'special-defense',
      },
      {
        base_stat: 20,
        effort: 0,
        name: 'speed',
      },
    ],
  },
];

// console.log(cards[0]);
let newArray = [];
cards.map((card) =>
  newArray.push([
    `card-${nanoid(16)}`,
    card.poke_id,
    card.attribute,
    card.legendary,
    card.types,
    card.stats,
  ])
);

console.log(newArray);
console.log(newArray[0].length);
console.log(newArray.length);
console.log(typeof cards);

// //${card.poke_id}, ${card.attribute}, ${card.legendary}, ${JSON.stringify(
//       card.types
//     )}, ${JSON.stringify(card.stats)}
