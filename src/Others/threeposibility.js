const isShiny = true;
const isLegendary = true;
let result = '';

// if (!isShiny && !isLegendary) {
//   console.log('ifelse pokeball');
// } else if (isShiny && !isLegendary) {
//   console.log('ifelse ultraball');
// } else {
//   console.log('ifelse masterball');
// }
isLegendary === true && isShiny === true
  ? console.log('ternary masterball plus')
  : isLegendary === true && isShiny === false
  ? console.log('ternary masterball')
  : (isLegendary === false && isShiny) === true
  ? console.log('ternary ultraball')
  : console.log('ternary pokeball');

isLegendary === true
  ? (masterBall = true)
  : isShiny === true
  ? (ultraBall = true)
  : (pokeBall = true);
