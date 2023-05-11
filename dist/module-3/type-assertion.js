"use strict";
let emni;
emni = 'Hello Bangladesh';
emni.length;
function kgToGram(prams) {
    if (typeof prams === 'string') {
        const value = parseFloat(prams) * 1000;
        return value;
    }
    if (typeof prams === 'number') {
        const value = prams * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(4000);
try {
}
catch (err) {
    console.log(err.message);
}
