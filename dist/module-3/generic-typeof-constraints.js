"use strict";
// const b: NewTypeUsingKeyOf = 'address'
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: 'amena', age: 20 }, 'age');
