"use strict";
const age = 18;
const isAdult = age >= 18 ? 'yes' : 'no';
console.log(isAdult);
//Nullish coalesnace opearetor
// null and undefined
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
