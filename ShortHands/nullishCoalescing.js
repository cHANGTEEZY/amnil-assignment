const user = { name: "ram", age: undefined, city: "Ktm" };

// Longhand
let userNameLonghand =
  user.name !== null && user.name !== undefined ? user.name : "Guest";
let userAgeLonghand =
  user.age !== null && user.age !== undefined ? user.age : 0;
let userCityLonghand =
  user.city !== null && user.city !== undefined ? user.city : "Unknown";

console.log(userNameLonghand, userAgeLonghand, userCityLonghand); // Ram, 0, Ktm

// Shorthand (Nullish Coalescing)
const userNameShorthand = user.name ?? "Guest";
const userAgeShorthand = user.age ?? 0;
const userCityShorthand = user.city ?? "Unknown";

console.log(userNameShorthand, userAgeShorthand, userCityShorthand); // Ram, 0, Ktm
