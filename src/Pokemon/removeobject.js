const offers = [
  {
    offer_id: 'offer-seWC2JrQPfw8yXaT',
    o_poke_id: 378,
    o_name: 'regice',
  },
  {
    offer_id: 'offer-6jkgYejbyRa71S5z',
    o_poke_id: 385,
    o_name: 'jirachi',
  },
  {
    offer_id: 'offer-pWps0qz3p2ECrR88',
    o_poke_id: 6,
    o_name: 'charizard',
  },
];

const filter = offers.filter((offer) => offer.o_name != 'jirachi');

console.log(filter);
