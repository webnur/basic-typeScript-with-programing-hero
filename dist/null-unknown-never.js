"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log('there are nothing to search');
    }
    else {
        console.log('searching....');
    }
};
searchName(null);
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedNumber = (speed * 1000) / 3600;
        console.log(`my car speed is ${convertedNumber}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(" ");
        const convertedNumber = (parseFloat(value) * 1000) / 3600;
        console.log(`my car speed is ${convertedNumber}`);
    }
    else {
        console.log('there is wrong type');
    }
};
getMyCarSpeed(34);
getMyCarSpeed("10kmh-1");
//never type
function trowError(message) {
    throw new Error(message);
}
trowError('there is a error');
