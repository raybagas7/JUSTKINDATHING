const Jwt = require('@hapi/jwt');
const token_key = 'thisisthekeyforwoopwoopsignature';

const generated = Jwt.token.generate(
  { id: 'poke-wxTwnDYRu6Xh-S86' },
  token_key
);

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBva2UtS3pGX0JxcnFIYjg4R1NoVCIsImlhdCI6MTY3NDAyMzQ4M30.rgigX2UbzR_wfg1JvJqXDXOxZz_zdY83JpdQfXyyB_s';
const userId = JSON.parse(
  Buffer.from(token.split('.')[1], 'base64').toString()
);

const userId2 = JSON.parse(
  Buffer.from(generated.split('.')[1], 'base64').toString()
);

console.log('real', userId);
console.log('new', generated);
console.log('new', userId2);
