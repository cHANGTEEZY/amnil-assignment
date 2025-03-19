//array destructuing
const arrLong = [1, 2, 3];
const a = arrLong[0];
const b = arrLong[1];
console.log(a, b);

const arrShort = [1, 2, 3];
const [aS, bS] = arrShort;
console.log(aS, bS);

//object destructuring
const obj = { x: 10, y: 20 };
const x = obj.x;
const y = obj.y;
console.log(x, y);

const obj2 = { x2: 10, y2: 20 };
const { x2, y2 } = obj2;
console.log(x2, y2);
