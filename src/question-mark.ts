const age:number = 18
const isAdult = age >= 18 ? 'yes' : 'no';
console.log(isAdult);

//Nullish coalesnace opearetor
// null and undefined

const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? 'Guest'