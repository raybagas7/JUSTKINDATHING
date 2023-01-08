const lz = require('lz-string');

const someObject = [
  {
    base_stat: 80,
    effort: 0,
    stat: {
      name: 'hp',
      url: 'https://pokeapi.co/api/v2/stat/1/',
    },
  },
  {
    base_stat: 105,
    effort: 3,
    stat: {
      name: 'attack',
      url: 'https://pokeapi.co/api/v2/stat/2/',
    },
  },
  {
    base_stat: 65,
    effort: 0,
    stat: {
      name: 'defense',
      url: 'https://pokeapi.co/api/v2/stat/3/',
    },
  },
  {
    base_stat: 100,
    effort: 0,
    stat: {
      name: 'special-attack',
      url: 'https://pokeapi.co/api/v2/stat/4/',
    },
  },
  {
    base_stat: 70,
    effort: 0,
    stat: {
      name: 'special-defense',
      url: 'https://pokeapi.co/api/v2/stat/5/',
    },
  },
  {
    base_stat: 70,
    effort: 0,
    stat: {
      name: 'speed',
      url: 'https://pokeapi.co/api/v2/stat/6/',
    },
  },
];

const someText = JSON.stringify(someObject);

const compressed = lz.compressToEncodedURIComponent(someText);

const decompressed = lz.decompressFromEncodedURIComponent(compressed);

// const ndcompress = lzString.compressToUTF16(compressed);

console.log(compressed);
// console.log(ndcompress);
console.log(decompressed);

// const decompress_json = JSON.parse(decompressed);

// console.log(decompress_json);
