let obj = { a: 1, b: 2, c: 3, d: 4, z: 26 };
// let { b, ...rest } = obj;

// skips the "Unused variable" warning
let { b: _, a: __, c: ___, d: ____, ...rest } = obj;

console.log(rest);
